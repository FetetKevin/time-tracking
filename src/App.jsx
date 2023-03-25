import "./App.css";
import Sidebar from "./components/Sidebar";
import Box from "./components/Box";
import data from "./data.json";
import { useState } from "react";

export default function App() {
    const [timer, setTimer] = useState("daily");

    const daily = () => {
        setTimer("daily");
    };

    const weekly = () => {
        setTimer("weekly");
    };

    const monthly = () => {
        setTimer("monthly");
    };

    let i = 0;
    const myBoxes = data.map((el) => <Box key={i++} data={el} timer={timer} />);
    return (
        <div className="container">
            <Sidebar daily={daily} weekly={weekly} monthly={monthly} />
            {myBoxes}
        </div>
    );
}
