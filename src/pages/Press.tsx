
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Press = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Press & Media</h1>
          <div className="prose prose-lg">
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest news about EliteStore, including press releases, media coverage, 
              and company updates.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Recent Press Releases</h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">EliteStore Expands Product Line with AI-Powered Gadgets</h3>
                <p className="text-muted-foreground mb-2">December 15, 2024</p>
                <p className="text-muted-foreground">
                  EliteStore announces the launch of its new AI-powered product category, featuring smart rings, 
                  neural interfaces, and other cutting-edge technology products.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">EliteStore Achieves Carbon Neutral Shipping</h3>
                <p className="text-muted-foreground mb-2">November 28, 2024</p>
                <p className="text-muted-foreground">
                  The company announces its commitment to environmental sustainability with the launch 
                  of carbon-neutral shipping options across all delivery methods.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">EliteStore Partners with Leading Tech Manufacturers</h3>
                <p className="text-muted-foreground mb-2">October 10, 2024</p>
                <p className="text-muted-foreground">
                  Strategic partnerships with industry leaders bring exclusive products and 
                  better pricing to EliteStore customers.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Media Kit</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-muted-foreground mb-4">
                Download our media kit for high-resolution logos, product images, and company information.
              </p>
              <div className="space-y-2">
                <p className="text-sm"><strong>Company Logo:</strong> Available in PNG, SVG, and EPS formats</p>
                <p className="text-sm"><strong>Product Images:</strong> High-resolution product photography</p>
                <p className="text-sm"><strong>Company Fact Sheet:</strong> Key statistics and company information</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Media Contact</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-muted-foreground">
                For press inquiries, please contact our media relations team:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Email:</strong> press@elitestore.com</p>
                <p><strong>Phone:</strong> 1-800-ELITE-PR</p>
                <p><strong>Response Time:</strong> Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Press;
