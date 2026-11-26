
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">
              MyWebsite
            </h2>

            <p className="text-gray-400 leading-7">
              We build modern digital experiences to help
              businesses grow and succeed.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-3 text-gray-400">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>

            <ul className="space-y-3 text-gray-400">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>App Development</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

            <ul className="space-y-3 text-gray-400">
              <li>Email: hello@example.com</li>
              <li>Phone: +91 9876543210</li>
              <li>Location: India</li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
       
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    alert("Your message has been submitted!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-5 py-16">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-400 font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hello?
            Feel free to contact me. I'd love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">

          {/* Contact Information */}
          <div className="bg-blue-600 p-8 md:p-12">

            <h2 className="text-2xl font-bold mb-4">
              Contact Information
            </h2>

            <p className="text-blue-100 mb-10">
              Let's connect! You can reach me through the following details.
            </p>

            <div className="space-y-8">

              <div className="flex items-center gap-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Email</p>
                  <p className="font-medium">hello@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Phone</p>
                  <p className="font-medium">+91 9876543210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-blue-100 text-sm">Location</p>
                  <p className="font-medium">Rishikesh, Uttarakhand</p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-16">
              <p className="font-semibold mb-5">Connect With Me</p>

              <div className="flex gap-4">
                <a href="https://github.com" target="_blank" rel="noreferrer"
                  className="bg-blue-500 p-3 rounded-full hover:bg-white hover:text-blue-600 transition">
                  <Github size={20} />
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                  className="bg-blue-500 p-3 rounded-full hover:bg-white hover:text-blue-600 transition">
                  <Linkedin size={20} />
                </a>

                <a href="https://instagram.com" target="_blank" rel="noreferrer"
                  className="bg-blue-500 p-3 rounded-full hover:bg-white hover:text-blue-600 transition">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="p-8 md:p-12">

            <h2 className="text-2xl font-bold mb-8">
              Send Me a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 outline-none focus:border-blue-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition duration-300"
              >
                Send Message
                <Send size={18} />
              </button>

            </form>

          </div>
        </div>

        <p className="text-center text-gray-500 mt-10 text-sm">
          © 2026 All Rights Reserved.
        </p>

      </div>
    </div>
  );
};

export default Contact;


        </div>

      </div>
    </footer>
  );
};

export default Footer;
