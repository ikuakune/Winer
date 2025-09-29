
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Careers at EliteStore</h1>
          <div className="prose prose-lg">
            <p className="text-lg text-muted-foreground mb-8">
              Join our team and help shape the future of technology retail. We're always looking for 
              passionate individuals who share our commitment to innovation and excellence.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Open Positions</h2>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Senior Frontend Developer</h3>
                <p className="text-muted-foreground mb-2">Engineering • San Francisco, CA • Full-time</p>
                <p className="text-muted-foreground mb-4">
                  Join our engineering team to build cutting-edge e-commerce experiences using React, TypeScript, and modern web technologies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">React</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">TypeScript</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">Node.js</span>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Product Manager</h3>
                <p className="text-muted-foreground mb-2">Product • Remote • Full-time</p>
                <p className="text-muted-foreground mb-4">
                  Drive product strategy and roadmap for our e-commerce platform, working closely with engineering and design teams.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">Product Strategy</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">Analytics</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">UX Research</span>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Customer Success Manager</h3>
                <p className="text-muted-foreground mb-2">Customer Success • New York, NY • Full-time</p>
                <p className="text-muted-foreground mb-4">
                  Help our customers succeed by providing exceptional support and building lasting relationships.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">Customer Relations</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">Communication</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-sm">Problem Solving</span>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Why Work With Us?</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Competitive salary and equity packages</li>
              <li>• Comprehensive health, dental, and vision insurance</li>
              <li>• Flexible work arrangements and remote options</li>
              <li>• Professional development and learning opportunities</li>
              <li>• Modern office spaces and latest technology</li>
              <li>• Collaborative and inclusive work environment</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
