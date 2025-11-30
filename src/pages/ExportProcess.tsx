import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  FileText, 
  Camera, 
  CheckCircle, 
  PackageSearch, 
  Package, 
  FileCheck, 
  Ship, 
  Plane,
  Truck
} from "lucide-react";
import exportImage from "@/assets/export-process.jpg";

const ExportProcess = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Inquiry",
      description: "Contact us with your requirements, quantity, and destination country. We respond within 24 hours.",
      color: "bg-primary",
    },
    {
      icon: FileText,
      title: "Quotation",
      description: "Receive detailed pricing including FOB/CIF terms, packaging options, and delivery timeline.",
      color: "bg-primary",
    },
    {
      icon: Camera,
      title: "Sample Photos",
      description: "We provide photos and videos of the current stock to ensure product meets your expectations.",
      color: "bg-primary",
    },
    {
      icon: CheckCircle,
      title: "Order Confirmation",
      description: "Place your order with agreed terms. We initiate processing immediately upon confirmation.",
      color: "bg-accent",
    },
    {
      icon: PackageSearch,
      title: "Sorting & Cleaning",
      description: "Garlic is carefully sorted by size, cleaned, and inspected for quality standards.",
      color: "bg-accent",
    },
    {
      icon: Package,
      title: "Professional Packaging",
      description: "Packed in mesh bags, jute bags, or cartons as per your requirement with proper labeling.",
      color: "bg-accent",
    },
    {
      icon: FileCheck,
      title: "Documentation",
      description: "All export documents prepared: Phytosanitary certificate, invoice, packing list, CoO.",
      color: "bg-secondary",
    },
    {
      icon: Ship,
      title: "Customs Clearance",
      description: "Complete customs formalities at Indian port with all necessary certifications.",
      color: "bg-secondary",
    },
    {
      icon: Plane,
      title: "International Shipment",
      description: "Cargo shipped via sea or air freight to your destination port with tracking details.",
      color: "bg-secondary",
    },
    {
      icon: Truck,
      title: "Final Delivery",
      description: "Regular updates until cargo reaches your warehouse. We ensure smooth delivery.",
      color: "bg-primary",
    },
  ];

  const documents = [
    "Commercial Invoice",
    "Packing List",
    "Certificate of Origin (CoO)",
    "Phytosanitary Certificate",
    "Bill of Lading / Airway Bill",
    "GST Invoice",
    "Quality Certificate",
    "GI Tag Certificate (on request)",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Export Process
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Transparent, efficient, and hassle-free international garlic export
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Handle Your Order
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From initial inquiry to final delivery - a streamlined 10-step process
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative pl-8 md:pl-16 pb-12 last:pb-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Timeline line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-6 md:left-10 top-14 bottom-0 w-0.5 bg-border" />
                )}

                {/* Step indicator */}
                <div className={`absolute left-0 md:left-4 top-0 w-12 h-12 rounded-full ${step.color} flex items-center justify-center shadow-card`}>
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                {/* Step content */}
                <Card className="border-0 shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {index + 1}. {step.title}
                      </h3>
                      <span className="text-sm font-medium text-muted-foreground whitespace-nowrap ml-4">
                        Step {index + 1}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Image */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <img
              src={exportImage}
              alt="Export Process Facility"
              className="w-full h-auto rounded-2xl shadow-card-hover"
            />
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Export Documentation
              </h2>
              <p className="text-muted-foreground">
                Complete paperwork handled professionally for smooth customs clearance
              </p>
            </div>

            <Card className="border-0 shadow-card-hover">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-muted rounded-lg"
                    >
                      <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground">{doc}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    Additional Services
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Assistance with import regulations and procedures
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Cargo insurance coordination (optional)
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Real-time shipment tracking and updates
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      After-delivery support and consultation
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Shipping Options
            </h2>
            <p className="text-muted-foreground">
              Flexible logistics to suit your timeline and budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-0 shadow-card hover:shadow-card-hover transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                  <Ship className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Sea Freight</h3>
                <p className="text-muted-foreground mb-4">
                  Cost-effective option for large volumes. Transit time: 15-30 days depending on destination.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    Most economical for bulk orders
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    20ft and 40ft container options
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    Full container or LCL available
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card hover:shadow-card-hover transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-premium flex items-center justify-center mb-4">
                  <Plane className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Air Freight</h3>
                <p className="text-muted-foreground mb-4">
                  Fast delivery option for urgent requirements. Transit time: 3-7 days to major destinations.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    Fastest delivery option
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    Suitable for smaller quantities
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    Temperature-controlled available
                  </li>
                </ul>
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
              Ready to Start Your Export Order?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Our team is ready to guide you through every step of the export process
            </p>
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Contact Export Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExportProcess;
