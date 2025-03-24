import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { ArtPiece } from '../data/artCollection';
import { Link } from 'react-router-dom';

interface ArtModalProps {
  art: ArtPiece | null;
  artCollection: ArtPiece[];
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (art: ArtPiece) => void;
}

const ArtModal = ({ art, artCollection, isOpen, onClose, onNavigate }: ArtModalProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isInfoCollapsed, setIsInfoCollapsed] = useState<boolean>(false);

  // Find current art index when art changes
  useEffect(() => {
    if (art) {
      const index = artCollection.findIndex(item => item.id === art.id);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [art, artCollection]);

  const handleNext = useCallback(() => {
    if (!artCollection.length) return;
    
    const nextIndex = (currentIndex + 1) % artCollection.length;
    const nextArt = artCollection[nextIndex];
    onNavigate(nextArt);
  }, [artCollection, currentIndex, onNavigate]);

  const handlePrev = useCallback(() => {
    if (!artCollection.length) return;
    
    const prevIndex = (currentIndex - 1 + artCollection.length) % artCollection.length;
    const prevArt = artCollection[prevIndex];
    onNavigate(prevArt);
  }, [artCollection, currentIndex, onNavigate]);

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

  // Close modal on escape key press and handle arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        if (e.key === 'ArrowUp' && !isInfoCollapsed) {
          setIsInfoCollapsed(true);
        } else if (e.key === 'ArrowDown' && isInfoCollapsed) {
          setIsInfoCollapsed(false);
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, isInfoCollapsed, handleNext, handlePrev]);

  const toggleInfoCollapse = () => {
    setIsInfoCollapsed(prev => !prev);
  };

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
            
            <div className="modal-body bottom-info-layout">
              <div className="modal-image">
                {/* Navigation buttons */}
                <button 
                  className="carousel-nav carousel-prev" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  aria-label="Previous artwork"
                >
                  <FaChevronLeft size={24} />
                </button>
                
                <img
                  ref={imageRef}
                  src={art.imageUrl}
                  alt={art.title}
                />
                
                <button 
                  className="carousel-nav carousel-next" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  aria-label="Next artwork"
                >
                  <FaChevronRight size={24} />
                </button>
                
                {/* Carousel indicator */}
                <div className="carousel-indicator">
                  <span>{currentIndex + 1}</span> / <span>{artCollection.length}</span>
                </div>
              </div>
              
              <div className={`modal-details-container ${isInfoCollapsed ? 'collapsed' : ''}`}>
                <button 
                  className="info-collapse-toggle"
                  onClick={toggleInfoCollapse}
                  aria-label={isInfoCollapsed ? "Expand artwork details" : "Collapse artwork details"}
                >
                  {isInfoCollapsed ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
                </button>
                
                <div className="modal-details">
                  <h2 className="modal-title font-serif">{art.title}</h2>
                  
                  {!isInfoCollapsed && (
                    <div className="modal-details-content">
                      {art.description && (
                        <div className="modal-description">
                          <p>{art.description}</p>
                        </div>
                      )}
                      
                      <div className="flex justify-between items-start">
                        <div className="modal-specs">
                          <p><span className="font-medium">Medium:</span> {art.medium}</p>
                          <p><span className="font-medium">Dimensions:</span> {art.dimensions}</p>
                          <p><span className="font-medium">Category:</span> {art.categories.join(', ')}</p>
                          <p><span className="font-medium">Status:</span> {art.sold ? 'Sold' : 'Available'}</p>
                          {!art.sold && art.artPrice && <p><span className="font-medium">Price:</span> ${art.artPrice}</p>}
                        </div>
                        
                        {!art.sold && (
                          <div className="ml-4">
                            <Link to="/contact" onClick={() => {
                              // Close the modal first
                              onClose();
                              // Small delay to ensure modal closing completes
                              setTimeout(() => {
                                window.scrollTo(0, 0);
                              }, 10);
                            }} className="btn btn-primary">
                              Inquire About This Piece
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ArtModal;
