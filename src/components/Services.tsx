import { Shield, Code, Lock, Users, Building2, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Training",
      description: "Comprehensive cybersecurity courses covering ethical hacking, penetration testing, network security, and incident response.",
      features: ["Ethical Hacking", "Network Security", "Incident Response", "Security Auditing"],
      popular: true,
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern web development training with latest technologies including React, Node.js, Python, and full-stack development.",
      features: ["React & Node.js", "Python Development", "Database Design", "API Development"],
      popular: false,
    },
    {
      icon: Lock,
      title: "Penetration Testing",
      description: "Professional penetration testing services to identify vulnerabilities and strengthen your security posture.",
      features: ["Vulnerability Assessment", "Web App Testing", "Network Penetration", "Security Reports"],
      popular: false,
    },
    {
      icon: Users,
      title: "Security Consulting",
      description: "Expert cybersecurity consulting services to help organizations build robust security frameworks and policies.",
      features: ["Security Strategy", "Compliance Audits", "Risk Assessment", "Policy Development"],
      popular: false,
    },
    {
      icon: Building2,
      title: "Corporate Training",
      description: "Customized training programs for organizations to upskill their teams in cybersecurity and development.",
      features: ["Team Training", "Custom Curriculum", "On-site/Remote", "Certification Support"],
      popular: false,
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic digital marketing services to help businesses grow their online presence and reach their target audience.",
      features: ["SEO Optimization", "Social Media", "Content Strategy", "Analytics & Reporting"],
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wide">Our Services</span>
          <h2 className="text-4xl font-serif font-bold mt-2 mb-4">Comprehensive Tech Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From cybersecurity training to professional services, we offer everything you need to succeed in the digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative hover:shadow-xl transition-shadow bg-background">
              {service.popular && (
                <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="mr-2 text-primary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
