import { Check } from "lucide-react";
import { motion } from "framer-motion";

const AboutUs: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const statFade = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-green-50 to-white">
      {/* Vision & Mission Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto px-6 mb-20"
      >
        <h1 className="text-5xl font-extrabold text-green-700 mb-10 text-center tracking-tight">
          Our Vision & Mission
        </h1>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            At VARAHI ECO GREEN, we’re committed to crafting innovative, nature-inspired alternatives to plastic waste. Our mission is clear:
          </p>
          <ul className="space-y-6 text-left max-w-xl mx-auto">
            {[
              "Replace harmful plastics with plant-based, biodegradable materials.",
              "Reduce pollution by promoting sustainable choices.",
              "Support a healthier planet for future generations.",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <Check className="w-6 h-6 text-green-500 mt-1 transform transition-transform duration-300 hover:scale-125" />
                <span className="text-gray-700 text-lg">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-gradient-to-r from-green-600 to-teal-600 py-20 text-white"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center tracking-tight">
            Our Story
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-center leading-relaxed">
              Founded in 2020, VARAHI ECO GREEN was born from a passion to transform the packaging and consumer goods industry. Our team—environmentalists, engineers, and sustainability experts—unites to deliver eco-friendly solutions for a greener tomorrow.
            </p>
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-green-200 mb-2">Founder & CEO</h3>
              <p className="text-xl font-bold tracking-wide">Nayaki Pavan Kalyan</p>
              <p className="text-base italic text-green-100 mt-2">
                Leading the charge towards a sustainable future with vision and innovation.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Impact Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto px-6 py-20 bg-white"
      >
        <h2 className="text-4xl font-bold text-green-700 mb-12 text-center tracking-tight">
          Our Impact
        </h2>
        <p className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
          Every step we take reduces the burden on our planet. Here’s how we’re making a difference:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { value: "500K+", label: "Plastic Bags Replaced" },
            { value: "10K+", label: "Tons of CO2 Saved" },
            { value: "1M+", label: "Compostable Products Sold" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={statFade}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-6 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="text-4xl font-bold text-green-600 mb-2">{stat.value}</span>
              <span className="text-gray-700 text-center">{stat.label}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <motion.a
            href="/products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition-colors duration-300"
          >
            See How You Can Help
          </motion.a>
        </div>
      </motion.section>

      {/* What Makes Us Different Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto px-6 py-20"
      >
        <h2 className="text-4xl font-bold text-green-700 mb-12 text-center tracking-tight">
          What Makes Us Different?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Innovative Materials",
              description: "We harness renewable resources like cornstarch, organic polymers, and compostable compounds.",
            },
            {
              title: "Proven Sustainability",
              description: "Our products break down in just 90-120 days under home compost conditions.",
            },
            {
              title: "Industry Expertise",
              description: "Crafted by leaders in biodegradable tech and environmental science.",
            },
            {
              title: "Ethical & Eco-Friendly",
              description: "Non-toxic, BPA-free, and safe for both people and the planet.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-green-50"
            >
              <Check className="w-7 h-7 text-green-500 flex-shrink-0 mt-1 transform transition-transform duration-300 hover:scale-110" />
              <div>
                <h3 className="font-semibold text-green-700 text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600 text-base">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div
            className="aspect-video rounded-xl overflow-hidden bg-cover bg-center shadow-lg transform transition-transform duration-500 hover:scale-105"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80")',
            }}
          />
          <p className="text-center text-gray-600 mt-4 italic">Our team in action, inspired by nature.</p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutUs;