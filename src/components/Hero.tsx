
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
    <section className="pt-24 pb-20 px-6 md:px-12 flex items-center" aria-label="Hero section">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
        <div 
          ref={imageRef}
          className="flex items-center justify-center animate-on-scroll order-2 md:order-1"
          role="img"
          aria-label="Dave Pan - Executive Coach"
        >
          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-md rounded-2xl overflow-hidden bg-muted">
              <img 
                src="/coaching-landing-lighthouse/headshot.png" 
                alt="Dave Pan - Executive Coach for Technology Leaders" 
                className="w-full h-full object-cover"
                loading="eager"
                width="400"
                height="500"
              />
            </div>
          </div>
        </div>
        
        <div 
          ref={contentRef} 
          className="flex flex-col justify-center animate-on-scroll order-1 md:order-2"
        >
          <span className="text-sm font-medium text-primary mb-3 uppercase tracking-wider animate-fade-in" role="doc-subtitle">
            Executive Coaching Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 animate-fade-in text-balance">
            Take Your Leadership To The Next Level
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg animate-fade-in-slow text-balance">
            I'm an executive coach focused on supporting senior leaders of technology teams. With over 15 years of operating experience, I help tech leaders excel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-slow" role="navigation" aria-label="Primary call to action">
            <Link 
              to="/contact" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              aria-label="Start your coaching journey"
            >
              <span>Start your journey</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link 
              to="/results" 
              className="bg-secondary text-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors flex items-center justify-center"
              aria-label="View client success stories"
            >
              See client results
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
