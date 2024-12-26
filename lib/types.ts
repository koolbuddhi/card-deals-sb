export interface Deal {
  id: string;
  title: string;
  description: string;
  image: string;
  vendor: string;
  vendorLogo: string;
  discount: number;
  validUntil: string;
  category: string;
  terms: string[];
  redemptionSteps: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  preferences: {
    categories: string[];
    defaultLandingPage: string;
    notifications: {
      email: boolean;
      push: boolean;
      frequency: 'daily' | 'weekly' | 'monthly';
    };
  };
  cards: CreditCard[];
}

export interface CreditCard {
  id: string;
  bank: string;
  type: string;
  lastFourDigits: string;
  expiryDate: string;
}