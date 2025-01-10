import React from "react";
import BlogCard from "../cards/blogcard";

type BlogGridProps = {
  children: React.ReactElement<typeof BlogCard>[];
};

const BlogGrid = ({ children }: BlogGridProps) => {
  return <div className="items-start masonry-grid">{children}</div>;
};

export default BlogGrid;
