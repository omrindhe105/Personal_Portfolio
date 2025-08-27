import { Code, Monitor, Paintbrush } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-6 p-6 rounded-lg border border-purple-300 bg-[#03040B] transition-all shadow-purple-300 hover:shadow-md",
        className
      )}
    >
      <div className="p-2 w-12 h-12 rounded-md bg-primary flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 px-6 md:py-24 md:px-20 lg:py-32 lg:px-44 bg-[#03040B] text-[#FAF9F6]"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 font-medium text-sm bg-gradient-to-r from-amber-600 to-purple-600 text-primary rounded-full mb-6">
              About me
            </span>
            <h2 className="section-heading mb-6">
              Passion for creating{" "}
              <span className="text-gradient">exceptional</span> experiences
            </h2>
            <p className="section-subheading mb-8">
              I&apos;m a designer and developer, creating digital products that
              balance aesthetics and functionality. My approach combines
              strategic thinking with meticulous craftsmanship.
            </p>
            <p className="section-subheading">
              When I&apos;m not designing or coding, you can find me exploring
              new technologies, binge watching TV shows, or enjoying a good book
              with a cup of coffee.
            </p>
          </div>
          <div className="space-y-4">
            <FeatureCard
              icon={<Monitor className="text-[#FAF9F6]" />}
              title="Algorithm's"
              description="Deep diving into the world od Data Structures, algorithm & Coding to solve real world problems."
              className="translate-y-0 sm:translate-y-4"
            />
            <FeatureCard
              icon={<Code className="text-[#FAF9F6]" />}
              title="Development"
              description="Building responsive, performant web applications using modern technologies and best practices."
              className="sm:ml-8"
            />
            <FeatureCard
              icon={<Paintbrush className=" text-[#FAF9F6]" />}
              title="UI/UX Design"
              description="Crafting beautiful visuals that communicate effectively and elevate the user experience."
              className="translate-y-0 sm:-translate-y-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
