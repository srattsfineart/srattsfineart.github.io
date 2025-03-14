import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-serif text-center mb-12"
        >
          About S. Ratts Fine Art
        </motion.h1>
        
        {/* Gallery Story */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-serif mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              S. Ratts Fine Art was established in 2015 by renowned art curator Sarah Ratts, with a vision to create a space where contemporary art could be experienced in its purest form. What began as a small gallery in the heart of the art district has grown into a respected institution known for its discerning eye and commitment to artistic excellence.
            </p>
            <p className="text-gray-700 mb-4">
              Our gallery specializes in contemporary paintings, sculptures, and mixed media works that challenge conventions and inspire dialogue. We represent a diverse roster of established and emerging artists whose work demonstrates exceptional technical skill, conceptual depth, and innovative approaches to their medium.
            </p>
            <p className="text-gray-700">
              At S. Ratts Fine Art, we believe that art has the power to transform perspectives and enrich lives. Our mission is to make exceptional contemporary art accessible to collectors, enthusiasts, and the wider community through thoughtfully curated exhibitions, educational programs, and a welcoming gallery environment.
            </p>
          </motion.div>
        </div>
        
        {/* Gallery Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="aspect-w-16 aspect-h-7 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/src/assets/images/landscape2.jpg" 
              alt="Gallery Interior" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        
        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-serif mb-8 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember 
              name="Sarah Ratts" 
              title="Founder & Director" 
              image="/src/assets/images/portrait1.jpg"
              bio="With over 15 years of experience in the art world, Sarah brings her passion for contemporary art and keen curatorial vision to the gallery."
            />
            
            <TeamMember 
              name="Michael Chen" 
              title="Gallery Manager" 
              image="/src/assets/images/abstract1.jpg"
              bio="Michael oversees the day-to-day operations of the gallery and works closely with artists to develop and present their exhibitions."
            />
            
            <TeamMember 
              name="Olivia Winters" 
              title="Art Consultant" 
              image="/src/assets/images/portrait2.jpg"
              bio="Olivia helps collectors build meaningful art collections, offering expert guidance on acquisitions and collection management."
            />
          </div>
        </motion.div>
        
        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="max-w-3xl mx-auto mt-16"
        >
          <h2 className="text-2xl font-serif mb-8 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ValueCard 
              title="Artistic Excellence" 
              description="We are committed to presenting works of exceptional quality that demonstrate technical mastery, conceptual depth, and innovative approaches."
            />
            
            <ValueCard 
              title="Integrity" 
              description="We operate with transparency and honesty in all our dealings with artists, collectors, and the public."
            />
            
            <ValueCard 
              title="Inclusivity" 
              description="We strive to create a welcoming environment where diverse voices and perspectives are celebrated."
            />
            
            <ValueCard 
              title="Education" 
              description="We believe in the importance of art education and offer programs to enhance understanding and appreciation of contemporary art."
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  title: string;
  image: string;
  bio: string;
}

const TeamMember = ({ name, title, image, bio }: TeamMemberProps) => {
  return (
    <div className="text-center">
      <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-medium mb-1">{name}</h3>
      <p className="text-gray-600 mb-3">{title}</p>
      <p className="text-gray-700 text-sm">{bio}</p>
    </div>
  );
};

interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard = ({ title, description }: ValueCardProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default About;
