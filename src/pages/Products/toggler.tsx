import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { livingSlice, LIVING_OPENED } from '../../store/slices/living'

// import { topFormSlice, TopForm, TOP_FORM_VARIANT } from '../../store/slices/top-form'
// import { searchSlice, SEARCH_OPENED } from '../../store/slices/plus-minus'

import classes from './styles.module.scss'

export const Toggler = () => {
  const dispatch = useDispatch()
  const opened = useSelector( LIVING_OPENED)

  const handleToggleSearch = useCallback(() => dispatch(livingSlice.actions.toggle()), [dispatch])

  return (
    <button className={classes.searchBox} onClick={handleToggleSearch}>
      {opened ? (

        <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.15625 0.886719H20.8438C21 0.886719 21.0781 0.964844 21.0781 1.12109V2.87891C21.0781 3.03516 21 3.11328 20.8438 3.11328H1.15625C1 3.11328 0.921875 3.03516 0.921875 2.87891V1.12109C0.921875 0.964844 1 0.886719 1.15625 0.886719Z" fill="#888887" />
        </svg>
      ) : (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.1211 4.45312H15.8789C16.0352 4.45312 16.1133 4.53125 16.1133 4.6875V25.3125C16.1133 25.4688 16.0352 25.5469 15.8789 25.5469H14.1211C13.9648 25.5469 13.8867 25.4688 13.8867 25.3125V4.6875C13.8867 4.53125 13.9648 4.45312 14.1211 4.45312Z" fill="#888887" />
          <path d="M5.15625 13.8867H24.8438C25 13.8867 25.0781 13.9648 25.0781 14.1211V15.8789C25.0781 16.0352 25 16.1133 24.8438 16.1133H5.15625C5 16.1133 4.92188 16.0352 4.92188 15.8789V14.1211C4.92188 13.9648 5 13.8867 5.15625 13.8867Z" fill="#888887" />
        </svg>
      )}
    </button>
  )
}