import { Deal } from './types';

export const mockDeals: Deal[] = [
  {
    id: '1',
    title: '20% Cashback on Grocery Shopping at Whole Foods',
    description: 'Get 20% cashback on all your grocery purchases at Whole Foods when you use your eligible credit card.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800',
    vendor: 'Whole Foods',
    vendorLogo: 'https://example.com/whole-foods-logo.png',
    discount: 20,
    validUntil: '2024-12-31',
    category: 'Supermarkets',
    terms: [
      'Valid only at participating Whole Foods locations',
      'Maximum cashback of $100 per transaction',
      'Offer valid once per card per day',
    ],
    redemptionSteps: [
      'Pay with your eligible credit card',
      'Cashback will be automatically credited to your account',
      'Allow 3-5 business days for cashback to appear',
    ],
  },
  {
    id: '2',
    title: '5X Miles on Flight Bookings with Delta Airlines',
    description: 'Earn 5X miles on all Delta Airlines flight bookings using your travel rewards card.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800',
    vendor: 'Delta Airlines',
    vendorLogo: 'https://example.com/delta-logo.png',
    discount: 15,
    validUntil: '2024-06-30',
    category: 'Travel',
    terms: [
      'Valid only for direct bookings through Delta Airlines',
      'Bonus miles will be credited within billing cycle',
      'Not valid with other promotions',
    ],
    redemptionSteps: [
      'Book your flight at delta.com',
      'Pay with your eligible credit card',
      'Miles will be automatically credited to your account',
    ],
  },
  {
    id: '3',
    title: '10% Off Movie Tickets at AMC Theatres',
    description: 'Save 10% on all movie ticket purchases at AMC Theatres nationwide.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800',
    vendor: 'AMC Theatres',
    vendorLogo: 'https://example.com/amc-logo.png',
    discount: 10,
    validUntil: '2024-09-30',
    category: 'Entertainment',
    terms: [
      'Valid at all AMC Theatre locations',
      'Not valid for special events or premieres',
      'Maximum discount of $50 per transaction',
    ],
    redemptionSteps: [
      'Purchase tickets at AMC box office or online',
      'Pay with your eligible credit card',
      'Discount will be applied automatically',
    ],
  },
];