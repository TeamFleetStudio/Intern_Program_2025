import react, {useState} from 'react'
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Products from '../Components/Products';
import collection1 from '../assets/collection1.png';
import collection2 from '../assets/collection2.png';
import collection3 from '../assets/collection3.png';

const Home = () => {

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white px-4 sm:px-8 md:px-12 lg:px-24 py-10">

        <section className="text-center py-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
            Discover Your Style
          </h2>

          <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Explore the latest trends and find outfits that perfectly match your vibe.
            Shop curated collections made just for you.
          </p>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-md text-sm sm:text-base hover:bg-gray-800 transition">
            Shop Now
          </button>
        </section>

        <section className="mt-16">
          <h3 className="text-xl sm:text-2xl font-semibold mb-5 text-center sm:text-left">
            Featured Collections
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 h-[220px] sm:h-[250px] rounded-xl"><img className='w-full h-full rounded-xl' src={collection1} alt="collection1" /></div>
            <div className="bg-gray-100 h-[220px] sm:h-[250px] rounded-xl"><img className='w-full h-full rounded-xl' src={collection2} alt="collection2" /></div>
            <div className="bg-gray-100 h-[220px] sm:h-[250px] rounded-xl"><img className='w-full h-full rounded-xl' src={collection3} alt="collection3" /></div>
          </div>
        </section>

        <section className="mt-20 bg-[#F1F3F0] p-6 sm:p-8 rounded-xl">
          <h3 className="text-xl sm:text-2xl font-semibold mb-3">Stay Updated</h3>

          <p className="text-gray-600 mb-5 text-base sm:text-lg max-w-xl">
            Subscribe to get the latest fashion updates, offers & product releases.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <input
              type="text"
              placeholder="Email Address"
              className="w-full sm:w-[300px] p-3 bg-white border border-gray-300 rounded-md text-black"
            />

            <button className="bg-black text-white px-5 py-3 rounded-md hover:bg-gray-800 transition text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default Home;
