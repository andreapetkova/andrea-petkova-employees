import { formattingDateMiddleware } from "./formattingDateMiddleware";

export const csvToArray = (string) => {
  const initialParse = string.replace(/\r/g, "").trim().split("\n");
  const data = initialParse.map((row) => {
    const rowData = row.split(",");
    return {
      employeeId: rowData[0],
      projectId: rowData[1],
      dateFrom: formattingDateMiddleware(rowData[2]),
      dateTo: formattingDateMiddleware(rowData[3]),
    };
  });

  return data;
};
