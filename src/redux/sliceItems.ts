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
    }
})


export default sliceItems.reducer
export const { addItemToCart } = sliceItems.actions

export const useItems = (state: any) =>{
    return state.items as CartItem[]
}