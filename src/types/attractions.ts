
export interface Attraction {
  id: number;
  name: string;
  description: string;
  coordinates: {
    x: number;
    y: number;
  };
  image: string;
  category: 'museums' | 'historical' | 'religious' | 'streets';
}
