import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Portfolio = () => {
  const projects = [
    {
      title: "Enterprise Security Assessment",
      description: "Comprehensive security audit for Fortune 500 company, identifying critical vulnerabilities and implementing robust security measures.",
      category: "Cybersecurity",
      tags: ["Penetration Testing", "Vulnerability Assessment", "Security Audit"],
      client: "TechCorp International",
      year: "2024",
      result: "99% vulnerability reduction",
    },
    {
      title: "E-commerce Platform Development",
      description: "Full-stack e-commerce solution with modern React frontend, Node.js backend, and comprehensive security features.",
      category: "Web Development",
      tags: ["React", "Node.js", "MongoDB", "Payment Integration"],
      client: "RetailPlus Solutions",
      year: "2024",
      result: "300% increase in sales",
    },
    {
      title: "Banking Security Framework",
      description: "Designed and implemented comprehensive cybersecurity framework for regional banking institution.",
      category: "Security Consulting",
      tags: ["Compliance", "Risk Assessment", "Policy Development"],
      client: "Regional Bank Corp",
      year: "2023",
      result: "100% compliance achieved",
    },
    {
      title: "Healthcare Data Protection",
      description: "HIPAA-compliant security implementation for healthcare provider, ensuring patient data protection.",
      category: "Cybersecurity",
      tags: ["HIPAA Compliance", "Data Encryption", "Access Control"],
      client: "MedCare Systems",
      year: "2023",
      result: "Zero security incidents",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wide">Our Work</span>
          <h2 className="text-4xl font-serif font-bold mt-2 mb-4">Success Stories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful cybersecurity implementations, web development projects, and corporate training programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">
                  {project.category}
                </Badge>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                  <div>
                    <div className="text-xs text-muted-foreground">Client</div>
                    <div className="font-medium text-sm">{project.client}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Year</div>
                    <div className="font-medium text-sm">{project.year}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Result</div>
                    <div className="font-medium text-sm text-primary">{project.result}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
