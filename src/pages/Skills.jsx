import { SkillBar } from '../components/SkillBar';
import { FaHtml5, FaReact, FaJsSquare, FaJava, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiMysql } from 'react-icons/si';
import { GiPuzzle, GiPaintBrush, GiPortrait } from 'react-icons/gi';
import { TbUsers } from 'react-icons/tb';

export const Skills = () => {
  const skills = {
    frontend: [
      { skill: 'HTML', level: 85, icon: <FaHtml5 className="inline mr-2 text-orange-600" /> },
      { skill: 'React', level: 80, icon: <FaReact className="inline mr-2 text-blue-500" /> },
      { skill: 'JavaScript', level: 75, icon: <FaJsSquare className="inline mr-2 text-yellow-400" /> },
      { skill: 'Tailwind CSS', level: 75, icon: <SiTailwindcss className="inline mr-2 text-teal-400" /> },
    ],
    backend: [
      { skill: 'Java', level: 60, icon: <FaJava className="inline mr-2 text-red-600" /> },
      { skill: 'Node.js', level: 70, icon: <FaNodeJs className="inline mr-2 text-green-600" /> },
      { skill: 'MySQL', level: 60, icon: <SiMysql className="inline mr-2 text-blue-700" /> },
      { skill: 'Python', level: 50, icon: <FaPython className="inline mr-2 text-yellow-600" /> },
    ],
    others: [
      { skill: 'Problem Solving', level: 90, icon: <GiPuzzle className="inline mr-2 text-purple-600" /> },
      { skill: 'Team Work', level: 85, icon: <TbUsers className="inline mr-2 text-blue-500" /> },
      { skill: 'Graphic Design', level: 75, icon: <GiPaintBrush className="inline mr-2 text-pink-500" /> },
      { skill: 'Portrait Design', level: 85, icon: <GiPortrait className="inline mr-2 text-red-400" /> },
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
        {/* Frontend */}
        <div className="p-6 rounded-lg shadow-md bg-slate-100 dark:bg-slate-800">
          <h3 className="flex items-center gap-2 mb-4 text-xl font-semibold">
            <FaReact className="text-blue-500" /> Frontend
          </h3>
          {skills.frontend.map(({ skill, level, icon }) => (
            <SkillBar key={skill} skill={skill} level={level} icon={icon} />
          ))}
        </div>

        {/* Backend */}
        <div className="p-6 rounded-lg shadow-md bg-slate-100 dark:bg-slate-800">
          <h3 className="flex items-center gap-2 mb-4 text-xl font-semibold">
            <FaNodeJs className="text-green-600" /> Backend
          </h3>
          {skills.backend.map(({ skill, level, icon }) => (
            <SkillBar key={skill} skill={skill} level={level} icon={icon} />
          ))}
        </div>

        {/* Other Skills */}
        <div className="p-6 rounded-lg shadow-md bg-slate-100 dark:bg-slate-800 md:col-span-2">
          <h3 className="flex items-center gap-2 mb-4 text-xl font-semibold">
            ⚙️ Other Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            {skills.others.map(({ skill, level, icon }) => (
              <SkillBar key={skill} skill={skill} level={level} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
