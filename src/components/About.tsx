import { Users, Briefcase, HeadphonesIcon, Calendar } from "lucide-react";
import { useCountUp } from "../hooks/use-count";
import { useEffect, useRef, useState } from "react";

const About = () => {

  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry=entries[0];
        if (entry.isIntersecting) {
          setInView(true);
        }else{
          setInView(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

const years = useCountUp(5, 2000, inView);
const projects = useCountUp(100, 2000, inView);
const clients = useCountUp(50, 2000, inView);
const support = useCountUp(24, 2000, inView);

  return (
    <section id="about" className="py-20 bg-primary-foreground/60">
      <div className="container mx-auto px-10">
        <div className="flex flex-col md:flex-row gap-16 mb-16">
          <div className="flex flex-col gap-12 mb-12 flex-1">
            <div>
              <h2 className="text-2xl">Who are we?</h2>
              <p className="leading-relaxed max-w-lg mt-4">
                We are Skilled Technologists, Dedicated Innovators, and Trusted
                Cybersecurity Experts empowering individuals and organizations
                with world-class tech training and professional digital
                solutions. With years of experience, industry-certified
                instructors, and a passion for hands-on learning, we transform
                ambition into real-world success and delivering impactful
                projects, career-ready skills, and reliable 24/7 support.
              </p>
            </div>
            <div>
              <h2 className="text-2xl">Our Core Values:</h2>
              <p className="leading-relaxed max-w-lg mt-4">
                Debsploit Solutions is built on a foundation of excellence,
                integrity, and innovation. We are a committed team of
                cybersecurity professionals, skilled developers, and tech
                educators dedicated to delivering meaningful digital impact.
                Guided by hands-on learning, continuous improvement, and
                client-focused service, we empower individuals and organizations
                with secure, modern, and reliable technology solutions that turn
                visions into reality.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div className="bg-primary-foreground/5 border border-border rounded-lg p-6">
                <div className="text-3xl mb-4">👨‍🏫</div>
                <h3 className="text-xl font-semibold mb-2">
                  Expert Instructors
                </h3>
                <p className="text-muted-foreground">
                  Learn from industry professionals with real-world experience
                </p>
              </div>
              <div className="bg-primary-foreground/5  border border-border rounded-lg p-6">
                <div className="text-3xl mb-4">💻</div>
                <h3 className="text-xl font-semibold mb-2">
                  Hands-on Learning
                </h3>
                <p className="text-muted-foreground">
                  Practical projects and real-world applications
                </p>
              </div>
            </div>
            {/* second row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div className="bg-primary-foreground/5  border border-border rounded-lg p-6">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Career Support</h3>
                <p className="text-muted-foreground">
                  Job placement assistance and career guidance
                </p>
              </div>
              <div className="bg-primary-foreground/5  border border-border rounded-lg p-6">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-2">
                  Industry Recognition
                </h3>
                <p className="text-muted-foreground">
                  Certified programs recognized by leading cybersecurity
                  organizations and tech companies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div ref={sectionRef} className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <Calendar className="h-8 w-8" />
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">{years}+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <Briefcase className="h-8 w-8" />
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">{projects}+</div>
            <div className="text-muted-foreground">Successful Projects</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <Users className="h-8 w-8" />
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">{clients}+</div>
            <div className="text-muted-foreground">Corporate Clients</div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <HeadphonesIcon className="h-8 w-8" />
            </div>
            <div className="text-4xl font-bold text-foreground mb-2">{support}/7</div>
            <div className="text-muted-foreground">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
