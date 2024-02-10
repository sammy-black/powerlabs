import { Database, Gear, HouseSimple, Lightbulb } from "@phosphor-icons/react";

const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: <HouseSimple size={24} />,
    url: "/dashboard",
  },

  {
    id: 2,
    title: "Energy Usage",
    icon: <Lightbulb size={24} />,
    url: "/current",
  },

  {
    id: 3,
    title: "Historical Data",
    icon: <Database size={24} />,
    url: "/historical",
  },

  {
    id: 4,
    title: "Settings",
    icon: <Gear size={24} />,
    url: "/settings",
  },
];

export { menuItems };
