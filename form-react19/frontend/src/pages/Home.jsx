import { useActionState, useEffect } from 'react';
import Form from '../components/Form';
import toast from 'react-hot-toast'; 

async function submitForm(prevState, formData) {
  const data = Object.fromEntries(formData.entries());
  try {
    const response = await fetch("http://localhost:5000/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return { error: result.message || "Submission failed" };
    }

    return { success: true };
  } catch {
    return { error: "Network error" };
  }
}

const Home = () => {

  const [state, formAction, isPending] = useActionState(submitForm, {
    success: false,
    error: null,
  });

    useEffect(() => {
      if (state.success) {
        toast.success("Form submitted successfully!");
      }

      if (state.error) {
        toast.error(state.error);
      }
    }, [state]);

  return (
    <div className='font-bold p-4 text-center text-3xl text-black'>
      <h1 className='text-3xl text-orange-600'>Form application using React 19 features</h1>

      <div className="pt-8 flex flex-column justify-center">
        <Form action={formAction} isPending={isPending} />
      </div>
    </div>
  )
}

export default Home;