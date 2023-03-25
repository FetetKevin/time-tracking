import Dots from "../assets/images/icon-ellipsis.svg";

export default function Box(props) {
    const { title } = props.data;
    const { timeframes } = props.data;
    const { timer } = props;

    return (
        <main className={title}>
            <div className="content">
                <div className="head">
                    <h2>{title}</h2>
                    <img className="icon-dots" src={Dots} alt="" />
                </div>
                <h3>{timeframes[timer].current}hrs</h3>
                <h4>Last Week - {timeframes[timer].previous}hrs</h4>
            </div>
        </main>
    );
}
