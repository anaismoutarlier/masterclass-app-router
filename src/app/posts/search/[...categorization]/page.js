import React from "react";
import { posts } from "@/static";
import { Post } from "@/components";

export default async function FilterPosts({ params, searchParams }) {
  const { categorization } = await params;
  await searchParams;
  console.log(params, searchParams);

  return (
    <div>
      <div className="list">
        {posts
          .filter(post =>
            categorization.every(
              (el, i) =>
                post.categorization[i].toLowerCase() === el.toLowerCase()
            )
          )
          .filter(
            el =>
              !searchParams?.tag ||
              el.tags
                .map(t => t.toLowerCase())
                .includes(searchParams?.tag.toLowerCase())
          )
          .map(post => (
            <Post key={post.id} post={post} />
          ))}
      </div>
    </div>
  );
}
