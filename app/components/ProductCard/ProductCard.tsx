import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Define the type for the product prop
interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="overflow-hidden transition-shadow hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="aspect-square relative">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
        </CardContent>
        <CardFooter className="p-4 flex justify-between items-center">
          <p className="text-gray-600">{product.price}</p>
          <Button variant="outline">View</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
