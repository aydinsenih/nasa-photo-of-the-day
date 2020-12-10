import React,{useState} from "react";
import "./App.css";
import GetAPOD from './GetAPOD';
import DatePicker from "react-datepicker";
import "./datePickerCss/datepicker.scss";
import styled from "styled-components";

function App() {
  const [pickedDate, setPickedDate] = useState(new Date());
  console.log(pickedDate.getFullYear())
  return (
    <AppDiv>
      <h2>Pick a day to see <span>NASA</span> APOD </h2>
      <DatePicker 
        dateFormat="yyyy-MM-dd"
        selected={pickedDate}
        onChange={date => setPickedDate(date)}
      />
      <GetAPOD date={pickedDate}/>
      
    </AppDiv>
  );
}

const AppDiv = styled.div`
background-color:#4f5b66;
text-align: center;
p{
  font-weight: bold;
  font-size: 1.1em; 
}
input{
  color: black;
  background-color:grey;
}
h2 span{
  color: LIGHTYELLOW;
}

`;

export default App;
