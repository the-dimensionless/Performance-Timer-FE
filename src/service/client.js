import { httpClient } from "../utils";

export const fetchAll = async () => {
  return httpClient
    .get("/event/allEvents")
    .then((res) => res.data)
    .catch((err) => {
      console.log("Error fetching data !", err);
    });
};

export const saveData = async (payload) => {
  return httpClient
    .post("/event/save", payload)
    .then((res) => res.data)
    .catch((err) => console.log("Error saving data !", err));
};
