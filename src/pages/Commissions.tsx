import { motion } from 'framer-motion';
import { FaPalette, FaClipboardList, FaMoneyBillWave } from 'react-icons/fa';

const Commissions = () => {
  return (
    <div className="commissions-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <motion.h1 
            className="hero-title text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Custom Art Commissions
          </motion.h1>
          <motion.p 
            className="hero-subtitle text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Bring your vision to life with a personalized artwork
          </motion.p>
        </div>
      </section>

      {/* What is a Commission Section */}
      <section className="section bg-light">
        <div className="container">
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
                  A commission is a custom artwork created specifically for you based on your preferences, 
                  ideas, and vision. When you commission a piece, you're initiating a collaborative 
                  process where your input helps shape the final artwork.
                </p>
                <p className="mt-4">
                  Each commissioned piece is unique and tailored to your specifications, whether it's a 
                  portrait, landscape, abstract composition, or any other subject matter that resonates 
                  with you. The result is a one-of-a-kind artwork that holds special meaning and 
                  significance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Commission Process Section */}
      <section className="section">
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
      </section>

      {/* Commission Types Section */}
      <section className="section bg-light">
        <div className="container">
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
                  I offer a variety of commission types to suit different preferences and needs:
                </p>
                <ul className="commission-types-list">
                  <li>
                    <strong>Landscape Paintings</strong> - Capture your favorite location, vacation spot, 
                    or natural scene in oil or acrylic.
                  </li>
                  <li>
                    <strong>Portrait Art</strong> - Commemorate a loved one, pet, or family with a 
                    thoughtfully crafted portrait.
                  </li>
                  <li>
                    <strong>Abstract Compositions</strong> - Express emotions, concepts, or aesthetics 
                    through non-representational art.
                  </li>
                  <li>
                    <strong>Still Life</strong> - Immortalize meaningful objects or arrangements with 
                    detailed still life paintings.
                  </li>
                  <li>
                    <strong>Mixed Media Works</strong> - Combine various techniques and materials for a 
                    unique artistic expression.
                  </li>
                </ul>
                <p className="mt-4">
                  Each commission type can be customized to your specific preferences regarding size, 
                  color palette, style, and more. I'm also open to discussing other subjects or approaches 
                  not listed here.
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
                  and timeline. Below are general pricing guidelines to help you understand the investment:
                </p>
                
                <div className="pricing-table">
                  <div className="pricing-category">
                    <h3>Small Works (up to 16" x 20")</h3>
                    <p className="pricing-range">$500 - $1,200</p>
                    <p className="pricing-description">
                      Ideal for intimate spaces or as special gifts. These smaller works still receive the 
                      same attention to detail and quality as larger pieces.
                    </p>
                  </div>
                  
                  <div className="pricing-category">
                    <h3>Medium Works (20" x 24" to 30" x 40")</h3>
                    <p className="pricing-range">$1,200 - $3,000</p>
                    <p className="pricing-description">
                      Perfect for statement pieces in homes or offices. These works balance presence with 
                      practicality for most living spaces.
                    </p>
                  </div>
                  
                  <div className="pricing-category">
                    <h3>Large Works (36" x 48" and larger)</h3>
                    <p className="pricing-range">$3,000 - $7,500+</p>
                    <p className="pricing-description">
                      Commanding pieces for larger spaces or collections. These substantial works make a 
                      significant visual impact and often become focal points.
                    </p>
                  </div>
                </div>
                
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
      <section className="section bg-primary text-white">
        <div className="container text-center">
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
