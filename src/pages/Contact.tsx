import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    // EmailJS service configuration
    // TODO: Replace these with your actual EmailJS values from your account
    const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID from Step 2
    const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID from Step 3
    const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key from Step 4
    
    // Prepare the template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'shannon.ratts@gmail.com'
    };
    
    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setIsSubmitted(true);
        setIsLoading(false);
        
        // Reset form after submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          setIsSubmitted(false);
        }, 5000);
      })
      .catch((err) => {
        console.error('Email sending failed:', err);
        setError('Failed to send your message. Please try again or contact directly via email.');
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-serif text-center mb-12"
        >
          Contact the Artist
        </motion.h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-serif mb-6">Get in Touch</h2>
            <p className="text-gray-700 mb-8">
              I'd love to hear from you. Whether you're interested in a specific artwork, 
              have questions about my events, want to discuss a potential commission, or have any other questions, 
              please don't hesitate to reach out.
            </p>
            
            <div className="space-y-6">
              <ContactInfo 
                icon={<FaPhone />} 
                title="Call or Text" 
                details={["(303) 912-2986"]} 
              />
              
              <ContactInfo 
                icon={<FaEnvelope />} 
                title="Email" 
                details={["shannon.ratts@gmail.com"]} 
              />
              
              <ContactInfo 
                icon={<FaClock />} 
                title="Studio Hours" 
                details={[
                  "Monday - Friday: 8am - 5pm",
                ]} 
              />
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-serif mb-6">Send a Message</h2>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ 
                  backgroundColor: '#d1fae5', 
                  borderRadius: '8px',
                  padding: '1.5rem',
                  marginBottom: '1.5rem',
                  border: '1px solid #10b981',
                  boxShadow: '0 4px 6px rgba(16, 185, 129, 0.1)'
                }}
              >
                <h3 className="text-lg font-medium mb-2 text-green-800">Thank You!</h3>
                <p className="text-green-700">Your message has been sent successfully to Shannon. She'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div 
                    style={{ 
                      backgroundColor: '#fee2e2', 
                      borderRadius: '8px',
                      padding: '1rem',
                      marginBottom: '1rem',
                      border: '1px solid #ef4444',
                      boxShadow: '0 4px 6px rgba(239, 68, 68, 0.1)'
                    }}
                  >
                    <p className="text-red-700 font-medium">{error}</p>
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  >
                    <option value="">Please select a subject</option>
                    <option value="Artwork Inquiry">Artwork Inquiry</option>
                    <option value="Event Information">Event Information</option>
                    <option value="Commissions">Commissions</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className={`filter-btn active ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const ContactInfo = ({ icon, title, details }: ContactInfoProps) => {
  return (
    <div className="flex">
      <div className="text-black mr-4 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-lg mb-1">{title}</h3>
        <div className="text-gray-600">
          {details.map((detail, index) => (
            <p key={index}>{detail}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
