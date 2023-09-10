import { useEffect, useState } from "react";
import TableComponent from "../../component/TableComponent";
import { fetchAll } from "../../service/client";
import { initialMapState } from "../../utils";

const ShowPerformance = () => {
  const [map, setMap] = useState(initialMapState);
  const keys = Object.keys(map);

  useEffect(() => {
    fetchAll().then((data) => {
      // console.log("Show Performance Mounted", data);
      setMap(() => data);
    });
  }, []);

  return (
    <>
      {keys.map((key, index) => (
        <TableComponent key={index} eventType={key} data={map[key]} />
      ))}
    </>
  );
};

export default ShowPerformance;
