
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Blog</h1>
          <div className="prose prose-lg">
            <p className="text-lg text-muted-foreground mb-8">
              Stay updated with the latest tech news, product reviews, and industry insights.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-3">Latest Technology Trends</h2>
                <p className="text-muted-foreground text-sm mb-2">December 15, 2024</p>
                <p className="text-muted-foreground">
                  Discover the emerging technologies that are shaping the future of consumer electronics.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-3">Product Review: Smart Gadgets</h2>
                <p className="text-muted-foreground text-sm mb-2">December 12, 2024</p>
                <p className="text-muted-foreground">
                  In-depth reviews of the newest smart gadgets and their real-world performance.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-3">Buying Guide: Choose the Right Tech</h2>
                <p className="text-muted-foreground text-sm mb-2">December 10, 2024</p>
                <p className="text-muted-foreground">
                  Expert tips on selecting the perfect tech products for your needs and budget.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h2 className="text-xl font-semibold mb-3">Tech Tips & Tricks</h2>
                <p className="text-muted-foreground text-sm mb-2">December 8, 2024</p>
                <p className="text-muted-foreground">
                  Maximize your device performance with these expert tips and hidden features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
