import { httpClient } from "../utils";

export const fetchAll = async () => {
  return httpClient
    .get("/event/allEvents")
    .then((res) => res.data)
    .catch((err) => {
      console.log("Error fetching data !", err);
    });
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
