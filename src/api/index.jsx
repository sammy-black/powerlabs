import { Server, Model } from "miragejs";
import { EnergyConsumptionData } from "../data";

// func to generate timestamped energy usage data for every minute
const generateEnergyUsageData = () => {
  const now = new Date();
  const data = [];

  // Iterate over the last 30 minutes
  for (let i = 0; i < 1 * 30; i++) {
    const timestamp = new Date(now.getTime() - i * 60 * 1000);
    const energy_usage_kwh = Math.ceil(Math.random() * 150); // Generate random energy usage value (between 0 and 150 kWh)

    data.push({ timestamp, energy_usage_kwh });
  }

  return data.reverse();
};

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      energyUsage: Model,
    },

    seeds(server) {
      server.db.loadData({
        energyUsage: generateEnergyUsageData().slice(0, 100),
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/energyUsage", (schema) => {
        return schema.db.energyUsage;
      });

      this.get("/historicalData", (schema, request) => {
        let filteredData = schema.db.energyUsage;
        const { startDate, endDate } = request.queryParams;

        if (startDate && endDate) {
          const start = new Date(startDate);
          const end = new Date(endDate);

          filteredData = schema.db.energyUsage.filter((entry) => {
            const entryDate = new Date(entry.timestamp);
            return entryDate >= start && entryDate <= end;
          });
        }

        return filteredData;
      });
    },
  });

  return server;
}
