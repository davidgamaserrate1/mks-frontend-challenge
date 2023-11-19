import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItem } from '../types';

const INITIAL_STATE: CartItem[] =[]

const sliceItems = createSlice({
    name: 'items',
    initialState: INITIAL_STATE,
    reducers:{
        addItemToCart (state, { payload }: PayloadAction<CartItem>)  {
            const existingItem = state.find((item) => item.id === payload.id);
          
            if (existingItem) {
              return state.map((item) => {
                if (item.id === payload.id) {
                  return { ...item, quantity: item.quantity + 1, price: Number(item.price) };
                }
                return item;
              });
            } else {
              return [...state, { ...payload, quantity: 1, price: Number(payload.price) }];
            }
        },
        
        decrementItemQuantity(state, { payload }) {
          return state.map((item) => {
            if (item.id === payload.id && item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          });
        },
        removeItem(state, { payload }) {
          return state.filter((item) => item.id !== payload.id);
        },
    }
})


export default sliceItems.reducer
export const { addItemToCart, decrementItemQuantity, removeItem } = sliceItems.actions

export const useItems = (state: any) =>{
    return state.items as CartItem[]
}

export const selectValue = (state: any) => {
  const total = state.items.reduce((acc:any, item:CartItem) => acc + Number(item.price) * (item.quantity), 0);
  return total.toFixed(2);
};

export const countItens = (state: any) => {
  const totalCount = state.cart.reduce((total:number, item:CartItem) => total + item.quantity, 0);
  return totalCount || 0;
};
