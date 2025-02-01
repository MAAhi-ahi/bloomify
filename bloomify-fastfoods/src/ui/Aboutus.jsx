function Aboutus() {
    return (
        <div className="bg-gray-100 py-10 px-5 md:px-20">
            {/* Hero Section */}
            <section className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
                <p className="text-gray-600 mt-2">We specialize in crafting the most delicious fast food with the highest quality ingredients.</p>
            </section>
  
            {/* Our Specialty Section */}
            <section className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-3xl font-semibold text-gray-800">Our Signature Items</h2>
                    <p className="text-gray-600 mt-4">At our fast-food restaurant, we take pride in making the best Taco Bar, Pizza, and Burgers. Every item is made with precision, using the finest ingredients and utmost care.</p>
                    <ul className="mt-4 list-disc list-inside text-gray-700">
                        <li><span className="font-bold">Taco Bar:</span> A perfect blend of fresh ingredients and spices for an unforgettable taste.</li>
                        <li><span className="font-bold">Pizza:</span> Hand-tossed dough, premium toppings, and authentic flavors in every bite.</li>
                        <li><span className="font-bold">Burger:</span> Juicy patties, fresh veggies, and delicious sauces for a perfect meal.</li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <img src="/images/burgers.jpg" alt="Our Specialties" className="rounded-lg shadow-lg w-full max-w-md" />
                </div>
            </section>
  
            {/* Hygiene and Quality Section */}
            <section className="mt-16 text-center">
                <h2 className="text-3xl font-semibold text-gray-800">Hygiene & Quality</h2>
                <p className="text-gray-600 mt-4">We ensure that every meal is prepared with cleanliness and no additives. Our kitchen follows strict hygiene standards, so you get fresh and pure food every time.</p>
            </section>
  
            {/* Owner Section */}
            <section className="mt-16 flex flex-col items-center">
                <h2 className="text-3xl font-semibold text-gray-800">Meet Our Founder</h2>
                <p className="text-gray-600 mt-4 text-center">Our journey started with a passion for serving delicious, hygienic, and authentic fast food. Here’s a glimpse of our founder.</p>
                <div className="mt-6">
                    <img src="/images/MAAhi.jpg" alt="Founder" className="rounded-full shadow-lg w-40 h-40 object-cover" />
                </div>
            </section>
        </div>
    );
  }
  
  export default Aboutus;
  