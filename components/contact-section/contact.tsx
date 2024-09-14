"use client";

import React, { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
          publicKey: "YOUR_PUBLIC_KEY",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <section
      id="contact"
      onSubmit={sendEmail}
      className=" flex flex-col items-center justify-center text-white"
    >
      <div>
        <h1 className="text-33xl">{`Let's Design Together`}</h1>
      </div>
      <div className="flex items-center justify-center ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        voluptates, labore nisi
      </div>
      <form ref={form} className="flex gap-3 pt-10">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          size={40}
          className="text-lgi px-2 rounded-lg "
        />
        <button
          type="submit"
          className="text-mid text-white bg-orangered p-4 rounded-xl text-nowrap cursor-pointer"
        >
          Contact Me
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
