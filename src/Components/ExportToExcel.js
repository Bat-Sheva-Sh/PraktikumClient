import React from 'react';
import { Tooltip } from '@mui/material';
import * as FileSaver from 'file-saver'
import XLSX from 'sheetjs-style'
import Button from '@mui/material/Button'


const ExportExcel = ({ excelData, fileName }) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const ExportToExcel = async () => {
        const ws = XLSX.utils.json_to_sheet(JSON.parse(excelData))
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] }
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }
    return (
        <>
            <Tooltip title="Excel Export">
                <Button variant="contained"
                    onClick={(e) => { ExportToExcel(fileName) }}
                    color="primary"
                    style={{ cursor: "pointer", fontsize: 14 }}
                >
                    להורדת קובץ הנתונים שנשמרו
                </Button>
            </Tooltip>
        </>
    )
}

export default ExportExcel











// import React from 'react'
// import * as FileSaver from "file-saver";
// //import * as XLSX from "xlsx";

// // export const ExportToExcel = ({ apiData, fileName }) => {
// //   const fileType =
// //     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
// //   const fileExtension = ".xlsx";

// //   const exportToCSV = (apiData, fileName) => {
// //     const ws = XLSX.utils.json_to_sheet(apiData);
// //     const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
// //     const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
// //     const data = new Blob([excelBuffer], { type: fileType });
// //     FileSaver.saveAs(data, fileName + fileExtension);
// //   };

// //   return (
// //     <button onClick={(e) => exportToCSV(apiData, fileName)}>Export</button>
// //   );
// // };
// //import React from 'react';
// import { Tooltip } from '@mui/material';
// //import * as FileSaver from 'file-saver'
// import XLSX from 'sheetjs-style'
// import Button from '@mui/material/Button'
// import { userContext } from "./UserContext";
// import { useContext } from 'react';

// //import * as XLSX from 'xlsx'



// //const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
// //const fileExtension = '.xlsx';

// const ExportToExcel = () => {

//   const userCtx = useContext(userContext);

//   var data1 = JSON.parse('[' + JSON.stringify(userCtx) + ']')

//   const ws = XLSX.utils.json_to_sheet(data1)
//   const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] }
//   const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

//   // const dataURL = URL.createObjectURL(new Blob([excelBuffer], { type: 'application/octet-stream' }));
//   // const link = document.createElement('a');
//   // link.href = dataURL;
//   // link.setAttribute('download', 'data.xlsx');
//   // document.body.appendChild(link);
//   // link.click();

//   const data = new Blob([excelBuffer], { type: fileType });
//   FileSaver.saveAs(data, fileName + fileExtension);
//   return (
//     <>
//       <Tooltip title="Excel Export">
//         <Button variant="contained"
//           onClick={(e) => { ExportToExcel(fileName) }}
//           color="primary"
//           style={{ cursor: "pointer", fontsize: 14 }}
//         >
//           להורדת קובץ הנתונים שנשמרו
//         </Button>
//       </Tooltip>
//     </>
//   )
// }



// export default ExportToExcel







// /////copy
// // import * as XLSX from 'xlsx'
// // import { userContext } from './UserContext';
// // import { useContext } from 'react';

// // const ExportToExcel = () => {
// //   const userCtx=useContext(userContext)

// //   var data = JSON.parse('['+JSON.stringify(userCtx)+']')
// //   const ws = XLSX.utils.json_to_sheet(data);
// //   const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
// //   const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
// //   const dataURL = URL.createObjectURL(new Blob([excelBuffer], { type: 'application/octet-stream' }));
// //   const link = document.createElement('a');
// //   link.href = dataURL;
// //   link.setAttribute('download', 'data.xlsx');
// //   document.body.appendChild(link);
// //   link.click();
// // };

// // export default ExportToExcel;

