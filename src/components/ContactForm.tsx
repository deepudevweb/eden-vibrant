
import { useState } from "react";
import Button from "./Button";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "general",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formState);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
        interest: "general",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {isSubmitted && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4">
          Thank you for contacting us! We will get back to you soon.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground/80 mb-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-eden-lightGold rounded-md focus:outline-none focus:ring-1 focus:ring-eden-green"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground/80 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-eden-lightGold rounded-md focus:outline-none focus:ring-1 focus:ring-eden-green"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-foreground/80 mb-1"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-eden-lightGold rounded-md focus:outline-none focus:ring-1 focus:ring-eden-green"
          />
        </div>

        <div>
          <label
            htmlFor="interest"
            className="block text-sm font-medium text-foreground/80 mb-1"
          >
            I'm Interested In
          </label>
          <select
            id="interest"
            name="interest"
            value={formState.interest}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-eden-lightGold rounded-md focus:outline-none focus:ring-1 focus:ring-eden-green bg-white"
          >
            <option value="general">General Inquiry</option>
            <option value="dehradun">Eden Dehradun</option>
            <option value="goa">Eden Goa</option>
            <option value="visit">Schedule a Visit</option>
            <option value="brochure">Request Brochure</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground/80 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-eden-lightGold rounded-md focus:outline-none focus:ring-1 focus:ring-eden-green"
        ></textarea>
      </div>

      <div>
        <Button
          type="submit"
          className="w-full md:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
