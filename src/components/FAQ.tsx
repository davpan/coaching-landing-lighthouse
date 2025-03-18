
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const FAQ = () => {
  const faqs: FAQItem[] = [
    {
      question: "Who are your clients?",
      answer: <>My clients lead technology teams ranging from early stage startups to large orgs such as Airbnb, Twilio, and Grammarly. Often, they are at an inflection point in their career such as taking on a new role, experiencing rapid scaling, or supporting their company through a big change. <Link to="/results" className="text-primary hover:underline">Here's what clients have to say</Link> about our work together.</>
    },
    {
      question: "What happens during a coaching session?",
      answer: <>At the beginning of our engagement we will establish your goals. These goals might be for your personal development, challenges for your team, or broader issues your company is facing. In each session we'll pick an area or two to dive into together. The exploration includes thought-provoking questions, feedback, and collaborative problem-solving. We'll aim to finish with clear decisions or actionable steps you can take by the next session. You can experience it for yourself by <Link to="/contact" className="text-primary hover:underline">setting up a consultation</Link>.</>

    },
    {
      question: "How is success measured in coaching?",
      answer: "Success is measured against the specific goals established at the beginning of our coaching relationship. This can include both quantitative metrics (such as business outcomes or 360-degree feedback scores) and qualitative assessments (like improved relationships or greater confidence with key decisions). We'll check in on these throughout the engagement to make sure we're on track."
    },
    {
      question: "How long is a typical coaching engagement?",
      answer: "Engagements can span from 3 months to years. The frequency is tailored to your needs and can be changed down the road. There are no minimum commitments to how long we work together. We only continue as long as you’re getting high value from our partnership."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-secondary">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Everything you need to know about the coaching process and how we'll work together.
          </p>
        </div>
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-border rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4">
                <h3 className="font-medium text-lg mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
