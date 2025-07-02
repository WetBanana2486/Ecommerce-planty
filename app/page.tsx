import Link from 'next/link';
import { HeroCarousel } from './components/HeroCarousel/HeroCarousel';
import { ProductCard } from '@/app/components/ProductCard/ProductCard';

// Placeholder data for recommended products
const recommendedProducts = [
  { id: 1, name: "Handcrafted Vase", price: "$45.00", imageUrl: "/placeholder.svg" },
  { id: 2, name: "Woven Wall Hanging", price: "$75.00", imageUrl: "/placeholder.svg" },
  { id: 3, name: "Ceramic Mug Set", price: "$35.00", imageUrl: "/placeholder.svg" },
  { id: 4, name: "Linen Throw Pillow", price: "$55.00", imageUrl: "/placeholder.svg" },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section w-full flex items-center justify-center py-12">
        <HeroCarousel />
      </section>

      {/* Recommended Products Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Recommended For You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {recommendedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}