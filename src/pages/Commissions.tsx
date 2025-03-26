import { motion } from 'framer-motion';
import { FaPalette, FaClipboardList, FaMoneyBillWave } from 'react-icons/fa';
import { artCollection } from '../data/artCollection';

const Commissions = () => {
  return (
    <div className="commissions-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src={artCollection?.find(art => art.id === 6)?.imageUrl} 
            alt="Hero Background" 
          />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <motion.h1 
            className="hero-title text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Custom Art Commissions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-subtitle"
          >
            Bring your vision to life with a personalized artwork
          </motion.p>
        </div>
      </section>

      {/* What is a Commission Section */}
      <section className="section bg-light">
        <div className="container" style={{paddingTop: '2rem'}}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">What is a Commission?</h2>
            <div className="commission-info">
              <div className="commission-info-icon">
                <FaPalette size={40} />
              </div>
              <div className="commission-info-content">
                <p>
                  A commission is a custom artwork created specifically for you, typically based on photographs you would provide for reference. When you commission a piece, you're initiating a collaborative 
                  process where your input helps shape the final artwork.
                </p>
                <p className="mt-4">
                  Each commissioned piece is unique and tailored to your reference photos/specifications. Whether it's a 
                  landscape or animal, the result is a one-of-a-kind artwork that holds special meaning and 
                  significance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commission Process Section */}
      {/* <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">The Commission Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="process-step-number">1</div>
                <h3 className="process-step-title">Initial Consultation</h3>
                <p className="process-step-description">
                  We begin with a detailed discussion about your vision, preferences, and requirements. 
                  This can take place via email, phone, or in person.
                </p>
              </div>
              
              <div className="process-step">
                <div className="process-step-number">2</div>
                <h3 className="process-step-title">Concept and Proposal</h3>
                <p className="process-step-description">
                  Based on our consultation, I'll develop a concept and provide a detailed proposal 
                  including dimensions, medium, timeline, and pricing.
                </p>
              </div>
              
              <div className="process-step">
                <div className="process-step-number">3</div>
                <h3 className="process-step-title">Sketches and Approval</h3>
                <p className="process-step-description">
                  Once the proposal is approved, I'll create preliminary sketches for your review and 
                  feedback before proceeding to the final artwork.
                </p>
              </div>
              
              <div className="process-step">
                <div className="process-step-number">4</div>
                <h3 className="process-step-title">Creation</h3>
                <p className="process-step-description">
                  With your approval of the sketches, I'll begin creating your commissioned artwork, 
                  providing progress updates throughout the process.
                </p>
              </div>
              
              <div className="process-step">
                <div className="process-step-number">5</div>
                <h3 className="process-step-title">Delivery</h3>
                <p className="process-step-description">
                  Upon completion, your artwork will be carefully packaged and delivered to your 
                  specified location, ready to be displayed and enjoyed.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Commission Types Section */}
      <section className="section bg-light">
        <div className="container" style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Available Commission Types</h2>
            <div className="commission-info">
              <div className="commission-info-icon">
                <FaClipboardList size={40} />
              </div>
              <div className="commission-info-content">
                <p>
                  I offer commissions for the following types of artwork, taking roughly 6-8 weeks to complete (depending on the complexity and size of the commission):
                </p>
                <ul className="commission-types-list">
                  <li>
                    <strong>Landscape Oil Paintings</strong> - Capture your favorite location, vacation spot, 
                    or natural scene on standard canvas, canvas panel, or gallery wrapped canvas.
                  </li>
                  <li>
                    <strong>Animal Oil Paintings</strong> - Depict a specific animal or a group of animals on standard canvas, canvas panel, or gallery wrapped canvas.
                  </li>
                </ul>
                <p className="mt-4">
                  I'm also open to discussing other subjects not listed here.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Pricing Guidelines</h2>
            <div className="commission-info">
              <div className="commission-info-icon">
                <FaMoneyBillWave size={40} />
              </div>
              <div className="commission-info-content">
                <p>
                  Commission pricing varies based on several factors including size, complexity, medium, 
                  and timeline. In general, custom commissions are approximately $3.00 per square inch. 
                </p>
                <p>
                - Framing is not included, but can be discussed and provided for an additional cost. 
                </p>
                <p>
                  - Shipping is calculated separately.
                </p>
                <p>
                  Accepted forms of payment are: Check/Cash, Venmo, Zelle
                </p>
                
                <p className="pricing-note mt-6">
                  <strong>Note:</strong> These are general guidelines. The final price will be determined 
                  during our consultation based on your specific requirements. A 50% deposit is required 
                  to begin work, with the balance due upon completion before delivery.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section">
        <div className="container text-center" style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Ready to Commission Your Artwork?</h2>
            <p className="mb-8">
              Let's discuss your vision and create something meaningful together.
            </p>
            <a href="/contact" className="btn btn-light btn-lg">
              Start the Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Commissions;
