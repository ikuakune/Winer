
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-lg">
            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using EliteStore's website and services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily download one copy of the materials on EliteStore's website for personal, non-commercial transitory viewing only.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Product Information</h2>
            <p className="text-muted-foreground mb-4">
              We strive to provide accurate product information, but we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Pricing and Payment</h2>
            <p className="text-muted-foreground mb-4">
              All prices are subject to change without notice. We reserve the right to refuse or cancel any orders placed for products listed at an incorrect price.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">User Accounts</h2>
            <p className="text-muted-foreground mb-4">
              You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Prohibited Uses</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-muted-foreground mb-4">You may not use our service:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• For any unlawful purpose or to solicit others to unlawful acts</li>
                <li>• To violate any international, federal, provincial, or state regulations or laws</li>
                <li>• To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>• To submit false or misleading information</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              In no event shall EliteStore or its suppliers be liable for any damages arising out of the use or inability to use the materials on EliteStore's website.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms of Service, please contact us at legal@elitestore.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
