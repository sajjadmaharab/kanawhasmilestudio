import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Award, Users, Heart } from "lucide-react";
import consultationImage from "@/assets/dentist-consultation.jpg";

const About = () => {
  const qualifications = [
    {
      icon: GraduationCap,
      title: "Doctor of Dental Surgery (DDS)",
      description: "Graduated with honors from a prestigious dental school",
    },
    {
      icon: Award,
      title: "Board Certified",
      description: "Certified by the American Board of General Dentistry",
    },
    {
      icon: Users,
      title: "15+ Years Experience",
      description: "Over a decade of providing exceptional dental care",
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Focused on comfort, communication, and comprehensive treatment",
    },
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Meet Dr. Sueann Easterday DDS
          </h1>
          <p className="text-xl text-foreground/70 font-open-sans max-w-3xl mx-auto">
            Dedicated to providing exceptional dental care with a gentle touch and personalized approach
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-montserrat font-bold text-foreground">
              Compassionate Care, Exceptional Results
            </h2>
            <div className="space-y-4 text-foreground/80 font-open-sans leading-relaxed">
              <p>
                At Upper Kanawha Medical Center, we are committed to providing exceptional dental care 
                in a welcoming and friendly environment. Dr. Sueann Easterday DDS brings years of 
                experience and a gentle approach to ensure your comfort and confidence with every visit.
              </p>
              <p>
                We believe every patient deserves personalized care and the latest in dental technology, 
                so you can smile with confidence. Our practice is built on the foundation of trust, 
                communication, and comprehensive care that addresses your unique needs and concerns.
              </p>
              <p>
                Dr. Easterday stays current with the latest advances in dental care through continuing 
                education and professional development, ensuring that you receive the most effective 
                and comfortable treatment available.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/appointments">Schedule Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-medical">
              <img
                src={consultationImage}
                alt="Dr. Sueann Easterday consulting with patient"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-montserrat font-bold">15+</div>
                <div className="text-sm font-open-sans">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Qualifications */}
        <div className="mb-20">
          <h2 className="text-3xl font-montserrat font-bold text-foreground text-center mb-12">
            Qualifications & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualifications.map((qual, index) => (
              <Card key={index} className="text-center group hover:shadow-medical transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <qual.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-montserrat font-semibold text-foreground mb-3">
                    {qual.title}
                  </h3>
                  <p className="text-sm text-foreground/70 font-open-sans">
                    {qual.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-foreground/80 font-open-sans max-w-4xl mx-auto leading-relaxed">
            "To provide comprehensive, compassionate dental care that promotes optimal oral health 
            while ensuring each patient feels comfortable, informed, and valued. We are committed 
            to building lasting relationships with our patients and helping them achieve healthy, 
            beautiful smiles that last a lifetime."
          </p>
          <div className="mt-8">
            <span className="text-xl font-montserrat font-semibold text-primary">
              - Dr. Sueann Easterday DDS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;