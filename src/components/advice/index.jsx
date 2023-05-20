import { ReactComponent as DiceIcon } from "../../assets/images/icon-dice.svg";
import CubeLoader from "../ui/CubeLoader";
import styles from "./index.module.css";


const Advice = () => {
    return <div className={styles.container}>
        <h2 className={styles.title}>
            advice #117
        </h2>
        <p className={styles.advice}>
            "It is easy to sit up and
            take notice, what's
            difficult is getting up and
            taking action."
        </p>
        <div className={styles.divider}></div>
        <button className={styles.dice} aria-label="click to get another advice">
            {/* <DiceIcon aria-hidden={true} focusable={false} /> */}
            <CubeLoader />
        </button>

    </div >
}

export default Advice;