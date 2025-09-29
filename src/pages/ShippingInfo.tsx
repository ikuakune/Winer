
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ShippingInfo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Shipping Information</h1>
          <div className="prose prose-lg">
            <p className="text-lg text-muted-foreground mb-8">
              Learn about our shipping options, delivery times, and policies.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping Options</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Standard Shipping</h3>
                <p className="text-muted-foreground mb-2">FREE on orders over $50</p>
                <p className="text-muted-foreground">
                  • Delivery: 5-7 business days<br/>
                  • Cost: $5.99 for orders under $50<br/>
                  • Tracking included
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Express Shipping</h3>
                <p className="text-muted-foreground mb-2">$12.99</p>
                <p className="text-muted-foreground">
                  • Delivery: 2-3 business days<br/>
                  • Expedited processing<br/>
                  • Priority tracking
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Overnight Shipping</h3>
                <p className="text-muted-foreground mb-2">$24.99</p>
                <p className="text-muted-foreground">
                  • Delivery: Next business day<br/>
                  • Orders must be placed before 2 PM<br/>
                  • Signature required
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">International Shipping</h3>
                <p className="text-muted-foreground mb-2">Varies by location</p>
                <p className="text-muted-foreground">
                  • Delivery: 7-21 business days<br/>
                  • Customs fees may apply<br/>
                  • Full tracking available
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Processing Time</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-muted-foreground">
                • Orders placed before 2 PM EST ship the same business day<br/>
                • Orders placed after 2 PM EST ship the next business day<br/>
                • Weekend orders ship on Monday<br/>
                • Holiday processing may be delayed
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping Restrictions</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-muted-foreground mb-4">
                Please note the following shipping restrictions:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Some items cannot be shipped to P.O. boxes</li>
                <li>• Certain products have shipping restrictions to specific states</li>
                <li>• International shipping may have additional restrictions</li>
                <li>• Lithium battery products have special shipping requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingInfo;
