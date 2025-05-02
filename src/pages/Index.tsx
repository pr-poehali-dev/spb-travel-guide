
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

// Top attractions in St. Petersburg with their coordinates
const attractions = [
  {
    id: 1,
    name: 'The Hermitage Museum',
    description: 'One of the largest and oldest museums in the world with over 3 million items in its collection.',
    coordinates: { x: 50, y: 45 },
    image: 'https://images.unsplash.com/photo-1556610961-2fecc5927173',
    category: 'museums'
  },
  {
    id: 2,
    name: 'Peter and Paul Fortress',
    description: 'The original citadel of St. Petersburg founded by Peter the Great in 1703.',
    coordinates: { x: 40, y: 30 },
    image: 'https://images.unsplash.com/photo-1564594215292-9d3a53cd1c3a',
    category: 'historical'
  },
  {
    id: 3,
    name: 'Church of the Savior on Blood',
    description: 'A church built on the site where Emperor Alexander II was assassinated in 1881.',
    coordinates: { x: 55, y: 50 },
    image: 'https://images.unsplash.com/photo-1556610961-2f1b38fb5e6d',
    category: 'religious'
  },
  {
    id: 4,
    name: 'St. Isaac\'s Cathedral',
    description: 'The largest Russian Orthodox cathedral in the city with a gold dome that dominates the skyline.',
    coordinates: { x: 60, y: 55 },
    image: 'https://images.unsplash.com/photo-1564594219-49dfea63b658',
    category: 'religious'
  },
  {
    id: 5,
    name: 'Nevsky Prospect',
    description: 'The main street of the city, featuring numerous shops, restaurants, and historic buildings.',
    coordinates: { x: 70, y: 45 },
    image: 'https://images.unsplash.com/photo-1564594286766-5391dc63c95b',
    category: 'streets'
  }
];

const Index = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredAttractions = activeFilter === 'all' 
    ? attractions 
    : attractions.filter(attr => attr.category === activeFilter);

  const handleAttractionClick = (id: number) => {
    setSelectedAttraction(id);
  };

  const selectedAttractionData = attractions.find(attr => attr.id === selectedAttraction);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-800">
            St. Petersburg Travel Guide
          </h1>
          <p className="text-gray-600 mt-1">
            Explore the cultural capital of Russia
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left side - City info */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Welcome to St. Petersburg</CardTitle>
                <CardDescription>The Venice of the North</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Founded by Peter the Great in 1703, St. Petersburg is known for its stunning architecture, rich cultural heritage, and beautiful canals.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Icon name="CalendarClock" size={16} />
                  <span>Best time to visit: May to September</span>
                </div>
                <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
                  <Icon name="Languages" size={16} />
                  <span>Language: Russian (English is common in tourist areas)</span>
                </div>
                <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
                  <Icon name="Plane" size={16} />
                  <span>Main airport: Pulkovo International Airport</span>
                </div>
              </CardContent>
            </Card>

            {/* Attraction details */}
            {selectedAttractionData && (
              <Card className="mb-6 animate-fade-in">
                <CardHeader>
                  <CardTitle>{selectedAttractionData.name}</CardTitle>
                  <CardDescription>Famous Landmark</CardDescription>
                </CardHeader>
                <CardContent>
                  <div 
                    className="h-40 bg-cover bg-center rounded-md mb-4" 
                    style={{ backgroundImage: `url(${selectedAttractionData.image})` }}
                  />
                  <p>{selectedAttractionData.description}</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right side - Map and attractions */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>City Map</CardTitle>
                <CardDescription>Interactive Map of St. Petersburg</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Map container with markers */}
                <div className="relative h-[400px] bg-blue-50 rounded-md border border-gray-200 overflow-hidden">
                  {/* Map background */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555999036-0083dad67046)' }}
                  />
                  
                  {/* City center marker */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-blue-700 rounded-full animate-pulse"></div>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-700 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                      City Center
                    </div>
                  </div>
                  
                  {/* Attraction markers */}
                  {filteredAttractions.map((attraction) => (
                    <button
                      key={attraction.id}
                      className={`absolute w-6 h-6 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 ${
                        selectedAttraction === attraction.id 
                          ? 'bg-red-500 text-white' 
                          : 'bg-white text-red-500 border-2 border-red-500'
                      }`}
                      style={{ 
                        top: `${attraction.coordinates.y}%`, 
                        left: `${attraction.coordinates.x}%` 
                      }}
                      onClick={() => handleAttractionClick(attraction.id)}
                    >
                      <span className="text-xs font-bold">{attraction.id}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Attractions list */}
            <Card>
              <CardHeader>
                <CardTitle>Top Attractions</CardTitle>
                <CardDescription>Must-visit places in St. Petersburg</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="all" className="w-full" onValueChange={setActiveFilter}>
                  <TabsList className="grid grid-cols-5 mb-4">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="museums">Museums</TabsTrigger>
                    <TabsTrigger value="historical">Historical</TabsTrigger>
                    <TabsTrigger value="religious">Religious</TabsTrigger>
                    <TabsTrigger value="streets">Streets</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filteredAttractions.map((attraction) => (
                        <div 
                          key={attraction.id}
                          className={`cursor-pointer rounded-lg p-3 transition-all duration-200 hover-scale ${
                            selectedAttraction === attraction.id 
                              ? 'bg-blue-50 border border-blue-200' 
                              : 'bg-white border border-gray-100 hover:border-blue-200'
                          }`}
                          onClick={() => handleAttractionClick(attraction.id)}
                        >
                          <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center">
                              {attraction.id}
                            </div>
                            <div>
                              <h3 className="font-medium">{attraction.name}</h3>
                              <p className="text-sm text-gray-500 line-clamp-2">{attraction.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  {['museums', 'historical', 'religious', 'streets'].map((category) => (
                    <TabsContent key={category} value={category} className="mt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {attractions
                          .filter(attr => attr.category === category)
                          .map((attraction) => (
                            <div 
                              key={attraction.id}
                              className={`cursor-pointer rounded-lg p-3 transition-all duration-200 hover-scale ${
                                selectedAttraction === attraction.id 
                                  ? 'bg-blue-50 border border-blue-200' 
                                  : 'bg-white border border-gray-100 hover:border-blue-200'
                              }`}
                              onClick={() => handleAttractionClick(attraction.id)}
                            >
                              <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center">
                                  {attraction.id}
                                </div>
                                <div>
                                  <h3 className="font-medium">{attraction.name}</h3>
                                  <p className="text-sm text-gray-500 line-clamp-2">{attraction.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-blue-800 text-white py-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">St. Petersburg Travel Guide</h2>
              <p className="text-blue-100">Your companion for exploring the cultural capital of Russia</p>
            </div>
            <div className="flex space-x-4">
              <button className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition-colors">
                <Icon name="Facebook" size={20} />
              </button>
              <button className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition-colors">
                <Icon name="Instagram" size={20} />
              </button>
              <button className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition-colors">
                <Icon name="Twitter" size={20} />
              </button>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-blue-700 text-center text-blue-200 text-sm">
            © {new Date().getFullYear()} St. Petersburg Travel Guide. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
