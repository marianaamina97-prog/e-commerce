const fs = require('fs');
const path = './reports/lh.json';
if (!fs.existsSync(path)) { console.error('lh.json not found'); process.exit(1); }
const l = JSON.parse(fs.readFileSync(path, 'utf8'));
const audits = l.audits || {};
const perfCategory = (l.categories && l.categories.performance) ? l.categories.performance.auditRefs : [];
const opportunities = Object.entries(audits)
  .filter(([id, a]) => a.details && a.details.type === 'opportunity')
  .map(([id, a]) => {
    let est = 0;
    if (a.details && typeof a.details.overallSavingsMs === 'number') est = a.details.overallSavingsMs;
    else if (a.details && Array.isArray(a.details.items) && a.details.items.length) {
      est = a.details.items.reduce((s, it) => s + (it.wastedMs || it.totalMs || it.wastedBytes || 0), 0);
    }
    return { id, title: a.title || id, score: a.score, est, scoreDisplayMode: a.scoreDisplayMode, description: a.description || '' };
  })
  .sort((x, y) => y.est - x.est);

const diagnosticsRefs = (perfCategory || [])
  .filter(r => r.group === 'diagnostics')
  .map(r => ({ id: r.id, acronym: r.acronym || r.id, title: (audits[r.id] && audits[r.id].title) || r.id, description: (audits[r.id] && audits[r.id].description) || '', displayValue: (audits[r.id] && audits[r.id].displayValue) || '', score: (audits[r.id] && audits[r.id].score) }));

console.log('TOP OPPORTUNITIES:');
opportunities.slice(0, 10).forEach((o, i) => {
  console.log(`${i+1}. ${o.title} (id: ${o.id}) — estimated savings: ${o.est} — score: ${o.score} — mode: ${o.scoreDisplayMode}`);
  if (o.description) console.log('   ', o.description.split('\n')[0]);
});

console.log('\nTOP DIAGNOSTICS:');
if (diagnosticsRefs.length === 0) console.log('  (no diagnostics found in performance category)');
else diagnosticsRefs.slice(0, 20).forEach((d, i) => {
  console.log(`${i+1}. ${d.title} (id: ${d.id}) — score: ${d.score} — ${d.displayValue}`);
  if (d.description) console.log('   ', d.description.split('\n')[0]);
});
