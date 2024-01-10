import { useState } from 'react';

// This hook is to be reused for loading state between pages or modals: 
const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return [isLoading, startLoading, stopLoading];
};

export default useLoading;