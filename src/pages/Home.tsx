import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Globe, CheckCircle, Truck, Shield, Package } from "lucide-react";
import heroImage from "@/assets/hero-garlic.jpg";
import garlicProduct from "@/assets/garlic-product.jpg";

const Home = () => {
  const features = [
    {
      icon: Award,
      title: "GI Tag Certified",
      description: "Authentic Mandsaur garlic with geographical indication certification",
    },
    {
      icon: CheckCircle,
      title: "Premium Quality",
      description: "High pungency, large bulbs, and exceptional freshness guaranteed",
    },
    {
      icon: Globe,
      title: "Global Delivery",
      description: "Exporting to USA, UK, UAE, Canada, Singapore, and across Europe",
    },
    {
      icon: Shield,
      title: "Trusted Supplier",
      description: "Certified, reliable partner for international garlic trade",
    },
  ];

  const countries = [
    { name: "USA", flag: "🇺🇸" },
    { name: "UK", flag: "🇬🇧" },
    { name: "UAE", flag: "🇦🇪" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "Germany", flag: "🇩🇪" },
    { name: "Singapore", flag: "🇸🇬" },
    { name: "France", flag: "🇫🇷" },
    { name: "Australia", flag: "🇦🇺" },
  ];

  const highlights = [
    { icon: Package, title: "Large Bulb Size", value: "4.5-6 cm" },
    { icon: CheckCircle, title: "High Pungency", value: "Premium Grade" },
    { icon: Truck, title: "Long Shelf Life", value: "6-8 Months" },
    { icon: Shield, title: "Fresh Harvest", value: "Farm Direct" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium Mandsaur Garlic"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <div className="inline-block px-4 py-2 bg-premium/20 backdrop-blur-sm rounded-full border border-premium mb-6">
            <span className="text-premium font-semibold">GI Tag Certified Excellence</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Premium Mandsaur Garlic
            <br />
            <span className="text-premium">Exported Worldwide</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            India's finest GI Tag certified garlic with superior quality, high pungency, and global delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90 text-lg">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg">
              <Link to="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Garlic?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Certified excellence, premium quality, and reliable global delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-hero mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Countries We Export To */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Global Presence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              DnD Global Exports - Delivering premium Mandsaur garlic to markets worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {countries.map((country, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="text-5xl mb-3">{country.flag}</div>
                  <p className="text-sm font-medium text-foreground">{country.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Premium Product Highlights
              </h2>
              <p className="text-muted-foreground mb-8">
                Our Mandsaur garlic stands out with exceptional characteristics that make it the preferred choice for international markets.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="space-y-2">
                    <div className="w-12 h-12 rounded-lg bg-gradient-hero flex items-center justify-center">
                      <highlight.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.value}</p>
                  </div>
                ))}
              </div>

              <Button asChild className="mt-8 bg-gradient-hero hover:opacity-90">
                <Link to="/products">View Full Details</Link>
              </Button>
            </div>

            <div className="animate-scale-in">
              <img
                src={garlicProduct}
                alt="Premium Garlic Product"
                className="w-full h-auto rounded-2xl shadow-card-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Place Your Order?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with us for a free quote and experience the premium quality of GI Tag certified Mandsaur garlic
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
            <Link to="/contact">Request Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
