import { Product } from "../../components/assets/catalog"
import { Category } from "../Products/Category"
import { Item } from "./Item"

import classes from './styles.module.scss'

export const SofaPage = () => {
    const product = Product
    .filter(product => product.kind === 'sofas')

    return (
        <div className={classes.box}>
            <div>
                <Category />
            </div>
            <div className={classes.product}>
                {product.map((item: any) => (
                    <Item
                        price={item.price}
                        name={item.name}
                        photo={item.photo}
                        discount={item.discount}
                        id={item.id}
                        promotional_price={item.promotional_price}
                        kind={item.kind}
                    />
                ))}
            </div>
        </div>
    )
}