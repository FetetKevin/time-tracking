import Duck from "../assets/images/duck.jpg";
import { useState } from "react";

export default function Sidebar(props) {
    const [activeElement, setActiveElement] = useState(1);

    function active(id) {
        // If the clicked element is already active, do nothing
        if (id === activeElement) {
            return;
        }

        // Set the clicked element as the new active element
        setActiveElement(id);
    }

    return (
        <header>
            <div className="hero">
                <img src={Duck} alt="" />
                <p>Report for</p>
                <h2>Honk Honk</h2>
                <h3>DuckyGo</h3>
            </div>
            <div className="options">
                <p
                    onClick={() => {
                        props.daily();
                        active(1);
                    }}
                    className={activeElement === 1 ? "active" : ""}
                >
                    Daily
                </p>
                <p
                    onClick={() => {
                        props.weekly();
                        active(2);
                    }}
                    className={activeElement === 2 ? "active" : ""}
                >
                    Weekly
                </p>
                <p
                    onClick={() => {
                        props.monthly();
                        active(3);
                    }}
                    className={activeElement === 3 ? "active" : ""}
                >
                    Monthly
                </p>
            </div>
        </header>
    );
}
