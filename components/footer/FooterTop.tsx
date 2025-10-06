import { Clock, Contact, Mail, MapPin, Phone } from "lucide-react";
import React from 'react'

interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const data: ContactItemData[] = [
  {
    title: "Kunjungi Kami",
    subtitle: "Jakarta, Indonesia",
    icon: (
      <MapPin className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Hubungi Kami",
    subtitle: "+62 8574 0944 838",
    icon: (
      <Phone className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Jam Kerja",
    subtitle: "Sen - Sab: 10:00 AM - 7:00 PM",
    icon: (
      <Clock className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Email Kami",
    subtitle: "Grocerystore@gmail.com",
    icon: (
      <Mail className="h-6 w-6 text-gray-600 group-hover:text-primary transition-colors" />
    ),
  },
];

const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 py-5 border-b">
      {data?.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 group hover:bg-gray-50 p-2 transition-colors hoverEffect cursor-pointer"
        >
          {item?.icon}
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-black hoverEffect">
              {item?.title}
            </h3>
            <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-900 hoverEffect">
              {item?.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const ContactItem: React.FC<{ item: ContactItemData }> = ({ item }) => {
  return (
    <div className="flex items-center gap-4 group mb-6 last:mb-0 cursor-pointer">
        <div className="p-3 rounded-md bg-gray-100 group-hover:bg-primary/10 transition-colors">
            {item.icon}
        </div>
        <div>
            <h4 className="font-semibold text-gray-700 group-hover:text-primary transition-colors">
                {item.title}
            </h4>
            <p className="text-sm text-gray-500">{item.subtitle}</p>
        </div>
    </div>
  );
}

export default FooterTop

