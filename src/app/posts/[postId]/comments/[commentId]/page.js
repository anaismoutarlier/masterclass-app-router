import React from "react";
import { posts } from "@/static";
export default async function CommentPage({ params }) {
  const { postId, commentId } = await params;

  const comment = posts
    .find(post => String(post.id) === postId)
    ?.comments.find(comment => String(comment.id) === commentId);

  if (!comment) return <div>Comment does not exist</div>;
  return (
    <div>
      <h1>
        {comment.content} - {comment.createdBy}
      </h1>
    </div>
  );
}
