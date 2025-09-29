import React from "react";
import { formatDate } from "../../utils/formatDate";
import { truncateText } from "../../utils/truncateText";

export default function FeedItemMeta({ post }) {
  return (
    <div>
      <small>{post.author} · {formatDate(post.date)}</small>
      <h4>{truncateText(post.title, 60)}</h4>
      <p>{truncateText(post.subtitle, 100)}</p>
    </div>
  );
}
