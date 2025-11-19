import { Button } from "./ui/button";
import { Shield, Code, Lock } from "lucide-react";
import users1 from "../../assets/users1.jpg";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" style={{backgroundImage:`url(${users1})`}} className="relative bg-hero text-hero-foreground pt-32 pb-20 overflow-hidden bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-sm font-medium px-4 py-2 bg-gray-50 text-primary rounded-full">
                Trusted Cybersecurity Experts
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Transform Your Future With Technology
            </h1>
            
            <p className="text-xl text-hero-foreground/90 max-w-xl">
              Master cutting-edge tech skills with our comprehensive training programs and professional service.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-hero-foreground/20 text-primary-foreground"
                onClick={() => scrollToSection("services")}
              >
                Explore Services
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-hero-foreground text-hero-foreground bg-gray-900 hover:bg-hero-foreground/20"
                onClick={() => scrollToSection("team")}
              >
                Meet Our Team
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-hero-foreground/80">Students Trained</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">98%</div>
                <div className="text-sm text-hero-foreground/80">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm text-hero-foreground/80">Support</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-background/5 backdrop-blur-sm border border-hero-foreground/20 rounded-lg p-6 hover:bg-background/20 transition-all">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
              <p className="text-hero-foreground/80">Advanced security training</p>
            </div>
            <div className="bg-background/5 backdrop-blur-sm border border-hero-foreground/20 rounded-lg p-6 hover:bg-background/20 transition-all">
              <Code className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-hero-foreground/80">Modern web technologies</p>
            </div>
            <div className="bg-background/5 backdrop-blur-sm border border-hero-foreground/20 rounded-lg p-6 hover:bg-background/20 transition-all">
              <Lock className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Penetration Testing</h3>
              <p className="text-hero-foreground/80">Ethical hacking skills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
