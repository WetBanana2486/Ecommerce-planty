import { ProductCard } from "@/app/components/ProductCard/ProductCard";

// Placeholder data for products
const products = [
  { id: 1, name: "Handcrafted Vase", price: "$45.00", imageUrl: "/placeholder.svg" },
  { id: 2, name: "Woven Wall Hanging", price: "$75.00", imageUrl: "/placeholder.svg" },
  { id: 3, name: "Ceramic Mug Set", price: "$35.00", imageUrl: "/placeholder.svg" },
  { id: 4, name: "Linen Throw Pillow", price: "$55.00", imageUrl: "/placeholder.svg" },
  { id: 5, name: "Wooden Serving Board", price: "$65.00", imageUrl: "/placeholder.svg" },
  { id: 6, name: "Hand-poured Candle", price: "$25.00", imageUrl: "/placeholder.svg" },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
