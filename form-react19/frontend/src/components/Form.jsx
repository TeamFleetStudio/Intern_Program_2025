import { useState } from "react";

export default function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function validateField(name, value) {
  let error = "";

  if (name === "email") {
    if (!value) {
      error = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      error = "Enter a valid email address";
    }
  }

  if (name === "phone") {
    if (!value) {
      error = "Phone number is required";
    } else if (!/^\+?[0-9\s\-()]{7,}$/i.test(value)) {
      error = "Enter a valid phone number";
    }
  }

  if (name === "website") {
    if (!value) {
      error = "Website URL is required";
    } else if (!/^https?:\/\/.+/i.test(value)) {
      error = "Enter a valid website URL";
    }
  }

  return error;
}

  function handleChange(e) {

    const { name, value } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setTouched((prev) => ({
      ...prev,
      [name]:true,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

  setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData); 
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
      });
      setErrors({});
      setTouched({});
      setIsSubmitted(false);
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl border-t-2 border-stone-200 max-w-md w-full">
      <h2 className="text-3xl font-semibold text-orange-600 mb-1">
        Send a Message
      </h2>
      <p className="text-orange-600 text-2xl mb-4">
        We’d love to hear from you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 p-3">
        <input
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="text-xl w-full border border-neutral-200 focus:outline-sky-600 focus:outline-offset-2 rounded px-3 py-2 placeholder:text-xl placeholder:text-stone-500"
        />

        <div>
          <input
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            className="text-xl w-full border border-neutral-200 focus:outline-sky-600 focus:outline-offset-2 rounded px-3 py-2 placeholder:text-xl placeholder:text-stone-500"
          />
          {(touched.email || isSubmitted) && errors.email && (
            <p className="text-start text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <input
            name="phone"
            placeholder="Phone number *"
            value={formData.phone}
            onChange={handleChange}
            className="text-xl w-full border border-neutral-200 focus:outline-sky-600 focus:outline-offset-2 rounded px-3 py-2 placeholder:text-xl placeholder:text-stone-500"
          />
          {(touched.phone || isSubmitted) && errors.phone && (
            <p className="text-start text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        <div>
          <input
            name="website"
            placeholder="Website URL *"
            value={formData.website}
            onChange={handleChange}
            className="text-xl w-full border border-neutral-200 focus:outline-sky-600 focus:outline-offset-2 rounded px-3 py-2 placeholder:text-xl placeholder:text-stone-500"
          />
          {(touched.website || isSubmitted) && errors.website && (
            <p className="text-start text-red-500 text-sm">{errors.website}</p>
          )}
        </div>

        <textarea
          name="message"
          placeholder="Your message"
          rows="3"
          value={formData.message}
          onChange={handleChange}
          className="text-xl w-full border border-neutral-200 focus:outline-sky-600 focus:outline-offset-2 rounded px-3 py-2 placeholder:text-xl placeholder:text-stone-500"
        />

        <button
          type="submit"
          className="w-full bg-orange-600 text-2xl text-white py-2 rounded hover:bg-orange-400 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}