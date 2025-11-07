export const ProjectCard = ({ title, description, link, image, category }) => {
  return (
    <div className="flex flex-col justify-between h-full p-4 bg-white rounded-xl shadow-lg dark:bg-slate-800 hover:shadow-xl transform hover:scale-[1.02] transition-all">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-48 mb-4 rounded-md"
      />

      {/* Category Badge */}
      <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-white bg-red-500 rounded-full">
        {category}
      </span>

      {/* Title & Description */}
      <div className="flex-grow">
        <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>

      {/* Button */}
      <div className="mt-4">
        <a
          href={link}
          className="inline-block px-4 py-2 text-sm text-white bg-red-500 rounded hover:bg-red-600"
        >
          View Project
        </a>
      </div>
    </div>
  );
};