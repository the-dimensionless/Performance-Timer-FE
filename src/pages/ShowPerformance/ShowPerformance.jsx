import { useEffect, useState } from "react";
import TableComponent from "../../component/TableComponent";
import { fetchAll } from "../../service/client";
import { initialMapState } from "../../utils";
import { CircularProgress, Snackbar } from "@mui/material";

const ShowPerformance = () => {
  const [map, setMap] = useState(initialMapState);
  const [showLoader, setShowLoader] = useState(false);
  const keys = map ? Object.keys(map) : [];
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
    msg: "",
  });
  const { vertical, horizontal, open, msg } = state;

  useEffect(() => {
    setShowLoader(true);
    fetchAll()
      .then((res) => {
        // console.log("Show Performance Mounted", data);
        setMap(res.data);
      })
      .catch((err) => showSnack(`Error fetching data! ${err.message}`))
      .finally(() => setShowLoader(false));
  }, []);

  const showSnack = (msg) => setState({ ...state, open: true, msg: msg });

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={3000}
        open={open}
        onClose={() => setState({ ...state, open: false })}
        message={msg}
        key={vertical + horizontal}
      />
      {showLoader ? (
        <CircularProgress />
      ) : (
        keys.map((key, index) => (
          <TableComponent key={index} eventType={key} data={map[key]} />
        ))
      )}
    </>
  );
};

export default ShowPerformance;
