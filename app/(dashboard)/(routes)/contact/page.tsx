"use client";

import Title from "@/components/title";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formInput =
  "px-4 py-6 bg-foreground/90 text-background border border-input rounded-md";
const ContactPage = () => {
  return (
    <section className="w-full">
      <Title>Contact Me</Title>
      <div className="w-full max-w-3xl mx-auto p-6 rounded-md">
        <div className="grid grid-cols-1 gap-3 py-5">
          <form
            className="grid grid-cols-1 gap-6"
            method="post"
            data-netlify="true"
            data-netlify-recaptcha="true"
            action="https://api.web3forms.com/submit"
          >
            <Input
              type="hidden"
              name="access_key"
              value="cc4e4606-baba-4acc-a294-aa153b23575e"
            />

            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              className={formInput}
            />

            <Input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className={formInput}
            />

            <Textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Write your message..."
              className={formInput + "pl-6 resize-none"}
            ></Textarea>

            <div className="text-center">
              <Button type="submit">Send</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactPage;
