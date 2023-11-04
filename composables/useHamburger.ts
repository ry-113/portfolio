export const useHamburger = () => {
  const isMenuOpen: Ref<boolean> = useState("isMenuOpen", () => false);
  const toggleMenu = (): void => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  return { isMenuOpen, toggleMenu };
}