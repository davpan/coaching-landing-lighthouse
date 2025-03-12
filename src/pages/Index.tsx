
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
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
        
        {/* Process Section */}
        <section className="py-20 px-6 md:px-12 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-primary uppercase tracking-wider animate-on-scroll">
                The Coaching Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-4 animate-on-scroll">
                How We'll Work Together
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
                A structured yet flexible approach designed to create lasting transformation in your leadership.
              </p>
            </div>
            
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/80 transform -translate-x-1/2"></div>
              
              <div className="space-y-12 relative">
                {[
                  {
                    title: "Discovery & Assessment",
                    description: "We begin with a thorough assessment of your current situation, strengths, challenges, and aspirations to establish a baseline and set meaningful goals."
                  },
                  {
                    title: "Strategy & Planning",
                    description: "Together, we develop a customized coaching plan with clear objectives, metrics for success, and a structured approach to address your specific needs."
                  },
                  {
                    title: "Active Coaching",
                    description: "Regular one-on-one sessions focused on deep exploration, skill development, and practical application, complemented by tailored exercises and resources."
                  },
                  {
                    title: "Implementation & Practice",
                    description: "You apply new insights and strategies in your professional environment, with ongoing support and adjustments based on real-world outcomes."
                  },
                  {
                    title: "Evaluation & Refinement",
                    description: "We regularly assess progress, celebrate successes, address challenges, and refine our approach to ensure optimal results and sustainable growth."
                  }
                ].map((step, index) => (
                  <div 
                    key={index}
                    className="md:grid md:grid-cols-2 gap-8 items-center animate-on-scroll"
                  >
                    <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                      <div className="flex items-center mb-3 gap-3 md:gap-0">
                        {index % 2 !== 0 && (
                          <div className="md:hidden w-10 h-10 rounded-full bg-coach-500 flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-medium">{index + 1}</span>
                          </div>
                        )}
                        <h3 className="text-xl font-medium">{step.title}</h3>
                        {index % 2 === 0 && (
                          <div className="md:hidden w-10 h-10 rounded-full bg-coach-500 flex items-center justify-center flex-shrink-0 ml-auto">
                            <span className="text-white font-medium">{index + 1}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                    <div className="hidden md:flex justify-center relative">
                      <div className="w-14 h-14 rounded-full bg-coach-500 flex items-center justify-center z-10">
                        <span className="text-white font-medium">{index + 1}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-16 animate-on-scroll">
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                <span>Begin Your Coaching Journey</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
        
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Index;
