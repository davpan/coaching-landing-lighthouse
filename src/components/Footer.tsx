
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Executive Coaching</h3>
          <p className="text-muted-foreground max-w-xs">
            Helping executives and leaders reach their full potential through personalized coaching.
          </p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/results" className="text-muted-foreground hover:text-foreground transition-colors">
              Results
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="flex flex-col space-y-2">
            <a href="mailto:info@executivecoaching.com" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
              <Mail size={16} />
              <span>info@executivecoaching.com</span>
            </a>
            <a href="tel:+15551234567" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </a>
          </div>
          
          <div className="flex space-x-4 pt-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border/60">
        <p className="text-sm text-muted-foreground text-center">
          © {currentYear} Executive Coaching. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
