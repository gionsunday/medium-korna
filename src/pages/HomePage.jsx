import React from "react";
import FeedList from "../components/Feed/FeedList";
import { dummyPosts } from "../utils/dummyData";

export default function HomePage() {
  return <FeedList posts={dummyPosts} />;
}
