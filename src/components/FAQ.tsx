
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What is executive coaching?",
      answer: "Executive coaching is a personalized development process that helps leaders enhance their performance, decision-making skills, and overall effectiveness. Through one-on-one sessions, I work with you to identify strengths and areas for improvement, set meaningful goals, and develop actionable strategies to achieve them."
    },
    {
      question: "How long is a typical coaching engagement?",
      answer: "Most coaching relationships span 6-12 months, with sessions occurring every 2-3 weeks. However, I tailor the frequency and duration to your specific needs and goals. Some clients benefit from more intensive short-term coaching, while others prefer longer engagements with less frequent sessions."
    },
    {
      question: "What happens during a coaching session?",
      answer: "Each session is confidential and focused on your priorities. We typically start by reviewing progress on previous commitments, discussing current challenges, and exploring opportunities. Sessions include thought-provoking questions, feedback, and collaborative problem-solving. We conclude with clear action steps for between-session progress."
    },
    {
      question: "How is success measured in coaching?",
      answer: "Success is measured against the specific goals established at the beginning of our coaching relationship. This often includes both quantitative metrics (such as business outcomes or 360-degree feedback scores) and qualitative assessments (like improved relationships, enhanced decision-making, or greater leadership confidence). Regular progress reviews ensure we're on track."
    },
    {
      question: "Is coaching confidential?",
      answer: "Absolutely. Confidentiality is the foundation of an effective coaching relationship. All discussions, information shared, and coaching records remain strictly confidential. This creates a safe space for honest exploration and growth. The only exceptions would be those required by law or explicitly agreed upon in writing."
    },
    {
      question: "How do I know if I'm ready for coaching?",
      answer: "You're likely ready for coaching if you're open to feedback, willing to reflect honestly on your behaviors and mindsets, and committed to taking action for your development. The most successful coaching clients are those who approach the process with curiosity and a genuine desire for growth."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Everything you need to know about the coaching process and how we'll work together.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={cn(
                "border rounded-lg overflow-hidden transition-all duration-300",
                openIndex === index ? "border-coach-200" : "border-border"
              )}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={cn(
                    "text-muted-foreground transition-transform duration-300",
                    openIndex === index ? "rotate-180 text-primary" : ""
                  )} 
                />
              </button>
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
