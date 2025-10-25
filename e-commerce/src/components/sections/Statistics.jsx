function Statistics() {
  return (
    <section className="statistics-section">
        <div
            className="bg-blue-600 text-white rounded-2xl shadow-lg
            flex justify-around items-center mx-auto
            transition-all duration-300 py-12 px-8"
            style={{
                width: '90%',
                maxWidth: '1240px',
                zIndex: 10
            }}
        >
            {[
                { label: 'Products Sold', value: '1,250+' },
                { label: 'Active Users', value: '5,000+' },
                { label: 'Positive Reviews', value: '1,200+' },
            ].map((stat, index) => (
                <div key={index} className="text-center relative flex-1">
                    <h3 className="text-3xl font-bold">{stat.value}</h3>
                    <p className="mt-1 text-base">{stat.label}</p>
                    {index < 2 && (
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-10 w-[1px] border-white opacity-30"></div>
                    )}
                </div>
            ))}
        </div>
    </section>
  );
};
export default Statistics;