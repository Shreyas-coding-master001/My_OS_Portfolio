import React, { useState, useEffect } from 'react'

const DateTime = () => {
    const [date, setdate] = useState("");
    
    useEffect(() => {
        const UpdatedDateTime = () => {
            const currentDate = new Date();
            const forrmatedate = currentDate.toLocaleString("en-IN",{
                weekday: "short",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            });

            setdate(forrmatedate.replaceAll(",",""));
        }

        UpdatedDateTime();
        const interval = setInterval(UpdatedDateTime ,1000);
        return () => clearInterval(interval);

    }, []);

  return (
    <div className="Date-Time">
        {date}
    </div>
  )
}

export default DateTime;
