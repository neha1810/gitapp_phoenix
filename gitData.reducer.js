const intialState={
    gitdata:""
}
export const gitDataReducer=(state=intialState,action)=>{

    switch(action.type){
        case "RECEIVE_DATA":
            state.gitdata=action.payload;
            return {...state}
        default: return state
    }
    
}