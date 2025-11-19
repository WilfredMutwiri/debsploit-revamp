import { Card, CardContent, CardHeader } from "./ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Erick Odhiambo",
      role: "Lead Cybersecurity Instructor",
      bio: "6 years in cybersecurity with expertise in penetration testing and incident response. Former security consultant for major tech companies.",
    },
    {
      name: "Brandon Ochieng",
      role: "Senior Web Development Instructor",
      bio: "Full-stack developer with 5 years building scalable web applications. Expert in modern JavaScript frameworks and cloud technologies.",
    },
    {
      name: "Wilfred Mutwiri",
      role: "Full Stack Developer",
      bio: "Experienced full stack developer with a strong background in building scalable web applications, REST APIs, and modern user interfaces. Passionate about writing clean, maintainable code and delivering robust solutions across the stack.",
    },
    {
      name: "Mwaitsi Dolphine",
      role: "Corporate Training Director",
      bio: "Learning and development specialist focused on creating effective cybersecurity training programs for enterprise clients.",
    },
    {
      name: "Audrey Aluoch",
      role: "Communications & Investigative Journalism Specialist",
      bio: "A passionate communication and journalism professional with a strong interest in business, investigative, and health reporting. Audrey combines her storytelling expertise with strategic communication to inform, educate, and drive impact. Her journey is marked by creativity, a hunger for elegance, and an unwavering pursuit of excellence in all forms of communication.",
    },
  ];

  return (
    <section id="team" className="py-20 bg-secondary">
      <div className="container mx-auto px-10">
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
