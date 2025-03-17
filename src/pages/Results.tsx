
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TestimonialCard from '@/components/TestimonialCard';
import testimonialData from '@/data/testimonials.json';

const Results = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    window.mixpanel.track("Page View", {
      page: "Results"
    });
  }, []);

  const testimonials = testimonialData.testimonials;



  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <span className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
                Client Results
              </span>
              <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                Results That Speak for Themselves
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear directly from leaders who have achieved remarkable outcomes through our coaching partnership.
              </p>
            </div>
            

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  title={testimonial.title}
                  company={testimonial.company}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Results;
