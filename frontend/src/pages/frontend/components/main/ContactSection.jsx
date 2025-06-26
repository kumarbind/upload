import React from "react";

const ContactSection = () => {
  return (
    <div id="contact" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input className="w-full border p-3 rounded dark:bg-gray-800 dark:border-gray-700" type="text" placeholder="Name" required />
        <input className="w-full border p-3 rounded dark:bg-gray-800 dark:border-gray-700" type="email" placeholder="Email" required />
        <textarea className="w-full border p-3 rounded dark:bg-gray-800 dark:border-gray-700" placeholder="Message" rows="5" required></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactSection;