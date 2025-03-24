import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-serif text-center mb-12"
        >
          About Shannon Ratts
        </motion.h1>
        
        {/* Content Grid - Story and Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Story Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-2xl font-serif mb-4">My Story</h2>
            <p className="text-gray-700 mb-4">
              S. Ratts Fine Art was established in 2023 by Shannon Ratts.
            </p>
            <p className="text-gray-700 mb-4">
              Shannon was born in 1966, developing a love for art at the early age of 14 when her grandmother signed her up for a week long oil painting workshop in the small mountain town of South Fork, CO.  
            </p>
            <p className="text-gray-700 mb-4">
            Discovering she had a natural talent, she pursued art through high school. High school, college, horse showing, career, and family took her away from art until 2017. At that time, she took up acrylic painting. By 2019, she had moved from Colorado to Arizona, and her desire to paint with oils sparked again. She began serious instruction with professional artist Mark White in early 2022, and continued until his passing in 2024.
            </p>
            <p className="text-gray-700 mb-4">
              Shannon's artwork focuses on the realism of her subjects. Shannon has a deep love for animals (horses especially) and everything western. Her many years as a Veterinary Technician and equestrian has enabled her to capture the anatomical accuracy of the animals she paints more realistically.
            </p>
            <p className="text-gray-700 mb-4">
              Shannon's work has been featured in numerous exhibitions in and around her area in Arizona, and has received numerous awards and recognition for her artwork.
            </p>
            <p className="text-gray-700 mb-4">
              Shannon currently volunteers as the Vice President of the Casa Grande Art Association, and is an active member of the Casa Grande Art Museum. This enables her to connect with other artists and art enthusiasts in her community.
            </p>
          </motion.div>
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 md:order-2 flex items-center justify-center"
          >
            <div className="rounded-lg overflow-hidden shadow-lg max-w-md">
              <img 
                src="/assets/images/Shannon Pic 2.jpg" 
                alt="Shannon Ratts" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
