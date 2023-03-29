import React, { useState } from "react";

function CustomerComments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

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
    fetchCommentsHandler()
  };

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
        </div>
      ))}
    </div>
  );
}

export default CustomerComments;
