import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  // 👇 Automatically hide message after 3 seconds
  useEffect(() => {
    if (status !== "idle") {
      const timer = setTimeout(() => setStatus("idle"), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // stop default redirect

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);

    try {
      const res = await fetch("https://formsubmit.co/ajax/sabaanjum0822@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        formRef.current.reset(); // clear form
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you.
            </p>

            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                <Mail className="text-primary-600 dark:text-primary-400 h-5 w-5" />
              </div>
              <div>
                <h4 className="text-gray-900 dark:text-white font-medium">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">sabaanjum0822@gmail.com</p>
              </div>
            </div>

            {/* <div className="pt-8">
              <h4 className="text-gray-900 dark:text-white font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input type="text" name="firstName" placeholder="First Name" required />
                <Input type="text" name="lastName" placeholder="Last Name" required />
              </div>

              <Input type="email" name="email" placeholder="Email Address" required />
              <Textarea name="message" placeholder="Your Message" rows={5} required />

              <Button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Mail className="w-4 h-4" />
              </Button>
            </form>

            {/* Success / Error messages */}
            {status === "success" && (
              <p className="text-green-600 mt-4">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-4">❌ Something went wrong. Please try again.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
