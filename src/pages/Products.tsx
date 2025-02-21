import { ShoppingBag, ShoppingCart, Package, Stethoscope, Shirt, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProductCategory {
  icon: React.ComponentType<{ className?: string }>;
  emoji: string;
  title: string;
  description: string;
  image: string;
}

interface OrderFormData {
  name: string;
  address: string;
  phone: string;
  microns: string; // New field for thickness
  quantity: string; // New field for quantity
}

const productCategories: ProductCategory[] = [
  {
    icon: ShoppingBag,
    emoji: "1️⃣",
    title: "Biodegradable Carry Bags",
    description: "Perfect for shopping, retail, and industrial use. Decomposes fully in months, leaving no microplastics.",
    image: "IMG/img3.avif",
  },
  {
    icon: ShoppingCart,
    emoji: "2️⃣",
    title: "Grocery Bags",
    description: "Durable, leak-proof bags that break down in 120 days. Ideal for supermarkets and homes.",
    image: "IMG/images.jpeg",
  },
  {
    icon: Package,
    emoji: "3️⃣",
    title: "Compostable Films",
    description: "Versatile films (30-120 microns) for packaging, agriculture, and catering.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
  },
  {
    icon: Stethoscope,
    emoji: "4️⃣",
    title: "Medical Waste Bags",
    description: "Safe, eco-friendly disposal for hospitals and clinics.",
    image: "IMG/img4.jpeg",
  },
  {
    icon: Shirt,
    emoji: "5️⃣",
    title: "Biodegradable Aprons",
    description: "Lightweight, compostable aprons for hospitality and healthcare.",
    image: "IMG/download.jpeg",
  },
];

const Products: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    address: "",
    phone: "",
    microns: "",
    quantity: "",
  });

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardFade = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const modalFade = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const handleBuyClick = (productTitle: string) => {
    setSelectedProduct(productTitle);
    setIsModalOpen(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProduct) return;

    // Construct WhatsApp message
    const message = `New Order for ${selectedProduct}\n\nName: ${formData.name}\nAddress: ${formData.address}\nPhone: ${formData.phone}\nMicrons: ${formData.microns || "Not specified"}\nQuantity: ${formData.quantity || "Not specified"}`;
    const whatsappNumber = "+918333876725";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");

    // Reset form and close modal
    setFormData({ name: "", address: "", phone: "", microns: "", quantity: "" });
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-green-50 to-white">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-700 mb-6 text-center tracking-tight">
          Our Eco-Friendly Product Line
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-16 leading-relaxed">
          Discover biodegradable and compostable products designed to replace single-use plastics. Durable, sustainable, and ready to make a difference—shop now!
        </p>
      </motion.div>

      {/* Product Categories */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {productCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardFade}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                {/* Product Image */}
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url("${category.image}")` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Product Info */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-600/10 p-3 rounded-full flex-shrink-0">
                    <Icon className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{category.emoji}</span>
                      <h3 className="text-xl font-semibold text-green-700">{category.title}</h3>
                    </div>
                    <p className="text-gray-600 text-base mb-4">{category.description}</p>
                    <button
                      onClick={() => handleBuyClick(category.title)}
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300"
                    >
                      Buy Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Order Form Modal */}
      {isModalOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalFade}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full mx-4">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">
              Order {selectedProduct}
            </h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleFormChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="microns" className="block text-sm font-medium text-gray-700 mb-2">
                  Microns (if applicable)
                </label>
                <input
                  type="text"
                  id="microns"
                  name="microns"
                  value={formData.microns}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  placeholder="e.g., 30-120 for films"
                />
              </div>
              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300"
                  min="1"
                  required
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
                >
                  Send to WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-full font-semibold transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      )}

      {/* Materials Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-gradient-to-r from-green-600 to-teal-600 py-20 text-white"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-10 text-center tracking-tight">
            Crafted with Care: Our Materials
          </h2>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-6 text-lg">
              {[
                "Cornstarch-based & organic compounds",
                "Non-toxic, BPA-free, and home-compostable",
                "Certified biodegradable in standard composting conditions",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <span className="text-green-200 flex-shrink-0">🌱</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="container mx-auto px-6 py-20 text-center"
      >
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Enquire Now
          <ArrowRight className="w-6 h-6" />
        </Link>
        <p className="mt-6 text-xl text-gray-700">
          🌍 Ready to switch to sustainable alternatives? Let’s talk!
        </p>
      </motion.div>
    </div>
  );
};

export default Products;