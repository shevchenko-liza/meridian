import clsx from 'clsx';
import { FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import classes from './styles.module.scss'

type OrderProps = {
    id: number | `${number}`
  };
  
  export const Order: FC<OrderProps> = ({ id }) => {
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(0);
    const decrease = useCallback(() => setAmount((amount:number) => amount - 1), []);
    const increase = useCallback(() => setAmount((amount:number) => amount + 1), [])
  
    const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
      setAmount(parseFloat(event.target.value))
    }, [])
  
    const handleSubmit = useCallback((event: any) => {
      event.preventDefault()
  
      dispatch(<></>)
    }, [amount, id, dispatch])
  
    return (
      <div className={classes.block}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.inputBox}>
            <button type="button" onClick={decrease} className={clsx(classes.button, classes.decrease)} value="-">-</button>
            <input type="text" size={3} className={classes.input} value={amount} onChange={handleChange} />
            <button type="button" onClick={increase} className={clsx(classes.button, classes.increase)} value="+">+</button>
          </div>
          <button type="submit" className={clsx(classes.button, classes.order)}>Заказать</button>
        </form>
      </div>
    )
  }
  