import { useEffect, useState } from "react";
import { ReactComponent as DiceIcon } from "../../assets/images/icon-dice.svg";
import CubeLoader from "../ui/CubeLoader";
import styles from "./index.module.css";


const Advice = () => {

    const [data, setData] = useState({
        loading: false,
        firstLoad: true,
        hasError: false,
        slip: {}
    });

    useEffect(() => {
        getAdvice();
    }, [])

    const getAdvice = () => {
        setData((prevState) => {
            return { ...prevState, loading: true }
        })

        fetch("https://api.adviceslip.com/advice")
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Something went wrong');
            })
            .then(data => setData({ slip: data.slip, loading: false, firstLoad: false, hasError: false }))
            .catch((error) => {
                setData({ slip: {}, loading: false, firstLoad: false, hasError: true })
            })
    }

    const getAdviceHandler = (e) => {
        e.preventDefault();
        getAdvice();
    }

    if (data.loading && data.firstLoad) {
        return <div className={`${styles.container}`}>

            <h2 className={`${styles.title} ${styles.placeholder}`}>
                ADVICE #117
            </h2>
            <p className={`${styles.advice} ${styles.placeholder}`}>
                "It is easy to sit up and take
                notice, what's difficult is getting
                up and taking action."
            </p>
            <div className={styles.divider}></div>
            <button className={styles.dice}>
                <CubeLoader />
            </button>

        </div >
    }

    if (data.hasError) {
        return <div className={styles.container}>

            <p className={styles.error}>
                Somthing went wrong. Please try again
            </p>
            <div className={styles.divider}></div>
            <button className={styles.dice} onClick={(e) => getAdviceHandler(e)} aria-label="click to get another advice">
                {
                    data.loading ? <CubeLoader /> : <DiceIcon aria-hidden={true} focusable={false} />
                }
            </button>
        </div >
    }

    return <div className={styles.container}>

        <h2 className={styles.title}>
            advice #{data.slip.id}
        </h2>
        <p className={styles.advice}>
            {data.slip.advice}
        </p>
        <div className={styles.divider}></div>
        <button className={styles.dice} onClick={(e) => getAdviceHandler(e)} aria-label="click to get another advice">
            {
                data.loading ? <CubeLoader /> : <DiceIcon aria-hidden={true} focusable={false} />
            }
        </button>
    </div >
}

export default Advice;