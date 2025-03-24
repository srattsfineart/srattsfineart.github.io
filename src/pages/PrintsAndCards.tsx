import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import PrintModal from '../components/PrintModal';
import { ArtPiece, artCollection } from '../data/artCollection';

const PrintsAndCards = () => {
  const [selectedType, setSelectedType] = useState<'all' | 'print' | 'card'>('all');
  const [selectedArt, setSelectedArt] = useState<ArtPiece | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isPrintView, setIsPrintView] = useState<boolean>(true);

  // Filter art collection to only include items available as prints or cards
  const printsAndCardsCollection = useMemo(() => {
    return artCollection.filter(art => 
      (selectedType === 'all' && (art.availableAsPrint || art.availableAsCard)) ||
      (selectedType === 'print' && art.availableAsPrint) ||
      (selectedType === 'card' && art.availableAsCard)
    );
  }, [selectedType]);

  const handleItemClick = (art: ArtPiece, isPrint: boolean) => {
    setSelectedArt(art);
    setIsPrintView(isPrint);
    
    if (isPrint && art.printSizes && art.printSizes.length > 0) {
      setSelectedSize(art.printSizes[0]);
    } else if (!isPrint && art.cardSizes && art.cardSizes.length > 0) {
      setSelectedSize(art.cardSizes[0]);
    } else {
      setSelectedSize(null);
    }
    
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Keep the selected item for a smoother transition when closing
    setTimeout(() => {
      setSelectedArt(null);
      setSelectedSize(null);
    }, 300);
  };

  const handleNavigate = (art: ArtPiece) => {
    setSelectedArt(art);
    
    if (isPrintView && art.printSizes && art.printSizes.length > 0) {
      setSelectedSize(art.printSizes[0]);
    } else if (!isPrintView && art.cardSizes && art.cardSizes.length > 0) {
      setSelectedSize(art.cardSizes[0]);
    } else {
      setSelectedSize(null);
    }
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  // Render the consolidated items grid
  const renderItems = () => {
    if (printsAndCardsCollection.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-xl">No items found with the current filter.</p>
        </div>
      );
    }
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {printsAndCardsCollection.map(art => (
          <motion.div 
            key={`item-${art.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="print-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-w-4 aspect-h-3">
              <img 
                src={art.imageUrl} 
                alt={art.title} 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex justify-between p-2">
                {art.availableAsPrint && (
                  <div className="m-2">
                    <span className="text-xs font-medium py-2 px-3 bg-black bg-opacity-40 backdrop-blur-sm text-white rounded-md">
                      PRINT
                    </span>
                  </div>
                )}
                {!art.availableAsPrint && <div></div>}
                {art.availableAsCard && (
                  <div className="m-2">
                    <span className="text-xs font-medium py-2 px-3 bg-black bg-opacity-40 backdrop-blur-sm text-white rounded-md">
                      CARD
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-serif mb-2">{art.title}</h3>
              <p className="text-gray-600 mb-3">Available as: 
                {art.availableAsPrint && art.availableAsCard 
                  ? ' Print & Card' 
                  : art.availableAsPrint 
                    ? ' Print' 
                    : ' Card'
                }
              </p>
              <div className="flex flex-col space-y-3">
                {art.availableAsPrint && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Print: ${art.printPrice}+</span>
                    <button 
                      className="filter-btn"
                      onClick={() => handleItemClick(art, true)}
                    >
                      View Print
                    </button>
                  </div>
                )}
                {art.availableAsCard && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Card: ${art.cardPrice}</span>
                    <button 
                      className="filter-btn"
                      onClick={() => handleItemClick(art, false)}
                    >
                      View Card
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="gallery-container">
      <div className="container">
        <div className="gallery-header text-center mb-12">
          <h1 className="gallery-title text-4xl font-serif mb-4">Prints & Cards</h1>
          <p className="gallery-description text-lg max-w-2xl mx-auto">
            Bring the beauty of original artwork into your home with high-quality prints and greeting cards.
            Each item is carefully reproduced to capture the essence of the original piece.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="filter-controls flex justify-center mb-8 space-x-4">
          <button 
            className={`filter-btn ${selectedType === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedType('all')}
          >
            All Items
          </button>
          <button 
            className={`filter-btn ${selectedType === 'print' ? 'active' : ''}`}
            onClick={() => setSelectedType('print')}
          >
            Prints
          </button>
          <button 
            className={`filter-btn ${selectedType === 'card' ? 'active' : ''}`}
            onClick={() => setSelectedType('card')}
          >
            Cards
          </button>
        </div>

        {/* Items Grid */}
        {renderItems()}

        {/* Modal */}
        <PrintModal
          art={selectedArt}
          artCollection={printsAndCardsCollection}
          isOpen={isModalOpen && selectedArt !== null}
          onClose={handleCloseModal}
          onNavigate={handleNavigate}
          selectedSize={selectedSize}
          isPrintView={isPrintView}
          onSizeChange={handleSizeChange}
        />
      </div>
    </div>
  );
};

export default PrintsAndCards;
