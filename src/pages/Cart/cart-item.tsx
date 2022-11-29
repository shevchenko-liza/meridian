import clsx from 'clsx'
import { ChangeEventHandler, FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Product } from '../../components/assets/catalog'
import { CART, cartSlice } from '../../store/cart'
import classes from './styles.module.scss'

interface CartItemProps {
    id: number | `${number}`
  }
  
  const number = (value: string) => parseInt(value, 10) || 1
  
  export const CartItem: FC<CartItemProps> = ({ id }) => {
    const dispatch = useDispatch()
  
    const cartItem = useSelector(CART).list[id]
    const product = Product[id]
  
    const decrease = useCallback(() => dispatch(cartSlice.actions.decrease(id)), [dispatch, id])
  
    const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(event => {
      dispatch(cartSlice.actions.set({ id: product.id, count: number(event.target.value) }))
    }, [dispatch, product.id])
    
    const increase = useCallback(() => dispatch(cartSlice.actions.increase(id)), [dispatch, id])
  
    const handleDelete = useCallback(() => dispatch(cartSlice.actions.unset(id)), [dispatch, id])
  
    return (
      <div>
        <div className={classes.cartCatalog}>
          <div className={classes.photoBox}>
          <img className={classes.photo} src={product.photo} alt="" />
          </div>
          <div className={classes.infoBox}>
            <div className={classes.title}>{product.name} </div>
            <div className={classes.title}>{product.price} </div>
          </div>
          <div className={classes.form}>
            <div className={classes.inputBox}>
              <button type="button" onClick={decrease} className={clsx(classes.button, classes.decrease)} value="-">-</button>
              <input type="text" size={3} className={classes.input} value={cartItem.count} onChange={handleChange} />
              <button type="button" onClick={increase} className={clsx(classes.button, classes.increase)} value="+">+</button>
            </div>
          </div>
          <div className={classes.buttonForm}>
            <button className={classes.butttonDelet} onClick={handleDelete}>
            </button>
          </div>
        </div>
      </div>
    )
  }