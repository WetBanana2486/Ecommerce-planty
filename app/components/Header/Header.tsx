import Link from 'next/link';
import * as React from "react"
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


export default function Header() {
  return (
    <header className="">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" passHref>
                  <Image src="/Shop_logo_horizontal.jpg" alt="Home" width="80" height="80" />
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  <li className="row-span-3">
                    
                    <NavigationMenuLink>
                      <Link href="/contact">Contact</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <Link href="/blog">Blog</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink>
                      <Link href="/products">Products</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>  
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Category</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4"> 
                  <li>
                <NavigationMenuLink asChild>
                  <Link href="#">1</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">2</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">3</Link>
                </NavigationMenuLink>
              </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
    </header>
  );
}

