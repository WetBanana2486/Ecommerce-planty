
import Image from 'next/image';

export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-white/20">
      <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-75"></div>
      <div className="relative h-full overflow-hidden rounded-3xl">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden xl:aspect-h-8 xl:aspect-w-7">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="p-4 text-white">
          <h3 className="text-sm text-gray-200">{product.category}</h3>
          <p className="mt-1 text-lg font-medium">{product.name}</p>
          <p className="mt-1 text-xl font-bold">{product.price}</p>
        </div>
      </div>
    </div>
  );
}
