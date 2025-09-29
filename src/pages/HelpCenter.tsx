import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Help Center</h1>
          <div className="prose prose-lg">
            <p className="text-lg text-muted-foreground mb-8">
              Find answers to common questions and get the help you need.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">Order & Shipping</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• How to place an order</li>
                  <li>• Shipping options and times</li>
                  <li>• Order tracking</li>
                  <li>• International shipping</li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">Returns & Exchanges</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Return policy</li>
                  <li>• How to return an item</li>
                  <li>• Exchange process</li>
                  <li>• Refund timeline</li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">Account & Payment</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Creating an account</li>
                  <li>• Payment methods</li>
                  <li>• Security & privacy</li>
                  <li>• Order history</li>
                </ul>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-4">Product Support</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Product warranties</li>
                  <li>• Technical support</li>
                  <li>• User manuals</li>
                  <li>• Troubleshooting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
