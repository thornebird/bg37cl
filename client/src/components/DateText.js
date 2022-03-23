import React , {useState,useEffect} from 'react'; 

const DateText  = ()=>{
    const [day, setDay] = useState('');
    const [date, setDate] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    useEffect(()=>{
     formatDate();
    },[])

    const formatDate = () => {
        const date = new Date();
    
        switch (date.getMonth()) {
          case 0:
            setMonth('January');
            break;
          case 1:
            setMonth('February');
            break;
          case 2:
            setMonth('March');
            break;
          case 3:
            setMonth('April');
            break;
          case 4:
            setMonth('May');
            break;
          case 5:
            setMonth('June');
            break;
          case 6:
            setMonth('July');
            break;
          case 7:
            setMonth('August');
            break;
          case 8:
            setMonth('September');
            break;
          case 9:
            setMonth('October');
            break;
          case 10:
            setMonth('November');
            break;
          case 11:
            setMonth('December');
            break;
          default:
            break;
        }
    
    
        switch (date.getDay()) {
          case 0:
            setDay('Monday');
            break;
          case 1:
            setDay('Tuesday');
            break;
          case 2:
            setDay('Wednesday');
            break;
          case 3:
            setDay('Thursday');
            break;
          case 4:
            setDay('Friday');
            break;
          case 5:
            setDay('Satursday');
            break;
          case 6:
            setDay('Sunday');
            break;
    
          default:
            break;
        }
        setDate(date.getDate());
        setYear(date.getFullYear());
      }

      return(
        <div>{day} {date} {month} {year}</div>
      )

};

export default DateText;
