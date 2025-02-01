function BurgerDes() {
  return (
    <div className="container mx-auto p-4 mt-8">
       <h1 className="text-3xl md:text-5xl font-extrabold text-center text-orange-600 uppercase tracking-wide drop-shadow-md pizza-font">
       Slice of Flavor<span className="text-yellow-400">The Burger You Didn&apos;t Know</span> 
      </h1>
      <img
        src="images/aboutburger.jpg" // Replace with your burger image path
        alt="Delicious Burger"
       className="mx-auto mb-6 mt-10 rounded-lg shadow-md w-full sm:w-80 sm:h-80 h-64 object-cover" // Adjust for mobile and larger screens
      />

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">About Our Burger</h2>
        <p className="text-base md:text-lg mb-4">
          Our burger is one of the most popular items on our menu. Made with fresh, high-quality ingredients, it delivers
          an unbeatable combination of flavors. We use only premium beef patties, freshly baked buns, and a variety of
          vegetables to create the perfect burger experience. Whether you love a classic burger or prefer something more
          adventurous, we&apos;ve got you covered!
        </p>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Why Choose Our Burger?</h2>
        <ul className="list-disc pl-5 text-base md:text-lg mb-4">
          <li>Fresh and healthy ingredients with no preservatives</li>
          <li>Handcrafted beef patties grilled to perfection</li>
          <li>Customizable with your favorite toppings and sauces</li>
          <li>Perfect for any time of day – lunch, dinner, or snack!</li>
          <li>Eco-friendly packaging for a sustainable choice</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">How It&apos;s Made</h2>
        <p className="text-base md:text-lg mb-4">
          We take pride in the preparation of our burgers. Here&apos;s how we make them:
          <ul className="list-decimal pl-5 text-base md:text-lg">
            <li>Start with a premium beef patty, seasoned to perfection.</li>
            <li>Grill it on a high heat to lock in all the juiciness and flavor.</li>
            <li>Add fresh vegetables, like crisp lettuce, juicy tomatoes, and onions.</li>
            <li>Top it off with our secret sauce to give it a special kick.</li>
            <li>Finally, place it all inside a warm, toasted bun for the perfect finish!</li>
          </ul>
        </p>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Customer Reviews</h2>
        <p className="text-base md:text-lg mb-4">
          Don’t just take our word for it – here’s what our customers have to say about our burger:
        </p>
        <blockquote className="text-base md:text-lg italic text-gray-600 mb-4">
          “The best burger I’ve ever had! So juicy, full of flavor, and the sauce is just perfect. Definitely coming back for more!” 
          – John D.
        </blockquote>
        <blockquote className="text-base md:text-lg italic text-gray-600 mb-4">
          “Fresh ingredients, amazing taste! I highly recommend the burger to anyone looking for a satisfying meal.” 
          – Sarah L.
        </blockquote>
      </section>

      <section className="mt-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Order Now and Taste the Difference!</h2>
        <p className="text-base md:text-lg mb-4">Ready to enjoy our mouth-watering burger? Click the button below to order now!</p>
        <a
          href="/order"
          className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition text-base md:text-lg"
        >
          Fast Order
        </a>
      </section>
    </div>
  );
}

export default BurgerDes;
