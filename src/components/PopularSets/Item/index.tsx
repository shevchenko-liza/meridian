import clsx from 'clsx'
import { FC } from 'react'
import { generatePath, Link } from 'react-router-dom'
import classes from '../styles.module.scss'

type ItemProps = {
    name: string
    price: number | string
    photo: string
    id: string
}

export const Item: FC<ItemProps> = ({ name, price, photo, id }) => (
    <div>
        <div className={classes.infoBox}>
            <img className={classes.photo} src={photo} alt="" />
            <Link to={generatePath("/:id", { id })} className={classes.name}>{name} </Link>
            <div className={classes.price}>{price}</div>
            <div className={classes.id}>{id}</div>
            <button type="submit" id={id} className={clsx(classes.button, classes.order)}>View Set</button>
        </div>
    </div>
)
