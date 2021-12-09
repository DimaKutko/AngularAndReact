import React, { useEffect, useState } from "react";

const Hook = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        console.log("updateMount")
        const timerID = setInterval(
        () => tick(),
        1000
      );
      return () => {
        console.log('Will Unmount')
        clearInterval(timerID);
      };
    }, []);


    function tick() {
        setDate(new Date());
      }

    return (
        <>
            <div>
                <h1>Привет, мир!</h1>
                <h2>Сейчас {date.toLocaleTimeString()}.</h2>
            </div>
        </>
    )
};

export default Hook;