
const Testimonials = ({testimonials}) => {

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Testimonials</h2>
        <div className="flex flex-wrap mx-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
