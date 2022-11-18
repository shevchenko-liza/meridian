import { useParams } from "react-router-dom"

import classes from './styles.module.scss'

import main from './photo/main.jpg'
import { Help } from "./help"
import { Talk } from "./Talk"

export const Contact = () => {
    const { contact } = useParams()
    return (
        <>
            <div className={classes.iconBox}>
                <img src={main} className={classes.main} />
            </div>
            <Help />
            <Talk />
        </>
    )
}