
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GDPR = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">GDPR Compliance</h1>
          <div className="prose prose-lg">
            <p className="text-lg text-muted-foreground mb-8">
              EliteStore is committed to protecting your privacy and complying with the General Data Protection Regulation (GDPR).
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights Under GDPR</h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Right to Information</h3>
                <p className="text-muted-foreground">
                  You have the right to know what personal data we collect, how we use it, and who we share it with.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Right of Access</h3>
                <p className="text-muted-foreground">
                  You can request a copy of all personal data we hold about you at any time.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Right to Rectification</h3>
                <p className="text-muted-foreground">
                  You can request that we correct any inaccurate or incomplete personal data.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Right to Erasure</h3>
                <p className="text-muted-foreground">
                  You can request that we delete your personal data under certain circumstances.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Right to Data Portability</h3>
                <p className="text-muted-foreground">
                  You can request to receive your personal data in a machine-readable format.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Right to Object</h3>
                <p className="text-muted-foreground">
                  You can object to the processing of your personal data for marketing purposes.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Protect Your Data</h2>
            <div className="bg-card p-6 rounded-lg border">
              <ul className="space-y-3 text-muted-foreground">
                <li>• We use encryption to protect data in transit and at rest</li>
                <li>• Access to personal data is limited to authorized personnel only</li>
                <li>• We conduct regular security audits and assessments</li>
                <li>• We have data breach response procedures in place</li>
                <li>• We only retain data for as long as necessary</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Legal Basis for Processing</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-muted-foreground mb-4">We process your personal data based on:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Contract:</strong> To fulfill orders and provide services</li>
                <li>• <strong>Legitimate Interest:</strong> To improve our services and prevent fraud</li>
                <li>• <strong>Consent:</strong> For marketing communications and cookies</li>
                <li>• <strong>Legal Obligation:</strong> To comply with tax and regulatory requirements</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Protection Officer</h2>
            <div className="bg-card p-6 rounded-lg border">
              <p className="text-muted-foreground mb-4">
                For questions about data protection or to exercise your rights:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> dpo@elitestore.com</p>
                <p><strong>Phone:</strong> 1-800-ELITE-DPO</p>
                <p><strong>Response Time:</strong> Within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GDPR;
