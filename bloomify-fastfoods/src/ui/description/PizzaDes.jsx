import PIzzaHeader from "./PIzzaHeader";

function PizzaDes() {
    return (
      <div className="container mx-auto p-4 mt-8">
        <PIzzaHeader/>
        <img
          src="images/Pizza Grilled Cheese.jpg" 
          alt="Delicious Pizza"
          className="mx-auto mb-10 mt-12 rounded-lg shadow-lg w-full sm:w-80 sm:h-80 h-64 object-cover" // Styled for responsive design
        />
  
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-red-600">About Our Pizza</h2>
          <p className="text-sm md:text-base mb-4 text-gray-700">
            Our pizza is made with the finest ingredients, offering an authentic taste that you won’t forget. The dough is
            handmade, the sauce is freshly prepared, and the cheese is of the highest quality. Whether you like a classic
            Margherita or prefer a more adventurous topping, we’ve got something for everyone.
          </p>
        </section>
  
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-red-600">Why Choose Our Pizza?</h2>
          <ul className="list-disc pl-5 text-sm md:text-base mb-4 text-gray-700">
            <li>Handmade dough for a crispy and soft base</li>
            <li>Fresh, organic toppings and premium cheese</li>
            <li>Customizable to suit your preferences</li>
            <li>Perfectly baked in a traditional wood-fired oven</li>
            <li>Eco-friendly packaging for a sustainable choice</li>
          </ul>
        </section>
  
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-red-600">How It&apos;s Made</h2>
          <p className="text-sm md:text-base mb-4 text-gray-700">
            Each pizza is carefully crafted with the best ingredients and baked to perfection:
            <ul className="list-decimal pl-5 text-sm md:text-base">
              <li>Start with fresh, handmade dough that is stretched and rolled by hand.</li>
              <li>Top with our signature pizza sauce made from ripe tomatoes and spices.</li>
              <li>Add generous amounts of premium cheese and your choice of fresh toppings.</li>
              <li>Cook in a wood-fired oven for an authentic pizza taste.</li>
            </ul>
          </p>
        </section>
  
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-red-600">Customer Reviews</h2>
          <p className="text-sm md:text-base mb-4 text-gray-700">
            Our customers love our pizza! Here&apos;s what they have to say:
          </p>
          <blockquote className="text-sm md:text-base italic text-gray-500 mb-4">
            “Best pizza I’ve ever had! The crust was perfectly crispy, and the toppings were fresh and flavorful. Will
            definitely be back for more!” – Emily W.
          </blockquote>
          <blockquote className="text-sm md:text-base italic text-gray-500 mb-4">
            “If you love pizza, you’ve got to try this place! The quality of ingredients really shines through in every
            bite.” – Michael S.
          </blockquote>
        </section>
  
        <section className="mt-6 text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-2 text-red-600">Order Now and Taste the Best Pizza!</h2>
          <p className="text-sm md:text-base mb-4 text-gray-700">Ready for a slice of heaven? Click below to place your order now!</p>
          <a
            href="/order"
            className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition text-sm md:text-base"
          >
            Fast Order
          </a>
        </section>
      </div>
    );
  }
  
  export default PizzaDes;
  