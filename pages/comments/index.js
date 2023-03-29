import React, { useState } from "react";

function CustomerComments() {
  const [comments, setComments] = useState([]);

  const fetchCommentsHandler = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();

    console.log(data);
    setComments(data);
  };
  return (
    <div>
      <button onClick={fetchCommentsHandler}>Fetch Data</button>

      {comments.map((comment) => (
        <div key={comment.id}>
          {comment.id}. {comment.comment}
        </div>
      ))}
    </div>
  );
}

export default CustomerComments;
