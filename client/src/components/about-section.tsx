export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Passionate Developer & Problem Solver</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              With over 3 years of experience in web development, I specialize in creating scalable, user-friendly applications that make a difference.
              My journey started with a curiosity about how websites work,
              and it has evolved into a passion for crafting digital experiences that users love.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with
              the latest technologies. When I'm not coding, you can find me contributing to
              open-source projects, mentoring junior developers, or exploring new frameworks and tools.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">4+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">3</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src=".\src\components\images\profile_Pic.jpeg"
              alt="Saba Anjum - Professional headshot"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />

            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-emerald-500 rounded-full opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
