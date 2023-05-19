import { ReactComponent as DiceIcon } from "../../assets/images/icon-dice.svg";
import styles from "./index.module.css";


const Advise = () => {
    return <div>
        <div>
            ADVISE #117
        </div>
        <p>
            "It is easy to sit up and
            take notice, what's
            difficult is getting up and
            taking action."
        </p>
        <div className={styles.divider}></div>
        <button aria-label="click to get another advice">
            <DiceIcon aria-hidden={true} focusable={false} />
        </button>

    </div>
}

export default Advise;