import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';
import { useTheme } from 'next-themes';

const useColorMode = () => {
  const [colorMode, setColorMode] = useLocalStorage('color-theme', 'dark');
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme(colorMode);
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;
