import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    toast.success("Thank you! We'll contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", country: "", message: "" });
  };

  const countries = [
    "United States", "United Kingdom", "United Arab Emirates", "Canada", "Germany", 
    "France", "Singapore", "Australia", "Netherlands", "Belgium", "Italy", "Spain",
    "Saudi Arabia", "Qatar", "Kuwait", "Other"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Request a quote, ask questions, or discuss your export requirements
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-card-hover animate-fade-in">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll respond within 24 hours
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone / WhatsApp</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 234 567 8900"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select
                          value={formData.country}
                          onValueChange={(value) => setFormData({ ...formData, country: value })}
                        >
                          <SelectTrigger id="country">
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent>
                            {countries.map((country) => (
                              <SelectItem key={country} value={country}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message / Requirements *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please tell us about your requirements, quantity needed, preferred delivery terms, etc."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-hero hover:opacity-90" size="lg">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-0 shadow-card hover:shadow-card-hover transition-all animate-scale-in">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Office Address</h3>
                  <p className="text-sm text-muted-foreground">
                    Namli, Madhya Pradesh<br />
                    India - 458001
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card hover:shadow-card-hover transition-all animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Phone</h3>
                  <p className="text-sm text-muted-foreground mb-1">
                    +91 XXX XXX XXXX
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Available on WhatsApp
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card hover:shadow-card-hover transition-all animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    info@dndglobalexports.com
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card hover:shadow-card-hover transition-all animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Monday - Saturday<br />
                    9:00 AM - 6:00 PM IST
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Location</h2>
            <Card className="border-0 shadow-card-hover overflow-hidden">
              <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-foreground font-semibold mb-2">Namli, Madhya Pradesh, India</p>
                  <p className="text-sm text-muted-foreground">
                    Dnd Global Exports - Located in the heart of Mandsaur garlic cultivation region
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero text-white rounded-2xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Import Premium Garlic?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contact us today for free samples, pricing information, and export consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                <a href="tel:+91XXXXXXXXXX">Call Now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
                <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
