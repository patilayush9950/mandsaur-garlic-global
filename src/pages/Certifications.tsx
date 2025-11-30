import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, FileCheck, Building, Globe, Shield, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      icon: Award,
      title: "GI Tag Certificate",
      issuer: "Geographical Indication Registry, India",
      description: "Official certification recognizing Mandsaur garlic's unique geographical origin and quality characteristics.",
      status: "Verified",
      year: "2019",
    },
    {
      icon: FileCheck,
      title: "GST Registration",
      issuer: "Government of India",
      description: "Valid GST registration for international trade and export operations.",
      status: "Active",
      gstNumber: "XXXXXXXXXXXXXXXXX",
    },
    {
      icon: Globe,
      title: "IEC Code",
      issuer: "Directorate General of Foreign Trade",
      description: "Import Export Code authorizing international trade activities.",
      status: "Valid",
      code: "XXXXXXXXXX",
    },
    {
      icon: Building,
      title: "MSME Registration",
      issuer: "Ministry of MSME, India",
      description: "Registered as a Micro, Small & Medium Enterprise for export activities.",
      status: "Registered",
    },
    {
      icon: Shield,
      title: "APEDA Registration",
      issuer: "Agricultural and Processed Food Products Export Development Authority",
      description: "Registered with APEDA for agricultural product exports (Application in process).",
      status: "Pending",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      issuer: "Internal QC Process",
      description: "Comprehensive quality control measures ensuring international food safety standards.",
      status: "Active",
    },
  ];

  const standards = [
    "Food Safety and Standards Authority of India (FSSAI) compliant",
    "International phytosanitary standards adherence",
    "ISO quality management principles",
    "Traceability from farm to export",
    "Regular third-party quality audits",
    "Temperature-controlled storage facilities",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-premium/20 backdrop-blur-sm mx-auto mb-6 flex items-center justify-center border-2 border-premium">
              <Award className="w-10 h-10 text-premium" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Certifications & Compliance
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Fully certified and compliant for international garlic export
            </p>
          </div>
        </div>
      </section>

      {/* Main Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Certifications
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All necessary certifications and registrations for seamless international trade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                    <cert.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg text-foreground">{cert.title}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        cert.status === 'Verified' || cert.status === 'Active' || cert.status === 'Valid' || cert.status === 'Registered'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-accent/10 text-accent-foreground'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground font-medium mb-3">{cert.issuer}</p>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{cert.description}</p>

                  {cert.gstNumber && (
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">GST Number</p>
                      <p className="text-sm font-mono font-medium text-foreground">{cert.gstNumber}</p>
                    </div>
                  )}

                  {cert.code && (
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">IEC Code</p>
                      <p className="text-sm font-mono font-medium text-foreground">{cert.code}</p>
                    </div>
                  )}

                  {cert.year && (
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Certified Year</p>
                      <p className="text-sm font-medium text-foreground">{cert.year}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* GI Tag Spotlight */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-card-hover overflow-hidden">
              <div className="bg-gradient-premium p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-white mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-10 h-10 text-accent-foreground" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  GI Tag Certified
                </h2>
                <p className="text-foreground/80">
                  Geographical Indication Protection
                </p>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  What is GI Tag Certification?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  The Geographical Indication (GI) Tag is a sign used on products that have a specific geographical origin and possess qualities or reputation due to that origin. Mandsaur garlic received this prestigious certification in 2019, recognizing its unique characteristics developed in the specific soil and climate conditions of the Mandsaur region.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-4">
                  What Makes Mandsaur Garlic GI Tagged?
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Geographical Origin:</strong> Cultivated exclusively in Mandsaur district, Madhya Pradesh
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Unique Characteristics:</strong> Large bulb size (4.5-6 cm), high pungency, low moisture content
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Quality Reputation:</strong> Recognized globally for exceptional storage life and flavor
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Traditional Methods:</strong> Cultivation techniques passed down through generations
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Authenticity Guarantee:</strong> Every shipment comes with GI Tag documentation, ensuring you receive authentic Mandsaur garlic with all its unique qualities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Quality Standards & Compliance
              </h2>
              <p className="text-muted-foreground">
                Meeting international food safety and quality benchmarks
              </p>
            </div>

            <Card className="border-0 shadow-card-hover">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {standards.map((standard, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-muted rounded-lg"
                    >
                      <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{standard}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-gradient-hero text-white rounded-xl">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Our Quality Commitment
                  </h3>
                  <p className="text-sm text-white/90">
                    We maintain rigorous quality control at every stage - from farm selection and harvest timing to sorting, cleaning, packaging, and export. Our quality assurance team ensures that every shipment meets international standards and customer expectations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation Support */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Complete Documentation Support
            </h2>
            <p className="text-muted-foreground mb-8">
              We provide all necessary certificates, licenses, and documentation required for smooth customs clearance in your country. Our experienced export team handles all paperwork professionally.
            </p>
            <Button asChild size="lg" className="bg-gradient-hero hover:opacity-90">
              <Link to="/contact">Discuss Your Requirements</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
