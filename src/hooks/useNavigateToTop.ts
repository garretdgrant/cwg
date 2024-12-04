import { To, useNavigate } from 'react-router-dom';

export function useNavigateToTop() {
  const navigate = useNavigate();

  const navigateToTop = (path: To) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return navigateToTop;
}
