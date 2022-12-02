import clsx from 'clsx'
import { FC, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { cartSlice } from '../../../../store/cart'

import classes from '../styles.module.scss'
type ItemProps = {
  id: number
}
export const Order: FC<ItemProps> = ({ id }) => {
  const dispatch = useDispatch()

  const [amount] = useState(0);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    dispatch(cartSlice.actions.set({ id, count: amount }))
  }, [amount, id, dispatch])

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <button type="submit" className={clsx(classes.button, classes.order)}>Add To Cart</button>
    </form>
  )
}



