import { generatePath, Link } from 'react-router-dom'

import classes from './styles.module.scss'

type ItemProps = {
    id: string
    name: string
    price: number | `${number}`
    photo: string
    discount: string
    promotional_price: number
    kind:string
}

export const Item: React.FC<ItemProps> = ({ id, name, price, photo, discount, promotional_price,kind }) => (
    <div>
        <img className={classes.photo} src={photo} alt="" />
       
       <div className={classes.name}>{name} </div>
        
        <div>
            <div className={classes.block}>
                <div className={classes.price}>{price}</div>
                <div className={classes.promotional_price}>{promotional_price}</div>
                <div className={classes.discount}>{discount}</div>
            </div>
            <div className={classes.id}>{id}</div>
            <div >{kind}</div>
        </div>
    </div>
)