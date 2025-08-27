import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-24 md:px-20 lg:py-32 lg:px-44 bg-[#03040B] text-[#FAF9F6]"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-gradient-to-r from-amber-600 to-purple-600 text-primary rounded-full mb-6">
            Get in touch
          </span>
          <h2 className="text-4xl font-medium mb-6">
            Let&apos;s work together
          </h2>
          <p className="section-subheading mx-auto">
            Whether you have a project in mind, a question about my work, or
            just want to say hello, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10">
            <div className="bg-[#03040B] p-8 rounded-lg shadow-sm hover:shadow-md shadow-purple-400 transition-all">
              <div className="flex">
                <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center mr-5 flex-shrink-0">
                  <Mail className="text-[#FAF9F6]" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground mb-3">
                    For project inquiries and collaborations
                  </p>
                  <a
                    href="mailto:222miran222@gmail.com"
                    className="text-[#FAF9F6] hover:underline font-medium"
                  >
                    rindheom45@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[#03040B] p-8 rounded-lg shadow-sm hover:shadow-md shadow-purple-400 transition-all">
              <div className="flex">
                <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center mr-5 flex-shrink-0">
                  <MapPin className="text-[#FAF9F6]" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Location</h3>
                  <p className="text-muted-foreground mb-3">
                    Based in Pune,Maharastra
                  </p>
                  <span className="text-[#FAF9F6] font-medium">
                    Available for remote work worldwide
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link
              href="#"
              target="_blank"
              className="flex items-center text-white mt-10 py-2 px-6 rounded-full border border-purple-400 shadow-md cursor-default hover:shadow-lg shadow-amber-600 transition duration-300 ease-in-out"
            >
              Subscribe to my Newsletter
              <ArrowUpRight />
            </Link>
            <h6 className="text-center text-secondary/30 mt-3">
              For Updates regarding my Work.
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
