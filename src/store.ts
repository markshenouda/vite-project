import create from 'zustand';

interface CartItem {
  id: number;
  name: string;
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  addToCart: (item) => set((state) => {
    const exists = state.cart.find((i) => i.id === item.id);
    if (exists) {
      return {
        cart: state.cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };
    } else {
      return {
        cart: [...state.cart, { ...item, quantity: 1 }],
      };
    }
  }),
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter((i) => i.id !== id),
  })),
  clearCart: () => set({ cart: [] }),
}));
