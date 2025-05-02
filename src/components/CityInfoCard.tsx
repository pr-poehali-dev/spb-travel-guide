
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const CityInfoCard = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Welcome to St. Petersburg</CardTitle>
        <CardDescription>The Venice of the North</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Founded by Peter the Great in 1703, St. Petersburg is known for its stunning architecture, 
          rich cultural heritage, and beautiful canals. The city served as Russia's imperial capital 
          for over 200 years and remains the country's cultural center.
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
        <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
          <Icon name="Train" size={16} />
          <span>Rail: Connected to Moscow via high-speed Sapsan train</span>
        </div>
        <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
          <Icon name="Bus" size={16} />
          <span>Local transport: Metro, buses, trams, and trolleybuses</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CityInfoCard;
