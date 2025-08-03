import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-medical-gray/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div className="md:col-span-1">
            <div className="text-lg font-montserrat font-bold text-primary mb-4">
              Upper Kanawha Medical Center
            </div>
            <p className="text-sm text-foreground/70 mb-4 font-open-sans">
              Dr. Sueann Easterday DDS
            </p>
            <p className="text-sm text-foreground/70 font-open-sans">
              Comprehensive and compassionate dental care for you and your family.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-montserrat font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/services", label: "Services" },
                { path: "/appointments", label: "Appointments" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-foreground/70 hover:text-primary transition-colors font-open-sans"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-montserrat font-semibold text-foreground mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {[
                "General Dentistry",
                "Cosmetic Dentistry",
                "Preventive Care",
                "Emergency Services",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-foreground/70 font-open-sans">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-montserrat font-semibold text-foreground mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-foreground/70 font-open-sans">
                  1234 Kanawha Blvd<br />
                  Upper Kanawha, WV
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground/70 font-open-sans">
                  (304) 555-1234
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground/70 font-open-sans">
                  info@ukmcdds.com
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-foreground/70 font-open-sans">
                  <div>Mon-Fri: 9:00 AM - 5:00 PM</div>
                  <div>Sat: 9:00 AM - 1:00 PM</div>
                  <div>Sun: Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-foreground/60 font-open-sans">
            © 2024 Upper Kanawha Medical Center - Dr. Sueann Easterday DDS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;