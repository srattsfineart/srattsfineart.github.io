import { useState } from 'react';
import { motion } from 'framer-motion';

interface PrintItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  type: 'print' | 'card';
  sizes?: string[];
}

const printItems: PrintItem[] = [
  {
    id: 1,
    title: "A Day in Saguache",
    description: "High-quality print of the original oil painting.",
    imageUrl: "/assets/images/A Day in Saguache.jpg",
    price: 25,
    type: 'print',
    sizes: ['8×10', '11×14', '16×20']
  },
  {
    id: 2,
    title: "Maricopa Wild Horses",
    description: "Fine art print on archival paper.",
    imageUrl: "/assets/images/Maricopa Wild Horses.jpg",
    price: 30,
    type: 'print',
    sizes: ['8×10', '11×14', '16×20']
  },
  {
    id: 3,
    title: "Cow in Globemallow",
    description: "Premium quality greeting card with envelope.",
    imageUrl: "/assets/images/Cow in Globemallow.jpg",
    price: 5,
    type: 'card'
  },
  {
    id: 4,
    title: "Evening Blooms",
    description: "Fine art print on archival paper.",
    imageUrl: "/assets/images/Evening Blooms.jpg",
    price: 25,
    type: 'print',
    sizes: ['8×10', '11×14']
  },
  {
    id: 5,
    title: "Praise for a Job Well Done",
    description: "Premium quality greeting card with envelope.",
    imageUrl: "/assets/images/Praise for a Job Well Done.jpg",
    price: 5,
    type: 'card'
  },
  {
    id: 6,
    title: "Water in the Gila",
    description: "Fine art print on archival paper.",
    imageUrl: "/assets/images/Water in the Gila.jpg",
    price: 30,
    type: 'print',
    sizes: ['8×10', '11×14', '16×20']
  }
];

const PrintsAndCards = () => {
  const [selectedType, setSelectedType] = useState<'all' | 'print' | 'card'>('all');
  const [selectedItem, setSelectedItem] = useState<PrintItem | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const filteredItems = selectedType === 'all' 
    ? printItems 
    : printItems.filter(item => item.type === selectedType);

  const handleItemClick = (item: PrintItem) => {
    setSelectedItem(item);
    if (item.sizes && item.sizes.length > 0) {
      setSelectedSize(item.sizes[0]);
    } else {
      setSelectedSize(null);
    }
  };

  const closeModal = () => {
    setSelectedItem(null);
    setSelectedSize(null);
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="print-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              onClick={() => handleItemClick(item)}
            >
              <div className="relative aspect-w-4 aspect-h-3">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-2 right-2 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                  {item.type === 'print' ? 'Print' : 'Card'}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">${item.price}{item.type === 'print' ? '+' : ''}</span>
                  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl">No items found with the current filter.</p>
          </div>
        )}

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-serif">{selectedItem.title}</h2>
                  <button 
                    onClick={closeModal}
                    className="text-gray-500 hover:text-black"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img 
                      src={selectedItem.imageUrl} 
                      alt={selectedItem.title} 
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-lg mb-4">{selectedItem.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="text-xl mb-2">Details</h3>
                      <p className="mb-1">Type: {selectedItem.type === 'print' ? 'Fine Art Print' : 'Greeting Card'}</p>
                      {selectedItem.type === 'print' ? (
                        <p className="mb-1">Material: Premium archival paper</p>
                      ) : (
                        <p className="mb-1">Includes: Matching envelope</p>
                      )}
                    </div>
                    
                    {selectedItem.type === 'print' && selectedItem.sizes && (
                      <div className="mb-6">
                        <h3 className="text-xl mb-2">Size</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedItem.sizes.map(size => (
                            <button
                              key={size}
                              className={`border px-4 py-2 rounded ${selectedSize === size ? 'bg-black text-white' : 'border-gray-300'}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedSize(size);
                              }}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <h3 className="text-xl mb-2">Price</h3>
                      {selectedItem.type === 'print' ? (
                        <p className="text-2xl font-medium">
                          ${selectedItem.price} - ${selectedItem.price + 20}
                          <span className="text-sm text-gray-500 ml-2">depending on size</span>
                        </p>
                      ) : (
                        <p className="text-2xl font-medium">${selectedItem.price}</p>
                      )}
                    </div>
                    
                    <div className="mt-8">
                      <p className="mb-4">To purchase, please contact the artist directly.</p>
                      <a 
                        href="/contact" 
                        className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors"
                      >
                        Contact for Purchase
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrintsAndCards;
