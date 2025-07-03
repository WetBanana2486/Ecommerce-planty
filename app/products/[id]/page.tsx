"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

// Placeholder data for products - in a real app, you would fetch this
const products = [
  { id: 1, name: "Handcrafted Vase", price: "$45.00", imageUrl: "/placeholder.svg", description: "A beautifully handcrafted vase, perfect for adding a touch of elegance to any room. Each piece is unique." },
  { id: 2, name: "Woven Wall Hanging", price: "$75.00", imageUrl: "/placeholder.svg", description: "Add texture and warmth to your walls with this intricate woven hanging, made from natural fibers." },
  { id: 3, name: "Ceramic Mug Set", price: "$35.00", imageUrl: "/placeholder.svg", description: "A set of two artisanal ceramic mugs, ideal for your morning coffee or tea. Microwave and dishwasher safe." },
  { id: 4, name: "Linen Throw Pillow", price: "$55.00", imageUrl: "/placeholder.svg", description: "A soft and cozy linen throw pillow, perfect for your sofa or bed. Comes in a variety of neutral tones." },
  { id: 5, name: "Wooden Serving Board", price: "$65.00", imageUrl: "/placeholder.svg", description: "A rustic wooden serving board, perfect for charcuterie or appetizers. Made from reclaimed acacia wood." },
  { id: 6, name: "Hand-poured Candle", price: "$25.00", imageUrl: "/placeholder.svg", description: "A soy wax candle hand-poured into a reusable ceramic vessel. Scented with essential oils." },
];

// This function simulates fetching a single product by its ID
function getProductById(id: number) {
  return products.find((product) => product.id === id);
}

interface ProductDetailPageProps {
  params: { id: string };
}

export default function ProductDetailPage({ params }: any) {
  const product = getProductById(Number(params.id));

  if (!product) {
    return <div className="container mx-auto py-8 text-center">Product not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="aspect-square relative bg-gray-100 rounded-lg">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-2xl text-gray-800">{product.price}</p>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
          <Button size="lg">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}
