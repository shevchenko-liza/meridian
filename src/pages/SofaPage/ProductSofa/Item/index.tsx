import clsx from 'clsx'
import { FC } from 'react'

import classes from '../styles.module.scss'
type ItemProps={
    id: number 
}
export const Order:FC<ItemProps> = ({id}) => {
  return (
    <div className={classes.top}>
      <button type="submit" id={`${id}`} className={clsx(classes.button, classes.order)}>Заказать</button>
    </div>
  )
}


