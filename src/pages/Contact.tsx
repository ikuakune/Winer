import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
          <div className="prose prose-lg">
            <p className="text-lg text-muted-foreground mb-8">
              We'd love to hear from you! Whether you have questions about our products, 
              need technical support, or want to provide feedback, our team is here to help.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                
                <div className="space-y-4">
                  <div className="bg-card p-4 rounded-lg border">
                    <h3 className="font-semibold mb-2">Customer Support</h3>
                    <p className="text-muted-foreground text-sm mb-2">For product questions and order support</p>
                    <p className="text-primary">support@elitestore.com</p>
                    <p className="text-primary">1-800-ELITE-01</p>
                  </div>
                  
                  <div className="bg-card p-4 rounded-lg border">
                    <h3 className="font-semibold mb-2">Sales Inquiries</h3>
                    <p className="text-muted-foreground text-sm mb-2">For bulk orders and partnerships</p>
                    <p className="text-primary">sales@elitestore.com</p>
                    <p className="text-primary">1-800-ELITE-02</p>
                  </div>
                  
                  <div className="bg-card p-4 rounded-lg border">
                    <h3 className="font-semibold mb-2">Technical Support</h3>
                    <p className="text-muted-foreground text-sm mb-2">For technical assistance and troubleshooting</p>
                    <p className="text-primary">tech@elitestore.com</p>
                    <p className="text-primary">1-800-ELITE-03</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-6">Office Hours</h2>
                
                <div className="space-y-4">
                  <div className="bg-card p-4 rounded-lg border">
                    <h3 className="font-semibold mb-2">Customer Support</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 8:00 AM - 8:00 PM EST</p>
                      <p>Saturday: 9:00 AM - 6:00 PM EST</p>
                      <p>Sunday: 10:00 AM - 4:00 PM EST</p>
                    </div>
                  </div>
                  
                  <div className="bg-card p-4 rounded-lg border">
                    <h3 className="font-semibold mb-2">Technical Support</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Available 24/7</p>
                      <p>Live chat support available on our website</p>
                    </div>
                  </div>
                  
                  <div className="bg-card p-4 rounded-lg border">
                    <h3 className="font-semibold mb-2">Mailing Address</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>EliteStore Inc.</p>
                      <p>123 Tech Avenue</p>
                      <p>Innovation District</p>
                      <p>San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">How can I track my order?</h3>
                  <p className="text-muted-foreground">You'll receive a tracking number via email once your order ships. You can also check your order status by logging into your account.</p>
                </div>
                
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">What is your return policy?</h3>
                  <p className="text-muted-foreground">We offer a 30-day money-back guarantee on all products. Items must be returned in original condition with all packaging.</p>
                </div>
                
                <div className="bg-card p-4 rounded-lg border">
                  <h3 className="font-semibold mb-2">Do you offer warranty on products?</h3>
                  <p className="text-muted-foreground">Yes, all products come with manufacturer warranty. Additionally, we offer extended warranty options for many items.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;