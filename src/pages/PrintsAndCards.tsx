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

  // Render prints section
  const renderPrints = () => {
    const prints = artCollection.filter(art => 
      (selectedType === 'all' || selectedType === 'print') && art.availableAsPrint
    );
    
    if (prints.length === 0) return null;
    
    return (
      <div className="mb-12">
        {selectedType === 'all' && <h2 className="text-2xl font-serif mb-6">Prints</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {prints.map(art => (
            <motion.div 
              key={`print-${art.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="print-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              onClick={() => handleItemClick(art, true)}
            >
              <div className="relative aspect-w-4 aspect-h-3">
                <img 
                  src={art.imageUrl} 
                  alt={art.title} 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-serif mb-2">{art.title}</h3>
                <p className="text-gray-600 mb-3">Fine art print on archival paper</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">${art.printPrice}+</span>
                  <button className="filter-btn">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  // Render cards section
  const renderCards = () => {
    const cards = artCollection.filter(art => 
      (selectedType === 'all' || selectedType === 'card') && art.availableAsCard
    );
    
    if (cards.length === 0) return null;
    
    return (
      <div>
        {selectedType === 'all' && <h2 className="text-2xl font-serif mb-6">Cards</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map(art => (
            <motion.div 
              key={`card-${art.id}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="print-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              onClick={() => handleItemClick(art, false)}
            >
              <div className="relative aspect-w-4 aspect-h-3">
                <img 
                  src={art.imageUrl} 
                  alt={art.title} 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-serif mb-2">{art.title}</h3>
                <p className="text-gray-600 mb-3">Premium quality greeting card with envelope</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">${art.cardPrice}</span>
                  <button className="filter-btn">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
        {selectedType === 'all' ? (
          <>
            {renderPrints()}
            {renderCards()}
          </>
        ) : selectedType === 'print' ? (
          renderPrints()
        ) : (
          renderCards()
        )}

        {/* Empty State */}
        {printsAndCardsCollection.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl">No items found with the current filter.</p>
          </div>
        )}

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
