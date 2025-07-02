import Link from 'next/link';
import * as React from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';

const categories: { title: string; href: string; description: string }[] = [
  {
    title: "Home Decor",
    href: "/products/home-decor",
    description: "Artisanal pieces to bring warmth and style to your home.",
  },
  {
    title: "Jewelry",
    href: "/products/jewelry",
    description: "Handcrafted necklaces, bracelets, and earrings.",
  },
  {
    title: "Pottery",
    href: "/products/pottery",
    description: "Unique, hand-thrown pottery and ceramic goods.",
  },
  {
    title: "Textiles",
    href: "/products/textiles",
    description: "Woven blankets, pillows, and wall hangings.",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        {/* Left Side: Logo & Main Nav */}
        <div className="flex items-center gap-6">
          <Link href="/" className="mr-4 flex items-center">
            <Image src="/Shop_logo.png" alt="Artisans" width="40" height="40" />
            <span className="ml-2 font-bold">Artisans</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {/* Categories Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {categories.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Info Pages Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>More</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                     <li className="row-span-2">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/about"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Our Story
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Learn about our mission to support independent artisans.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/blog" title="Blog">
                      News, stories, and features on our talented artisans.
                    </ListItem>
                    <ListItem href="/contact" title="Contact Us">
                      Get in touch with us for any questions or feedback.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

               {/* All Products Link */}
              <NavigationMenuItem>
                <Link href="/products" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    All Products
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side: Auth Links */}
        <div className="flex items-center gap-4">
          <Link href="/login" passHref>
             <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/signup" passHref>
             <Button variant="default">Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

