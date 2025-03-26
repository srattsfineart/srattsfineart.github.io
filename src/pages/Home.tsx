import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { artCollection } from '../data/artCollection';

const Home = () => {
  // Get 3 featured artworks
  const featuredArt = artCollection?.filter(art => art.id === 17 || art.id === 14 || art.id === 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src={artCollection?.find(art => art.id === 23)?.imageUrl} 
            alt="Hero Background" 
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 0 }}>
            {/* <img 
              src="/assets/images/SRatts Signature White.png" 
              alt="S. Ratts Signature" 
              style={{ marginBottom: '-1em', maxHeight: '250px' }}
            /> */}
            S. Ratts Fine Art
          </div>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Artwork focusing on incredible realism and attention to detail.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/gallery" 
              className="btn btn-primary"
            >
              Explore Gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Artworks</h2>
          
          <div className="featured-grid">
            {featuredArt.map((art) => (
              <motion.div 
                key={art.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="featured-card"
              >
                <div className="featured-card-image">
                  <img 
                    src={art.imageUrl} 
                    alt={art.title} 
                  />
                </div>
                
                <div className="featured-card-content">
                  <h3 className="featured-card-title">{art.title}</h3>
                  <p className="featured-card-info">{art.medium}</p>
                  <p className="featured-card-description">{art.description}</p>
                  <Link 
                    to={`/gallery?id=${art.id}`} 
                    className="featured-card-link"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/gallery" 
              className="btn btn-secondary"
            >
              View All Artworks
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="about-content"
            >
              <h2 className="section-title">About Shannon Ratts</h2>
              <p className="about-text">
                Taking the images of landscapes, animals, and the environment that surrounds her and creating vibrant, colorful, and expressive art with paint and brush.
              </p>
              <p className="about-text">
                The western lifestyle and landscapes are my most meaningful inspiration. Oil painting allows me to express on canvas the life, energy, and beauty of those subjects with color, light, and texture.
              </p>
              <a 
                href="/about"
                className="about-link"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo(0, 0);
                  setTimeout(() => {
                    window.location.href = '/about';
                  }, 10);
                }}
              >
                Learn More About the Artist
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="about-image"
            >
              <img 
                src="/assets/images/Shannon Pic 1.jpg" 
                alt="Shannon Ratts" 
                className="about-image"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
