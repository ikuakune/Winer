import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { products, getAllCategories, Product } from "@/data/products";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  
  const categories = getAllCategories();
  
  const filteredProducts = products.filter(product => 
    selectedCategory === "all" || product.category === selectedCategory
  );
  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  const ProductCard = ({ product }: { product: Product }) => (
    <Card className="group hover:shadow-lg transition-all duration-300" data-testid={`card-product-${product.id}`}>
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          data-testid={`img-product-${product.id}`}
        />
        {product.originalPrice && (
          <Badge className="absolute top-2 left-2 bg-red-500" data-testid={`badge-sale-${product.id}`}>
            Sale
          </Badge>
        )}
        <div className="absolute top-2 right-2 space-x-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 bg-white/80 hover:bg-white"
            data-testid={`button-wishlist-${product.id}`}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <Badge variant="secondary" className="text-xs" data-testid={`badge-category-${product.id}`}>
            {product.category}
          </Badge>
          <h3 className="font-semibold text-lg line-clamp-2" data-testid={`text-product-name-${product.id}`}>
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2" data-testid={`text-description-${product.id}`}>
            {product.description}
          </p>
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground" data-testid={`text-rating-${product.id}`}>
              {product.rating} ({product.reviews})
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold" data-testid={`text-price-${product.id}`}>
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through" data-testid={`text-original-price-${product.id}`}>
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          data-testid={`button-add-to-cart-${product.id}`}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4" data-testid="text-page-title">Our Products</h1>
            <p className="text-muted-foreground text-lg" data-testid="text-page-description">
              Discover our complete collection of {products.length} premium tech gadgets and lifestyle products. 
              Each item is carefully curated to bring you the perfect blend of innovation, quality, and style.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48" data-testid="select-category">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48" data-testid="select-sort">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="name">Name</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-testid="products-grid">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {/* Results Info */}
          <div className="mt-8 text-center text-muted-foreground" data-testid="text-results-count">
            Showing {sortedProducts.length} of {products.length} products
            {selectedCategory !== "all" && ` in ${selectedCategory}`}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;