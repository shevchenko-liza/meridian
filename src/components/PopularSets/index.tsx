import { Item } from './Item'
import classes from './styles.module.scss'
import { Product } from '../assets/catalog'

export const PopularSets = () => {
    const catalog = Product
        .filter(catalog => catalog.status)

    return (
        <div className={classes.catalog}>
            {catalog.map((item) => (
                <Item
                    key={`${item.id}`}
                    id={`${item.id}`}
                    name={item.name}
                    price={item.price}
                    photo={item.photo} />
            ))}
        </div>
    )
}