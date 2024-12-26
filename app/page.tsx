import { DealGrid } from '@/components/deal-grid';
import { HeroBanner } from '@/components/hero-banner';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroBanner />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="py-8 space-y-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tight">Featured Deals</h2>
            <p className="text-muted-foreground">
              Discover the best credit card deals and offers available right now.
            </p>
          </div>
          <DealGrid />
        </section>
      </div>
    </div>
  );
}