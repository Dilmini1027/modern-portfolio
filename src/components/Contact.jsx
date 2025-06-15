export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center max-w-4xl gap-12 mx-auto text-center md:flex-row md:text-left"
    >
      {/* Contact Information Section */}
      <div className="w-full space-y-4 md:w-1/2">
        <h2 className="mb-6 text-3xl font-bold">Contact Me</h2>
        <p className="text-lg">Feel free to reach out!</p>
        <div className="space-y-2 text-gray-700 dark:text-gray-300">
          <p><strong>Name:</strong> R.M.Dilmini Syawindi Senevirathne</p>
          <p><strong>Phone:</strong> +94 710170601</p>
          <p><strong>Email:</strong> dilminishyavindi@gmail.com</p>
          <p><strong>Address:</strong> Tissamaharama, Southern Province, Sri Lanka</p>
        </div>
      </div>

      {/* Google Form Embed Section */}
      <div className="w-full overflow-hidden rounded-lg shadow-md md:w-1/2">
        <iframe
          title="Google Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSfhn2hIxLpu4FHz8J6BVgl8GB4BPRx7lA3ScWoO89Pgayps7Q/viewform?embedded=true"
          width="100%"
          height="600"
          className="dark:bg-gray-900"
          allowFullScreen
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
};
