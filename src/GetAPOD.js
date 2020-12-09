import React, {useState, useEffect} from "react";
import axios from 'axios';
import {BASE_URL, API_KEY} from './constants';
import moment from 'moment';

export default function GetAPOD(props){
    const [apodData, setApodData] = useState([])
    const {date} = props;

    useEffect(()=>{
        const formattedDate = moment(date).format("YYYY-MM-DD");
        axios.get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}&date=${formattedDate}`)
        .then(res =>{
            console.log(res.data)
            setApodData(res.data)
        })
        .catch(err => console.log(err))
    }, [date])

    return (
        <div className="APOD">
            <h1>{apodData.title}</h1>
            {apodData.media_type === "image" 
            ? <img src={apodData.url} alt="NASA APOD" />
            : <iframe src={apodData.url} allow="autoplay; encrypted-media" allowFullScreen={true} title="video"/>
            
            }
            <p>{apodData.explanation}</p>
        </div>
    )
}