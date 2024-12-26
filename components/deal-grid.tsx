'use client';

import * as React from 'react';
import { DealCard } from '@/components/deal-card';
import { mockDeals } from '@/lib/mock-data';

export function DealGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {mockDeals.map((deal) => (
        <DealCard key={deal.id} deal={deal} />
      ))}
    </div>
  );
}