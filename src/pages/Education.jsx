import { FaUniversity,  FaGraduationCap, FaFileAlt, FaBook } from 'react-icons/fa';

export const Education = () => {
  const education = [
    {
      degree: 'National Diploma in Information Technology',
      institute: 'Institute of Technology, University of Moratuwa',
      year: '2024 - Present',
      icon: <FaUniversity className="text-4xl text-red-500" />,
    },
    {
      degree: 'A/L - Physical Science',
      institute: 'H/ Debarawewa Central College',
      year: '2021(2022)',
      grade: 'Result: BBC\'s',
      
      icon: <FaGraduationCap className="text-4xl text-green-500" />,
    },
    {
      degree: 'O/L Examination',
      institute: 'H/ Debarawewa Central College',
      year: '2018',
      grade: 'Result: 9A\'s',
      
      icon: <FaBook className="text-4xl text-blue-500" />,
    },
    {
      degree: 'Secondary Education',
      institute: 'H/ Debarawewa Central College',
      year: '2014 - 2021',
      icon: <FaBook className="text-4xl text-yellow-500" />,
    },
  ];

  return (
    <section
      id="education"
      className="w-full min-h-screen px-6 pt-10 pb-20 mx-auto text-center md:px-12 scroll-mt-32"
    >
      <h2 className="mb-12 text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
        Education
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {education.map((edu) => (
          <div
            key={edu.degree}
            className="flex flex-col justify-between h-full p-6 transition-transform transform backdrop-blur-lg bg-white/60 dark:bg-slate-800/40 border border-black/10 dark:border-white/20 rounded-xl hover:scale-[1.015] hover:shadow-2xl"
          >
            <div className="flex flex-col items-center mb-4 space-y-2">
              {edu.icon}
              <h3 className="text-xl font-semibold text-red-400">{edu.degree}</h3>
              <p className="text-base text-gray-400">{edu.institute}</p>
              <span className="text-sm text-gray-500">{edu.year}</span>
              <span className="text-sm text-red-400">{edu.grade}</span>
            </div>

            {edu.pdf && (
              <a
                href={edu.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 mt-4 text-sm font-medium text-red-400 transition duration-300 border border-red-400 rounded hover:bg-red-500 hover:text-white"
              >
                <FaFileAlt /> View Result Sheet
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
