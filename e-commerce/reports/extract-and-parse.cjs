const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'lighthouse-homepage.html');
const outJsonPath = path.join(__dirname, 'lh.clean.json');

function extractLighthouseJson(html) {
  const marker = 'window.__LIGHTHOUSE_JSON__ =';
  const idx = html.indexOf(marker);
  if (idx === -1) throw new Error('marker not found');
  // find first '{' after marker
  let i = html.indexOf('{', idx);
  if (i === -1) throw new Error('opening brace not found');

  let depth = 0;
  let inString = null;
  let escaped = false;
  for (let p = i; p < html.length; p++) {
    const ch = html[p];
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (ch === '\\') {
        escaped = true;
      } else if (ch === inString) {
        inString = null;
      }
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      inString = ch;
      continue;
    }
    if (ch === '{') depth++;
    if (ch === '}') {
      depth--;
      if (depth === 0) {
        return html.slice(i, p + 1);
      }
    }
  }
  throw new Error('matching closing brace not found');
}

try {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const jsonText = extractLighthouseJson(html);
  // write cleaned json for inspection
  fs.writeFileSync(outJsonPath, jsonText, 'utf8');
  const data = JSON.parse(jsonText);

  const audits = data.audits || {};

  // collect opportunities
  const opportunities = Object.keys(audits)
    .map(k => ({ id: k, audit: audits[k] }))
    .filter(({ audit }) => audit && audit.details && audit.details.type === 'opportunity')
    .map(({ id, audit }) => {
      const details = audit.details || {};
      const savings = details.overallSavingsMs ?? details.numericValue ?? 0;
      return { id, title: audit.title || id, savings: savings || 0, display: audit.displayValue || '' };
    })
    .sort((a, b) => (b.savings || 0) - (a.savings || 0));

  // collect diagnostics listed under performance category
  const perfCategory = data.categories && data.categories.performance;
  const diagIds = new Set();
  if (perfCategory && perfCategory.auditRefs) {
    perfCategory.auditRefs.forEach(ref => {
      if (ref.group === 'diagnostics') diagIds.add(ref.id);
    });
  }
  const diagnostics = Array.from(diagIds).map(id => ({ id, audit: audits[id] })).filter(x => x.audit).map(({ id, audit }) => ({ id, title: audit.title, value: audit.displayValue || audit.errorMessage || '' }));

  // Print top opportunities
  console.log('\nTop Opportunities (by estimated savings)');
  console.log('-----------------------------------------');
  if (opportunities.length === 0) {
    console.log('No opportunity-type audits found.');
  } else {
    opportunities.slice(0, 10).forEach((op, i) => {
      console.log(`${i + 1}. ${op.title} — ~${op.savings} ms ${op.display ? '- ' + op.display : ''}`);
    });
  }

  // Print diagnostics
  console.log('\nDiagnostics (performance category)');
  console.log('----------------------------------');
  if (diagnostics.length === 0) {
    console.log('No diagnostics found in performance category.');
  } else {
    diagnostics.forEach((d, i) => {
      console.log(`${i + 1}. ${d.title} ${d.value ? '- ' + d.value : ''}`);
    });
  }

  console.log(`\nWrote cleaned JSON to: ${outJsonPath}`);
} catch (err) {
  console.error('Error:', err && err.message ? err.message : err);
  process.exitCode = 2;
}
