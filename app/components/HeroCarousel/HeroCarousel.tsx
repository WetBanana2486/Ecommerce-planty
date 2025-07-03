
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const carouselItems = [
  {
    imageUrl: "/Shop_logo_horizontal.jpg",
    title: "Discover Unique Handmade Goods",
    description: "Explore a curated collection of artisanal crafts from around the world.",
  },
  {
    imageUrl: "/placeholder.svg",
    title: "New Arrivals in Home Decor",
    description: "Find the perfect piece to elevate your living space.",
  },
  {
    imageUrl: "/placeholder.svg",
    title: "Artisans Blog: Behind the Scenes",
    description: "Read stories from our talented creators and learn about their craft.",
  },
];

export function HeroCarousel() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-96">
              <Image
                src={item.imageUrl}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4 rounded-lg">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-lg text-center mt-2">{item.description}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
