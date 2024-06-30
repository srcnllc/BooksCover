import axios from "axios"

export const getData=()=>dispatch=>{
    const apiKey ="pa6iJAouQKDCf6nqvGOS1dLgY877kqcN";
    axios
    .get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`)
    .then(response=>dispatch({type:'GET_DATA_SUCCESS', payload:response.data}))
    .catch(error=>dispatch({type:'GET_DATA_ERROR', payload:error}))
}