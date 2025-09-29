
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Returns & Exchanges</h1>
          <div className="prose prose-lg">
            <p className="text-lg text-muted-foreground mb-8">
              We want you to be completely satisfied with your purchase. Learn about our 
              return and exchange policies.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Return Policy</h2>
            <div className="bg-card p-6 rounded-lg border mb-6">
              <h3 className="text-xl font-semibold mb-3">30-Day Money-Back Guarantee</h3>
              <p className="text-muted-foreground">
                Return any item within 30 days of delivery for a full refund. Items must be 
                in original condition with all packaging and accessories.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How to Return an Item</h2>
            <div className="space-y-4">
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Step 1: Request Return</h4>
                <p className="text-muted-foreground text-sm">
                  Contact our customer service team or use your account dashboard to request a return.
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Step 2: Package Item</h4>
                <p className="text-muted-foreground text-sm">
                  Pack the item securely in its original packaging with all accessories.
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Step 3: Ship Back</h4>
                <p className="text-muted-foreground text-sm">
                  Use the prepaid return label we'll provide. Drop off at any authorized shipping location.
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h4 className="font-semibold mb-2">Step 4: Receive Refund</h4>
                <p className="text-muted-foreground text-sm">
                  Once we receive and inspect your return, we'll process your refund within 3-5 business days.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Exchange Policy</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-muted-foreground mb-4">
                Need a different size, color, or model? We make exchanges easy:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Free exchanges within 30 days</li>
                <li>• We'll send the new item before you return the original</li>
                <li>• Price differences will be charged or refunded</li>
                <li>• Original item must be returned within 14 days of receiving replacement</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Non-Returnable Items</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-muted-foreground mb-4">
                The following items cannot be returned for hygiene and safety reasons:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Personalized or customized items</li>
                <li>• Items damaged by misuse or normal wear</li>
                <li>• Software or digital downloads</li>
                <li>• Items returned after 30 days</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Returns;
