import {
  Search,
  Plane,
  Building,
  Home,
  TrendingUp,
  Globe,
  DollarSign,
  MapPin,
  Settings,
  MessageSquare,
  HelpCircle,
  X,
} from "lucide-react";
import React from "react";
import images from "../assets/assets";
const SideNavItem = ({ icon, text, isActive }) => (
  <a
    href="#"
    className={`flex items-center px-4 py-2 text-sm sm:text-base ${
      isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"
    }`}
  >
    {React.cloneElement(icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
    <span className="ml-3">{text}</span>
  </a>
);


const Sidenav = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={onClose}
        ></div>
      )}
      <nav
        className={`fixed left-0 top-0 bottom-0 w-64 sm:w-72 md:w-80 bg-gray-800 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-20 overflow-y-auto`}
      >
        <div className="flex items-center justify-between p-4">
          <img
              src={images["googlelogo_light.svg"]}
              alt="Google Logo"
              className="h-8 w-auto"
            />
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white p-2"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
        <div className="mt-4 space-y-1">
          <SideNavItem icon={<Search />} text="Explore" />
          <SideNavItem icon={<Plane />} text="Flights" isActive={true} />
          <SideNavItem icon={<Building />} text="Hotels" />
          <SideNavItem icon={<Home />} text="Vacation rentals" />
          <SideNavItem icon={<TrendingUp />} text="Tracked flight prices" />
          <SideNavItem icon={<Globe />} text="Change language" />
          <SideNavItem icon={<DollarSign />} text="Change currency" />
          <SideNavItem icon={<MapPin />} text="Change location" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1 bg-gray-800">
          <SideNavItem icon={<Settings />} text="Flights settings" />
          <SideNavItem icon={<MessageSquare />} text="Feedback" />
          <SideNavItem icon={<HelpCircle />} text="Help" />
        </div>
      </nav>
    </>
  );
};
export default Sidenav;
