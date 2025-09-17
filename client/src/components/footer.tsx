import { Github, Linkedin, Twitter } from "lucide-react";
import { SiDribbble } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* <h3 className="text-2xl font-bold mb-4">Alex Johnson</h3>
          <p className="text-gray-400 mb-8">Full Stack Developer & UI/UX Enthusiast</p> */}
          
          {/* <div className="flex justify-center space-x-6 mb-8"> */}
            {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 text-xl">
              <Github className="h-6 w-6" />
            </a> */}
            {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 text-xl">
              <Linkedin className="h-6 w-6" />
            </a> */}
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 text-xl">
              <Twitter className="h-6 w-6" />
            </a> */}
            {/* <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200 text-xl">
              <SiDribbble className="h-6 w-6" />
            </a> */}
          {/* </div> */}

          {/* <div className="border-t border-gray-800 pt-8"> */}
            <p className="text-gray-400 text-sm">
              © 2025 Saba Anjum G.   All rights reserved. Built with React & Tailwind CSS.
            </p>
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
}
