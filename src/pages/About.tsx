import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About EliteStore</h1>
          <div className="prose prose-lg">
            <p className="text-lg text-muted-foreground mb-6">
              Welcome to EliteStore, your premier destination for cutting-edge technology 
              and premium lifestyle products. We're passionate about bringing you the finest 
              selection of gadgets, accessories, and innovative products that enhance your 
              daily life.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              At EliteStore, we believe that technology should be accessible, reliable, and 
              beautifully designed. Our mission is to curate a collection of products that 
              not only meet the highest standards of quality but also inspire and empower 
              our customers to live their best lives.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
                <p className="text-muted-foreground">
                  Every product is rigorously tested and comes with our quality guarantee 
                  and comprehensive warranty coverage.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Expert Curation</h3>
                <p className="text-muted-foreground">
                  Our team of tech experts carefully selects each product to ensure you 
                  get the best value and performance.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Our dedicated customer support team is always ready to help you with 
                  any questions or concerns.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Fast Shipping</h3>
                <p className="text-muted-foreground">
                  Free shipping on orders over $50 with fast, reliable delivery right 
                  to your doorstep.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Values</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• <strong>Innovation:</strong> We embrace the latest technologies and trends</li>
              <li>• <strong>Quality:</strong> We never compromise on the quality of our products</li>
              <li>• <strong>Customer Focus:</strong> Your satisfaction is our top priority</li>
              <li>• <strong>Sustainability:</strong> We're committed to environmentally responsible practices</li>
              <li>• <strong>Transparency:</strong> We believe in honest, clear communication</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;