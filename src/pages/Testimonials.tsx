import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";
import happyPatientsImage from "@/assets/happy-patients.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah K.",
      rating: 5,
      text: "Amazing experience! Dr. Easterday and her team made me feel comfortable and confident. I was nervous about my procedure, but they explained everything clearly and the whole process was painless. I couldn't be happier with my results!",
      treatment: "Cosmetic Dental Work"
    },
    {
      name: "James T.",
      rating: 5,
      text: "Professional and caring – the best dental experience I've had in years. The office is modern and clean, and the staff is incredibly friendly. Dr. Easterday took the time to answer all my questions and made sure I was comfortable throughout my visit.",
      treatment: "Routine Cleaning & Checkup"
    },
    {
      name: "Maria Rodriguez",
      rating: 5,
      text: "I've been bringing my whole family here for over 3 years. Dr. Easterday is wonderful with children and makes every visit pleasant. The preventive care has really helped keep our dental bills down, and we all love our healthy smiles!",
      treatment: "Family Dental Care"
    },
    {
      name: "Robert Chen",
      rating: 5,
      text: "Emergency dental care when I needed it most. I broke a tooth on the weekend and was in significant pain. Dr. Easterday saw me the same day and provided immediate relief. The quality of care and compassion shown was exceptional.",
      treatment: "Emergency Dental Service"
    },
    {
      name: "Emily Johnson",
      rating: 5,
      text: "The teeth whitening results exceeded my expectations! Dr. Easterday explained all my options and helped me choose the best treatment. The process was comfortable and the results are amazing. I smile with confidence now!",
      treatment: "Teeth Whitening"
    },
    {
      name: "Michael Davis",
      rating: 5,
      text: "Outstanding preventive care program. The dental hygienist is thorough and gentle, and Dr. Easterday always takes time to discuss my oral health. Thanks to their preventive approach, I haven't had any major dental issues in years.",
      treatment: "Preventive Care"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Patients" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Patient Satisfaction" },
    { number: "4.9/5", label: "Average Rating" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            What Our Patients Say
          </h1>
          <p className="text-xl text-foreground/70 font-open-sans max-w-3xl mx-auto">
            Don't just take our word for it. Read what our patients have to say about 
            their experiences at Upper Kanawha Medical Center.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-foreground/70 font-open-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-medical">
            <img
              src={happyPatientsImage}
              alt="Happy patients with beautiful smiles"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-medical transition-all duration-300 h-full">
              <CardContent className="pt-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <Quote className="h-6 w-6 text-primary/20" />
                </div>
                
                <p className="text-foreground/80 font-open-sans leading-relaxed mb-6 flex-grow">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-montserrat font-semibold text-foreground mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-primary font-open-sans">
                    {testimonial.treatment}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Ready to Join Our Happy Patients?
          </h2>
          <p className="text-xl text-white/90 font-open-sans mb-8 max-w-2xl mx-auto">
            Experience the same exceptional care that our patients rave about. 
            Schedule your appointment today and discover why we're the trusted choice for dental care in Kanawha Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-white/90">
              <Link to="/appointments">Schedule Your Visit</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-white border-white/30 hover:bg-white/10">
              <a href="tel:(304)555-1234">Call (304) 555-1234</a>
            </Button>
          </div>
        </div>

        {/* Review Invitation */}
        <div className="mt-16 text-center bg-medical-gray/50 rounded-xl p-8">
          <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">
            Had a Great Experience?
          </h3>
          <p className="text-foreground/70 font-open-sans mb-6">
            We'd love to hear about your visit! Your feedback helps us continue to provide 
            exceptional care and helps other patients feel confident in choosing our practice.
          </p>
          <Button variant="outline" size="lg">
            Leave a Review
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;