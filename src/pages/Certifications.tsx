import { Award, ShieldCheck, Check } from "lucide-react";
import { motion } from "framer-motion";

interface Certification {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const certifications: Certification[] = [
  {
    icon: ShieldCheck,
    title: "FDA Approved",
    description: "Ensuring safety for food-related applications.",
  },
  {
    icon: Award,
    title: "Compostability Certified",
    description: "Meets industry standards for biodegradation.",
  },
  {
    icon: Check,
    title: "Non-Toxic Certified",
    description: "Free from harmful chemicals and safe for the environment.",
  },
];

const Certifications: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardFade = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
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
          Certified for Sustainability
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-16 leading-relaxed"
        >
          Our commitment to eco-friendly solutions is validated by globally recognized certifications.
        </motion.p>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-20">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardFade}
                transition={{ delay: index * 0.2 }}
                className="bg-gradient-to-br from-green-100 to-teal-100 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600/20 mb-6 transform transition-transform duration-300 hover:scale-110">
                  <Icon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-2xl font-semibold text-green-700 mb-3">{cert.title}</h3>
                <p className="text-gray-600 text-base">{cert.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Testing Statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-r from-green-600 to-teal-600 p-8 rounded-xl max-w-3xl mx-auto text-center text-white shadow-lg"
        >
          <p className="text-lg leading-relaxed">
            <span className="inline-block text-2xl mr-2">🌿</span> Each product undergoes rigorous testing to ensure minimal environmental impact and maximum sustainability.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Certifications;