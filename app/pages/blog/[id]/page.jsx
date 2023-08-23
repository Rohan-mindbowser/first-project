import React from "react";
import Image from "next/image";
import BlogImg from "public/space.png";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const singlePost = await getData(params?.id);
  return (
    <div className="mt-8">
      <div className="flex justify-between mb-8 flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4">{singlePost?.title}</h1>
          <p className="mb-4 text-sm">{singlePost?.desc}</p>
          <h2 className="font-bold text-md">
            Posted by : {singlePost?.username}
          </h2>
        </div>
        <div className="flex-1 max-h-[400px]">
          <Image
            src={singlePost?.img}
            width={500}
            height={400}
            className="object-cover h-full"
            alt="blog img"
          />
        </div>
      </div>

      <div className="my-4">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus officia, debitis perferendis itaque illo tenetur
          laboriosam magnam obcaecati corporis unde illum fuga architecto
          aperiam aspernatur odit id, a blanditiis placeat! Iure quisquam dicta
          repellat tempore, tempora corporis labore alias dolore officiis
          voluptas fugit odio neque expedita nulla est numquam aut suscipit non
          illum, iusto ad amet eligendi. Tempore, vitae eius! Minus, debitis
          laboriosam obcaecati quaerat repudiandae minima dignissimos quo beatae
          sed eos. Quas impedit non voluptatum minus omnis accusamus quia
          voluptas assumenda explicabo delectus sunt, necessitatibus animi, illo
          saepe rem!
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          iste dolor praesentium laboriosam explicabo, quos odio sequi
          aspernatur nemo error suscipit facere at laborum accusamus voluptatum!
          Ipsam unde sint consequuntur. Excepturi, repellat iste. Repudiandae
          saepe fuga natus incidunt iste omnis minus, culpa laborum atque, animi
          a beatae repellendus! Est eveniet laboriosam nostrum explicabo. Omnis,
          accusamus! Harum non esse incidunt tenetur!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
