import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section w-full">
        {/*  
          To implement a dynamic slider with multiple slides with Swiper.js or react-slick
          I want to put some carousel component here.
        */}
        {slidesData.length > 0 && (

          <div className="relative bg-gray-200"> {/* Fallback background for the slide area */}
            <img src={slidesData[0].imageUrl} alt={slidesData[0].altText} className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4">{slidesData[0].title}</h1>
              <p className="text-md sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-xl md:max-w-2xl">{slidesData[0].description}</p>
              <Link href={slidesData[0].ctaLink} className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg text-lg transition duration-300 ease-in-out">
                {slidesData[0].ctaText}
              </Link>
            </div>
          </div>
        )}
      </section>

      <div className="container mx-auto px-4 py-8">
        <p className="font-medium hover:text-blue-400">Home page content starts here.</p>
        {/* Add other sections of your home page here */}
      </div>
    </main>
  );
}
