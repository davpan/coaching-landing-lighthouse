import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';

const Meet60 = () => {
  useEffect(() => {
    // Initialize Cal.com widget
    (async function () {
      const cal = await getCalApi({ namespace: '60min' });
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view'
      });
    })();

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto py-8 mt-16">
        <Cal
          namespace="60min"
          calLink="davepan/60min"
          style={{ width: '100%', height: '100vh', overflow: 'scroll' }}
          config={{
            layout: 'month_view'
          }}
        />
      </div>
    </div>
  );
};

export default Meet60;
