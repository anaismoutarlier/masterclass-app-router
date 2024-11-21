import React from "react";
import { Post, AddPostForm } from "@/components";

export default async function AllPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_POSTS_API_URL}/posts`, {
    headers: {
      "Content-Type": "application/json",
      apikey: process.env.POSTS_API_KEY,
    },
  });
  const data = await res.json();
  const { posts } = data;
  return (
    <div>
      <AddPostForm />
      <div className="list">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
