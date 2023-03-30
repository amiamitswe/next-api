import { comments } from "@/data/comments";
import React from "react";

function Comment({ comment }) {
  return (
    <div>
      {comment.id}: {comment.comment}
    </div>
  );
}

export default Comment;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false, // one of (true, false, blocking)
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const comment = comments.find(
    (comment) => comment.id === parseInt(params.commentId)
  );
  console.log(comment);
  return {
    props: { comment },
  };
}
