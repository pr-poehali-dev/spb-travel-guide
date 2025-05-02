
import { Attraction, Street, District, Bridge } from '@/types/attractions';

export const attractions: Attraction[] = [
  {
    id: 1,
    name: 'The Hermitage Museum',
    description: 'One of the largest and oldest museums in the world with over 3 million items in its collection. Located in the Winter Palace, the former residence of Russian emperors.',
    coordinates: { x: 55, y: 45 },
    image: 'https://images.unsplash.com/photo-1556610961-2fecc5927173',
    additionalImages: [
      'https://images.unsplash.com/photo-1563789031959-4c02bcb41319',
      'https://images.unsplash.com/photo-1592397885777-001ff4bad688',
      'https://images.unsplash.com/photo-1551258292-9a6207753341'
    ],
    category: 'museums',
    address: 'Palace Square, 2, St. Petersburg, 190000',
    street: 'Palace Square',
    openingHours: 'Tue-Sun: 10:30-18:00, Wed & Fri: 10:30-21:00',
    ticketPrice: 'From 300 to 700 RUB'
  },
  {
    id: 2,
    name: 'Peter and Paul Fortress',
    description: 'The original citadel of St. Petersburg founded by Peter the Great in 1703. The fortress contains several notable buildings including Peter and Paul Cathedral with the burial vault of Russian emperors.',
    coordinates: { x: 40, y: 30 },
    image: 'https://images.unsplash.com/photo-1564594215292-9d3a53cd1c3a',
    additionalImages: [
      'https://images.unsplash.com/photo-1580828034344-eef5f1fb1c0f',
      'https://images.unsplash.com/photo-1601067373541-53168f26da65',
      'https://images.unsplash.com/photo-1601067373548-d240e8830ff4'
    ],
    category: 'historical',
    address: 'Peter and Paul Fortress, St. Petersburg, 197046',
    street: 'Petropavlovskaya Fortress',
    openingHours: 'Daily: 10:00-18:00, Wed: 10:00-21:00',
    ticketPrice: 'From 200 to 450 RUB'
  },
  {
    id: 3,
    name: 'Church of the Savior on Blood',
    description: 'A church built on the site where Emperor Alexander II was assassinated in 1881. The church is famous for its ornate, colorful onion domes and intricate mosaic interior.',
    coordinates: { x: 58, y: 50 },
    image: 'https://images.unsplash.com/photo-1556610961-2f1b38fb5e6d',
    additionalImages: [
      'https://images.unsplash.com/photo-1598008663818-9dce95359e84',
      'https://images.unsplash.com/photo-1598008733892-af193afb3dbd',
      'https://images.unsplash.com/photo-1547492411-4857edb1e3e5'
    ],
    category: 'religious',
    address: 'Griboyedov channel embankment, 2А, St. Petersburg, 191186',
    street: 'Griboyedov Canal Embankment',
    openingHours: 'Thu-Tue: 10:30-18:00',
    ticketPrice: '400 RUB'
  },
  {
    id: 4,
    name: 'St. Isaac\'s Cathedral',
    description: 'The largest Russian Orthodox cathedral in the city with a gold dome that dominates the skyline. The observation deck offers panoramic views of the city.',
    coordinates: { x: 60, y: 55 },
    image: 'https://images.unsplash.com/photo-1564594219-49dfea63b658',
    additionalImages: [
      'https://images.unsplash.com/photo-1592818019836-fe2af33b1b14',
      'https://images.unsplash.com/photo-1576067055423-3a4c1b319ff2',
      'https://images.unsplash.com/photo-1565028842-8a807075b15c'
    ],
    category: 'religious',
    address: 'St. Isaac\'s Square, 4, St. Petersburg, 190000',
    street: 'St. Isaac\'s Square',
    openingHours: 'Thu-Tue: 10:30-18:00',
    ticketPrice: 'Cathedral: 350 RUB, Colonnade: 300 RUB'
  },
  {
    id: 5,
    name: 'Nevsky Prospect',
    description: 'The main street of the city, featuring numerous shops, restaurants, and historic buildings. It runs from the Admiralty to the Alexander Nevsky Monastery.',
    coordinates: { x: 70, y: 43 },
    image: 'https://images.unsplash.com/photo-1564594286766-5391dc63c95b',
    additionalImages: [
      'https://images.unsplash.com/photo-1595876745706-33162539747a',
      'https://images.unsplash.com/photo-1521105637231-c61c3b7cbc2a',
      'https://images.unsplash.com/photo-1512470929270-31af1b3e34ac'
    ],
    category: 'streets',
    address: 'Nevsky Prospect, St. Petersburg',
    street: 'Nevsky Prospect',
    openingHours: 'Always open',
    ticketPrice: 'Free'
  },
  {
    id: 6,
    name: 'Palace Square',
    description: 'The central city square of St. Petersburg, connecting Nevsky Prospect with Palace Bridge. It features the Alexander Column and is surrounded by the Winter Palace.',
    coordinates: { x: 53, y: 47 },
    image: 'https://images.unsplash.com/photo-1610569244414-5e7453a445ad',
    additionalImages: [
      'https://images.unsplash.com/photo-1582734098724-812af1288ef2',
      'https://images.unsplash.com/photo-1598875791954-46000ac9a046',
      'https://images.unsplash.com/photo-1572805388137-c2303dd33519'
    ],
    category: 'historical',
    address: 'Palace Square, St. Petersburg, 198324',
    street: 'Palace Square',
    openingHours: 'Always open',
    ticketPrice: 'Free'
  },
  {
    id: 7,
    name: 'Kazan Cathedral',
    description: 'A cathedral built in the early 19th century in neoclassical style. It was modeled after St. Peter\'s Basilica in Rome and houses the icon of Our Lady of Kazan.',
    coordinates: { x: 65, y: 48 },
    image: 'https://images.unsplash.com/photo-1566224425427-998683eb0184',
    additionalImages: [
      'https://images.unsplash.com/photo-1600001036276-31cfba087d17',
      'https://images.unsplash.com/photo-1612978233689-9554c33d662c',
      'https://images.unsplash.com/photo-1597910037310-33e6334adfd8'
    ],
    category: 'religious',
    address: 'Kazanskaya Square, 2, St. Petersburg, 191186',
    street: 'Nevsky Prospect',
    openingHours: 'Daily: 7:00-20:00',
    ticketPrice: 'Free (donations welcome)'
  },
  {
    id: 8,
    name: 'Russian Museum',
    description: 'The world\'s largest collection of Russian art, housed in the Mikhailovsky Palace. It contains over 400,000 exhibits covering all major periods and styles of Russian art.',
    coordinates: { x: 62, y: 52 },
    image: 'https://images.unsplash.com/photo-1541447271487-09612b3f49f7',
    additionalImages: [
      'https://images.unsplash.com/photo-1582475849227-2748d25e0ad3',
      'https://images.unsplash.com/photo-1577714042895-0f0c7b80f39a',
      'https://images.unsplash.com/photo-1578926375605-eaf7559b1458'
    ],
    category: 'museums',
    address: 'Inzhenernaya St, 4, St. Petersburg, 191186',
    street: 'Arts Square',
    openingHours: 'Mon-Sun: 10:00-18:00, Thu: 13:00-21:00',
    ticketPrice: '450 RUB'
  },
  {
    id: 9,
    name: 'Mariinsky Theatre',
    description: 'One of the most famous ballet and opera theaters in the world, home to the Mariinsky Ballet, Opera and Orchestra. The historic venue dates back to 1860.',
    coordinates: { x: 75, y: 60 },
    image: 'https://images.unsplash.com/photo-1518192874663-506c4640007d',
    additionalImages: [
      'https://images.unsplash.com/photo-1547126996-307fca4f0103',
      'https://images.unsplash.com/photo-1504080400954-51514ba22dc3',
      'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf'
    ],
    category: 'museums',
    address: 'Theatre Square, 1, St. Petersburg, 190000',
    street: 'Theatre Square',
    openingHours: 'Depends on performance schedule',
    ticketPrice: 'From 1000 to 10000 RUB'
  },
  {
    id: 10,
    name: 'Summer Garden',
    description: 'The oldest garden in St. Petersburg, designed during the time of Peter the Great. It features fountains, Italian statues, and the ornate Summer Palace.',
    coordinates: { x: 45, y: 40 },
    image: 'https://images.unsplash.com/photo-1552675751-c8f0c8f70586',
    additionalImages: [
      'https://images.unsplash.com/photo-1602869502531-e04aa5ac5e58',
      'https://images.unsplash.com/photo-1589129721948-466e347c59b6',
      'https://images.unsplash.com/photo-1551686276-e387efe5a4b2'
    ],
    category: 'historical',
    address: 'Embankment of the Neva River, St. Petersburg, 191186',
    street: 'Neva River Embankment',
    openingHours: 'Summer: 10:00-22:00, Winter: 10:00-20:00',
    ticketPrice: 'Free'
  }
];

export const streets: Street[] = [
  {
    id: 1,
    name: 'Nevsky Prospect',
    points: [
      { x: 50, y: 40 },
      { x: 60, y: 42 },
      { x: 70, y: 43 },
      { x: 80, y: 45 },
      { x: 90, y: 48 }
    ],
    width: 4,
    color: '#e67e22',
    isMainStreet: true
  },
  {
    id: 2,
    name: 'Bolshaya Morskaya Street',
    points: [
      { x: 55, y: 50 },
      { x: 60, y: 55 },
      { x: 65, y: 60 }
    ],
    width: 3,
    color: '#f39c12',
    isMainStreet: false
  },
  {
    id: 3,
    name: 'Gorokhovaya Street',
    points: [
      { x: 57, y: 45 },
      { x: 62, y: 55 },
      { x: 67, y: 65 }
    ],
    width: 3,
    color: '#f39c12',
    isMainStreet: false
  },
  {
    id: 4,
    name: 'Liteyny Prospect',
    points: [
      { x: 65, y: 35 },
      { x: 68, y: 50 }
    ],
    width: 3,
    color: '#f39c12',
    isMainStreet: false
  },
  {
    id: 5,
    name: 'Sadovaya Street',
    points: [
      { x: 40, y: 45 },
      { x: 50, y: 48 },
      { x: 65, y: 50 },
      { x: 75, y: 55 }
    ],
    width: 3,
    color: '#f39c12',
    isMainStreet: false
  },
  {
    id: 6,
    name: 'Palace Embankment',
    points: [
      { x: 40, y: 38 },
      { x: 50, y: 40 },
      { x: 60, y: 38 }
    ],
    width: 3,
    color: '#3498db',
    isMainStreet: false
  },
  {
    id: 7,
    name: 'Griboyedov Canal Embankment',
    points: [
      { x: 53, y: 45 },
      { x: 58, y: 50 },
      { x: 63, y: 53 },
      { x: 70, y: 55 }
    ],
    width: 3,
    color: '#3498db',
    isMainStreet: false
  },
  {
    id: 8,
    name: 'Millionnaya Street',
    points: [
      { x: 45, y: 42 },
      { x: 55, y: 45 }
    ],
    width: 2,
    color: '#f39c12',
    isMainStreet: false
  },
  {
    id: 9,
    name: 'St. Isaac\'s Square',
    points: [
      { x: 58, y: 55 },
      { x: 62, y: 55 }
    ],
    width: 4,
    color: '#7f8c8d',
    isMainStreet: false
  }
];

export const cityDistricts: District[] = [
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

export const bridges: Bridge[] = [
  { name: 'Palace Bridge', position: { x: 50, y: 38 } },
  { name: 'Trinity Bridge', position: { x: 45, y: 32 } },
  { name: 'Liteyny Bridge', position: { x: 65, y: 35 } },
  { name: 'Anichkov Bridge', position: { x: 68, y: 46 } }
];
