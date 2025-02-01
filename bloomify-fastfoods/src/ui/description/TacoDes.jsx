

function TacoDes() {
  return (
    <div className="container mx-auto p-4">
       <h1 className="text-3xl md:text-5xl font-extrabold text-center text-orange-600 uppercase tracking-wide drop-shadow-md pizza-font">
       Taco Tales<span className="text-yellow-400"> Secrets You Never Knew</span> 
      </h1>

      <div className="mb-6">
        <img
          src="images/tacobarabout.jpg" // Replace with your taco image path
          alt="Delicious Taco"
          className="mx-auto mb-6 mt-11 rounded-lg shadow-md w-full sm:w-80 sm:h-80 h-64 object-cover"
        />

      </div>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">About Our Taco</h2>
        <p className="text-base md:text-lg mb-4">
          Our taco is a perfect blend of bold flavors, with a crispy shell, fresh fillings, and a variety of delicious
          toppings. Made with the finest ingredients, each taco is packed with taste and texture, ensuring a delightful
          experience in every bite. Whether you prefer beef, chicken, or vegetarian options, we’ve got something to satisfy
          your cravings.
        </p>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Why Choose Our Taco?</h2>
        <ul className="list-disc pl-5 text-base md:text-lg mb-4">
          <li>Fresh, locally sourced ingredients for the best flavor</li>
          <li>Crunchy and warm taco shells made to perfection</li>
          <li>Customizable with your favorite toppings and salsas</li>
          <li>Vegetarian and meat options available for all tastes</li>
          <li>Fast, delicious, and affordable</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">How It&apos;s Made</h2>
        <p className="text-base md:text-lg mb-4">
          Our taco starts with a perfectly crispy shell, filled with your choice of seasoned beef, chicken, or vegetables.
          Then, it’s topped with fresh salsa, creamy guacamole, sour cream, and more to make it a taco you’ll never forget.
          Here&apos;s how it&apos;s made:
          <ul className="list-decimal pl-5 text-base md:text-lg">
            <li>Start with a freshly made taco shell, crispy on the outside and tender on the inside.</li>
            <li>Fill with your choice of seasoned meat or vegetables, cooked to perfection.</li>
            <li>Add toppings like lettuce, tomato, cheese, and your favorite salsa or sauce.</li>
            <li>Top with a dollop of creamy guacamole and a squeeze of lime for extra flavor.</li>
          </ul>
        </p>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Customer Reviews</h2>
        <p className="text-base md:text-lg mb-4">
          Our tacos are a hit! Here’s what some of our customers have to say:
        </p>
        <blockquote className="text-base md:text-lg italic text-gray-600 mb-4">
          “The best tacos I’ve ever had! The shell was perfectly crispy and the toppings were so fresh. I’ll definitely
          be back for more!” – Sofia L.
        </blockquote>
        <blockquote className="text-base md:text-lg italic text-gray-600 mb-4">
          “I love the variety of toppings and fillings! The tacos are always packed with flavor and never disappoint.” – Mark T.
        </blockquote>
      </section>

      <section className="mt-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Order Your Taco Now!</h2>
        <p className="text-base md:text-lg mb-4">Craving a taco? Click below to place your order now!</p>
        <a
          href="/order"
          className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-700 transition text-base md:text-lg"
        >
          Fast Order
        </a>
      </section>
    </div>
  );
}

export default TacoDes;
