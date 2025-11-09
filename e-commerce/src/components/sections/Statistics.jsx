function Statistics() {
  return (
    <section className="statistics-section w-full px-4">
        <div
            className="bg-blue-600 text-white rounded-xl shadow-lg
            grid grid-cols-4 gap-8 justify-items-center items-center mx-auto
            transition-all duration-300 py-8 px-12 -mt-20"
            style={{
                width: '100%',
                maxWidth: '1200px',
                zIndex: 10
            }}
        >
            {[
                { label: 'Year\nExperience', value: '7' },
                { label: 'Products\nSold', value: '100k+' },
                { label: 'Active\nUsers', value: '10k+' },
                { label: 'Positive\nReviews', value: '30k+' },
            ].map((stat, index) => (
                <div key={index} className="text-center">
                    <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                    <p className="text-sm whitespace-pre-line">{stat.label}</p>
                </div>
            ))}
        </div>
    </section>
  );
};
export default Statistics;