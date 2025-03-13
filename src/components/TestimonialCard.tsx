
import { useState, useEffect, useRef } from 'react';
import { Quote, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  delay?: number;
}

const TestimonialCard = ({ quote, name, title, company, delay = 0 }: TestimonialCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const CHAR_LIMIT = 500;
  const shouldTruncate = quote.length > CHAR_LIMIT;
  const truncatedQuote = shouldTruncate ? `${quote.slice(0, CHAR_LIMIT)}...` : quote;
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a small delay before setting visible for a staggered effect
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "bg-white rounded-lg p-6 shadow-sm border border-border/60 transition-all duration-700 transform opacity-0",
        isVisible && "opacity-100 translate-y-0"
      )}
      style={{ 
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`
      }}
    >
      <Quote size={24} className="text-primary mb-4" />
      <blockquote className="mb-6 text-foreground/90">
        "{isExpanded ? quote : truncatedQuote}"
      </blockquote>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mb-4"
        >
          <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
          <ChevronDown 
            size={16} 
            className={cn(
              "transition-transform duration-200",
              isExpanded && "rotate-180"
            )} 
          />
        </button>
      )}
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">
          {title}, {company}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
