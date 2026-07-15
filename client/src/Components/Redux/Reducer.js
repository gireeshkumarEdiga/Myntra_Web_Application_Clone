import { AUTH_TOKEN, SELECTED_CATEGORY, SELECTED_ITEM_DETAILS, USER_DETAILS } from "./Type";

const initialState = {
    TOKEN : "",
    USERDETAILS : {},
    SELECTED_CATEGORY : {},
    SELECTED_ITEM_DETAILS : {}
}

export const authTokenReducer = ( state = initialState, action ) => {

    switch(action.type){

        case AUTH_TOKEN : return {
            ...state,
            TOKEN : action.payload
        }

        default : return state;

    }

}

export const userDetailsReducer = (state = initialState, action) => {

    switch(action.type){

        case USER_DETAILS : return {
            ...state,
            USERDETAILS : action.payload
        }

        default : return state;

    }

}

export const selectedCategoryReducer = (state = initialState, action) => {

    switch(action.type){

        case SELECTED_CATEGORY : return {
            ...state,
            SELECTED_CATEGORY : action.payload
        }

        default : return state;

    }

}

export const selectedItemsDetailsReducer = (state = initialState, action) => {

    switch(action.type){

        case SELECTED_ITEM_DETAILS : return {
            ...state,
            SELECTED_ITEM_DETAILS : action.payload
        }

        default : return state;
        
    }

}