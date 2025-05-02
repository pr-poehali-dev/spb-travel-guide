
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Attraction } from '@/types/attractions';

interface AttractionDetailsProps {
  attraction: Attraction | undefined;
}

const AttractionDetails = ({ attraction }: AttractionDetailsProps) => {
  if (!attraction) return null;

  return (
    <Card className="mb-6 animate-fade-in">
      <CardHeader>
        <CardTitle>{attraction.name}</CardTitle>
        <CardDescription>Famous Landmark</CardDescription>
      </CardHeader>
      <CardContent>
        <div 
          className="h-40 bg-cover bg-center rounded-md mb-4" 
          style={{ backgroundImage: `url(${attraction.image})` }}
        />
        <p>{attraction.description}</p>
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium text-blue-800">Category:</span>
              <span className="ml-2 text-sm capitalize">{attraction.category}</span>
            </div>
            <a 
              href={`https://www.google.com/maps/search/${encodeURIComponent(attraction.name + ' St. Petersburg Russia')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline flex items-center"
            >
              View on map
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AttractionDetails;
