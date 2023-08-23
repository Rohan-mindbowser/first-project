import Link from "next/link";
import React from "react";
import BlogImg from "public/space.png";
import Image from "next/image";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const allPosts = await getData();

  return (
    <div className="py-8">
      {allPosts?.map((post) => {
        return (
          <Link href={`/pages/blog/${post?.id}`}>
            <div className="flex justify-between mb-8 flex-col sm:flex-row">
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-4">{post?.title}</h1>
                <p>{post?.body}</p>
              </div>
              <div className="flex-1 max-h-[400px]">
                <Image
                  src={BlogImg}
                  className="object-cover h-full"
                  alt="blog img"
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Blog;
