import { useNavigate } from 'react-router-dom';

/**
 * Custom hook that provides a navigation function that scrolls to the top
 * This ensures consistent behavior across all navigation actions
 */
export const useScrollToTopNavigation = () => {
  const navigate = useNavigate();
  
  const navigateWithScroll = (path: string) => {
    // First scroll to top
    window.scrollTo(0, 0);
    // Then navigate to the path
    navigate(path);
  };
  
  return navigateWithScroll;
};
