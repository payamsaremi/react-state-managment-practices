import { useState, useCallback } from "react";
import { useContextSelector, createContext } from "use-context-selector";
const useStore = () => {
  const [user, setUser] = useState("");
  const [cartCount, setCartCount] = useState(0);

  return {
    user,
    cartCount,
    login: useCallback(() => setUser("payam"), []),
    logout: useCallback(() => setUser(""), []),
    addToCard: useCallback(() => setCartCount((value) => value + 1), []),
  };
};

const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
  );
};

export const useLogin = () =>
  useContextSelector(StoreContext, (state) => state.login);
export const useLogout = () =>
  useContextSelector(StoreContext, (state) => state.logout);
export const useUser = () =>
  useContextSelector(StoreContext, (state) => state.user);
export const useCartCount = () =>
  useContextSelector(StoreContext, (state) => state.cartCount);
export const useAddToCard = () =>
  useContextSelector(StoreContext, (state) => state.addToCard);
