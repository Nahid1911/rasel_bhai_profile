import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("myyrvgvo");
  if (state.succeeded) {
    return <p className="font-semibold text-3xl py-32 sm:text-4xl md:text-5xl">Thanks for Sending The Email</p>;
  }
  return (
    <section id="contact" className="py-16 px-6 sm:py-16">
      <div>
      <h6 className="text-lg sm:text-xl md:text-2xl">
      I am here to serve you
        </h6>
        <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl">
          Please drop an <span className="poppins text-violet-400">email<i className="fa-solid fa-envelope text-green-500 ml-2" /></span> to me
        </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 px-[10vw] py-16 md:mx-[20vw]">
        <input id="email" type="email" name="email" placeholder="Type your email here" className="rounded-[10px] p-4 text-black" label="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" name="message" placeholder="Your Message" className="rounded-[10px] p-4 text-black" label="message box"/>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting} className="flex py-3 justify-around gap-2 bg-white text-violet-900 max-w-[200px] rounded-[20px] hover:bg-violet-900 hover:text-white">
          Submit
        </button>
      </form>
      </div>
    </section>
  );
}

export default ContactForm;
