import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/Redux Examples/HelloRedux/helloReducer";
import counterReducer from "../Lab4/Redux Examples/CounterRedux/counterReducer";
import addReducer from "../Lab4/Redux Examples/AddRedux/addReducer";
import todosReducer from "../Lab4/Redux Examples/todosReducer";

const store = configureStore({
  reducer: { helloReducer, counterReducer, addReducer, todosReducer},
});
export default store;
