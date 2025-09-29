
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OrderStatus = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Order Status</h1>
          <div className="prose prose-lg">
            <p className="text-lg text-muted-foreground mb-8">
              Track your order and get real-time updates on your shipment.
            </p>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Track Your Order</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    placeholder="Enter your order number" 
                    className="flex-1"
                  />
                  <Button>Track Order</Button>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Order number can be found in your confirmation email
                </p>
              </CardContent>
            </Card>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Order Statuses</h2>
            
            <div className="space-y-4">
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-semibold mb-2 text-blue-600">Order Received</h3>
                <p className="text-muted-foreground text-sm">
                  We've received your order and payment. We're preparing your items for shipment.
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-semibold mb-2 text-yellow-600">Processing</h3>
                <p className="text-muted-foreground text-sm">
                  Your order is being picked, packed, and prepared for shipment.
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-semibold mb-2 text-purple-600">Shipped</h3>
                <p className="text-muted-foreground text-sm">
                  Your order has left our facility and is on its way to you. Tracking information is available.
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-semibold mb-2 text-orange-600">Out for Delivery</h3>
                <p className="text-muted-foreground text-sm">
                  Your package is on the delivery vehicle and will arrive today.
                </p>
              </div>
              
              <div className="bg-card p-4 rounded-lg border">
                <h3 className="font-semibold mb-2 text-green-600">Delivered</h3>
                <p className="text-muted-foreground text-sm">
                  Your order has been successfully delivered. Enjoy your new products!
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Need Help?</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-muted-foreground mb-4">
                If you have questions about your order or need assistance:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Email us at support@elitestore.com</li>
                <li>• Call us at 1-800-ELITE-01</li>
                <li>• Use the live chat on our website</li>
                <li>• Check your account dashboard for order history</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderStatus;
