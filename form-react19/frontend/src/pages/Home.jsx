import React from 'react';
import Form from '../components/Form'; 

const Home = () => {

    async function handleFormSubmit(formData) {
    try {
      const response = await fetch("http://localhost:5000/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Form submission failed");
      }

      alert("Form submitted successfully!");
      console.log("Saved data:", result.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  }
  return (
    <div className='font-bold p-4 text-center text-3xl text-black'>
      <h1 className='text-3xl text-orange-600'>Form application using React 19 features</h1>

      <div className='pt-8 flex justify-center'>
        <Form onSubmit={handleFormSubmit} />
      </div>
    </div>
  )
}

export default Home;