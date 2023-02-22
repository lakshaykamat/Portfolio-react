import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      title: "Web Developer",
      quote: "I was thoroughly impressed by the work of the web developer. Their attention to detail and expertise in coding made my website a seamless and visually appealing experience. They were easy to communicate with and always delivered on time."},
    {
      name: "Jane Smith",
      title: "Graphic Designer",
      quote: "The graphic designer exceeded my expectations with their innovative and creative designs. They understood my vision and brought it to life in a way that surpassed what I could have imagined. I highly recommend their work.",
    },
    {
      name: "Tom Jones",
      title: "UX Designer",
      quote: "The UX designer was a pleasure to work with. They were able to understand my users' needs and create an intuitive and user-friendly interface. Their work made my app much more accessible and enjoyable to use. I highly recommend their services for any UX design needs.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
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
