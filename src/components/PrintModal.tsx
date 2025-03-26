import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { ArtPiece } from '../data/artCollection';
import { Link } from 'react-router-dom';

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
  isPrintView: initialIsPrintView,
  onSizeChange 
}: PrintModalProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isInfoCollapsed, setIsInfoCollapsed] = useState<boolean>(false);
  const [isPrintView, setIsPrintView] = useState<boolean>(initialIsPrintView);

  // Get the price for the selected size
  const getSelectedPrice = (): number | undefined => {
    if (!art) return undefined;
    
    const currentSizes = isPrintView ? art.printSizes : art.cardSizes;
    const currentPrices = isPrintView ? art.printPrices : art.cardPrices;
    
    if (!currentSizes || !currentPrices || !selectedSize) return undefined;
    
    const sizeIndex = currentSizes.findIndex(size => size === selectedSize);
    if (sizeIndex === -1 || !currentPrices[sizeIndex]) return currentPrices[0]; // Default to first price if not found
    
    return currentPrices[sizeIndex];
  };

  // Find current item index when item changes
  useEffect(() => {
    if (art) {
      const index = artCollection.findIndex(i => i.id === art.id);
      if (index !== -1) {
        setCurrentIndex(index);
      }
    }
  }, [art, artCollection]);

  // Update internal isPrintView when prop changes
  useEffect(() => {
    setIsPrintView(initialIsPrintView);
  }, [initialIsPrintView]);

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

  const handleNext = useCallback(() => {
    if (!art || !artCollection.length) return;
    
    // Filter collection to only include items that support the current view type
    const filteredCollection = artCollection.filter(item => 
      isPrintView ? item.availableAsPrint : item.availableAsCard
    );
    
    if (filteredCollection.length === 0) return;
    
    // Find the current item in the filtered collection
    const currentItemIndex = filteredCollection.findIndex(item => item.id === art.id);
    
    // If the current item is not in the filtered collection (shouldn't happen, but just in case)
    // or if there's only one item that supports the current view, don't navigate
    if (currentItemIndex === -1 || filteredCollection.length === 1) return;
    
    // Get the next item in the filtered collection
    const nextIndex = (currentItemIndex + 1) % filteredCollection.length;
    const nextArt = filteredCollection[nextIndex];
    
    onNavigate(nextArt);
  }, [art, artCollection, isPrintView, onNavigate]);

  const handlePrev = useCallback(() => {
    if (!art || !artCollection.length) return;
    
    // Filter collection to only include items that support the current view type
    const filteredCollection = artCollection.filter(item => 
      isPrintView ? item.availableAsPrint : item.availableAsCard
    );
    
    if (filteredCollection.length === 0) return;
    
    // Find the current item in the filtered collection
    const currentItemIndex = filteredCollection.findIndex(item => item.id === art.id);
    
    // If the current item is not in the filtered collection (shouldn't happen, but just in case)
    // or if there's only one item that supports the current view, don't navigate
    if (currentItemIndex === -1 || filteredCollection.length === 1) return;
    
    // Get the previous item in the filtered collection
    const prevIndex = (currentItemIndex - 1 + filteredCollection.length) % filteredCollection.length;
    const prevArt = filteredCollection[prevIndex];
    
    onNavigate(prevArt);
  }, [art, artCollection, isPrintView, onNavigate]);

  const toggleInfoCollapse = () => {
    setIsInfoCollapsed(prev => !prev);
  };

  const toggleViewType = () => {
    if (!art) return;
    
    // Toggle between print and card view
    const newIsPrintView = !isPrintView;
    setIsPrintView(newIsPrintView);
    
    // Update selected size based on the new view type
    if (newIsPrintView && art.printSizes && art.printSizes.length > 0) {
      onSizeChange(art.printSizes[0]);
    } else if (!newIsPrintView && art.cardSizes && art.cardSizes.length > 0) {
      onSizeChange(art.cardSizes[0]);
    }
  };

  // Auto-select first card size when component mounts or art changes
  useEffect(() => {
    if (art && !isPrintView && art.cardSizes && art.cardSizes.length > 0 && !selectedSize) {
      onSizeChange(art.cardSizes[0]);
    }
  }, [art, isPrintView, onSizeChange, selectedSize]);

  if (!art) return null;

  const sizes = isPrintView ? art.printSizes : art.cardSizes;
  const canToggleView = (isPrintView && art.availableAsCard) || (!isPrintView && art.availableAsPrint);

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
                  <span>{currentIndex + 1}</span> / <span>{artCollection.filter(item => 
                    isPrintView ? item.availableAsPrint : item.availableAsCard
                  ).length}</span>
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
                      {/* Toggle between Print and Card view */}
                      {canToggleView && (
                        <div className="view-toggle mb-4">
                          <div className="flex justify-center space-x-4">
                            <button
                              className={`filter-btn ${isPrintView ? 'active' : ''}`}
                              onClick={() => {
                                if (!isPrintView) toggleViewType();
                              }}
                            >
                              Print
                            </button>
                            <button
                              className={`filter-btn ${!isPrintView ? 'active' : ''}`}
                              onClick={() => {
                                if (isPrintView) toggleViewType();
                              }}
                            >
                              Card
                            </button>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex justify-between items-start">
                        <div className="modal-specs">
                          <p><span className="font-medium">Type:</span> <strong>{isPrintView ? 'Fine Art Print' : 'Greeting Card'}</strong></p>
                          {isPrintView ? (
                            <p className="mb-1">Material: Giclee Print stretched on standard bars (contact for other types of prints)</p>
                          ) : (
                            <>
                              <p className="mb-1">Includes: Matching envelope</p>
                              <p className="mb-1">
                                <span className="font-medium">Inside:</span> {art.cardInnerContent 
                                  ? `"${art.cardInnerContent}"` 
                                  : "Blank inside"}
                              </p>
                            </>
                          )}
                          
                          {sizes && sizes.length > 0 && (
                            <div className="mb-4 mt-4">
                              <p className="font-medium mb-2">Size: {isPrintView ? "(larger sizes available upon request)" : ""}</p>
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
                            <span>
                              ${getSelectedPrice()}
                            </span>
                          ) : (
                            <span>
                              ${getSelectedPrice()} per card
                              {art.cardBundleOfFourPrice && (
                                <span className="block text-sm mt-1">
                                  Bundle of 4: ${art.cardBundleOfFourPrice}
                                </span>
                              )}
                            </span>
                          )}</p>
                        </div>
                        
                        <div className="ml-4">
                          <Link 
                            to="/contact" 
                            className="btn btn-primary"
                            onClick={() => {
                              // Close the modal first
                              onClose();
                              // Small delay to ensure modal closing completes
                              setTimeout(() => {
                                window.scrollTo(0, 0);
                              }, 10);
                            }}
                          >
                            Contact for Purchase
                          </Link>
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
