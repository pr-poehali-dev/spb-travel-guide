
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Attraction } from '@/types/attractions';

interface AttractionsListProps {
  attractions: Attraction[];
  selectedAttraction: number | null;
  onAttractionClick: (id: number) => void;
  activeFilter: string;
  setActiveFilter: (value: string) => void;
}

const AttractionsList = ({ 
  attractions, 
  selectedAttraction, 
  onAttractionClick, 
  activeFilter, 
  setActiveFilter 
}: AttractionsListProps) => {
  // Categories for filtering
  const categories = ['all', 'museums', 'historical', 'religious', 'streets'];
  
  // Get filtered attractions based on active filter
  const filteredAttractions = activeFilter === 'all' 
    ? attractions 
    : attractions.filter(attr => attr.category === activeFilter);

  // Helper function to get category label
  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      'all': 'All',
      'museums': 'Museums',
      'historical': 'Historical',
      'religious': 'Religious',
      'streets': 'Streets'
    };
    return labels[category] || category;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Attractions</CardTitle>
        <CardDescription>Must-visit places in St. Petersburg</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeFilter} className="w-full" onValueChange={setActiveFilter}>
          <TabsList className={`grid grid-cols-${categories.length} mb-4`}>
            {categories.map(category => (
              <TabsTrigger key={category} value={category}>
                {getCategoryLabel(category)}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map(category => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(category === 'all' ? attractions : attractions.filter(attr => attr.category === category))
                  .map((attraction) => (
                    <AttractionCard 
                      key={attraction.id}
                      attraction={attraction}
                      isSelected={selectedAttraction === attraction.id}
                      onClick={() => onAttractionClick(attraction.id)}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

interface AttractionCardProps {
  attraction: Attraction;
  isSelected: boolean;
  onClick: () => void;
}

const AttractionCard = ({ attraction, isSelected, onClick }: AttractionCardProps) => {
  return (
    <div 
      className={`cursor-pointer rounded-lg p-3 transition-all duration-200 hover-scale ${
        isSelected 
          ? 'bg-blue-50 border border-blue-200' 
          : 'bg-white border border-gray-100 hover:border-blue-200'
      }`}
      onClick={onClick}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center">
          {attraction.id}
        </div>
        <div>
          <div className="flex items-center">
            <h3 className="font-medium">{attraction.name}</h3>
            <span className="ml-2 text-xs px-2 py-0.5 bg-gray-100 rounded-full capitalize">
              {attraction.category}
            </span>
          </div>
          <p className="text-sm text-gray-500 line-clamp-2 mt-1">{attraction.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AttractionsList;
