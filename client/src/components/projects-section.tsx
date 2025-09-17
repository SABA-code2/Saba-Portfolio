import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Accord - Asset Management System",
    description:
      "A web-based system to efficiently track, monitor, and manage digital and physical assets across an organization’s infrastructure. It improves visibility, reduces manual effort, and ensures seamless asset lifecycle management.",
    technologies: ["React", "Node.js", "MySQL","Material UI"],
  },
  {
    id: 2,
    title: "Easytime - Employee Timesheet Tracker",
    description:
      "An automated solution to record employee working hours, leave, and vacation details for accurate payroll processing and performance reporting. It simplifies HR workflows and reduces errors from manual tracking.",
    technologies: ["React", "Node.js", "MySQL", "Material UI", "Apex charts"],
  },
  {
    id: 3,
    title: "BOSCH - Predictive Engine",
    description:
      "A quality monitoring platform that tracks and analyzes anomalies in the soldering process during manufacturing. It helps engineers predict and prevent defects, ensuring higher product quality and efficiency.",
    technologies: ["React", "Node.js", "MySQL","Material UI", "Apex charts"],
  },
  {
    id: 4,
    title: "Accord Document Management System (ADMS)",
    description:
      "A document management system to securely store, organize, and track digital files across projects. It enables better collaboration, version control, and quick document retrieval.",
    technologies: ["React", "Node.js", "MongoDB","Material UI", "TinyMCE"],
  },
];

const techColors = {
  React: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  "Node.js": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
  MongoDB: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
  MySQL: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
  "Material UI": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
  GraphQL: "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200",
  PostgreSQL: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Showcasing My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Over the past few years, I have contributed to building impactful
            web applications ranging from asset management and timesheet tracking
            to predictive analytics and document management systems.
            Here’s a snapshot of my work:
          </p>
        </div>

        {/* Project Cards without images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className={`px-3 py-1 text-xs rounded-full ${techColors[tech as keyof typeof techColors] ||
                      "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                      }`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
