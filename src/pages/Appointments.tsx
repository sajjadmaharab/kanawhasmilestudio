import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Phone, Mail, MapPin } from "lucide-react";
import { toast } from "sonner";
import dentalToolsImage from "@/assets/dental-chair-tools.jpg";

const Appointments = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    serviceType: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate form submission
    toast.success("Appointment request submitted! We'll confirm your appointment soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      serviceType: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(304) 555-1234",
      action: "tel:(304)555-1234"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@ukmcdds.com",
      action: "mailto:info@ukmcdds.com"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "1234 Kanawha Blvd, Upper Kanawha, WV"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Request an Appointment
          </h1>
          <p className="text-xl text-foreground/70 font-open-sans max-w-3xl mx-auto">
            Schedule your visit with Dr. Sueann Easterday DDS. We'll confirm your appointment 
            as soon as possible and look forward to providing you with exceptional dental care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Appointment Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-medical">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat font-bold text-foreground flex items-center">
                  <Calendar className="h-6 w-6 text-primary mr-3" />
                  Appointment Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="font-open-sans font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="font-open-sans font-medium">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="(304) 555-1234"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-open-sans font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="preferredDate" className="font-open-sans font-medium">
                        Preferred Date
                      </Label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="preferredTime" className="font-open-sans font-medium">
                        Preferred Time
                      </Label>
                      <Select onValueChange={(value) => handleSelectChange("preferredTime", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                          <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                          <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                          <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                          <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                          <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                          <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="serviceType" className="font-open-sans font-medium">
                      Type of Service
                    </Label>
                    <Select onValueChange={(value) => handleSelectChange("serviceType", value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select service type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="routine-checkup">Routine Checkup</SelectItem>
                        <SelectItem value="cleaning">Dental Cleaning</SelectItem>
                        <SelectItem value="cosmetic">Cosmetic Consultation</SelectItem>
                        <SelectItem value="emergency">Emergency Care</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-open-sans font-medium">
                      Additional Message (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                      rows={4}
                      placeholder="Any specific concerns or questions you'd like to discuss..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Appointment Request
                  </Button>

                  <p className="text-sm text-foreground/60 font-open-sans text-center">
                    * Required fields. We'll confirm your appointment as soon as possible.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Information */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-montserrat font-bold text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <info.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-open-sans font-medium text-foreground">
                        {info.title}
                      </h4>
                      {info.action ? (
                        <a
                          href={info.action}
                          className="text-foreground/70 hover:text-primary transition-colors font-open-sans"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-foreground/70 font-open-sans">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-montserrat font-bold text-foreground flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  Office Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-open-sans font-medium text-foreground">
                      {schedule.day}
                    </span>
                    <span className="font-open-sans text-foreground/70">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Image */}
            <div className="aspect-square rounded-lg overflow-hidden shadow-card">
              <img
                src={dentalToolsImage}
                alt="Modern dental equipment and chair"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;