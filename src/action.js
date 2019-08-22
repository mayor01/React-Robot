import { 
    CHANGE_SEARCH_FIELD ,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
} from "./constants";


export const setSearchField = (text) => ({
    //change search field is capitalised because its a constant and a constant is usually capitalised
    type: CHANGE_SEARCH_FIELD,
    //payload is a common name used in redox and payload means we are sending whatever data is needed to go on to
    //the producer which is just going to be whatever the user enters.
    payload: text
})

export const requestRobots = (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}