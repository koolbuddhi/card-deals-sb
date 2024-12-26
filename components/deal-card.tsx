'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bookmark, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { type Deal } from '@/lib/types';

interface DealCardProps {
  deal: Deal;
}

export function DealCard({ deal }: DealCardProps) {
  const [isSaved, setIsSaved] = React.useState(false);

  return (
    <Card className="group overflow-hidden">
      <Link href={`/deal/${deal.id}`}>
        <div className="relative">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={deal.image}
              alt={deal.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </AspectRatio>
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
            <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white shadow-lg">
              <Image
                src={deal.vendorLogo}
                alt={deal.vendor}
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-primary text-primary-foreground px-2 py-1 text-sm font-medium rounded">
            {deal.discount}% Off
          </div>
        </div>
      </Link>
      <div className="p-3 sm:p-4">
        <div className="space-y-2">
          <h3 className="font-semibold leading-none tracking-tight line-clamp-2">
            {deal.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            Valid until {new Date(deal.validUntil).toLocaleDateString()}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/deal/${deal.id}`}>View Deal</Link>
          </Button>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSaved(!isSaved)}
              className={cn(
                'h-8 w-8',
                isSaved && 'text-primary'
              )}
            >
              <Bookmark className="h-4 w-4" />
              <span className="sr-only">Save deal</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
            >
              <Share2 className="h-4 w-4" />
              <span className="sr-only">Share deal</span>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}