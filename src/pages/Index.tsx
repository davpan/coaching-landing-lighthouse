
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Track page view with referrer
    window.mixpanel.track("Page View", {
      page: "Home",
      referrer: document.referrer || "$direct"
    });
    
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
              <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-4 animate-on-scroll">
                Why Choose My Coaching
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll">
              I've been a leader of technology teams for over 15 years. I was most recently the VP of Engineering at Mixpanel, where I helped scale the team by 4X and reach unicorn status. I've also built internet-scale products at Twitter, Amazon, and Microsoft.
              <br></br>
              <br></br>
              You can find my full resume on <a href="https://www.linkedin.com/in/davepan/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a>.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "I’m dedicated to doing one thing",
                  description: "I only work with technology leaders and collectively we’ve spent thousands of hours together. I’ll bring all that experience and my own 15 years in the industry to guide our conversations."
                },
                {
                  title: "Every session is personalized",
                  description: "You won’t find any workshops or playbooks. Instead, I’ll work with you to navigate the biggest challenges you face right now."
                },
                {
                  title: "Honesty and empathy",
                  description: "I know your job is hard. I also know that seeking the truth is the only way to achieve your goals and find personal growth."
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
