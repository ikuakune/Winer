
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SizeGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Size Guide</h1>
          <div className="prose prose-lg">
            <p className="text-lg text-muted-foreground mb-8">
              Find the perfect fit for wearable tech and accessories with our comprehensive size guide.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Smartwatch Bands</h2>
            <div className="bg-card p-6 rounded-lg border mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Size</th>
                      <th className="text-left py-2">Wrist Circumference</th>
                      <th className="text-left py-2">Band Length</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">Small</td>
                      <td className="py-2">130-160mm (5.1-6.3 in)</td>
                      <td className="py-2">140-180mm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">Medium</td>
                      <td className="py-2">160-190mm (6.3-7.5 in)</td>
                      <td className="py-2">170-210mm</td>
                    </tr>
                    <tr>
                      <td className="py-2">Large</td>
                      <td className="py-2">190-220mm (7.5-8.7 in)</td>
                      <td className="py-2">200-240mm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Smart Rings</h2>
            <div className="bg-card p-6 rounded-lg border mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Ring Size</th>
                      <th className="text-left py-2">Inner Circumference</th>
                      <th className="text-left py-2">Inner Diameter</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">6</td>
                      <td className="py-2">46.8mm</td>
                      <td className="py-2">14.9mm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">7</td>
                      <td className="py-2">50.0mm</td>
                      <td className="py-2">15.9mm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">8</td>
                      <td className="py-2">53.1mm</td>
                      <td className="py-2">16.9mm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">9</td>
                      <td className="py-2">56.3mm</td>
                      <td className="py-2">17.9mm</td>
                    </tr>
                    <tr>
                      <td className="py-2">10</td>
                      <td className="py-2">59.5mm</td>
                      <td className="py-2">18.9mm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Headphones</h2>
            <div className="bg-card p-6 rounded-lg border mb-6">
              <h3 className="font-semibold mb-3">Head Circumference Guide</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Small:</strong> 52-56cm (20.5-22 in) - Fits most children and smaller adults</li>
                <li>• <strong>Medium:</strong> 56-60cm (22-23.5 in) - Fits most adults</li>
                <li>• <strong>Large:</strong> 60-64cm (23.5-25 in) - Fits larger adults</li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">How to Measure</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Wrist Measurement</h3>
                <ol className="space-y-2 text-muted-foreground text-sm">
                  <li>1. Use a flexible measuring tape or string</li>
                  <li>2. Wrap around your wrist where you'd wear a watch</li>
                  <li>3. Make sure it's snug but not tight</li>
                  <li>4. Note the measurement in millimeters</li>
                </ol>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3">Ring Measurement</h3>
                <ol className="space-y-2 text-muted-foreground text-sm">
                  <li>1. Wrap string around your finger</li>
                  <li>2. Mark where the string overlaps</li>
                  <li>3. Measure the length with a ruler</li>
                  <li>4. Use our chart to find your size</li>
                </ol>
              </div>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 mt-6">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Note:</strong> If you're between sizes, we recommend choosing the larger size for comfort. 
                Many of our products come with adjustable features for the perfect fit.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SizeGuide;
