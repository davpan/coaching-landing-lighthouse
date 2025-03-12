
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="animate-fade-in">
                <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and I'll get back to you within 24 hours to schedule 
                  a complimentary consultation.
                </p>
                
                <ContactForm />
              </div>
              
              <div className="animate-fade-in lg:animate-slide-in-right">
                <div className="lg:sticky lg:top-32">
                  <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-border/60 mb-8">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <Mail size={20} className="text-coach-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium">Email</h3>
                          <a 
                            href="mailto:contact@executivecoaching.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            contact@executivecoaching.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <Phone size={20} className="text-coach-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium">Phone</h3>
                          <a 
                            href="tel:+15551234567"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            +1 (555) 123-4567
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <MapPin size={20} className="text-coach-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium">Location</h3>
                          <p className="text-muted-foreground">
                            San Francisco, CA<br />
                            Available for in-person or virtual sessions
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <Clock size={20} className="text-coach-500 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-medium">Office Hours</h3>
                          <p className="text-muted-foreground">
                            Monday - Friday: 9am - 6pm PST<br />
                            Weekend sessions available by appointment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-coach-50 rounded-lg p-6 border border-coach-100/60">
                    <h3 className="font-medium text-lg mb-3">Ready for a complimentary consultation?</h3>
                    <p className="text-muted-foreground mb-4">
                      Schedule a 30-minute call to discuss your goals and how I can help you achieve them.
                    </p>
                    <a 
                      href="tel:+15551234567"
                      className="inline-block bg-primary text-primary-foreground px-5 py-2.5 rounded font-medium hover:opacity-90 transition-opacity"
                    >
                      Schedule Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
