import React from "react";
import { posts } from "@/static";
import Link from "next/link";
export default async function PostPage({ params }) {
  const { postId } = await params;
  const post = posts.find(post => String(post.id) === postId);

  if (!post) return <div>Post does not exist</div>;
  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.content}</h2>
      <h5>- {post.createdBy}</h5>
      <div>
        {post.comments.map(comment => (
          <Link
            href={`/posts/${postId}/comments/${comment.id}`}
            key={comment.id}
          >
            {comment.content}
          </Link>
        ))}
      </div>
    </div>
  );
}
