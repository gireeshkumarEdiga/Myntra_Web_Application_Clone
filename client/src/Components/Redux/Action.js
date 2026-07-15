import { AUTH_TOKEN, SELECTED_CATEGORY, SELECTED_ITEM_DETAILS, USER_DETAILS } from "./Type";

export const authTokenAction = (data) => {
    return {
        type : AUTH_TOKEN,
        payload : data
    }
}

export const userDetailsAction = (data) => {
    return {
        type : USER_DETAILS,
        payload : data
    }
}

export const selectedCategoryAction = (data) => {
    return {
        type : SELECTED_CATEGORY,
        payload : data
    }
}

export const selectedItemsDetailsAction = (data) => {
    return {
        type : SELECTED_ITEM_DETAILS,
        payload : data
    }
}