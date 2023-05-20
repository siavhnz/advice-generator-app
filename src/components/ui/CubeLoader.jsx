// https://codepen.io/desandro/pen/KRWjzm
// https://game-icons.net/tags/dice.html

import styles from "./CubeLoader.module.css";
import { ReactComponent as Dice1Icon } from "../../assets/images/dice-1.svg";
import { ReactComponent as Dice2Icon } from "../../assets/images/dice-2.svg";
import { ReactComponent as Dice3Icon } from "../../assets/images/dice-3.svg";
import { ReactComponent as Dice4Icon } from "../../assets/images/dice-4.svg";
import { ReactComponent as Dice5Icon } from "../../assets/images/dice-5.svg";
import { ReactComponent as Dice6Icon } from "../../assets/images/dice-6.svg";

const CubeLoader = () => {
    return <div className={styles.container}>
        <div className={`${styles.cube}`}>
            <div className={`${styles.face} ${styles.front}`}>
                <Dice1Icon aria-hidden={true} focusable={false} />
            </div>
            <div className={`${styles.face} ${styles.back}`}>
                <Dice2Icon aria-hidden={true} focusable={false} />
            </div>
            <div className={`${styles.face} ${styles.right}`}>
                <Dice3Icon aria-hidden={true} focusable={false} />
            </div>
            <div className={`${styles.face} ${styles.left}`}>
                <Dice4Icon aria-hidden={true} focusable={false} />
            </div>
            <div className={`${styles.face} ${styles.top}`}>
                <Dice5Icon aria-hidden={true} focusable={false} />
            </div>
            <div className={`${styles.face} ${styles.bottom}`}>
                <Dice6Icon aria-hidden={true} focusable={false} />
            </div>
        </div>
    </div>
}

export default CubeLoader;