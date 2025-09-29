import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Newsletter Section */}
        <div className="py-12 border-b">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold">
              Stay Updated with
              <span className="bg-gradient-primary bg-clip-text text-transparent"> EliteStore</span>
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Subscribe to our newsletter and be the first to know about new products, 
              exclusive offers, and special promotions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1"
              />
              <Button className="bg-gradient-primary hover:shadow-elegant transition-all duration-300">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">E</span>
              </div>
              <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
                EliteStore
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your premier destination for high-quality tech gadgets and lifestyle products. 
              We curate the best products to enhance your daily life.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-primary transition-colors">Press</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Customer Service</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/help-center" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/shipping-info" className="hover:text-primary transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="hover:text-primary transition-colors">Returns</Link></li>
              <li><Link to="/order-status" className="hover:text-primary transition-colors">Order Status</Link></li>
              <li><Link to="/size-guide" className="hover:text-primary transition-colors">Size Guide</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link to="/gdpr" className="hover:text-primary transition-colors">GDPR</Link></li>
              <li><Link to="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 EliteStore. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>We accept:</span>
            <div className="flex items-center space-x-2">
              <div className="h-6 w-10 bg-muted rounded flex items-center justify-center text-xs font-medium">
                VISA
              </div>
              <div className="h-6 w-10 bg-muted rounded flex items-center justify-center text-xs font-medium">
                MC
              </div>
              <div className="h-6 w-12 bg-muted rounded flex items-center justify-center text-xs font-medium">
                PAYPAL
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;