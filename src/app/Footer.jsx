
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
            © {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms & Conditions</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
