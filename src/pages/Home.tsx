import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { artCollection } from '../data/artCollection';

const Home = () => {
  // Get 3 featured artworks
  const featuredArt = artCollection.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src={artCollection[4].imageUrl} 
            alt="Hero Background" 
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            S. Ratts Fine Art
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Curating exceptional contemporary artworks that inspire and provoke thought
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
              <h2 className="section-title">About S. Ratts Fine Art</h2>
              <p className="about-text">
                Founded with a passion for contemporary art, S. Ratts Fine Art has established itself as a premier destination for art enthusiasts and collectors alike.
              </p>
              <p className="about-text">
                Our gallery showcases works from both established and emerging artists, with a focus on pieces that challenge perspectives and evoke emotion.
              </p>
              <Link 
                to="/about" 
                className="about-link"
              >
                Learn More About Us
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="about-image"
            >
              <img 
                src={artCollection[5].imageUrl} 
                alt="Gallery Interior" 
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
