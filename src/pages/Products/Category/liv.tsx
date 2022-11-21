import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LIVING_OPENED } from '../../../store/slices/living'
import { searchSlice, SEARCH_OPENED } from '../../../store/slices/plus-minus'
import { Collection } from '../Collection'
import { Tat } from '../TT'

// import { topFormSlice, TopForm, TOP_FORM_VARIANT } from '../../store/slices/top-form'


import classes from './styles.module.scss'

export const Search = () => {
  const dispatch = useDispatch()
  const opened = useSelector(LIVING_OPENED) 

  const handleToggleSearch = useCallback(() => dispatch(searchSlice.actions.toggle()), [dispatch])

  return (
    <div>
    <button className={classes.searchBox} onClick={handleToggleSearch}> LIVING    </button>
    {opened ? <Tat/>:null}
    </div>

  )
}