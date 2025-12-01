import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Package, Ruler, Clock, Droplet, Flame } from "lucide-react";
import garlicProduct from "@/assets/garlic-product.jpg";

const Products = () => {
  const features = [
    { icon: Ruler, label: "Bulb Size", value: "4.5-6 cm diameter" },
    { icon: Flame, label: "Pungency", value: "High - Premium Grade" },
    { icon: Droplet, label: "Moisture", value: "Low (optimal storage)" },
    { icon: Clock, label: "Shelf Life", value: "6-8 months" },
  ];

  const characteristics = [
    "Large, well-formed bulbs with tight cloves",
    "Distinct pungent aroma and strong flavor",
    "White to off-white bulb color",
    "Firm texture with minimal sprouting",
    "Low moisture content for extended storage",
    "High allicin content for health benefits",
    "Fresh from farm to package",
    "Naturally grown with minimal chemical use",
  ];

  const packaging = [
    {
      type: "Mesh Bags",
      sizes: ["5 kg", "10 kg"],
      description: "Breathable mesh for optimal air circulation",
    },
    {
      type: "Jute Bags",
      sizes: ["10 kg", "20 kg", "25 kg"],
      description: "Eco-friendly, durable jute material",
    },
    {
      type: "Cartons",
      sizes: ["5 kg", "10 kg"],
      description: "Protective cartons with inner lining",
    },
    {
      type: "Custom Packaging",
      sizes: ["As per requirement"],
      description: "Tailored solutions for your specific needs",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <div className="inline-block px-4 py-2 bg-premium/20 backdrop-blur-sm rounded-full border border-premium mb-6">
              <span className="text-premium font-semibold">GI Tag Certified Product</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Premium Mandsaur Garlic
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Renowned for exceptional quality, high pungency, and long shelf life
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About Our Premium Mandsaur Garlic
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Mandsaur garlic, cultivated in the fertile lands of Madhya Pradesh, India, is recognized worldwide for its superior quality and distinctive characteristics. Protected by GI Tag certification, this premium garlic variety is prized by international buyers for its consistent quality and excellent storage properties.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our garlic is sourced directly from select farms in the Mandsaur region, where the unique soil composition and climate conditions contribute to its exceptional pungency and large bulb size. Each harvest is carefully timed to ensure optimal maturity and quality.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <Card key={index} className="border-0 shadow-card">
                    <CardContent className="p-4">
                      <feature.icon className="w-8 h-8 text-primary mb-2" />
                      <div className="text-xs text-muted-foreground mb-1">{feature.label}</div>
                      <div className="text-sm font-semibold text-foreground">{feature.value}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button asChild className="bg-gradient-hero hover:opacity-90">
                <Link to="/contact">Request Sample & Quote</Link>
              </Button>
            </div>

            <div className="animate-scale-in">
              <img
                src={garlicProduct}
                alt="Premium Mandsaur Garlic"
                className="w-full h-auto rounded-2xl shadow-card-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Characteristics */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Key Characteristics
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What makes Mandsaur garlic the preferred choice for international markets
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
            {characteristics.map((characteristic, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-card rounded-lg shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{characteristic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Packaging Options
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible packaging solutions to meet your specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packaging.map((pack, index) => (
              <Card
                key={index}
                className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                    <Package className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">{pack.type}</h3>
                  <div className="mb-3">
                    <div className="text-xs text-muted-foreground mb-2">Available Sizes:</div>
                    <div className="flex flex-wrap gap-2">
                      {pack.sizes.map((size, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-muted rounded text-xs font-medium text-foreground"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{pack.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="inline-block border-0 shadow-card">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Need custom packaging or have specific requirements?
                </p>
                <Button asChild className="bg-gradient-hero hover:opacity-90">
                  <Link to="/contact">Contact Us for Custom Solutions</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Health Benefits
              </h2>
              <p className="text-muted-foreground">
                Rich in nutrients and known for medicinal properties
              </p>
            </div>

            <Card className="border-0 shadow-card-hover">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-3">Nutritional Value</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        High in allicin and other sulfur compounds
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Rich in vitamins C and B6
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Contains manganese and selenium
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Good source of dietary fiber
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-foreground mb-3">Health Properties</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Natural antimicrobial properties
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Supports cardiovascular health
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Boosts immune system function
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Anti-inflammatory effects
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Our Premium Garlic?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Request samples, get pricing information, or discuss your specific requirements with our export team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                <Link to="/export-process">View Export Process</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
