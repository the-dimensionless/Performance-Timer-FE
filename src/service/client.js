import { httpClient } from "../utils";

export const fetchAll = async () => {
  return httpClient.get("/event/allEvents");
};

export const saveData = async (event, distance, unit, time) => {
  const payload = {
    eventType: event,
    distance,
    unit,
    time,
    createdAt: new Date().toISOString(),
  };
  return httpClient.post("/event/save", payload);
};
