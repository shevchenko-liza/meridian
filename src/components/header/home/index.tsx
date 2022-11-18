import { useParams } from 'react-router-dom'

import classes from './styles.module.scss'

import icon from './photo/main.png'

import { Collection } from './collection'
import { ReadyToShip } from './readyToShip'
import { Advertising } from './advertising'
import { UniqueCollection } from './unique collection'
import { HomeFurniture } from './Home furniture'
import { Instagram } from './Instagram'

export const Home = () => {
    const { home } = useParams()

    return (
        <>
            <div className={classes.top}>
                <div className={classes.box}>
                    <div className={classes.title}>MODERN, CONTEMPORARY OUTDOOR FURNITURE</div>
                    <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper eget ultrices gravida gravida. Suspendisse pharetra quis eros facilisi.</div>
                    <div className={classes.button}>
                        <button className={classes.shop}>Shop Collections</button>
                    </div>
                </div>
                <div className={classes.photo}>
                    <img src={icon} className={classes.icon} />
                </div>
                <Collection />
                <ReadyToShip />
                <Advertising />
                <UniqueCollection />
                <HomeFurniture/>
             <Instagram/>
            </div>
        </>
    )
}