import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroBanner() {
  return (
    <section className="relative mb-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center py-12 sm:py-20 md:py-32">
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1920)',
            }}
          />
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Unlock Premium
              <span className="text-primary"> Credit Card Deals</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-base sm:text-lg text-muted-foreground">
              Discover exclusive rewards, cashback offers, and special promotions from top credit card providers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild>
              <Link href="/deals">
                Browse Deals <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/compare">Compare Cards</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}