
import { useEffect } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    window.mixpanel.track("Page View", { page: "Contact" });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <span className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
                Lets Chat
              </span>
              <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                Start Your Coaching Journey
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              If you’re interested in working together or just have questions, please reach out. I’m happy to talk over email or setup a free consultation.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto animate-fade-in">
              <p className="text-muted-foreground mb-8">
                Fill out the form below and I'll be in touch.
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
