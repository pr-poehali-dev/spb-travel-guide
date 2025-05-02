
export interface Attraction {
  id: number;
  name: string;
  description: string;
  coordinates: {
    x: number;
    y: number;
  };
  image: string;
  additionalImages?: string[];
  category: 'museums' | 'historical' | 'religious' | 'streets';
  address: string;
  street: string;
  openingHours?: string;
  ticketPrice?: string;
}

export interface Street {
  id: number;
  name: string;
  points: Array<{ x: number; y: number }>;
  width: number;
  color: string;
  isMainStreet: boolean;
}

export interface District {
  name: string;
  center: { x: number; y: number };
  color: string;
}

export interface Bridge {
  name: string;
  position: { x: number; y: number };
}
