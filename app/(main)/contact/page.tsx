"use client";

import Title from "@/components/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formInput = "px-4 py-6 border border-input rounded-md";

const ContactForm = () => {
  const ACCESS_KEY = "cc4e4606-baba-4acc-a294-aa153b23575e"; // Move key to .env if possible

  return (
    <form
      className="grid gap-6"
      method="post"
      data-netlify="true"
      data-netlify-recaptcha="true"
      action="https://api.web3forms.com/submit"
    >
      <Input type="hidden" name="access_key" value={ACCESS_KEY} />

      {[
        { id: "name", type: "text", name: "name", placeholder: "Your Name" },
        {
          id: "email",
          type: "email",
          name: "email",
          placeholder: "Email Address",
          required: true,
        },
      ].map((field) => (
        <Input key={field.id} {...field} className={formInput} />
      ))}

      <Textarea
        id="message"
        name="message"
        rows={6}
        placeholder="Write your message..."
        className={`${formInput} pl-6 resize-none`}
      />

      <div className="text-center">
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
};

const ContactPage = () => {
  return (
    <section className="w-full">
      <Title>Contact Me</Title>
      <div className="w-full max-w-3xl mx-auto p-6 rounded-md">
        <div className="py-5">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

