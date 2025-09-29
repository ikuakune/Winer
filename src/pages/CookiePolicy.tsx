
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <div className="prose prose-lg">
            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They help us provide you with a better experience by remembering your preferences and improving our services.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Essential Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Performance Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Functional Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies enable the website to provide enhanced functionality and personalization, such as remembering your preferences.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Marketing Cookies</h3>
                <p className="text-muted-foreground">
                  These cookies are used to track visitors across websites to display ads that are relevant and engaging for users.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Cookies</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-muted-foreground mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Browser settings: Most browsers allow you to refuse or delete cookies</li>
                <li>• Cookie preferences: Use our cookie preference center on the website</li>
                <li>• Third-party tools: Use privacy tools to manage tracking cookies</li>
                <li>• Opt-out links: Use opt-out links provided by advertising networks</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Cookies</h2>
            <p className="text-muted-foreground mb-4">
              We may use third-party services that place cookies on your device. These include analytics services, advertising networks, and social media platforms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about our Cookie Policy, please contact us at privacy@elitestore.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
