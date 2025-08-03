import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Heart, Clock } from "lucide-react";
import heroImage from "@/assets/hero-family-dental.jpg";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Care",
      description: "Years of experience providing exceptional dental care with the latest technology and techniques.",
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "Comprehensive dental care for patients of all ages in a warm, welcoming environment.",
    },
    {
      icon: Heart,
      title: "Gentle Approach",
      description: "We prioritize your comfort and use gentle techniques to ensure a positive experience.",
    },
    {
      icon: Clock,
      title: "Convenient Hours",
      description: "Flexible scheduling with evening and weekend appointments available for your convenience.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(13, 110, 184, 0.7), rgba(13, 110, 184, 0.7)), url(${heroImage})`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6 leading-tight">
            Your Trusted Dental Care Provider in{" "}
            <span className="text-primary-light">Kanawha Valley</span>
          </h1>
          <p className="text-xl md:text-2xl font-open-sans mb-8 text-white/90">
            Comprehensive and compassionate dental care for you and your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link to="/appointments">Book Appointment</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-medical-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Why Choose Upper Kanawha Medical Center?
            </h2>
            <p className="text-lg text-foreground/70 font-open-sans max-w-2xl mx-auto">
              Dr. Sueann Easterday DDS and our dedicated team are committed to providing
              exceptional dental care with a personal touch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center group hover:shadow-medical transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70 font-open-sans">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
            Ready to Start Your Journey to Better Oral Health?
          </h2>
          <p className="text-xl text-white/90 font-open-sans mb-8">
            Schedule your appointment today and experience the difference of personalized, gentle dental care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-white/90">
              <Link to="/appointments">Book Your Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-white border-white/30 hover:bg-white/10">
              <a href="tel:(304)555-1234">Call (304) 555-1234</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;