import { Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 md:py-24 md:px-20 lg:py-32 lg:px-44 bg-[#03040B] text-[#FAF9F6]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a
              href="#home"
              className="text-xl font-serif font-medium tracking-tight"
            >
              Om Rindhe
            </a>
            <p className="text-muted-foreground mt-2 text-sm">
              Creating thoughtful digital experiences
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/om-rindhe105"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/om-rindhe105"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/omrindhe105"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
        <div className="bg-gradient-to-r from-transparent via-purple-400 to-transparent h-[2px] my-10" />
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Om Rindhe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
