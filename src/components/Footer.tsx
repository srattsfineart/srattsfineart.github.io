import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ backgroundColor: '#f5f5f5', padding: '3rem 0' }}>
      <div className="container">
        <div className="grid grid-cols-1 grid-cols-3" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          {/* Logo and Description */}
          <div>
            <h3 className="font-serif" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>S. Ratts Fine Art</h3>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              Showcasing exceptional contemporary artworks with a focus on unique perspectives and artistic excellence.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#666', transition: 'color 0.3s ease' }}>
                <FaInstagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#666', transition: 'color 0.3s ease' }}>
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#666', transition: 'color 0.3s ease' }}>
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 500, marginBottom: '1rem' }}>Quick Links</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <Link to="/" style={{ color: '#666', transition: 'color 0.3s ease' }}>Home</Link>
              </li>
              <li>
                <Link to="/gallery" style={{ color: '#666', transition: 'color 0.3s ease' }}>Gallery</Link>
              </li>
              <li>
                <Link to="/about" style={{ color: '#666', transition: 'color 0.3s ease' }}>About</Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: '#666', transition: 'color 0.3s ease' }}>Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 500, marginBottom: '1rem' }}>Contact</h3>
            <address style={{ fontStyle: 'normal', color: '#666' }}>
              <p style={{ marginBottom: '0.5rem' }}>123 Gallery Street</p>
              <p style={{ marginBottom: '0.5rem' }}>Art District</p>
              <p style={{ marginBottom: '0.5rem' }}>New York, NY 10001</p>
              <p style={{ marginBottom: '0.5rem' }}>Email: info@srattsfineart.com</p>
              <p>Phone: (212) 555-1234</p>
            </address>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid #ddd', marginTop: '2rem', paddingTop: '2rem', textAlign: 'center', color: '#666' }}>
          <p>&copy; {currentYear} S. Ratts Fine Art. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
