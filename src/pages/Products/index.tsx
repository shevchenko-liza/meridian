import classes from './styles.module.scss'

import main from './photo/main.jpg'
import { Item } from './Item'
import { Collection } from "./Collection"
import { Category } from "./Category"
import { Product } from '../../components/assets/catalog'

export const Products = () => {
    const product = Product
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
            <div className={classes.part}>
                <Category />
                <div className={classes.top}>
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
            </div>
            <div>
            </div>
        </>
    )
}