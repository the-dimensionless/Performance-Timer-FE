import TableComponent from "../../component/TableComponent";

const ShowPerformance = () => {
    const ob = {
        "Running": [1, 2, 3, 4, 5],
        "Cycling": [],
        "Swimming": []
    }

    

    return (
       <>
       <TableComponent eventType={"Running"} />
       <TableComponent eventType={"Cycling"} />
       <TableComponent eventType={"Swimming"} />
   
       </>
    )
};

export default ShowPerformance;