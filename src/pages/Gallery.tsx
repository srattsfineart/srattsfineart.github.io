import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { artCollection, categories } from '../data/artCollection';
import ArtCard from '../components/ArtCard';
import ArtModal from '../components/ArtModal';
import type { ArtPiece } from '../data/artCollection';

const Gallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showAvailableOnly, setShowAvailableOnly] = useState<boolean>(false);
  const [filteredArt, setFilteredArt] = useState<ArtPiece[]>(artCollection);
  const [selectedArt, setSelectedArt] = useState<ArtPiece | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter art by category and availability
  useEffect(() => {
    // First filter out items where showInGallery is false
    let filtered = [...artCollection].filter(art => art.showInGallery);
    
    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(art => art.categories.includes(selectedCategory));
    }
    
    // Filter by availability
    if (showAvailableOnly) {
      filtered = filtered.filter(art => !art.sold);
    }
    
    setFilteredArt(filtered);
  }, [selectedCategory, showAvailableOnly]);

  // Check for art ID in URL params
  useEffect(() => {
    const artId = searchParams.get('id');
    if (artId) {
      const art = artCollection.find(a => a.id === parseInt(artId));
      if (art) {
        setSelectedArt(art);
        setIsModalOpen(true);
      }
    }
  }, [searchParams]);

  const handleArtClick = (art: ArtPiece) => {
    setSelectedArt(art);
    setIsModalOpen(true);
    setSearchParams({ id: art.id.toString() });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSearchParams({});
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const toggleAvailableOnly = () => {
    setShowAvailableOnly(prev => !prev);
  };

  const handleNavigate = (art: ArtPiece) => {
    setSelectedArt(art);
    setSearchParams({ id: art.id.toString() });
  };

  return (
    <div className="gallery-container">
      <div className="container">
        <div className="gallery-header">
          <h1 className="gallery-title font-serif">Art Gallery</h1>
        </div>
        
        {/* Category Filter */}
        <div className="filter-controls">
          <CategoryButton 
            category="All" 
            isSelected={selectedCategory === 'All'} 
            onClick={() => handleCategoryChange('All')} 
          />
          
          {categories.map(category => (
            <CategoryButton 
              key={category} 
              category={category} 
              isSelected={selectedCategory === category} 
              onClick={() => handleCategoryChange(category)} 
            />
          ))}
          
          <div className="filter-divider"></div>
          
          <label className="availability-toggle">
            <input 
              type="checkbox" 
              checked={showAvailableOnly} 
              onChange={toggleAvailableOnly}
            />
            <span className="toggle-slider"></span>
            <span className="toggle-label">Available for Purchase</span>
          </label>
        </div>
        
        {/* Art Grid */}
        <motion.div 
          layout
          className="art-grid"
        >
          <AnimatePresence>
            {filteredArt.map(art => (
              <motion.div
                key={art.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArtCard art={art} onClick={handleArtClick} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredArt.length === 0 && (
          <div className="no-results">
            <p>No artworks found with the current filters.</p>
          </div>
        )}
      </div>
      
      {/* Art Modal */}
      <ArtModal 
        art={selectedArt} 
        artCollection={artCollection}
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onNavigate={handleNavigate}
      />
    </div>
  );
};

interface CategoryButtonProps {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

const CategoryButton = ({ category, isSelected, onClick }: CategoryButtonProps) => {
  return (
    <button
      className={`filter-btn ${isSelected ? 'active' : ''}`}
      onClick={onClick}
    >
      {category}
    </button>
  );
};

export default Gallery;
