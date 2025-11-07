export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-4 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          I'd love to hear from you. Send me a message and I'll respond as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Information Section */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400">👤</span>
                </div>
                <div>
                  <p className="font-medium">R.M.Dilmini Syawindi Senevirathne</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400">📱</span>
                </div>
                <div>
                  <p className="font-medium">+94 710170601</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                  <span className="text-red-600 dark:text-red-400">📧</span>
                </div>
                <div>
                  <p className="font-medium">dilminishyavindi@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400">📍</span>
                </div>
                <div>
                  <p className="font-medium">No:03, Government Servant Land, New Town, Lunugamwehera</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Let's Connect!</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Feel free to reach out for collaborations, job opportunities, or just to say hello. 
              I'm always excited to work on new projects and meet fellow developers.
            </p>
          </div>
        </div>

        {/* Google Form Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-6 text-center">Send Message</h3>
          <div className="w-full">
            <iframe
              title="Contact Form"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfhn2hIxLpu4FHz8J6BVgl8GB4BPRx7lA3ScWoO89Pgayps7Q/viewform?embedded=true"
              width="100%"
              height="650"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="rounded-lg"
            >
              Loading form...
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
