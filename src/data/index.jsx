import {
  ChartBar,
  Gear,
  Lightbulb,
  SignOut,
  TrendUp,
  User,
} from "@phosphor-icons/react";

const MenuItems = [
  {
    id: 1,
    title: "Energy Usage",
    icon: <Lightbulb size={20} />,
    url: "/energy-usage",
  },

  {
    id: 2,
    title: "Usage History",
    icon: <ChartBar size={20} />,
    url: "/usage-history"
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
    url: "/profile",
  },
  {
    title: "Logout",
    icon: <SignOut />,
    url: "auth/login",
  },
];


const EnergyConsumptionData = {
  "energyUsage": [
    { "timestamp": "2024-02-13T00:00:00Z", "energy_usage_kwh": 100 },
    { "timestamp": "2024-02-13T01:00:00Z", "energy_usage_kwh": 110 },
    { "timestamp": "2024-02-13T02:00:00Z", "energy_usage_kwh": 105 },
    { "timestamp": "2024-02-13T03:00:00Z", "energy_usage_kwh": 95 },
    { "timestamp": "2024-02-13T04:00:00Z", "energy_usage_kwh": 120 },
    { "timestamp": "2024-02-13T05:00:00Z", "energy_usage_kwh": 130 },
    { "timestamp": "2024-02-13T06:00:00Z", "energy_usage_kwh": 140 },
    { "timestamp": "2024-02-13T07:00:00Z", "energy_usage_kwh": 135 },
    { "timestamp": "2024-02-13T08:00:00Z", "energy_usage_kwh": 125 },
    { "timestamp": "2024-02-13T09:00:00Z", "energy_usage_kwh": 115 },
    { "timestamp": "2024-02-13T10:00:00Z", "energy_usage_kwh": 110 },
    { "timestamp": "2024-02-13T11:00:00Z", "energy_usage_kwh": 105 },
    { "timestamp": "2024-02-13T12:00:00Z", "energy_usage_kwh": 100 },
    { "timestamp": "2024-02-13T13:00:00Z", "energy_usage_kwh": 95 },
    { "timestamp": "2024-02-13T14:00:00Z", "energy_usage_kwh": 90 },
    { "timestamp": "2024-02-13T15:00:00Z", "energy_usage_kwh": 85 },
    { "timestamp": "2024-02-13T16:00:00Z", "energy_usage_kwh": 80 },
    { "timestamp": "2024-02-13T17:00:00Z", "energy_usage_kwh": 85 },
    { "timestamp": "2024-02-13T18:00:00Z", "energy_usage_kwh": 90 },
    { "timestamp": "2024-02-13T19:00:00Z", "energy_usage_kwh": 95 },
    { "timestamp": "2024-02-13T20:00:00Z", "energy_usage_kwh": 100 },
    { "timestamp": "2024-02-13T21:00:00Z", "energy_usage_kwh": 105 },
    { "timestamp": "2024-02-13T22:00:00Z", "energy_usage_kwh": 110 },
    { "timestamp": "2024-02-13T23:00:00Z", "energy_usage_kwh": 115 },
    { "timestamp": "2024-02-14T14:00:00Z", "energy_usage_kwh": 90 },
    { "timestamp": "2024-02-14T15:00:00Z", "energy_usage_kwh": 85 },
    { "timestamp": "2024-02-14T16:00:00Z", "energy_usage_kwh": 80 },
    { "timestamp": "2024-02-14T17:00:00Z", "energy_usage_kwh": 85 },
    { "timestamp": "2024-02-14T18:00:00Z", "energy_usage_kwh": 90 },
    { "timestamp": "2024-02-14T19:00:00Z", "energy_usage_kwh": 95 },
    { "timestamp": "2024-02-14T20:00:00Z", "energy_usage_kwh": 100 },
    { "timestamp": "2024-02-14T21:00:00Z", "energy_usage_kwh": 105 },
    { "timestamp": "2024-02-14T22:00:00Z", "energy_usage_kwh": 110 },
    { "timestamp": "2024-02-14T23:00:00Z", "energy_usage_kwh": 115 },
    { "timestamp": "2024-02-14T16:00:00Z", "energy_usage_kwh": 80 },
    { "timestamp": "2024-03-15T17:00:00Z", "energy_usage_kwh": 85 },
    { "timestamp": "2024-03-15T18:00:00Z", "energy_usage_kwh": 90 },
    { "timestamp": "2024-03-15T19:00:00Z", "energy_usage_kwh": 95 },
    { "timestamp": "2024-03-15T20:00:00Z", "energy_usage_kwh": 100 },
    { "timestamp": "2024-03-15T21:00:00Z", "energy_usage_kwh": 105 },
    { "timestamp": "2024-03-15T22:00:00Z", "energy_usage_kwh": 110 },
    { "timestamp": "2024-03-15T23:00:00Z", "energy_usage_kwh": 115 }
  ]
}


export { MenuItems, ProfileMenus, EnergyConsumptionData };
