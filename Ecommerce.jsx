import React, { useState } from "react";
import { Card, CardContent } from "./ui/card"; // Corrected relative path
import { Button } from "./ui/button"; // Corrected relative path
import { ShoppingCart } from "lucide-react";

const Ecommerce = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="p-4">
      <Card>
        <CardContent>
          <h2 className="text-lg font-bold">Product Name</h2>
          <p className="text-gray-600">$20.00</p>
          <Button onClick={() => addToCart("Product Name")}>
            <ShoppingCart size={16} /> Add to Cart
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Ecommerce;
