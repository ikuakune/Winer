import { Card, CardContent } from "@/components/ui/card";
import { Truck, Shield, Headphones, RotateCcw, Gift, CreditCard } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on all orders over $50. Fast and reliable delivery worldwide.",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Your payment information is processed securely with industry-standard encryption.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our customer support team is available 24/7 to help with any questions.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day return policy. Not satisfied? Return your purchase for a full refund.",
  },
  {
    icon: Gift,
    title: "Gift Cards",
    description: "Perfect for any occasion. Give the gift of choice with our digital gift cards.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Multiple payment options including buy now, pay later with flexible terms.",
  },
];

const Features = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Why Choose
            <span className="bg-gradient-primary bg-clip-text text-transparent"> EliteStore</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing you with the best shopping experience possible. 
            Here's what makes us different.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;