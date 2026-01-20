import React from 'react';
import Form from '../components/Form'; 

const Home = () => {
  return (
    <div className='font-bold p-4 text-center text-3xl text-black'>
      <h1 className='text-3xl text-orange-600'>Form application using React 19 features</h1>

      <div className='pt-8 flex justify-center'>
        <Form />
      </div>
    </div>
  )
}

export default Home;