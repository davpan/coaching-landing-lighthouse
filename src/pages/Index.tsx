
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set up intersection observer for animation
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        {/* Benefits Section */}
        <section className="py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-primary uppercase tracking-wider animate-on-scroll">
                Why Choose My Coaching
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-4 animate-on-scroll">
                Transform Your Leadership
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
                My executive coaching approach is tailored to your unique challenges and goals,
                providing the tools, insights, and accountability you need to excel.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Personalized Approach",
                  description: "Coaching sessions tailored to your specific challenges, goals, and leadership style."
                },
                {
                  title: "Actionable Insights",
                  description: "Practical strategies and tools you can immediately apply to your professional life."
                },
                {
                  title: "Measurable Results",
                  description: "Clear metrics and feedback mechanisms to track your progress and growth."
                }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg border border-border/60 shadow-sm animate-on-scroll"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-coach-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-coach-600 text-xl font-semibold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <FAQ />
      </main>
    </>
  );
};

export default Index;
