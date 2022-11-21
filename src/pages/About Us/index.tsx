import { useParams } from "react-router-dom"

import classes from './styles.module.scss'

import icon from './photo/main.jpg'

import clsx from "clsx"
import { Meridian } from "./meridian"

export const AboutUs = () => {
    const { aboutUs } = useParams()
    return (
        <>
            <div className={classes.block}>
                <div className={classes.box}>
                    <div className={classes.top}>
                        <div className={classes.title}>Meridian Furniture</div>
                        <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus rhoncus montes, sem lacus, sed sit sed. Scelerisque aliquam justo tincidunt vitae ultricies enim eget. Et sodales quis odio at risus semper. Et ante in.</div>
                        <button type="submit" className={clsx(classes.button, classes.order)}>See Our Collections</button>
                    </div>
                </div>
            </div>
            <div className={classes.bg}>
                <img src={icon} className={classes.icon} />
            </div>
            <Meridian />
        </>
    )
}