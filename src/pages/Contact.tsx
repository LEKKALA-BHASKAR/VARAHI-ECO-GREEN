import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp message
    const message = `New Contact Request\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    const whatsappNumber = "+918333876725";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-6">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-5xl font-extrabold text-green-700 mb-6 text-center tracking-tight"
        >
          Let's Make a Difference Together
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-16 leading-relaxed"
        >
          Have questions? Interested in sustainable solutions? Reach out to us today!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-10 bg-white p-8 rounded-xl shadow-md"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-7 h-7 text-green-600 flex-shrink-0 mt-1 transform transition-transform duration-300 hover:scale-110" />
              <p className="text-gray-700 text-lg">
              VARAHI ECO GREEN - NEAR PRAYAG SCHOOL ALAMPUR X ROAD  TELANGANA, INDIA  -509126
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-7 h-7 text-green-600 flex-shrink-0 transform transition-transform duration-300 hover:scale-110" />
              <div className="space-y-2">
                <p className="text-gray-700 text-lg">+91 83338 76725</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-7 h-7 text-green-600 flex-shrink-0 transform transition-transform duration-300 hover:scale-110" />
              <p className="text-gray-700 text-lg">earthgreenery57@gmail.com</p>
            </div>

            {/* Social Media */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-green-700 mb-4">🌍 Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Instagram, label: "Instagram" },
                ].map(({ Icon, label }) => (
                  <motion.a
                    key={label}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-green-600/10 text-green-700 hover:bg-green-600 hover:text-white transition-colors duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-xl shadow-md"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              Send via WhatsApp
              <Send className="w-5 h-5" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;