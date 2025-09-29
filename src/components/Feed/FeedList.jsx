import React from "react";
import { PostCard } from "./PostCard";
import { Options } from "./Options";

export default function FeedList({ posts }) {
  return (
    <>
      <Options />
      {
        posts.map((post) => <PostCard key={post.id} post={post} />)
      }
    </>
  )
}
