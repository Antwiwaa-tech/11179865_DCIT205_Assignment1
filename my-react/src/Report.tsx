import  { useState } from 'react';
import './Report.css';
import DataTable from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './component/Footer';



interface Row {
  id: number;
  Subject: string;
  Grade: string;
  Cumlative: string;
}


function Report() {
  const columns  = [
    {
      name: 'Subject',
      selector: (row: Row) => row.Subject,
    },
    {
      name: 'Grade',
      selector: (row: Row) => row.Grade,
    },
    {
      name: 'Cumulative Grade Point',
      selector: (row: Row) => row.Cumlative,

      cell: (row: Row) => <div style={{ textAlign: 'right' }}>{row.Cumlative}</div>,
    },
  ];
  const firstSemesterData: Row[] = [
    {
        id: 1,
        Subject: "UGRC 150 Critical Thinking and Practical Reasoning",
        Grade: "A",
        Cumlative: "12"
    },
    {
        id: 2,
        Subject: "DCIT105 Mathematics For IT Professionals ",
        Grade: "C+",
        Cumlative: "7.5"
    },
    {
        id: 3,
        Subject: "DCIT 101 Introduction to Computer Science",
        Grade: "A",
        Cumlative: "12"
    },
    {
        id: 4,
        Subject: "DCIT 103 Office Productivity Tools",
        Grade: "B",
        Cumlative: "9"
    },
    {
        id: 5,
        Subject: "STAT 111 Introduction to Statistics and Probability I",
        Grade: "A",
        Cumlative: "12"
    },
    {
        id: 6,
        Subject: "ECON 101	Introduction to Economics I",
        Grade: "A",
        Cumlative: "12"
    }
];

  


  const secondSemesterData: Row[] = [
    {
        id: 7,
        Subject: "UGRC 110	Academic Writing I",
        Grade: "B",
        Cumlative: "7.5"
    },
    {
        id: 8,
        Subject: "MATH 122	Calculus I",
        Grade: "C",
        Cumlative: "6"
    },
    {
        id: 9,
        Subject: "ECON102 Introduction to Economics II",
        Grade: "B+", 
        Cumlative: "10.5"
    },
    {
        id: 10,
        Subject: "Computer Hardware Fundamentals And Circuits",
        Grade: "B",
        Cumlative: "9"
    },
    {
        id: 11,
        Subject: "DCIT104 Programming Fundamentals ",
        Grade: "C",
        Cumlative: "6"
    },
    {
        id: 12,
        Subject: "STAT112 Introduction to Statistics And Probability II",
        Grade: "B+",
        Cumlative: "6"
    },
    
];

  const level200FirstSemesterData: Row[] = [
    {
      id: 1,
      Subject: " CBAS210 Academic Writing I",
      Grade: "B",
      Cumlative: "7.5",
    },
    {
      id: 2,
      Subject: "Programming I",
      Grade: "B+",
      Cumlative: "10.5",
    },
    {
      id: 3,
      Subject: "Digital and Logic System Design",
      Grade: "B+",
      Cumlative: "10.5",
    },
    {
      id: 2,
      Subject: "Multi Media and Web Design",
      Grade: "A",
      Cumlative: "12",
    },
    {
      id: 2,
      Subject: "Computer Organization & Architecture",
      Grade: "C+",
      Cumlative: "6",
    },
    // Add more rows as needed
  ];
  const level200SecondSemesterData: Row[] = [
    // Updated data for Level 200 second semester
    {
      id: 7,
      Subject: "DCIT 301	Operating Systems",
      Grade: "N/A",
      Cumlative: "N/A",
    },
    {
      id: 8,
      Subject: " DCIT 303	Computer Networks",
      Grade: "N/A",
      Cumlative: "N/A",
    },
    {
      id: 8,
      Subject: " DCIT 305	Database Fundamentals",
      Grade: "N/A",
      Cumlative: "N/A",
    },
    {
      id: 8,
      Subject: " DCIT 313	Introduction to Artificial Intelligence",
      Grade: "N/A",
      Cumlative: "N/A",
    },
    {
      id: 8,
      Subject: " DCIT 317	IT Project Management",
      Grade: "N/A",
      Cumlative: "N/A",
    },
    // Add more rows as needed
  ];
 

  const [selectedLevel, setSelectedLevel] = useState<number>(200);
 

  return (
    <><>
      <div>
        <h1 className="fw-bold">ANTWIWAA'S GRADE REPORT</h1>
      </div>
      
      <div className='top'>
        <p onClick={() => setSelectedLevel(100)} className=' level '>Level 100</p></div>
      {selectedLevel === 100 && (
        <>
          <h2 className="text-primary">First semester</h2>
          <div className="table">
            <DataTable  columns={columns} data={firstSemesterData} />
          </div>
          <div>
            <h2 className="text-primary">Second Semester</h2>
          </div>
          <DataTable columns={columns} data={secondSemesterData} />
        </>
      )}<div className='top'>
        <p onClick={() => setSelectedLevel(200)} className=' level'>Level 200</p></div>
      {selectedLevel === 200 && (
        <>
          <h2 className="text-primary">First semester</h2>
          <div className="table">
            <DataTable columns={columns} data={level200FirstSemesterData} />
          </div>
          <div>
            <h2 className="text-primary">Second Semester</h2>
          </div>
          <DataTable  columns={columns} data={level200SecondSemesterData} />
        </>)}
      <div className='top'>
        <p onClick={() => setSelectedLevel(300)} className=' level '>Level 300</p></div>
      {selectedLevel === 300 && (
        <>
          <p className='no-data'>No data available</p>
        </>)}<div className='top'>
        <p onClick={() => setSelectedLevel(400)} className=' level '>Level 400</p>   </div>
        {selectedLevel === 400 && (
          <>
            <p className='no-data'>No data available</p>
          </>
        )}
   

    </>
    <Footer/>
      </>  
  )}

export default Report;