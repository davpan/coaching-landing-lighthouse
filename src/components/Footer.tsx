
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border py-4 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-sm text-muted-foreground text-center flex items-center justify-center gap-6">
          <span>© {currentYear} Dave Pan Coaching</span>
          <span className="text-border">|</span>
          <span>Vibe Coded with Claude</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
