//reducer-->action,current state
function posts(state = [], action) {
  console.log("Post change")
    console.log(state, action);
    return state; 
}  
export default posts; 