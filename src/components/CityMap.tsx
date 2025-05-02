
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Attraction } from '@/types/attractions';
import { cityDistricts, riverPaths, bridges, streets } from '@/data/attractions';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Icon from '@/components/ui/icon';

interface CityMapProps {
  attractions: Attraction[];
  selectedAttraction: number | null;
  onAttractionClick: (id: number) => void;
}

const CityMap = ({ attractions, selectedAttraction, onAttractionClick }: CityMapProps) => {
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);
  const [hoveredStreet, setHoveredStreet] = useState<string | null>(null);
  const [showLayers, setShowLayers] = useState({
    districts: true,
    rivers: true,
    bridges: true,
    streets: true,
    attractions: true
  });

  // Find which street the selected attraction is on
  const selectedAttractionData = attractions.find(attr => attr.id === selectedAttraction);
  const selectedStreet = selectedAttractionData?.street || null;

  const handleStreetHover = (streetName: string | null) => {
    setHoveredStreet(streetName);
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>City Map</CardTitle>
            <CardDescription>Interactive Map of St. Petersburg</CardDescription>
          </div>
          <div className="flex gap-1 text-xs flex-wrap justify-end">
            {Object.entries(showLayers).map(([key, value]) => (
              <button
                key={key}
                className={`px-2 py-1 rounded ${value ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setShowLayers(prev => ({ ...prev, [key]: !prev[key] }))}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Map container with markers */}
        <div className="relative h-[500px] bg-blue-50 rounded-md border border-gray-200 overflow-hidden">
          {/* Map background with grid */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555999036-0083dad67046)' }}
          />
          
          {/* Grid overlay */}
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-blue-100 opacity-20"></div>
            ))}
          </div>
          
          {/* City districts */}
          {showLayers.districts && cityDistricts.map((district, index) => (
            <TooltipProvider key={district.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={`absolute rounded-full opacity-25 hover:opacity-40 transition-opacity cursor-help ${
                      hoveredDistrict === district.name ? 'ring-2 ring-white' : ''
                    }`}
                    style={{
                      top: `${district.center.y - 15}%`,
                      left: `${district.center.x - 15}%`,
                      width: '30%',
                      height: '30%',
                      backgroundColor: district.color,
                      zIndex: 5
                    }}
                    onMouseEnter={() => setHoveredDistrict(district.name)}
                    onMouseLeave={() => setHoveredDistrict(null)}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p><strong>{district.name} District</strong></p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}

          {/* Streets */}
          {showLayers.streets && (
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 7 }}>
              {streets.map((street) => {
                // Generate the SVG path string from the points
                const pathData = street.points.map((point, index) => 
                  `${index === 0 ? 'M' : 'L'}${point.x},${point.y}`
                ).join(' ');
                
                const isHighlighted = street.name === selectedStreet || street.name === hoveredStreet;
                
                return (
                  <g key={street.id}>
                    <path
                      d={pathData}
                      fill="none"
                      stroke={street.color}
                      strokeWidth={isHighlighted ? street.width * 1.5 : street.width}
                      strokeLinecap="round"
                      strokeOpacity={isHighlighted ? "1" : "0.7"}
                      onMouseEnter={() => handleStreetHover(street.name)}
                      onMouseLeave={() => handleStreetHover(null)}
                      className={`cursor-help transition-all duration-300 ${isHighlighted ? 'street-glow' : ''}`}
                    />
                    
                    {/* Street labels */}
                    {street.isMainStreet && (
                      <text 
                        x={street.points[Math.floor(street.points.length / 2)].x}
                        y={street.points[Math.floor(street.points.length / 2)].y - 5}
                        fontSize="7"
                        fill="#333"
                        textAnchor="middle"
                        className="pointer-events-none street-label"
                      >
                        {street.name}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          )}

          {/* Rivers */}
          {showLayers.rivers && (
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
              {riverPaths.map((path, index) => (
                <path
                  key={index}
                  d={path}
                  fill="none"
                  stroke="#3498db"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeOpacity="0.7"
                  className="animate-pulse"
                />
              ))}
            </svg>
          )}
          
          {/* Bridges */}
          {showLayers.bridges && bridges.map((bridge, index) => (
            <TooltipProvider key={bridge.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className="absolute w-8 h-2 bg-gray-700 rounded-sm transform -translate-x-1/2 -translate-y-1/2 hover:bg-gray-600 cursor-help"
                    style={{
                      top: `${bridge.position.y}%`,
                      left: `${bridge.position.x}%`,
                      zIndex: 15
                    }}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{bridge.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
          
          {/* City center marker */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 20 }}>
            <div className="w-4 h-4 bg-blue-700 rounded-full animate-pulse"></div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-700 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
              City Center
            </div>
          </div>
          
          {/* Compass rose */}
          <div className="absolute bottom-4 right-4 w-20 h-20" style={{ zIndex: 25 }}>
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" fill="white" fillOpacity="0.7" stroke="#333" />
              <line x1="50" y1="5" x2="50" y2="95" stroke="#333" strokeWidth="1" />
              <line x1="5" y1="50" x2="95" y2="50" stroke="#333" strokeWidth="1" />
              <text x="50" y="15" textAnchor="middle" className="text-xs">N</text>
              <text x="85" y="50" textAnchor="middle" className="text-xs">E</text>
              <text x="50" y="90" textAnchor="middle" className="text-xs">S</text>
              <text x="15" y="50" textAnchor="middle" className="text-xs">W</text>
            </svg>
          </div>
          
          {/* Scale indicator */}
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 px-2 py-1 rounded text-xs" style={{ zIndex: 25 }}>
            <div className="flex items-center">
              <div className="w-20 h-1 bg-black"></div>
              <span className="ml-1">2 km</span>
            </div>
          </div>
          
          {/* Attraction markers */}
          {showLayers.attractions && attractions.map((attraction) => {
            const isOnSelectedStreet = selectedStreet && attraction.street === selectedStreet;
            
            return (
              <TooltipProvider key={attraction.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      className={`absolute rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 ${
                        selectedAttraction === attraction.id 
                          ? 'bg-red-500 text-white ring-4 ring-red-200 w-7 h-7' 
                          : isOnSelectedStreet
                            ? 'bg-orange-400 text-white border-2 border-orange-500 w-6 h-6'
                            : 'bg-white text-red-500 border-2 border-red-500 w-6 h-6'
                      }`}
                      style={{ 
                        top: `${attraction.coordinates.y}%`, 
                        left: `${attraction.coordinates.x}%`,
                        zIndex: selectedAttraction === attraction.id ? 30 : (isOnSelectedStreet ? 25 : 20)
                      }}
                      onClick={() => onAttractionClick(attraction.id)}
                    >
                      <span className="text-xs font-bold">{attraction.id}</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="flex flex-col">
                      <p className="font-bold">{attraction.name}</p>
                      <p className="text-xs text-gray-500">{attraction.street}</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}

          {/* Map legend */}
          <div className="absolute top-4 left-4 bg-white bg-opacity-80 p-2 rounded shadow-sm" style={{ zIndex: 25 }}>
            <h4 className="text-xs font-bold mb-1">Map Legend</h4>
            <div className="flex items-center text-xs mb-1">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
              <span>Attractions</span>
            </div>
            <div className="flex items-center text-xs mb-1">
              <div className="w-3 h-3 bg-blue-500 opacity-30 mr-1"></div>
              <span>Districts</span>
            </div>
            <div className="flex items-center text-xs mb-1">
              <div className="w-3 h-1 bg-blue-500 mr-1"></div>
              <span>Rivers</span>
            </div>
            <div className="flex items-center text-xs mb-1">
              <div className="w-3 h-1 bg-gray-700 mr-1"></div>
              <span>Bridges</span>
            </div>
            <div className="flex items-center text-xs">
              <div className="w-3 h-1 bg-orange-500 mr-1"></div>
              <span>Streets</span>
            </div>
          </div>

          {/* Street info popup */}
          {hoveredStreet && (
            <div 
              className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white py-1 px-3 rounded shadow-md text-xs"
              style={{ zIndex: 35 }}
            >
              {hoveredStreet}
            </div>
          )}

          {/* "Show me" button */}
          <div className="absolute top-4 right-4" style={{ zIndex: 25 }}>
            <div className="bg-white bg-opacity-80 rounded shadow-sm overflow-hidden">
              <button 
                className="flex items-center justify-center text-xs px-3 py-1.5 hover:bg-blue-50"
                onClick={() => {
                  setShowLayers({
                    districts: false,
                    rivers: true,
                    bridges: true,
                    streets: true,
                    attractions: true
                  });
                }}
              >
                <Icon name="MapPin" size={12} className="mr-1" />
                Show attractions only
              </button>
              <button 
                className="flex items-center justify-center text-xs px-3 py-1.5 hover:bg-blue-50 border-t border-gray-200"
                onClick={() => {
                  setShowLayers({
                    districts: false,
                    rivers: false,
                    bridges: false,
                    streets: true,
                    attractions: true
                  });
                }}
              >
                <Icon name="Map" size={12} className="mr-1" />
                Show streets only
              </button>
              <button 
                className="flex items-center justify-center text-xs px-3 py-1.5 hover:bg-blue-50 border-t border-gray-200"
                onClick={() => {
                  setShowLayers({
                    districts: true,
                    rivers: true,
                    bridges: true,
                    streets: true,
                    attractions: true
                  });
                }}
              >
                <Icon name="Layers" size={12} className="mr-1" />
                Show all layers
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CityMap;
