import { Card, CardContent, CardHeader } from "./ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "John Doe",
      role: "Lead Security Consultant",
      bio: "15+ years in cybersecurity with expertise in penetration testing and security architecture.",
    },
    {
      name: "Jane Smith",
      role: "Senior Web Developer",
      bio: "Full-stack developer specializing in React, Node.js, and cloud-native applications.",
    },
    {
      name: "Mike Johnson",
      role: "Training Director",
      bio: "Certified instructor with a passion for mentoring the next generation of tech professionals.",
    },
    {
      name: "Sarah Williams",
      role: "Digital Marketing Lead",
      bio: "Strategic marketer with proven track record in growing online presence for tech companies.",
    },
  ];

  return (
    <section id="team" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wide">Our Team</span>
          <h2 className="text-4xl font-serif font-bold mt-2 mb-4">Meet the Experts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team consists of industry veterans passionate about sharing their knowledge and experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow bg-background">
              <CardHeader>
                <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-5 w-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
