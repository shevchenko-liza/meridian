import { FC } from "react"
import { useParams } from "react-router-dom"
import { Product } from "../../../components/assets/catalog"
import { Collection } from "../../Products/Collection"
import { Item } from "../Item"



import classes from './styles.module.scss'
export const ProductSofa= () => {
// const{id}=useParams()
    const product = Product
    // const sofa = product.find(sofa => id !== undefined && sofa.id === parseInt(id))
    return (
        <div >
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
            {/* <div className={classes.name}>{product.name}</div> */}
        </div>
    )
}