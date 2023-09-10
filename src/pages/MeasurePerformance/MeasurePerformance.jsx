import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useRef, useState } from "react";
import "../../routes/root.css";
import { distanceTypes, eventTypes, formatTime } from "../../utils";
import { saveData } from "../";

const MeasurePerformance = () => {
  const [event, setEvent] = useState("");
  const [distance, setDistance] = useState("");
  const [countDown, setCountDown] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const distanceDropdowns = distanceTypes[event]?.values;
  const unit = distanceTypes[event]?.unit;

  const triggerTimer = () => {
    timerRef.current = setInterval(() => {
      setCountDown((countDown) => countDown + 1);
    }, 1000);
  };

  const changeTimer = (operation) => {
    switch (operation) {
      case "Pause":
        clearInterval(timerRef.current);
        setIsPaused(true);
        break;

      case "Resume":
        setIsPaused(false);

      // eslint-disable-next-line no-fallthrough
      case "Start":
        triggerTimer();
        break;

      default:
        clearInterval(timerRef.current);
        setCountDown(0);
        break;
    }
  };

  const onBtnClick = () => {
    let operation = "";
    if (countDown === 0) {
      operation = "Start";
    } else if (isPaused) {
      // resume
      operation = "Resume";
    } else {
      // pause
      operation = "Pause";
    }
    changeTimer(operation);
  };

  return (
    <>
      <div className="mp-container">
        <Box sx={{ width: 200 }}>
          <FormControl fullWidth>
            <InputLabel id="select-event">Events:</InputLabel>
            <Select
              labelId="select-event"
              id="select-event"
              value={event}
              label="Events:"
              onChange={(e) => {
                setEvent(e.target.value);
              }}
            >
              {eventTypes?.map((event, index) => (
                <MenuItem key={index} value={event}>
                  {event}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ width: 200 }}>
          <FormControl fullWidth disabled={event === ""}>
            <InputLabel id="select-distance">Distance:</InputLabel>
            <Select
              labelId="select-distance"
              id="select-distance"
              value={distance}
              disabled={event === ""}
              label="Distance:"
              onChange={(e) => setDistance(e.target.value)}
            >
              {distanceDropdowns?.map((i) => (
                <MenuItem key={i} value={i}>
                  {i} {unit}{" "}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>

      <div className="timer-container">
        <h1>{formatTime(countDown)}</h1>

        <div className="btn-grp">
          <Button
            variant="outlined"
            disabled={event === "" || distance === ""}
            onClick={onBtnClick}
          >
            {countDown === 0 ? "Start" : isPaused ? "Resume" : "Pause"}
          </Button>
          <Button
            variant="outlined"
            disabled={countDown === 0}
            onClick={() => changeTimer("Reset")}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            disabled={countDown === 0}
            onClick={() => {
              changeTimer("Pause");
              fetchAll
              // call api
            }}
          >
            Save Record
          </Button>
        </div>
      </div>
    </>
  );
};

export default MeasurePerformance;
