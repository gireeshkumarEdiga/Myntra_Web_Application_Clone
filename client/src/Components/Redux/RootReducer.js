import { combineReducers } from "redux";
import { authTokenReducer } from "./Reducer";
import { userDetailsReducer } from "./Reducer";
import { selectedCategoryReducer } from "./Reducer";
import { selectedItemsDetailsReducer } from "./Reducer";

export const rootReducer = combineReducers({
    TOKEN : authTokenReducer,
    USERDETAILS : userDetailsReducer,
    SELECTED_CATEGORY : selectedCategoryReducer,
    SELECTED_ITEM_DETAILS : selectedItemsDetailsReducer
});