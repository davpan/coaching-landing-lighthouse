
import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    
    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
      
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section className="pt-32 pb-16 px-6 md:px-12 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
        <div 
          ref={contentRef} 
          className="flex flex-col justify-center animate-on-scroll"
        >
          <span className="text-sm font-medium text-primary mb-3 uppercase tracking-wider animate-fade-in">
            Executive Coaching Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 animate-fade-in text-balance">
            Unlock Your Leadership Potential
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg animate-fade-in-slow text-balance">
            Personalized executive coaching to help you become the leader you've always aspired to be. 
            Transform challenges into opportunities for growth and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-slow">
            <Link 
              to="/contact" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <span>Start your journey</span>
              <ArrowRight size={18} />
            </Link>
            <Link 
              to="/results" 
              className="bg-secondary text-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors flex items-center justify-center"
            >
              See client results
            </Link>
          </div>
        </div>
        
        <div 
          ref={imageRef}
          className="flex items-center justify-center animate-on-scroll"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-br from-coach-100 to-coach-300/30 rounded-2xl blur-xl opacity-70 animate-pulse-slow"></div>
            <div className="relative aspect-[4/5] w-full max-w-md rounded-2xl overflow-hidden bg-muted">
              <div className="absolute inset-0 bg-gradient-to-tr from-coach-600/10 to-coach-200/10"></div>
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Executive coach portrait" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
