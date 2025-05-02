
import { Attraction } from '@/types/attractions';

export const attractions: Attraction[] = [
  {
    id: 1,
    name: 'The Hermitage Museum',
    description: 'One of the largest and oldest museums in the world with over 3 million items in its collection. Located in the Winter Palace, the former residence of Russian emperors.',
    coordinates: { x: 55, y: 45 },
    image: 'https://images.unsplash.com/photo-1556610961-2fecc5927173',
    category: 'museums'
  },
  {
    id: 2,
    name: 'Peter and Paul Fortress',
    description: 'The original citadel of St. Petersburg founded by Peter the Great in 1703. The fortress contains several notable buildings including Peter and Paul Cathedral with the burial vault of Russian emperors.',
    coordinates: { x: 40, y: 30 },
    image: 'https://images.unsplash.com/photo-1564594215292-9d3a53cd1c3a',
    category: 'historical'
  },
  {
    id: 3,
    name: 'Church of the Savior on Blood',
    description: 'A church built on the site where Emperor Alexander II was assassinated in 1881. The church is famous for its ornate, colorful onion domes and intricate mosaic interior.',
    coordinates: { x: 58, y: 50 },
    image: 'https://images.unsplash.com/photo-1556610961-2f1b38fb5e6d',
    category: 'religious'
  },
  {
    id: 4,
    name: 'St. Isaac\'s Cathedral',
    description: 'The largest Russian Orthodox cathedral in the city with a gold dome that dominates the skyline. The observation deck offers panoramic views of the city.',
    coordinates: { x: 60, y: 55 },
    image: 'https://images.unsplash.com/photo-1564594219-49dfea63b658',
    category: 'religious'
  },
  {
    id: 5,
    name: 'Nevsky Prospect',
    description: 'The main street of the city, featuring numerous shops, restaurants, and historic buildings. It runs from the Admiralty to the Alexander Nevsky Monastery.',
    coordinates: { x: 70, y: 43 },
    image: 'https://images.unsplash.com/photo-1564594286766-5391dc63c95b',
    category: 'streets'
  },
  {
    id: 6,
    name: 'Palace Square',
    description: 'The central city square of St. Petersburg, connecting Nevsky Prospect with Palace Bridge. It features the Alexander Column and is surrounded by the Winter Palace.',
    coordinates: { x: 53, y: 47 },
    image: 'https://images.unsplash.com/photo-1610569244414-5e7453a445ad',
    category: 'historical'
  },
  {
    id: 7,
    name: 'Kazan Cathedral',
    description: 'A cathedral built in the early 19th century in neoclassical style. It was modeled after St. Peter\'s Basilica in Rome and houses the icon of Our Lady of Kazan.',
    coordinates: { x: 65, y: 48 },
    image: 'https://images.unsplash.com/photo-1566224425427-998683eb0184',
    category: 'religious'
  },
  {
    id: 8,
    name: 'Russian Museum',
    description: 'The world\'s largest collection of Russian art, housed in the Mikhailovsky Palace. It contains over 400,000 exhibits covering all major periods and styles of Russian art.',
    coordinates: { x: 62, y: 52 },
    image: 'https://images.unsplash.com/photo-1541447271487-09612b3f49f7',
    category: 'museums'
  },
  {
    id: 9,
    name: 'Mariinsky Theatre',
    description: 'One of the most famous ballet and opera theaters in the world, home to the Mariinsky Ballet, Opera and Orchestra. The historic venue dates back to 1860.',
    coordinates: { x: 75, y: 60 },
    image: 'https://images.unsplash.com/photo-1518192874663-506c4640007d',
    category: 'museums'
  },
  {
    id: 10,
    name: 'Summer Garden',
    description: 'The oldest garden in St. Petersburg, designed during the time of Peter the Great. It features fountains, Italian statues, and the ornate Summer Palace.',
    coordinates: { x: 45, y: 40 },
    image: 'https://images.unsplash.com/photo-1552675751-c8f0c8f70586',
    category: 'historical'
  }
];

export const cityDistricts = [
  { name: 'Admiralteysky', center: { x: 55, y: 50 }, color: '#3498db' },
  { name: 'Vasileostrovsky', center: { x: 35, y: 40 }, color: '#e74c3c' },
  { name: 'Tsentralny', center: { x: 60, y: 45 }, color: '#2ecc71' },
  { name: 'Petrogradsky', center: { x: 40, y: 25 }, color: '#f39c12' },
  { name: 'Moskovsky', center: { x: 70, y: 70 }, color: '#9b59b6' }
];

export const riverPaths = [
  // Neva River - main path
  'M10,40 C30,35 50,45 70,40 C90,35 100,40 120,38',
  // Fontanka River
  'M40,50 C45,45 55,40 65,45 C75,50 85,55 90,50',
  // Moyka River
  'M35,45 C45,48 55,46 65,49 C75,46 85,48 90,45'
];

export const bridges = [
  { name: 'Palace Bridge', position: { x: 50, y: 38 } },
  { name: 'Trinity Bridge', position: { x: 45, y: 32 } },
  { name: 'Liteyny Bridge', position: { x: 65, y: 35 } },
  { name: 'Anichkov Bridge', position: { x: 68, y: 46 } }
];
