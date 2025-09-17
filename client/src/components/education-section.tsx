import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Visvesvaraya Technological University",
    period: "2019 - 2022",
    description:
      "Graduated from Tontadarya College with a degree in Computer Science and Engineering, focused on designing, developing, and optimizing software systems, hardware architectures, and intelligent computing solutions.",
  },
  {
    degree: "Diploma In Computer Science",
    institution: "Department of Technical Education",
    period: "2016 - 2019",
    description:
      "Completed a Diploma in Computer Science with a strong foundation in programming, data structures, computer networks, and database management. Gained hands-on experience in developing software applications and understanding core computing principles.",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey that laid the foundation for my career in
            software engineering.
          </p>
        </div>

        {/* 🎓 Education Timeline */}
        <div className="relative border-l-2 border-primary-600 dark:border-primary-400">
          {education.map((edu, index) => (
            <div key={index} className="pl-10 mb-10 relative">
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full -left-2 top-2"></div>

              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                {edu.degree}
              </h4>
              <p className="text-primary-600 dark:text-primary-400 font-medium">
                {edu.institution}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                {edu.period}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
