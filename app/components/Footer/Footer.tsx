import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const footerNavs = [
  {
    label: "Shop",
    items: [
      { href: '/products/home-decor', name: 'Home Decor' },
      { href: '/products/jewelry', name: 'Jewelry' },
      { href: '/products/pottery', name: 'Pottery' },
      { href: '/products/textiles', name: 'Textiles' },
    ],
  },
  {
    label: "About",
    items: [
      { href: '/about', name: 'Our Story' },
      { href: '/blog', name: 'Blog' },
      { href: '/contact', name: 'Contact Us' },
    ],
  },
  {
    label: "Support",
    items: [
      { href: '/faq', name: 'FAQ' },
      { href: '/shipping', name: 'Shipping & Returns' },
      { href: '/privacy', name: 'Privacy Policy' },
      { href: '/terms', name: 'Terms of Service' },
    ],
  },
];

const socialLinks = [
  { href: '#', icon: 'fab fa-facebook-f', name: 'Facebook' },
  { href: '#', icon: 'fab fa-instagram', name: 'Instagram' },
  { href: '#', icon: 'fab fa-pinterest-p', name: 'Pinterest' },
];

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* About & Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold">Artisans</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A marketplace for unique, handmade goods.
            </p>
            <div className="mt-4">
              <p className="font-medium">Stay in the loop</p>
              <form className="mt-2 flex gap-2">
                <Input type="email" placeholder="Enter your email" className="max-w-xs" />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerNavs.map((nav) => (
              <div key={nav.label}>
                <h4 className="font-semibold">{nav.label}</h4>
                <ul className="mt-4 space-y-2">
                  {nav.items.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t py-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Artisans. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {/* Social media icons would go here. Using text links as placeholders. */}
            {socialLinks.map((link) => (
               <Link key={link.name} href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                  {link.name}
                </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
