import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Trusted by 50,000+ customers</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Discover Premium
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  Tech & Lifestyle
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Elevate your lifestyle with our curated collection of premium tech gadgets, 
                accessories, and lifestyle products. Quality meets innovation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-elegant transition-all duration-300">
                <Link to="/products" data-testid="button-shop-now">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/products" data-testid="button-view-collections">
                  View Collections
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={heroImage} 
                alt="Premium tech products and lifestyle items" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-background shadow-card rounded-lg p-4 animate-fade-in">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Free Shipping</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-background shadow-card rounded-lg p-4 animate-fade-in">
              <div className="text-center">
                <div className="text-lg font-bold text-primary">30 Days</div>
                <div className="text-xs text-muted-foreground">Money Back</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;