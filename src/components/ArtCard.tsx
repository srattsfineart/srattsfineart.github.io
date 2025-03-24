import { motion } from 'framer-motion';
import { ArtPiece } from '../data/artCollection';

interface ArtCardProps {
  art: ArtPiece;
  onClick: (art: ArtPiece) => void;
}

const ArtCard = ({ art, onClick }: ArtCardProps) => {
  return (
    <motion.div
      className="art-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(art)}
    >
      <div className="art-card-image">
        <img
          src={art.imageUrl}
          alt={art.title}
        />
        {art.sold && (
          <div className="sold-indicator" title="Sold">
            <span className="sold-dot"></span>
          </div>
        )}
      </div>
      
      <div className="art-card-content">
        <h3 className="art-card-title">{art.title}</h3>
        <p className="art-card-info">{art.medium}</p>
      </div>
    </motion.div>
  );
};

export default ArtCard;
