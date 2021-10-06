import { createSlice } from '@reduxjs/toolkit'

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))

const sliceConfig = {
  name: 'budgets',
  initialState: initialState,
  reducers: {
    editBudget: (state, action) => {
      state.forEach(item => {
        if (item.category === action.payload.category){
          item.amount = action.payload.amount
        }
      })
    }
  }
}

const budgetsSlice = createSlice(sliceConfig);


export const selectBudgets = (state) => state.budgets;
export default budgetsSlice.reducer;

export const { editBudget } = budgetsSlice.actions;
