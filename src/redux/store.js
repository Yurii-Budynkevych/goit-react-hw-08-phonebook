import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { filterSlice } from './filterSlice';

// const ownLogger = store => {
//   return next => {
//     return action => {
//       const prevState = store.getState();
//       console.log(prevState);
//       console.log(action);
//       next(action);
//     };
//   };
// };

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
  middleware: [],
});
