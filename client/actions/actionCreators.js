//increment
export function increment(index) {
return {
    type: 'INCREMENT_LIKES',
    index
}
}
//add comment
export function addComment(postId, author, comment) {
    console.log("dispatch comment"); 
    return {
      type: 'ADD_COMMENT',
      postId,
      author,
      comment
    }
}
//delete comment 
export function removeComment(postId, i) {
    return {
        type: "REMOVE_COMMENT",
        postId,
        i

    }

}