import Image from "next/image";
import React from "react";
import ContactImage from "public/contact.svg";

const Contact = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center mb-6">
      <div className="flex-1 p-4">
        <Image
          src={ContactImage}
          alt="contact image"
          className="imag-animation w-[70%]"
        />
      </div>

      <div className="flex-1">
        <h1 className="font-bold text-3xl mb-4">Contact us</h1>

        <div className="mb-4">
          <label for="name" class="block text-sm font-medium leading-6">
            Full name
          </label>
          <div class="mt-2">
            <input
              id="name"
              name="name"
              type="name"
              autocomplete="name"
              required
              class="block w-full rounded-md border-0 p-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mb-4">
          <label for="email" class="block text-sm font-medium leading-6">
            Email address
          </label>
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="block w-full rounded-md border-0 p-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="mb-4">
          <label for="message" class="block text-sm font-medium leading-6">
            Your message
          </label>
          <div class="mt-2 w-full">
            <textarea className="w-full text-black p-1.5" rows="4"></textarea>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="px-2 py-1 border-none bg-purple-500 rounded font-bold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
