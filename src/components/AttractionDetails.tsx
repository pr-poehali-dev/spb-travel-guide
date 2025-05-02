
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Attraction } from '@/types/attractions';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface AttractionDetailsProps {
  attraction: Attraction | undefined;
}

const AttractionDetails = ({ attraction }: AttractionDetailsProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!attraction) return null;

  const allImages = [attraction.image, ...(attraction.additionalImages || [])];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <Card className="mb-6 animate-fade-in">
      <CardHeader>
        <CardTitle>{attraction.name}</CardTitle>
        <CardDescription>Famous Landmark</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Image gallery */}
        <div className="relative">
          <div 
            className="h-56 bg-cover bg-center rounded-md mb-4 transition-all duration-500 ease-in-out" 
            style={{ backgroundImage: `url(${allImages[currentImageIndex]})` }}
          />
          
          {allImages.length > 1 && (
            <>
              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-1">
                {allImages.map((_, idx) => (
                  <button 
                    key={idx} 
                    className={`w-2 h-2 rounded-full ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                    onClick={() => setCurrentImageIndex(idx)}
                  />
                ))}
              </div>
              <button 
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 text-white rounded-full"
                onClick={prevImage}
              >
                <Icon name="ChevronLeft" size={16} />
              </button>
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-black/50 text-white rounded-full"
                onClick={nextImage}
              >
                <Icon name="ChevronRight" size={16} />
              </button>
            </>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700">{attraction.description}</p>
        
        {/* Details */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col gap-2">
          <div>
            <Badge variant="outline" className="bg-blue-50">
              <Icon name="MapPin" className="mr-1 h-3 w-3" />
              <span className="capitalize">{attraction.category}</span>
            </Badge>
          </div>

          <div className="flex items-center text-sm">
            <Icon name="MapPin" size={16} className="text-gray-500 mr-2" />
            <span className="text-gray-700">{attraction.address}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <Icon name="Map" size={16} className="text-gray-500 mr-2" />
            <span className="text-gray-700">Street: {attraction.street}</span>
          </div>
          
          {attraction.openingHours && (
            <div className="flex items-center text-sm">
              <Icon name="Clock" size={16} className="text-gray-500 mr-2" />
              <span className="text-gray-700">{attraction.openingHours}</span>
            </div>
          )}
          
          {attraction.ticketPrice && (
            <div className="flex items-center text-sm">
              <Icon name="Ticket" size={16} className="text-gray-500 mr-2" />
              <span className="text-gray-700">{attraction.ticketPrice}</span>
            </div>
          )}
          
          <div className="mt-2 flex justify-between">
            <a 
              href={`https://www.google.com/maps/search/${encodeURIComponent(attraction.name + ' St. Petersburg Russia')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline flex items-center"
            >
              View on Google Maps
              <Icon name="ExternalLink" size={14} className="ml-1" />
            </a>
            
            <button className="text-sm text-blue-600 hover:underline flex items-center">
              Add to Favorites
              <Icon name="Heart" size={14} className="ml-1" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AttractionDetails;
