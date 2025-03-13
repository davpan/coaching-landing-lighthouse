
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TestimonialCard from '@/components/TestimonialCard';

const Results = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      quote: "Working with this coach transformed not only my leadership style but the entire culture of my team. I've seen measurable improvements in team performance, innovation, and employee satisfaction.",
      name: "Sarah Johnson",
      title: "Chief Operating Officer",
      company: "TechInnovate Inc."
    },
    {
      quote: "The coaching process helped me identify and overcome unconscious patterns that were limiting my effectiveness. The tailored approach and accountability were exactly what I needed to reach the next level in my career.",
      name: "Michael Chen",
      title: "VP of Product",
      company: "Nexus Solutions"
    },
    {
      quote: "I was skeptical about coaching at first, but the results speak for themselves. I'm now leading with more confidence, clarity, and strategic vision than ever before.",
      name: "Elena Rodriguez",
      title: "Regional Director",
      company: "Global Finance Partners"
    },
    {
      quote: "The most valuable aspect of our coaching relationship was having a trusted space to explore challenges and opportunities with someone who both supported and challenged me. This led to breakthrough moments I wouldn't have reached on my own.",
      name: "David Park",
      title: "Executive Director",
      company: "HealthTech Foundation"
    },
    {
      quote: "Through our coaching sessions, I developed greater emotional intelligence and communication skills that transformed my leadership approach. My team is now more engaged, collaborative, and high-performing.",
      name: "Amara Washington",
      title: "Senior Vice President",
      company: "Media Innovations Group"
    },
    {
      quote: "The coaching investment paid dividends almost immediately. I gained practical strategies for managing complexity and leading through change that directly impacted our bottom line.",
      name: "James Wilson",
      title: "CEO",
      company: "Momentum Enterprises"
    },
    {
      quote: "I appreciated the balance of compassion and challenge throughout our coaching engagement. It created the perfect environment for meaningful growth and sustainable change.",
      name: "Sophia Patel",
      title: "Managing Director",
      company: "Catalyst Consulting"
    },
    {
      quote: "The coaching process equipped me with a valuable toolkit for navigating leadership challenges. I continue to apply these insights daily, long after our formal engagement ended.",
      name: "Thomas Müller",
      title: "Chief Strategy Officer",
      company: "European Ventures Ltd."
    },
    {
      quote: "The data-driven approach to measuring progress kept me accountable and motivated. I could clearly see my development over time, which was incredibly rewarding.",
      name: "Olivia Martinez",
      title: "Head of Operations",
      company: "Sustainable Solutions Co."
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-16 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <span className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
                Client Success Stories
              </span>
              <h1 className="text-4xl md:text-5xl font-semibold mb-6">
                Results That Speak for Themselves
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take my word for it. Hear directly from leaders who have transformed 
                their approach and achieved remarkable outcomes through our coaching partnership.
              </p>
            </div>
            

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  title={testimonial.title}
                  company={testimonial.company}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Results;
