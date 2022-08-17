import {
  useLogin,
  useLogout,
  useUser,
  useAddToCard,
  useCartCount,
  StoreContextProvider,
} from "./store-context";
const LoginSection = () => {
  const login = useLogin();
  const logout = useLogout();
  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Log out</button>
    </div>
  );
};
const UserSection = () => {
  const user = useUser();
  return <div>user: {user}</div>;
};

const AddToCartSection = () => {
  const addToCard = useAddToCard();
  return (
    <div>
      <button onClick={addToCard}>Add to cart</button>
    </div>
  );
};

const CardCountSection = () => {
  const cartCount = useCartCount();
  return <div>card count: {cartCount}</div>;
};

function ContextPage() {
  return (
    <div>
      <LoginSection />
      <UserSection />
      <AddToCartSection />
      <CardCountSection />
    </div>
  );
}

export default function ContextPageWrapper() {
  return (
    <StoreContextProvider>
      <ContextPage />
    </StoreContextProvider>
  );
}
