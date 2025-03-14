import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { ArtPiece } from '../data/artCollection';

interface ArtModalProps {
  art: ArtPiece | null;
  isOpen: boolean;
  onClose: () => void;
}

const ArtModal = ({ art, isOpen, onClose }: ArtModalProps) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close modal on escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!art) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={onClose}
            >
              <FaTimes size={24} />
            </button>
            
            <div className="modal-body">
              <div className="modal-image">
                <img
                  src={art.imageUrl}
                  alt={art.title}
                />
              </div>
              
              <div className="modal-details">
                <h2 className="modal-title font-serif">{art.title}</h2>
                <p className="modal-info">{art.year}</p>
                
                <div className="modal-description">
                  <p>{art.description}</p>
                </div>
                
                <div className="modal-specs">
                  <p><span className="font-medium">Medium:</span> {art.medium}</p>
                  <p><span className="font-medium">Dimensions:</span> {art.dimensions}</p>
                  <p><span className="font-medium">Category:</span> {art.category}</p>
                </div>
                
                <button className="btn mt-6">
                  Inquire About This Piece
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ArtModal;
