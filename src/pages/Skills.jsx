import { SkillBar } from '../components/SkillBar';
import { FaHtml5, FaReact, FaJsSquare, FaJava, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiVscodium, SiFigma } from 'react-icons/si';
import { GiPuzzle } from 'react-icons/gi';
import { TbUsers, TbMessageCircle, TbBrain, TbClock } from 'react-icons/tb';

export const Skills = () => {
  const skills = {
    languages: [
      { skill: 'JavaScript', level: 75, icon: <FaJsSquare className="inline mr-2 text-yellow-400" /> },
      { skill: 'Java', level: 60, icon: <FaJava className="inline mr-2 text-red-600" /> },
      { skill: 'Python', level: 50, icon: <FaPython className="inline mr-2 text-yellow-600" /> },
      { skill: 'HTML', level: 85, icon: <FaHtml5 className="inline mr-2 text-orange-600" /> },
      { skill: 'TypeScript', level: 40, icon: <FaHtml5 className="inline mr-2 text-orange-600" /> },
  
    ],
    frameworks: [
      { skill: 'React', level: 80, icon: <FaReact className="inline mr-2 text-blue-500" /> },
      { skill: 'Node.js', level: 70, icon: <FaNodeJs className="inline mr-2 text-green-600" /> },
      { skill: 'Tailwind CSS', level: 75, icon: <SiTailwindcss className="inline mr-2 text-teal-400" /> },
    ],
    tools: [
      { skill: 'Git', level: 70, icon: <FaGitAlt className="inline mr-2 text-orange-500" /> },
      { skill: 'VS Code', level: 85, icon: <SiVscodium className="inline mr-2 text-blue-600" /> },
      { skill: 'MySQL', level: 60, icon: <SiMysql className="inline mr-2 text-blue-700" /> },
      { skill: 'Figma', level: 75, icon: <SiFigma className="inline mr-2 text-purple-500" /> },
         ],
    softSkills: [
      { skill: 'Problem Solving', level: 90, icon: <GiPuzzle className="inline mr-2 text-purple-600" /> },
      { skill: 'Team Work', level: 85, icon: <TbUsers className="inline mr-2 text-blue-500" /> },
      { skill: 'Communication', level: 80, icon: <TbMessageCircle className="inline mr-2 text-green-500" /> },
      { skill: 'Creative Thinking', level: 85, icon: <TbBrain className="inline mr-2 text-pink-500" /> },
      { skill: 'Time Management', level: 75, icon: <TbClock className="inline mr-2 text-indigo-500" /> },
    ],
  };

  return (
    <section
      id="skills"
      className="w-full min-h-[400px] px-6 pt-8 mx-auto space-y-12 md:px-12 scroll-mt-16"
    >
     <h2 className="mb-12 text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
  Skills
</h2>



      {/* Responsive Grid with 2 Columns */}
      <div className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-2">
        {/* Languages */}
        <div className="p-6 rounded-lg shadow-md bg-slate-100 dark:bg-slate-800">
          <h3 className="flex items-center gap-2 mb-4 text-xl font-semibold">
            <FaJsSquare className="text-yellow-400" /> Languages
          </h3>
          {skills.languages.map(({ skill, level, icon }) => (
            <SkillBar key={skill} skill={skill} level={level} icon={icon} />
          ))}
        </div>

        {/* Frameworks */}
        <div className="p-6 rounded-lg shadow-md bg-slate-100 dark:bg-slate-800">
          <h3 className="flex items-center gap-2 mb-4 text-xl font-semibold">
            <FaReact className="text-blue-500" /> Frameworks
          </h3>
          {skills.frameworks.map(({ skill, level, icon }) => (
            <SkillBar key={skill} skill={skill} level={level} icon={icon} />
          ))}
        </div>

        {/* Tools */}
        <div className="p-6 rounded-lg shadow-md bg-slate-100 dark:bg-slate-800">
          <h3 className="flex items-center gap-2 mb-4 text-xl font-semibold">
            🛠️ Tools
          </h3>
          {skills.tools.map(({ skill, level, icon }) => (
            <SkillBar key={skill} skill={skill} level={level} icon={icon} />
          ))}
        </div>

        {/* Soft Skills */}
        <div className="p-6 rounded-lg shadow-md bg-slate-100 dark:bg-slate-800">
          <h3 className="flex items-center gap-2 mb-4 text-xl font-semibold">
            <TbUsers className="text-blue-500" /> Soft Skills
          </h3>
          {skills.softSkills.map(({ skill, level, icon }) => (
            <SkillBar key={skill} skill={skill} level={level} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
};