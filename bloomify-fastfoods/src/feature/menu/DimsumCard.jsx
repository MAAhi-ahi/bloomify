import { useState } from "react";
import { Card, CardContent } from "../../ui/Card";
import { Button } from "../../ui/Button";

export default function PizzaCard() {
  const [count, setCount] = useState(1);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6 min-h-screen">
      
      {/* Box 1: Text Box (Title + Description) */}
      <div className="w-full max-w-md text-left">
        <h1 className="text-2xl font-bold text-orange-500">Try Our Special Pizza! 🍕</h1>
        <p className="text-gray-700 mt-2">
          Freshly baked with premium ingredients. Order now and enjoy a slice of heaven!
        </p>
      </div>

      {/* Box 2: Pizza Card */}
      <Card className="w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden mt-6">
        {/* Image wrapper for proper fit */}
        <div className="w-full h-48">
          <img
            src="/images/pizza-0.jpg"
            alt="Delicious Pizza"
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex justify-center items-center space-x-4">
            <Button onClick={() => setCount(Math.max(1, count - 1))}>-</Button>
            <span className="text-lg font-semibold">{count}</span>
            <Button onClick={() => setCount(count + 1)}>+</Button>
          </div>

          <h2 className="text-xl font-bold mt-4">Delicious Pizza</h2>
          <div className="flex items-center justify-between mt-2">
            <span className="text-yellow-500 flex items-center">
              <span className="mr-1">⭐</span> 4.8
            </span>
            <span className="text-red-500 flex items-center">
              <span className="mr-1">🔥</span> 280 Calories
            </span>
            <span className="text-gray-500 flex items-center">
              <span className="mr-1">⏱️</span> 15-20 min
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            A delicious pizza with the perfect combination of cheese, tomato, and savory toppings.
          </p>

          {/* Ingredients Section */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Ingredients:</h3>
            <ul className="list-none flex flex-wrap gap-4 justify-center md:justify-start mt-2">
              {[
                { name: "Cheese", src: "/images/cheese.png" },
                { name: "Tomato", src: "/images/tomato.png" },
                { name: "Pepperoni", src: "/images/pepperoni.png" },
                { name: "Olives", src: "/images/olives.png" },
                { name: "Mushrooms", src: "/images/mushrooms.png" },
                { name: "Dough", src: "/images/dough.png" }
              ].map((ingredient, index) => (
                <li key={index} className="flex flex-col items-center">
                  <img
                    src={ingredient.src}
                    alt={ingredient.name}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain mb-2"
                  />
                  {ingredient.name}
                </li>
              ))}
            </ul>
          </div>

          <Button className="w-full bg-yellow-400 text-white mt-4">
            Add to Cart - $12.99
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
