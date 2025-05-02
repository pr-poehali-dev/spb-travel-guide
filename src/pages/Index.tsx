
import { useState } from 'react';
import { attractions } from '@/data/attractions';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import CityInfoCard from '@/components/CityInfoCard';
import AttractionDetails from '@/components/AttractionDetails';
import CityMap from '@/components/CityMap';
import AttractionsList from '@/components/AttractionsList';

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
      <SiteHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left side - City info */}
          <div className="lg:col-span-1">
            <CityInfoCard />
            <AttractionDetails attraction={selectedAttractionData} />
          </div>

          {/* Right side - Map and attractions */}
          <div className="lg:col-span-2">
            <CityMap 
              attractions={filteredAttractions}
              selectedAttraction={selectedAttraction}
              onAttractionClick={handleAttractionClick}
            />
            <AttractionsList 
              attractions={attractions}
              selectedAttraction={selectedAttraction}
              onAttractionClick={handleAttractionClick}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
