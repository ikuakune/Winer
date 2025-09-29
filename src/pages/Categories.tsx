import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Categories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Product Categories</h1>
          <div className="prose prose-lg">
            <p className="text-muted-foreground mb-6">
              Browse our products by category to find exactly what you're looking for.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Technology</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="hover:text-primary cursor-pointer">• Smartphones & Tablets</li>
                  <li className="hover:text-primary cursor-pointer">• Laptops & Computers</li>
                  <li className="hover:text-primary cursor-pointer">• Smartwatches & Wearables</li>
                  <li className="hover:text-primary cursor-pointer">• Gaming Accessories</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Audio & Entertainment</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="hover:text-primary cursor-pointer">• Headphones & Earbuds</li>
                  <li className="hover:text-primary cursor-pointer">• Speakers & Sound Systems</li>
                  <li className="hover:text-primary cursor-pointer">• Home Entertainment</li>
                  <li className="hover:text-primary cursor-pointer">• Professional Audio</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Lifestyle & Fashion</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="hover:text-primary cursor-pointer">• Fashion Accessories</li>
                  <li className="hover:text-primary cursor-pointer">• Travel Gear</li>
                  <li className="hover:text-primary cursor-pointer">• Home & Office</li>
                  <li className="hover:text-primary cursor-pointer">• Health & Wellness</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Accessories</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="hover:text-primary cursor-pointer">• Phone Cases & Protection</li>
                  <li className="hover:text-primary cursor-pointer">• Chargers & Cables</li>
                  <li className="hover:text-primary cursor-pointer">• Storage & Backup</li>
                  <li className="hover:text-primary cursor-pointer">• Cleaning & Maintenance</li>
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

export default Categories;