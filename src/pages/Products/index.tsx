import { useParams } from "react-router-dom"

import classes from './styles.module.scss'

import main from './photo/main.jpg'
import { Collection } from "./Collection"

export const Products = () => {
    const { products } = useParams()
    return (
        <>
            <div className={classes.box}>
                <div className={classes.block}>
                    <div className={classes.titleBox}>
                        <div className={classes.title}>Two Day Sale - Up To 40% Off</div>
                    </div>
                    <div className={classes.text}>Ending Soon!</div>
                </div>
                <div className={classes.iconBox}>
                    <img src={main} className={classes.main} />
                </div>
            </div>
            <Collection />
        </>
    )
}