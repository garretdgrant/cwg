import { To, useNavigate } from 'react-router-dom';

export function useNavigateToTop() {
  const navigate = useNavigate();

  const navigateToTop = (path: To, behavior: ScrollBehavior) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: behavior });
  };

  return navigateToTop;
}
