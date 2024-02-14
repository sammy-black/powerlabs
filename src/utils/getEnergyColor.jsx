const getEnergyColor = (energy) => {
  if (energy <= 70) return "rgba(0, 255, 0, 1)";
  if (energy <= 100) return "rgba(255, 255, 0, 1)";
  return "rgba(255, 0, 0, 1)";
};

export default getEnergyColor