import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]))

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => void(state[action.payload.category].push(action.payload)),
    deleteTransaction: (state, action) => {
      return (state[action.payload.category]
        .filter(transaction => transaction.id !== action.payload.id))
    }
  }
})

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((a,b) => [...a, ...b], []);

export const { addTransaction, deleteTransaction } = transactionsSlice.actions
export default transactionsSlice.reducer;

console.log(initialState)
console.log(transactionsSlice.actions.addTransaction)
