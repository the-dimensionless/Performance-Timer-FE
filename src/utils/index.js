import axios from "axios";

export const formatTime = (timer) => {
  const getSeconds = `0${timer % 60}`.slice(-2);
  const minutes = `${Math.floor(timer / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};

export const getTSFormat = (ts) => {
  const d = new Date(ts);
  return d.toLocaleDateString() + " " + d.toLocaleTimeString();
};

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

export const eventTypes = ["Running", "Cycling", "Swimming"];
export const distanceTypes = {
  Running: {
    values: [1, 2, 3, 4, 5],
    unit: "Km",
  },
  Cycling: {
    values: [1, 2, 3, 4, 5],
    unit: "Km",
  },
  Swimming: {
    values: [100, 200, 300, 400],
    unit: "m",
  },
};
export const initialMapState = {
  Running: [],
  Cycling: [],
  Swimming: [],
};
