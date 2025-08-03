import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Car, Bus, Navigation } from "lucide-react";
import clinicExteriorImage from "@/assets/clinic-exterior.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: ["1234 Kanawha Blvd", "Upper Kanawha, WV 25314"],
      action: "https://maps.google.com/?q=1234+Kanawha+Blvd+Upper+Kanawha+WV"
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["(304) 555-1234"],
      action: "tel:(304)555-1234"
    },
    {
      icon: Mail,
      title: "Email",
      content: ["info@ukmcdds.com"],
      action: "mailto:info@ukmcdds.com"
    }
  ];

  const officeHours = [
    { day: "Monday", hours: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
    { day: "Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  const directions = [
    {
      icon: Car,
      title: "By Car",
      description: "Free parking available on-site. Take Exit 58A from I-64/I-77 and follow Kanawha Blvd."
    },
    {
      icon: Bus,
      title: "Public Transit",
      description: "Accessible via KRT Bus Routes 3 and 7. Stop located directly in front of our building."
    },
    {
      icon: Navigation,
      title: "GPS Coordinates",
      description: "38.3498° N, 81.6326° W"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-foreground/70 font-open-sans max-w-3xl mx-auto">
            We're here to help with all your dental care needs. Contact us today to schedule 
            an appointment or get answers to your questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-8">
              Get in Touch
            </h2>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-semibold text-foreground mb-2">
                          {info.title}
                        </h3>
                        {info.action ? (
                          <a
                            href={info.action}
                            className="text-foreground/70 hover:text-primary transition-colors font-open-sans"
                            target={info.action.startsWith('http') ? '_blank' : undefined}
                            rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.content.map((line, lineIndex) => (
                              <div key={lineIndex}>{line}</div>
                            ))}
                          </a>
                        ) : (
                          <div className="text-foreground/70 font-open-sans">
                            {info.content.map((line, lineIndex) => (
                              <div key={lineIndex}>{line}</div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link to="/appointments">Book Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:(304)555-1234">Call Now</a>
              </Button>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat font-bold text-foreground flex items-center">
                  <Clock className="h-6 w-6 text-primary mr-3" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0">
                      <span className="font-open-sans font-medium text-foreground">
                        {schedule.day}
                      </span>
                      <span className={`font-open-sans ${
                        schedule.hours === "Closed" ? "text-foreground/50" : "text-foreground/70"
                      }`}>
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-montserrat font-semibold text-foreground mb-2">
                    Emergency Care
                  </h4>
                  <p className="text-sm text-foreground/70 font-open-sans">
                    For dental emergencies outside of office hours, please call our main number. 
                    We provide after-hours emergency care for urgent situations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location & Directions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Map Placeholder */}
          <div>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">
              Our Location
            </h2>
            <div className="aspect-[4/3] bg-medical-gray rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center text-foreground/60">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p className="font-open-sans">Google Maps Integration</p>
                <p className="text-sm">1234 Kanawha Blvd, Upper Kanawha, WV</p>
              </div>
            </div>
            
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-medical">
              <img
                src={clinicExteriorImage}
                alt="Upper Kanawha Medical Center exterior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Directions */}
          <div>
            <h2 className="text-3xl font-montserrat font-bold text-foreground mb-6">
              Getting Here
            </h2>
            <div className="space-y-6">
              {directions.map((direction, index) => (
                <Card key={index} className="group hover:shadow-card transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <direction.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-montserrat font-semibold text-foreground mb-2">
                          {direction.title}
                        </h3>
                        <p className="text-foreground/70 font-open-sans">
                          {direction.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg">
              <h3 className="font-montserrat font-semibold text-foreground mb-3">
                Accessibility
              </h3>
              <p className="text-foreground/70 font-open-sans">
                Our facility is fully wheelchair accessible with dedicated parking spaces, 
                ramp access, and ADA-compliant restrooms. We're committed to ensuring 
                comfortable access for all patients.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
            Ready to Visit Us?
          </h2>
          <p className="text-xl text-white/90 font-open-sans mb-8 max-w-2xl mx-auto">
            We look forward to welcoming you to our practice. Contact us today to schedule 
            your appointment and take the first step towards optimal oral health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-white/90">
              <Link to="/appointments">Book Your Visit</Link>
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

export default Contact;