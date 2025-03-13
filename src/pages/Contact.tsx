
import { useEffect } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <span className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                Start Your Coaching Journey
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Take the first step toward transforming your leadership. Reach out to discuss how we can 
                work together to achieve your goals.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and I'll get back to you.
              </p>
              
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
