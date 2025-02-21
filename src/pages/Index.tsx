import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index: React.FC = () => {
  // Animation variants
  const heroFade = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const statFade = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/50 to-teal-900/70" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroFade}
          className="relative container mx-auto px-6 text-center text-white z-10"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight drop-shadow-lg"
          >
            Sustainable Living, <br /> From Nature to Nature
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl md:text-3xl mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Eco-friendly, biodegradable products designed to protect our planet.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Our Products
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={heroFade}
            className="max-w-4xl mx-auto text-center space-y-10"
          >
            <h2 className="text-4xl font-bold text-green-700">Our Commitment</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Plastic waste is choking our oceans, harming wildlife, and polluting ecosystems. At VARAHI ECO GREEN, we’re fighting back with 100% biodegradable, compostable products that break down naturally, returning to the earth without a trace.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              We envision a world where sustainability isn’t a choice—it’s the norm. Our mission is to empower people and businesses to embrace a zero-waste future, one eco-friendly product at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Environmental Impact Stats */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={heroFade}
            className="text-4xl font-bold text-center mb-12 tracking-tight"
          >
            The Stakes Are High
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              { value: "70+", label: "Trillion tons of plastic in oceans (2023)" },
              { value: "8M", label: "Pieces of plastic enter the sea daily" },
              { value: "90-120", label: "Days for our products to decompose" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={statFade}
                transition={{ delay: index * 0.2 }}
                className="text-center p-8 bg-white/10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl font-bold text-green-200 mb-4">{stat.value}</div>
                <p className="text-lg text-white">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={heroFade}
            className="text-center mt-12 text-xl font-semibold"
          >
            🌿 Join the Movement: Switch to compostable alternatives today!
          </motion.p>
        </div>
      </section>

      {/* Promises Section (New Addition) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={heroFade}
            className="text-4xl font-bold text-green-700 mb-12 text-center tracking-tight"
          >
            Nature’s Cycle, Our Promise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Sustainability at Heart",
                description: "We pledge to create products that return to nature, leaving no trace behind.",
              },
              {
                title: "Uncompromising Quality",
                description: "Every item is crafted with care to ensure durability and eco-friendliness.",
              },
              {
                title: "Innovation for Tomorrow",
                description: "We’re dedicated to pioneering solutions that redefine sustainable living.",
              },
            ].map((promise, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={statFade}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-gradient-to-br from-green-100 to-teal-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-semibold text-green-700 mb-3">{promise.title}</h3>
                <p className="text-gray-600">{promise.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Solutions Teaser */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={heroFade}
            className="text-4xl font-bold text-green-700 mb-12 tracking-tight"
          >
            Our Solutions
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              { title: "Carry Bags", img: "IMG/img3.avif" },
              { title: "Compostable Films", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
              { title: "Medical Waste Bags", img: "IMG/img4.jpeg" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={statFade}
                transition={{ delay: index * 0.2 }}
                className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="h-64 bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url("${item.img}")` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-semibold">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={heroFade}
            className="mt-12"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Discover More
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;