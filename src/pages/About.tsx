import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Leaf, Globe, Target, Shield } from "lucide-react";
import farmLandscape from "@/assets/farm-landscape.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Committed to delivering only GI Tag certified premium garlic",
    },
    {
      icon: Users,
      title: "Farmer Partnership",
      description: "Direct tie-ups with local farmers ensuring fresh harvests",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving international markets across continents",
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Consistent quality and timely deliveries worldwide",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={farmLandscape}
            alt="Our Garlic Farms"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in">
            DnD Global Exports - Premium GI Tag Certified Mandsaur Garlic Exporter from India
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-primary font-semibold">Est. Since 2020</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                DnD Global Exports - Leading Exporter of Premium Mandsaur Garlic
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Based in Namli, Madhya Pradesh, we are a certified exporter specializing in premium quality GI Tag certified Mandsaur garlic. Our commitment to excellence has made us a trusted partner for international buyers across USA, UK, UAE, Canada, Europe, Singapore, and beyond.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We work directly with local farmers in the Mandsaur region, ensuring that every bulb meets the highest quality standards. Our state-of-the-art processing and packaging facilities maintain the freshness and authenticity of this renowned agricultural product.
              </p>
            </div>

            <div className="animate-scale-in">
              <Card className="border-0 shadow-card-hover">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Company Details</h3>
                  <dl className="space-y-4">
                    <div className="flex items-start">
                      <dt className="font-semibold text-foreground w-32">Business:</dt>
                      <dd className="text-muted-foreground">Export of GI Tag Certified Garlic</dd>
                    </div>
                    <div className="flex items-start">
                      <dt className="font-semibold text-foreground w-32">Location:</dt>
                      <dd className="text-muted-foreground">Namli, Madhya Pradesh, India</dd>
                    </div>
                    <div className="flex items-start">
                      <dt className="font-semibold text-foreground w-32">GST:</dt>
                      <dd className="text-muted-foreground">XXXXXXXXXXXXXXXXX</dd>
                    </div>
                    <div className="flex items-start">
                      <dt className="font-semibold text-foreground w-32">Exports To:</dt>
                      <dd className="text-muted-foreground">USA, UK, UAE, Canada, Europe, Singapore, Australia, and more</dd>
                    </div>
                    <div className="flex items-start">
                      <dt className="font-semibold text-foreground w-32">Product:</dt>
                      <dd className="text-muted-foreground">Mandsaur Garlic (High pungency, large bulbs, long shelf life)</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 shadow-card hover:shadow-card-hover transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To promote the exceptional quality of Mandsaur garlic globally while supporting local farmers and maintaining the authenticity of this GI Tag certified agricultural treasure. We strive to be the most trusted supplier of premium garlic to international markets.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-card-hover transition-all">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-gradient-premium flex items-center justify-center mb-4">
                  <Leaf className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To establish Mandsaur garlic as the preferred choice in global markets, recognized for its superior quality, authenticity, and reliability. We envision building long-term partnerships with international buyers based on trust and consistent excellence.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Our Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our business and relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-hero mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GI Tag Authenticity */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-premium mx-auto mb-6 flex items-center justify-center">
              <Award className="w-10 h-10 text-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              GI Tag Certification
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Mandsaur garlic has been awarded the prestigious Geographical Indication (GI) Tag, recognizing its unique characteristics and geographical origin. This certification guarantees authenticity, superior quality, and adherence to traditional cultivation practices. Our GI Tag certified garlic is renowned for its large bulb size, high pungency, low moisture content, and exceptional shelf life.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-sm text-muted-foreground">Farmers Network</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">GI Certified</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                <p className="text-sm text-muted-foreground">Tons Exported</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Quality Assurance & Farmer Partnerships
            </h2>
            <div className="space-y-6">
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-3">Direct Farmer Tie-ups</h3>
                  <p className="text-muted-foreground">
                    We maintain direct relationships with over 500 farmers in the Mandsaur region, ensuring consistent supply of the finest quality garlic. Our farmers follow traditional cultivation methods combined with modern agricultural practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-3">Rigorous Quality Control</h3>
                  <p className="text-muted-foreground">
                    Every batch undergoes strict quality checks for size, pungency, moisture content, and overall freshness. We maintain international food safety standards throughout our sorting, cleaning, and packaging processes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-3">Sustainable Practices</h3>
                  <p className="text-muted-foreground">
                    We are committed to sustainable farming practices that protect the environment while ensuring the longevity of Mandsaur garlic cultivation. Our approach benefits both farmers and global consumers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
