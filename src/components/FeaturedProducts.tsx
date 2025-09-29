import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import headphonesImage from "@/assets/product-headphones.jpg";
import watchImage from "@/assets/product-watch.jpg";
import laptopImage from "@/assets/product-laptop.jpg";

const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 124,
    image: headphonesImage,
    badge: "Best Seller",
    features: ["Noise Cancelling", "40h Battery", "Premium Sound"],
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 549.99,
    originalPrice: 699.99,
    rating: 4.9,
    reviews: 89,
    image: watchImage,
    badge: "New",
    features: ["Health Tracking", "GPS", "Water Resistant"],
  },
  {
    id: 3,
    name: "Ultra Performance Laptop",
    price: 1299.99,
    originalPrice: 1599.99,
    rating: 4.7,
    reviews: 56,
    image: laptopImage,
    badge: "Sale",
    features: ["16GB RAM", "512GB SSD", "Intel i7"],
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Featured
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular and highly-rated products, carefully selected 
            for their exceptional quality and customer satisfaction.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in">
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    {product.badge}
                  </Badge>
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) 
                                ? 'fill-primary text-primary' 
                                : 'text-muted-foreground'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Price & Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-primary">
                          ${product.price}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      </div>
                      <div className="text-xs text-green-600 font-medium">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </div>
                    </div>
                    
                    <Button className="bg-gradient-primary hover:shadow-elegant transition-all duration-300">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;