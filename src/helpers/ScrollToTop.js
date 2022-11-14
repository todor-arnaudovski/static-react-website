import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const scrollToTop = (behavior) => {
  const validBehaviors = ['smooth', 'instant'];

  const behaviorValue = validBehaviors.includes(behavior) ? behavior : 'instant';

  window.scrollTo({ top: 0, behavior: behaviorValue });
};

export const ScrollToTop = () => {
  const pathname = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return null;
};
