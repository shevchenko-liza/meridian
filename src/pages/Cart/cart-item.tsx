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
    <>
    <div className={classes.borderMain}>
      <div className={classes.cartCatalog}>
        <div className={classes.photoBox}>
          <img className={classes.photo} src={product.photo} alt="" />
        </div>
        <div className={classes.infoBox}>
          <div className={classes.titleBox}>
          <div className={classes.title}>{product.name} </div>
          </div>
          <div className={classes.form}>
            <div className={classes.inputBox}>
              <button type="button" onClick={decrease} className={clsx(classes.buttonInput, classes.decrease)} value="-">-</button>
              <input type="text" size={3} className={classes.input} value={cartItem.count} onChange={handleChange} />
              <button type="button" onClick={increase} className={clsx(classes.buttonInput, classes.increase)} value="+">+</button>
            </div>
          </div>
          <div className={classes.price}>{product.price} </div>
        </div>
        <div className={classes.buttonForm}>
          <button className={classes.butttonDelet} onClick={handleDelete}>
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.85522 0.939453L9.15309 9.05051M9.15309 9.05051L16.451 17.1616M9.15309 9.05051L16.451 0.939453M9.15309 9.05051L1.85522 17.1616" stroke="#333333" stroke-width="1.8766" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}