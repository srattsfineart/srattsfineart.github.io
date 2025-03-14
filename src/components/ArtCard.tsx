import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArtPiece } from '../data/artCollection';

interface ArtCardProps {
  art: ArtPiece;
  onClick: (art: ArtPiece) => void;
}

const ArtCard = ({ art, onClick }: ArtCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="art-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(art)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="art-card-image">
        <img
          src={art.imageUrl}
          alt={art.title}
        />
      </div>
      
      <motion.div 
        className="art-card-content"
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <h3 className="art-card-title">{art.title}</h3>
        <p className="art-card-info">{art.year} | {art.medium}</p>
      </motion.div>
    </motion.div>
  );
};

export default ArtCard;
