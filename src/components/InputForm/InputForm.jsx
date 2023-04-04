import { useState } from "react";
import styles from "./InputForm.module.css";
import { csvToArray, longestWorkedEmployees } from "../../helpers";
import { EmployeeDataGrid } from "../EmployeeDataGrid";

export const InputForm = () => {
  const [file, setFile] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState();

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    const inputFile = e.target.files[0];
    const extension = inputFile.type.split("/")[1];

    if (extension !== "csv") {
      setError("Please choose a valid .csv file");
      return;
    }

    setFile(inputFile);
    setError(null);
    setData(null);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!file) return setError("Enter a valid file");

    fileReader.onload = function (event) {
      const csvFile = event.target.result;
      const dataArray = csvToArray(csvFile);

      const longestWorkingPair = longestWorkedEmployees(dataArray);

      setData(longestWorkingPair);
    };

    fileReader.readAsText(file);
    document.querySelector("#csvInput").value = "";
    setData(null);
  };

  if (error) {
    document.querySelector("#csvInput").value = "";
  }

  return (
    <div className={styles["form-container"]}>
      <h1>Import CSV File </h1>
      <form>
        <input
          type={"file"}
          accept={".csv"}
          id="csvInput"
          onChange={handleOnChange}
        />
        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          Add CSV
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      {data && !error && <EmployeeDataGrid rows={data} />}
    </div>
  );
};
