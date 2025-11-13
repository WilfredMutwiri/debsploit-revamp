import { Users, Briefcase, HeadphonesIcon, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wide">About Us</span>
          <h2 className="text-4xl font-serif font-bold mt-2 mb-4">Why Choose Debsploit Solutions?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're passionate about empowering individuals and organizations with cutting-edge technology skills and solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <Calendar className="h-8 w-8" />
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <Briefcase className="h-8 w-8" />
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">100+</div>
            <div className="text-muted-foreground">Successful Projects</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <Users className="h-8 w-8" />
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">50+</div>
            <div className="text-muted-foreground">Corporate Clients</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <HeadphonesIcon className="h-8 w-8" />
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">24/7</div>
            <div className="text-muted-foreground">Expert Support</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">👨‍🏫</div>
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-muted-foreground">Learn from industry professionals with real-world experience</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">💻</div>
            <h3 className="text-xl font-semibold mb-2">Hands-on Learning</h3>
            <p className="text-muted-foreground">Practical projects and real-world applications</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Career Support</h3>
            <p className="text-muted-foreground">Job placement assistance and career guidance</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-2">Industry Recognition</h3>
            <p className="text-muted-foreground">Certified programs recognized by leading cybersecurity organizations and tech companies.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
