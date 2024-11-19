import React from "react";
import { posts } from "@/static";
import { Post } from "@/components";

export default function AllPosts() {
  return (
    <div>
      <div className="list">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
