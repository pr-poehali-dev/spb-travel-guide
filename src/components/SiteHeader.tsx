
import Icon from '@/components/ui/icon';

const SiteHeader = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-blue-800">
              St. Petersburg Travel Guide
            </h1>
            <p className="text-gray-600 mt-1">
              Explore the cultural capital of Russia
            </p>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center text-blue-700 hover:text-blue-500 transition-colors">
              <Icon name="Map" size={18} />
              <span className="ml-1">Map</span>
            </button>
            <button className="flex items-center text-blue-700 hover:text-blue-500 transition-colors">
              <Icon name="Hotel" size={18} />
              <span className="ml-1">Hotels</span>
            </button>
            <button className="flex items-center text-blue-700 hover:text-blue-500 transition-colors">
              <Icon name="Utensils" size={18} />
              <span className="ml-1">Restaurants</span>
            </button>
            <button className="flex items-center text-blue-700 hover:text-blue-500 transition-colors">
              <Icon name="Calendar" size={18} />
              <span className="ml-1">Events</span>
            </button>
          </div>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
