export const SkillBar = ({ skill, level, icon }) => {
  return (
    <div className="max-w-md mb-2"> {/* limits width */}
      <div className="flex justify-between mb-0.5 text-sm font-medium leading-tight">
        <span className="flex items-center gap-1 truncate">
          {icon} {skill}
        </span>
        <span>{level}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-md dark:bg-gray-700">
        <div
          className="h-2 transition-all duration-1000 bg-blue-500 rounded-md"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};
