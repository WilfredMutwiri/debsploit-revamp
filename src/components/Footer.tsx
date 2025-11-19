import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-hero-foreground py-12">
      <div className="container mx-auto px-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
          <div className="flex items-center pb-5">
            <img src={logo} alt="Debsploit Logo" className="h-8 w-8 mr-2" />
            <h1 className="text-2xl font-serif font-bold text-gray-50">
              Debsploit Solutions
            </h1>
          </div>            <p className="text-sm text-hero-foreground/80">
              Empowering individuals and organizations with cutting-edge technology skills and solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-hero-foreground/80 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-hero-foreground/80 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-hero-foreground/80 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-hero-foreground/80 hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-hero-foreground/80">Cybersecurity Training</li>
              <li className="text-hero-foreground/80">Web Development</li>
              <li className="text-hero-foreground/80">Penetration Testing</li>
              <li className="text-hero-foreground/80">Security Consulting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-hero-foreground/80 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-hero-foreground/80 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-hero-foreground/80 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-hero-foreground/80 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-hero-foreground/20 pt-8 text-center text-sm text-hero-foreground/60">
          <p>&copy; {new Date().getFullYear()} Debsploit Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
