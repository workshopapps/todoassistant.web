import React, { useState, useEffect } from 'react'
import styles from './Client.module.scss'

//Images
import client from '../../assets/home/client.png'
import arrowLeft from '../../assets/home/arrowLeft.png'
import arrowRight from '../../assets/home/arrowRight.png'

const clientTestimony = {
    data: [
        {
            Image: client,
            title: 'Lisa Lisandro',
            text: 'Fancy pockets filled with pocket sauce. Pocket sauce rampant in fancy pockets.',
        },
        {
            Image: client,
            title: 'Lisa Lisandro',
            text: 'Fancy pockets filled with pocket sauce. Pocket sauce rampant in fancy pockets.',
        },
        {
            Image: client,
            title: 'Lisa Lisandro',
            text: 'Fancy pockets filled with pocket sauce. Pocket sauce rampant in fancy pockets.',
        },
        {
            Image: client,
            title: 'Lisa Lisandro',
            text: 'Fancy pockets filled with pocket sauce. Pocket sauce rampant in fancy pockets.',
        },
    ]
}
const mobile = {
    data: [
        {
            Image: client,
            title: 'Lisa Lisandro',
            text: 'Fancy pockets filled with pocket sauce. Pocket sauce rampant in fancy pockets.',
        },
    ]
}

export function Card({value}) {
    return (
        <div className={styles.card} key={value.title}>
            <img src={value.Image} alt="client" />
            <h5>{value.title}</h5>
            <p>{value.text}</p>
        </div>
    )
}

export default function Client() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    })

    let dataShow;
    if (windowSize?.width > 900) {
        dataShow = clientTestimony.data
    } else {
        dataShow = mobile.data
    }


    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener("resize", handleResize)

        //This auto runs when there is no resize for current device width and height
        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
  return (
    <div className={styles.main}>
        <div className={styles.main__clientSub}>
            <h3>Over <span style={{color: "#FDA758"}}>+20 Million</span> Happy Clients</h3>
            <p>Join our 20 Million plus users and benefit fully.</p>
        </div>

        <div className={styles.main__card}>
        {dataShow.map((value, index) => (
            <Card key={index} value={value} />
            ))}

        </div>
        <div className={styles.main__arrow}>
            <img src={arrowLeft} alt="arrow left" />
            <img src={arrowRight} alt="arrow right" />
        </div>
    </div>
  )
}
