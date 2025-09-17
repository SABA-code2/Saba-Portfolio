import { Code2, Database, Wrench, Cpu, Workflow, Users, Lightbulb, MessageSquare } from "lucide-react";
import { SiReact, SiTypescript, SiNodedotjs, SiMongodb, SiPostgresql, SiGit, SiDocker, SiFigma, SiMysql } from "react-icons/si";

const skills = {
  frontend: [
    { name: "React.js", level: 95, years: "3+ yrs", icon: SiReact },
    { name: "TypeScript", level: 85, years: "3 months", icon: SiTypescript },
    { name: "HTML/CSS", level: 90, years: "3+ yrs", icon: Code2 },
  ],
  // backend: [
  //   { name: "Node.js", level: 80, years: "2+ yrs", icon: SiNodedotjs },
  //   { name: "Express.js", level: 75, years: "2 yrs", icon: Cpu },
  // ],
  database: [
    { name: "MongoDB", level: 80, years: "1 yrs", icon: SiMongodb },
    { name: "MySQL", level: 75, years: "5 months", icon: SiMysql },
  ],
  tools: [
    { name: "Git", level: 90, years: "3+ yrs", icon: SiGit },
    // { name: "Docker", level: 60, years: "1 yr", icon: SiDocker },
    { name: "Figma", level: 70, years: "1.5 yrs", icon: SiFigma },
  ],
  softSkills: [
    { name: "Agile & Scrum", desc: "Experienced in Agile sprints, stand-ups, and reviews.", icon: Workflow },
    { name: "Team Collaboration", desc: "Strong communicator, works well in cross-functional teams.", icon: Users },
    { name: "Problem Solving", desc: "Can analyze, debug, and deliver solutions under deadlines.", icon: Lightbulb },
    // { name: "Client Communication", desc: "Experienced in demos, requirement gathering, stakeholder updates.", icon: MessageSquare },
  ],
};

function SkillItem({ skill }: { skill: any }) {
  const Icon = skill.icon;
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center">
      <Icon className="text-3xl mb-2 text-primary-600 dark:text-primary-400" />
      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
      {skill.years && (
        <>
          <span className="text-xs text-gray-500 dark:text-gray-400">{skill.years}</span>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-primary-600 to-primary-400 transition-all"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </>
      )}
    </div>
  );
}

// 🟢 Soft skill card component (without progress bar)
function SoftSkillItem({ skill }: { skill: any }) {
  const Icon = skill.icon;
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition flex flex-col">
      <div className="flex items-center mb-2">
        <Icon className="text-2xl mr-2 text-primary-600 dark:text-primary-400" />
        <span className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</span>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{skill.desc}</p>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Technical Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            With 3+ years of professional experience, I specialize in crafting scalable, high-performance web applications
            using modern JavaScript frameworks and backend technologies.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Frontend + Backend */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <Code2 className="w-5 h-5 mr-2 text-primary-600" /> Frontend Development
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.frontend.map((s) => <SkillItem key={s.name} skill={s} />)}
            </div>

            {/* <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4 flex items-center">
              <Cpu className="w-5 h-5 mr-2 text-primary-600" /> Backend Development
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.backend.map((s) => <SkillItem key={s.name} skill={s} />)}
            </div> */}
          </div>

          {/* Database + Tools */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
              <Database className="w-5 h-5 mr-2 text-primary-600" /> Databases
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.database.map((s) => <SkillItem key={s.name} skill={s} />)}
            </div>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4 flex items-center">
              <Wrench className="w-5 h-5 mr-2 text-primary-600" /> Tools & Others
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.tools.map((s) => <SkillItem key={s.name} skill={s} />)}
            </div>
          </div>
        </div>

        {/* 🟢 Soft Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Soft Skills</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skills.softSkills.map((s) => <SoftSkillItem key={s.name} skill={s} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
