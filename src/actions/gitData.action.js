import axios from 'axios';
export const getGitData=data=>dispatch=>{
    axios.get(`https://api.github.com/search/repositories?q=`+`${data}`+`&per_page=20`)
    .then(res => {
        console.log(res,"res")
        dispatch({ type: "RECEIVE_DATA", payload: res.data })
    })
    .catch((err)=>{
        console.log(err,"error")
        dispatch({type: "FETCH_DATA_ERROR", payload: err})
    })

}