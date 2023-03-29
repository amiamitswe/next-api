import React, { useState } from "react";

function CustomerComments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [showInput, setShowInput] = useState("");
  const [updateComment, setUpdateComment] = useState("");

  const fetchCommentsHandler = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();

    console.log(data);
    setComments(data);
  };

  const postCommentHandler = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const deleteCommentHandler = async (id) => {
    const response = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
    fetchCommentsHandler();
  };

  const updateCommentHandler = async (id) => {
    const response= await fetch(`/api/comments/${id}`, {
      method: "PUT",
      body: JSON.stringify({ updateComment }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await response.json();
    console.log(data);
    setUpdateComment('')
    setShowInput(null)
    fetchCommentsHandler()
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={postCommentHandler}>Save Comments</button>
      </div>
      <button onClick={fetchCommentsHandler}>Fetch Data</button>

      {comments.map((comment) => (
        <div key={comment.id}>
          {comment.id}. {comment.comment}{" "}
          <button onClick={() => deleteCommentHandler(comment.id)}>
            Delete
          </button>
          {showInput === comment.id ? (
            <div>
              <input
                type="text"
                value={updateComment}
                onChange={(e) => setUpdateComment(e.target.value)}
              />{" "}
              <button onClick={() => updateCommentHandler(comment.id)}>Update</button>
            </div>
          ) : (
            <button
              onClick={() => {
                setShowInput(comment.id);
                setUpdateComment(comment.comment);
              }}
            >
              Edit Comment
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default CustomerComments;
