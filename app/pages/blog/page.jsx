import Link from "next/link";
import React from "react";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/post", {
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
          <Link href={`/pages/blog/${post?._id}`}>
            <div className="flex justify-between mb-8 flex-col sm:flex-row">
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-4">{post?.title}</h1>
                <p>{post?.desc}</p>
              </div>
              <div className="flex-1 max-h-[400px]">
                <Image
                  src={post?.img}
                  width={500}
                  height={300}
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
