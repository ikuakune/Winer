
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Accessibility Statement</h1>
          <div className="prose prose-lg">
            <p className="text-lg text-muted-foreground mb-8">
              EliteStore is committed to ensuring digital accessibility for people with disabilities. 
              We continually improve the user experience for everyone.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment</h2>
            <div className="bg-card p-6 rounded-lg border mb-6">
              <p className="text-muted-foreground">
                We are committed to making our website accessible to all users, regardless of their 
                abilities or technologies. We strive to conform to WCAG 2.1 Level AA standards.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Accessibility Features</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Keyboard Navigation</h3>
                <p className="text-muted-foreground">
                  Our website can be fully navigated using only a keyboard, with clear focus indicators 
                  and logical tab order.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Screen Reader Support</h3>
                <p className="text-muted-foreground">
                  All content is properly structured with headings, landmarks, and descriptive text 
                  for screen readers.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">High Contrast</h3>
                <p className="text-muted-foreground">
                  Our design maintains sufficient color contrast ratios to ensure readability for 
                  users with visual impairments.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Scalable Text</h3>
                <p className="text-muted-foreground">
                  Text can be resized up to 200% without loss of functionality or horizontal scrolling.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Alternative Text</h3>
                <p className="text-muted-foreground">
                  All images include descriptive alternative text to convey information to users 
                  who cannot see them.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Form Labels</h3>
                <p className="text-muted-foreground">
                  All form elements have clear, descriptive labels and instructions to assist users 
                  in completing forms.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Assistive Technologies</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-muted-foreground mb-4">
                Our website is tested with various assistive technologies:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Screen readers (NVDA, JAWS, VoiceOver)</li>
                <li>• Voice recognition software</li>
                <li>• Keyboard-only navigation</li>
                <li>• Browser zoom functionality</li>
                <li>• High contrast modes</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Feedback and Support</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-muted-foreground mb-4">
                We welcome feedback on the accessibility of our website. If you encounter any 
                accessibility barriers or have suggestions for improvement:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> accessibility@elitestore.com</p>
                <p><strong>Phone:</strong> 1-800-ELITE-ACCESS</p>
                <p><strong>Response Time:</strong> Within 2 business days</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Ongoing Efforts</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-muted-foreground">
                We continuously work to improve accessibility through regular audits, user testing, 
                and updates to our website. Our development team receives ongoing accessibility 
                training to ensure best practices are followed.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Accessibility;
