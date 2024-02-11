import {
  Gear,
  HouseSimple,
  Lightbulb,
  SignOut,
  TrendUp,
  User,
} from "@phosphor-icons/react";

const MenuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: <HouseSimple size={20} />,
    url: "/dashboard",
  },

  {
    id: 2,
    title: "Energy Usage",
    icon: <Lightbulb size={20} />,
    url: "/energy-usage",
  },

  {
    id: 3,
    title: "Predictive Analytics",
    icon: <TrendUp size={20} />,
    url: "/predictive-analytics",
  },

  {
    id: 4,
    title: "Settings",
    icon: <Gear size={20} />,
    url: "/settings",
  },
];


const ProfileMenus = [
  {
    title: "Profile",
    icon: <User />,
    url: "/profile"
  },
  {
    title: "Logout",
    icon: <SignOut />,
    url: "auth/login"
  },
];

export { MenuItems, ProfileMenus };
