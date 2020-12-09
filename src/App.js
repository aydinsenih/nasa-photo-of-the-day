import React,{useState} from "react";
import "./App.css";
import GetAPOD from './GetAPOD';
import DatePicker from "react-datepicker";
import "./datePickerCss/datepicker.scss";

function App() {
  const [pickedDate, setPickedDate] = useState(new Date());//2012-03-14
  return (
    <div className="App">
      <p>Pick a day to see NASA APOD </p>
      <DatePicker 
        dateFormat="yyyy-MM-dd"
        selected={pickedDate}
        onChange={date => setPickedDate(date)}
      />
      <GetAPOD date={pickedDate}/>
      
    </div>
  );
}

export default App;
