import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Stethoscope, 
  Sparkles, 
  Shield, 
  AlertCircle,
  CheckCircle,
  Clock,
  Award,
  Heart
} from "lucide-react";
import dentalCleaningImage from "@/assets/dental-cleaning.jpg";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "General Dentistry",
      description: "Routine checkups, cleanings, and fillings to maintain healthy teeth and gums.",
      features: [
        "Comprehensive oral examinations",
        "Professional teeth cleanings",
        "Dental fillings and restorations",
        "Root canal therapy",
        "Tooth extractions",
        "Oral health education"
      ],
      image: dentalCleaningImage
    },
    {
      icon: Sparkles,
      title: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, and cosmetic enhancements to improve your smile.",
      features: [
        "Professional teeth whitening",
        "Porcelain veneers",
        "Dental bonding",
        "Smile makeovers",
        "Gum contouring",
        "Cosmetic consultations"
      ]
    },
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Sealants, fluoride treatments, and oral hygiene education to prevent dental issues before they arise.",
      features: [
        "Dental sealants",
        "Fluoride treatments",
        "Oral cancer screenings",
        "Periodontal therapy",
        "Custom mouthguards",
        "Nutritional counseling"
      ]
    },
    {
      icon: AlertCircle,
      title: "Emergency Dental Services",
      description: "Prompt treatment for tooth pain, broken teeth, and urgent dental concerns.",
      features: [
        "Same-day emergency appointments",
        "Pain relief treatment",
        "Broken tooth repair",
        "Lost filling replacement",
        "Dental trauma care",
        "After-hours availability"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Latest Technology",
      description: "State-of-the-art equipment and modern techniques for optimal results"
    },
    {
      icon: Heart,
      title: "Gentle Care",
      description: "Comfortable, pain-free treatments with a focus on patient comfort"
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Convenient appointment times that work with your busy schedule"
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Treatment",
      description: "Complete dental care under one roof for the whole family"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Comprehensive Dental Services
          </h1>
          <p className="text-xl text-foreground/70 font-open-sans max-w-3xl mx-auto">
            From routine cleanings to advanced treatments, we provide complete dental care 
            for patients of all ages in a comfortable, modern environment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medical transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-montserrat font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </div>
                <p className="text-foreground/70 font-open-sans text-lg">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                {service.image && (
                  <div className="aspect-video rounded-lg overflow-hidden mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="space-y-3">
                  <h4 className="font-montserrat font-semibold text-foreground mb-3">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-trust-green flex-shrink-0" />
                        <span className="text-foreground/80 font-open-sans text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-3xl font-montserrat font-bold text-foreground text-center mb-12">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center group hover:shadow-card transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-montserrat font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 font-open-sans text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-xl text-white/90 font-open-sans mb-8 max-w-2xl mx-auto">
            Take the first step towards better oral health. Our friendly team is here to 
            help you achieve the healthy, beautiful smile you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-white/90">
              <Link to="/appointments">Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-white border-white/30 hover:bg-white/10">
              <a href="tel:(304)555-1234">Call (304) 555-1234</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;