import { createContext, useState, useContext } from "react";

const useStore = () => {
  const [user, setUser] = useState("");
  const [cartCount, setCartCount] = useState(0);

  return {
    user,
    cartCount,
    login: () => setUser("payam"),
    logout: () => setUser(""),
    addToCard: () => setCartCount(cartCount + 1),
  };
};

const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
  );
};

export const useLogin = () => useContext(StoreContext).login;
export const useLogout = () => useContext(StoreContext).logout;
export const useUser = () => useContext(StoreContext).user;
export const useCartCount = () => useContext(StoreContext).cartCount;
export const useAddToCard = () => useContext(StoreContext).addToCard;
