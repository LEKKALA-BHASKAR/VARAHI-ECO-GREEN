
const galleryItems = [
  {
    section: "Production Process",
    images: [
      {
        url: "IMG/img1.jpg",
        caption: "Innovating for a cleaner future.",
      },
      {
        url: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80",
        caption: "Sustainable solutions in action.",
      },
    ],
  },
  {
    section: "Products in Use",
    images: [
      {
        url: "IMG/img2.jpg",
        caption: "From nature, back to nature in 120 days.",
      },
      {
        url: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&q=80",
        caption: "Sustainable solutions in action.",
      },
    ],
  },
  {
    section: "Decomposition Stages",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
        caption: "From nature, back to nature in 120 days.",
      },
      {
        url: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80",
        caption: "Innovating for a cleaner future.",
      },
    ],
  },
];

const Gallery = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-navbar-text mb-4 text-center">
          Sustainability in Action
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-16">
          Explore the lifecycle of our biodegradable products, from production to decomposition.
        </p>

        {/* Gallery Sections */}
        <div className="space-y-16">
          {galleryItems.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-navbar-text mb-8">
                ✅ {section.section}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.images.map((image, imgIndex) => (
                  <div 
                    key={imgIndex}
                    className="group relative overflow-hidden rounded-lg aspect-video hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <p className="text-white text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
