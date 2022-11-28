import clsx from 'clsx'
import { FC, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { generatePath, Link } from 'react-router-dom'
import { cartSlice } from '../../../store/cart'

import classes from './styles.module.scss'

type ItemProps = {
    id:  string
    name: string
    price: number | `${number}`
    photo: string
    discount: string
    promotional_price: number
    kind?: string
}

export const Order= () => {
    return (
      <div >
        <div className={classes.inputBox}>
          <button type="button"  className={clsx(classes.button, classes.decrease)} value="-">-</button>
          <input type="text" size={3} className={classes.input}  />
          <button type="button"  className={clsx(classes.button, classes.increase)} value="+">+</button>
        </div>
        <button type="submit" className={clsx(classes.button, classes.order)}>Заказать</button>
      </div>
    )
  }

export const Item: React.FC<ItemProps> = ({ id, name, price, photo, discount, promotional_price, kind }) => (
    <div>
        <img className={classes.photo} src={photo} alt="" />
        <Link to={generatePath("/sofa/:id", { id })} className={classes.name}>{name} </Link>
        <div>
            <div className={classes.block}>
                <div className={classes.price}>{price}</div>
                <div className={classes.promotional_price}>{promotional_price}</div>
                <div className={classes.discount}>{discount}</div>
            </div>
            <div className={classes.id}>{id}</div>
            <div className={classes.kind} >{kind}</div>
        </div>
    </div>
)