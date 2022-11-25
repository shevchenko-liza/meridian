import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { TopForm, topFormSlice } from '../store/slices/productInformation'
import classes from './styles.module.scss'

export const ProductInformation = () => {
    const dispatch = useDispatch()
    
    const handleToggleCallback = useCallback(() => dispatch(topFormSlice.actions.toggle(TopForm.DELIVERY)), [dispatch])

    const handleToggleCallbac = useCallback(() => dispatch(topFormSlice.actions.toggle(TopForm.DEL)), [dispatch])

    return (
        <div className={classes.box}>
            <button className={classes.included}>What’s Included?</button>
            <button onClick={handleToggleCallback} className={classes.delivery}>Delivery</button>
            <button onClick={handleToggleCallbac} className={classes.dimensions}>Dimensions</button>
            <button className={classes.finance}>Finance</button>
        </div>
    )
}