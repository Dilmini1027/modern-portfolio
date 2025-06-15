export const Resume = () => {
  return (
    <section id="resume" className="text-center py-10">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      <a
        href="/resume.pdf"
        download
        className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
      >
        Download Resume
      </a>
    </section>
  );
};
