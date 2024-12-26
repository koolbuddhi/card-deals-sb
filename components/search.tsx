'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Search as SearchIcon } from 'lucide-react';

export function Search() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-96 lg:w-96"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline-flex">Search deals...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Popular Categories">
            <CommandItem onSelect={() => router.push('/category/supermarkets')}>
              Supermarkets
            </CommandItem>
            <CommandItem onSelect={() => router.push('/category/travel')}>
              Travel
            </CommandItem>
            <CommandItem onSelect={() => router.push('/category/dining')}>
              Dining
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Recent Searches">
            <CommandItem>20% off at Amazon</CommandItem>
            <CommandItem>Travel miles bonus</CommandItem>
            <CommandItem>Dining cashback</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}