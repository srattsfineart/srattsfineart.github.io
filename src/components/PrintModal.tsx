import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { ArtPiece } from '../data/artCollection';

interface PrintModalProps {
  art: ArtPiece | null;
  artCollection: ArtPiece[];
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (art: ArtPiece) => void;
  selectedSize: string | null;
  isPrintView: boolean;
  onSizeChange: (size: string) => void;
}

const PrintModal = ({ 
  art, 
  artCollection, 
  isOpen, 
  onClose, 
  onNavigate, 
  selectedSize, 
  isPrintView,
  onSizeChange 
}: PrintModalProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isInfoCollapsed, setIsInfoCollapsed] = useState<boolean>(false);

  // Find current item index when item changes
  useEffect(() => {
    if (art) {
      const index = artCollection.findIndex(i => i.id === art.id);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [art, artCollection]);

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
  }, [onClose, currentIndex, isInfoCollapsed]);

  const handleNext = () => {
    if (!artCollection.length) return;
    
    const nextIndex = (currentIndex + 1) % artCollection.length;
    const nextItem = artCollection[nextIndex];
    onNavigate(nextItem);
  };

  const handlePrev = () => {
    if (!artCollection.length) return;
    
    const prevIndex = (currentIndex - 1 + artCollection.length) % artCollection.length;
    const prevItem = artCollection[prevIndex];
    onNavigate(prevItem);
  };

  const toggleInfoCollapse = () => {
    setIsInfoCollapsed(prev => !prev);
  };

  if (!art) return null;

  const sizes = isPrintView ? art.printSizes : art.cardSizes;
  const price = isPrintView ? art.printPrice : art.cardPrice;

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
                  aria-label="Previous item"
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
                  aria-label="Next item"
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
                  aria-label={isInfoCollapsed ? "Expand item details" : "Collapse item details"}
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
                          <p><span className="font-medium">Type:</span> {isPrintView ? 'Fine Art Print' : 'Greeting Card'}</p>
                          <p><span className="font-medium">Medium:</span> {art.medium}</p>
                          {isPrintView ? (
                            <p className="mb-1">Material: Premium archival paper</p>
                          ) : (
                            <p className="mb-1">Includes: Matching envelope</p>
                          )}
                          
                          {sizes && sizes.length > 0 && (
                            <div className="mb-4 mt-4">
                              <p className="font-medium mb-2">Size:</p>
                              <div className="flex flex-wrap gap-2">
                                {sizes.map(size => (
                                  <button
                                    key={size}
                                    className={`filter-btn ${selectedSize === size ? 'active' : ''}`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      onSizeChange(size);
                                    }}
                                  >
                                    {size}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          <p className="mt-2"><span className="font-medium">Price:</span> {isPrintView ? (
                            <span>${price} {price && sizes && sizes.length > 1 ? `- $${price + 20} depending on size` : ''}</span>
                          ) : (
                            <span>${price}</span>
                          )}</p>
                        </div>
                        
                        <div className="ml-4">
                          <a 
                            href="/contact" 
                            className="btn btn-primary"
                          >
                            Contact for Purchase
                          </a>
                        </div>
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

export default PrintModal;
