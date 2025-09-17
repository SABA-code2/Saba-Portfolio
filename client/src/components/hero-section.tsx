import { ArrowRight, Mail, Github, Linkedin, Twitter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function HeroSection() {
  const rotatingWords = ["Hi, I'm Saba Anjum Gulgundi", "I'm a Frontend Developer"];
  const [index, setIndex] = useState(0);
  // change every 2 seconds
  useEffect(() => {
    const image = document.getElementById("heroImage");
    const logo = document.getElementById("logoTarget");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (image && logo) {
        if (scrollY > 250) {
          const logoRect = logo.getBoundingClientRect();
          image.style.position = "fixed";
          image.style.top = `${logoRect.top}px`;
          image.style.left = `${logoRect.left}px`;
          image.style.width = "40px";
          image.style.height = "40px";
        } else {
          image.style.position = "sticky";
          image.style.top = "6rem"; // original sticky position
          image.style.left = "";
          image.style.width = "240px";
          image.style.height = "240px";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length);

    }, 2000);
    return () => clearInterval(interval);
  });
  return (
    <section
      id="home"
      className="min-h-screen pt-6 bg-gradient-to-br flex flex-col lg:flex-row items-center justify-between relative from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950 "
    >
      {/* // <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950 pt-16 relative"> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
        {/* <div className="relative flex justify-center items-center"> */}
        <div className="space-y-6">
          <div
            id="heroImage"
            className="w-60 h-60 rounded-full bg-gradient-to-r from-pink-400 to-indigo-500 p-1 sticky top-20 left-20 transition-all duration-500 ease-in-out will-change-transform transform z-40"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
              <img
                src="/images/profile_Pic.jpeg"
                alt="Saba Anjum"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-1xl font-medium text-gray-600 dark:text-gray-300 whitespace-nowrap">
              Front End Developer
            </span>
            <h1 className="text-7xl font-bold text-pink-500 dark:text-white mb-4 ">
              Saba Anjum Gulgundi
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 pt-10">
  I am a passionate Front-End Developer with 3+ years of experience building responsive, performant, and accessible web applications. I specialize in modern JavaScript frameworks like React, Next.js, and TypeScript, and have a strong understanding of UI/UX principles and design systems. 
  Over the course of my career, I have successfully delivered projects that improved user engagement and optimized workflows.
  </p>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ChevronDown className="text-gray-400 dark:text-gray-600 h-8 w-8" />
        </div>
      </div>
    </section>

  );
  // const scrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     const offset = 80;
  //     const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  //     window.scrollTo({
  //       top: elementPosition - offset,
  //       behavior: "smooth"
  //     });
  //   }
  // };

  // const rotatingWords = ["Hi, I'm Saba Anjum Gulgundi", "I'm a Frontend Developer"];

  // const fontClasses = [
  //   'font-sans',
  //   'font-serif',
  //   'font-dancing',
  //   'font-mono',
  //   'italic font-semibold',
  //   // custom
  // ];
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % rotatingWords.length);
  //   }, 2000); // change every 2 seconds

  //   return () => clearInterval(interval);
  // }, []);
  // return (
  //   <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950 pt-16 relative">
  //     <div className="absolute top-20 right-20 w-24 h-24 animate-spin-slow bg-gradient-to-tr from-pink-400 to-indigo-500 rounded-xl shadow-2xl transform rotate-45 blur-sm opacity-30"></div>
  //     <div className="absolute top-60 left-20 w-24 h-24 animate-spin-slow bg-gradient-to-tr from-pink-400 to-indigo-500 rounded-xl shadow-2xl transform rotate-45 blur-sm opacity-30"></div>
  //     <div className="absolute bottom-20 right-80 w-24 h-24 animate-spin-slow bg-gradient-to-tr from-pink-400 to-indigo-500 rounded-xl shadow-2xl transform rotate-45 blur-sm opacity-30"></div>
  //     <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  //         <div className="space-y-6">
  //           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-500 dark:text-white mb-6">
  //             <span className={`text-primary-600 dark:text-primary-400 ${fontClasses[index]}`}>
  //               {/* <span className="text-primary-600 dark:text-primary-400 " > */}
  //               {rotatingWords[index]}
  //             </span>
  //           </h1>
  //           <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
  //             I craft responsive, high-performance web applications that not only look great but also deliver seamless user experiences.
  //             Specializing in <span className="font-semibold text-pink-500">React</span> and modern frontend ecosystems,
  //             I turn complex requirements into clean, scalable code — always with a focus on usability, accessibility, and maintainability.
  //           </p>
  //         </div>
  //         <div className="relative flex justify-center items-center">
  //           {/* Glowing circle background */}
  //           {/* <div className="w-64 h-64 rounded-full animate-pulse bg-gradient-to-tr from-pink-400 to-indigo-500 blur-xl opacity-30 animate-rotate-slow"></div> */}
  //           <div className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-pink-400 to-indigo-500 blur-xl opacity-30 animate-rotate-slow">
  //           </div>
  //           {/* Border circle */}
  //           <div className="w-60 h-60 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 p-1 z-10 relative">
  //             <div className="rounded-full overflow-hidden w-full h-full bg-white dark:bg-gray-900">
  //               <img
  //                 src="./src/components/images/profile_Pic.jpeg"
  //                 alt="Saba Anjum - Professional headshot"
  //                 className="object-cover w-full h-full"
  //               />
  //             </div>
  //           </div>
  //           {/* <img
  //             src=".\src\components\images\profile_Pic.jpeg"
  //             alt="Saba Anjum - Professional headshot"
  //             className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
  //           /> */}
  //         </div>
  //         {/* </div> */}
  //         {/* Scroll Indicator */}
  //         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
  //           <ChevronDown className="text-gray-400 dark:text-gray-600 h-8 w-8" />
  //         </div>
  //         {/* </div> */}
  //       </div>
  //     </div>
  //   </section>
  // );
}

/* <p className="text-lg text-gray-700 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            I create beautiful, functional web applications that solve real-world problems.
            With expertise in React, Node.js, and modern web technologies, I bring ideas to life through clean code and intuitive design.
          </p> */

/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div> */

/* Social Links */
/* <div className="flex justify-center space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-2xl">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-2xl">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-2xl">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="mailto:alex.johnson@email.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-2xl">
              <Mail className="h-6 w-6" />
            </a>
          </div> */
