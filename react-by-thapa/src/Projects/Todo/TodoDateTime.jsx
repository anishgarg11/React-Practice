import { useEffect, useState } from "react";

export const TodoDateTime = ()=>{

    const [dateTime, setDateTime] = useState("");


    // Date and Time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString(); // For Date
      const formattedTime = now.toLocaleTimeString(); // For Time

      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
    return(
        <h2 className="date-time">{dateTime} PM</h2>

    )
}