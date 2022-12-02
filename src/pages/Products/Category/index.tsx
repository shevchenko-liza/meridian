import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { livingSlice, LIVING_OPENED } from '../../../store/slices/living'
import { LivingRoom } from '../livingRoom'
import { Toggler } from '../toggler'
import classes from './styles.module.scss'

export const Category = () => {
    const dispatch = useDispatch()
    const opened = useSelector(LIVING_OPENED)

    const handleToggle = useCallback(() => dispatch(livingSlice.actions.toggle()), [dispatch])
    return (
        <div>
            <div className={classes.box}>
                <div className={classes.block}>
                    <div className={classes.category}>Category</div>
                    <div className={classes.arivalsBox}>
                        <button className={classes.newArrivals}>New Arrivals</button>
                        <div>
                            <svg className={classes.arivalPlus} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.1211 4.45312H15.8789C16.0352 4.45312 16.1133 4.53125 16.1133 4.6875V25.3125C16.1133 25.4688 16.0352 25.5469 15.8789 25.5469H14.1211C13.9648 25.5469 13.8867 25.4688 13.8867 25.3125V4.6875C13.8867 4.53125 13.9648 4.45312 14.1211 4.45312Z" fill="#888887" />
                                <path d="M5.15625 13.8867H24.8438C25 13.8867 25.0781 13.9648 25.0781 14.1211V15.8789C25.0781 16.0352 25 16.1133 24.8438 16.1133H5.15625C5 16.1133 4.92188 16.0352 4.92188 15.8789V14.1211C4.92188 13.9648 5 13.8867 5.15625 13.8867Z" fill="#888887" />
                            </svg>
                        </div>
                    </div>
                    <div className={classes.roomBox}>
                        <div className={classes.ttt}>
                            <button onClick={handleToggle} className={classes.livingRoom}>Living Room</button>
                            <div className={classes.toggle}>
                                <Toggler />
                            </div>
                        </div>
                        {opened ? <LivingRoom /> : null}
                    </div>
                    <div className={classes.kitchenBox}>
                        <button className={classes.kitchenRoom}>Kitchen & Dining Rooms</button>
                        <svg className={classes.kitchenPlus} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.1211 4.45312H15.8789C16.0352 4.45312 16.1133 4.53125 16.1133 4.6875V25.3125C16.1133 25.4688 16.0352 25.5469 15.8789 25.5469H14.1211C13.9648 25.5469 13.8867 25.4688 13.8867 25.3125V4.6875C13.8867 4.53125 13.9648 4.45312 14.1211 4.45312Z" fill="#888887" />
                            <path d="M5.15625 13.8867H24.8438C25 13.8867 25.0781 13.9648 25.0781 14.1211V15.8789C25.0781 16.0352 25 16.1133 24.8438 16.1133H5.15625C5 16.1133 4.92188 16.0352 4.92188 15.8789V14.1211C4.92188 13.9648 5 13.8867 5.15625 13.8867Z" fill="#888887" />
                        </svg>
                    </div>
                    <div className={classes.bedroomsBox}>
                        <button className={classes.bedrooms}>Bedrooms</button>
                        <div>
                            <svg className={classes.bedroomPlus} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.1211 4.45312H15.8789C16.0352 4.45312 16.1133 4.53125 16.1133 4.6875V25.3125C16.1133 25.4688 16.0352 25.5469 15.8789 25.5469H14.1211C13.9648 25.5469 13.8867 25.4688 13.8867 25.3125V4.6875C13.8867 4.53125 13.9648 4.45312 14.1211 4.45312Z" fill="#888887" />
                                <path d="M5.15625 13.8867H24.8438C25 13.8867 25.0781 13.9648 25.0781 14.1211V15.8789C25.0781 16.0352 25 16.1133 24.8438 16.1133H5.15625C5 16.1133 4.92188 16.0352 4.92188 15.8789V14.1211C4.92188 13.9648 5 13.8867 5.15625 13.8867Z" fill="#888887" />
                            </svg>
                        </div>
                    </div>
                    <div className={classes.accentsBox}>
                        <button className={classes.accents}>Accents</button>
                        <svg className={classes.accentsPlus} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.1211 4.45312H15.8789C16.0352 4.45312 16.1133 4.53125 16.1133 4.6875V25.3125C16.1133 25.4688 16.0352 25.5469 15.8789 25.5469H14.1211C13.9648 25.5469 13.8867 25.4688 13.8867 25.3125V4.6875C13.8867 4.53125 13.9648 4.45312 14.1211 4.45312Z" fill="#888887" />
                            <path d="M5.15625 13.8867H24.8438C25 13.8867 25.0781 13.9648 25.0781 14.1211V15.8789C25.0781 16.0352 25 16.1133 24.8438 16.1133H5.15625C5 16.1133 4.92188 16.0352 4.92188 15.8789V14.1211C4.92188 13.9648 5 13.8867 5.15625 13.8867Z" fill="#888887" />
                        </svg>
                    </div>
                    <div className={classes.tablesBox}>
                        <button className={classes.occasionalTables}>Occasional Tables</button>
                        <svg className={classes.tablesPlus} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.1211 4.45312H15.8789C16.0352 4.45312 16.1133 4.53125 16.1133 4.6875V25.3125C16.1133 25.4688 16.0352 25.5469 15.8789 25.5469H14.1211C13.9648 25.5469 13.8867 25.4688 13.8867 25.3125V4.6875C13.8867 4.53125 13.9648 4.45312 14.1211 4.45312Z" fill="#888887" />
                            <path d="M5.15625 13.8867H24.8438C25 13.8867 25.0781 13.9648 25.0781 14.1211V15.8789C25.0781 16.0352 25 16.1133 24.8438 16.1133H5.15625C5 16.1133 4.92188 16.0352 4.92188 15.8789V14.1211C4.92188 13.9648 5 13.8867 5.15625 13.8867Z" fill="#888887" />
                        </svg>
                    </div>
                    <div className={classes.officeBox}>
                        <button className={classes.office}>Office/Home Office</button>
                        <svg className={classes.officePlus} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.1211 4.45312H15.8789C16.0352 4.45312 16.1133 4.53125 16.1133 4.6875V25.3125C16.1133 25.4688 16.0352 25.5469 15.8789 25.5469H14.1211C13.9648 25.5469 13.8867 25.4688 13.8867 25.3125V4.6875C13.8867 4.53125 13.9648 4.45312 14.1211 4.45312Z" fill="#888887" />
                            <path d="M5.15625 13.8867H24.8438C25 13.8867 25.0781 13.9648 25.0781 14.1211V15.8789C25.0781 16.0352 25 16.1133 24.8438 16.1133H5.15625C5 16.1133 4.92188 16.0352 4.92188 15.8789V14.1211C4.92188 13.9648 5 13.8867 5.15625 13.8867Z" fill="#888887" />
                        </svg>
                    </div>
                    <div className={classes.furnitureBox}>
                        <button className={classes.outdoorFurniture}>Outdoor Furniture</button>
                        <svg className={classes.furniturePlus} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.1211 4.45312H15.8789C16.0352 4.45312 16.1133 4.53125 16.1133 4.6875V25.3125C16.1133 25.4688 16.0352 25.5469 15.8789 25.5469H14.1211C13.9648 25.5469 13.8867 25.4688 13.8867 25.3125V4.6875C13.8867 4.53125 13.9648 4.45312 14.1211 4.45312Z" fill="#888887" />
                            <path d="M5.15625 13.8867H24.8438C25 13.8867 25.0781 13.9648 25.0781 14.1211V15.8789C25.0781 16.0352 25 16.1133 24.8438 16.1133H5.15625C5 16.1133 4.92188 16.0352 4.92188 15.8789V14.1211C4.92188 13.9648 5 13.8867 5.15625 13.8867Z" fill="#888887" />
                        </svg>
                    </div>
                    <div className={classes.border}></div>
                    <div className={classes.featured}>Featured</div>
                    <div className={classes.springBox}>
                        <input className={classes.checkboxSpring} type="checkbox"></input>
                        <div className={classes.spBlock}>
                            <label className={classes.spring}>Spring</label>
                        </div>
                    </div>
                    <div className={classes.slBox}>
                        <input className={classes.checkboxSpring} type="checkbox"></input>
                        <div className={classes.slBlock}>
                            <label className={classes.sale}>Sale</label>
                        </div>
                    </div>
                    <div className={classes.arBox}>
                        <input className={classes.checkboxSpring} type="checkbox"></input>
                        <div className={classes.arBlock}>
                            <label className={classes.chArrival}>New Arrival</label>
                        </div>
                    </div>
                    <div className={classes.clBox}>
                        <input className={classes.checkboxSpring} type="checkbox"></input>
                        <div className={classes.clBlock}>
                            <label className={classes.clearance}>Clearance</label>
                        </div>
                    </div>
                    <div className={classes.secondBorder}></div>
                    <div >
                        <div className={classes.price}>Price Range</div>
                        <input className={classes.input} type="range" ></input>
                    </div>
                    <div className={classes.inpitPrice}>
                        <div className={classes.minBox}>
                            <div className={classes.min}>Min</div>
                            <input className={classes.num} type="number" placeholder="0"  ></input>
                        </div>
                        <div className={classes.maxBox}>
                            <div className={classes.min}>Max</div>
                            <input className={classes.num} type="number" placeholder="000"  ></input>
                        </div>
                    </div>
                    <div className={classes.border}></div>
                    <div className={classes.bt}>
                        <button className={classes.clear}>Clear All</button>
                    </div>
                </div>
            </div>
        </div>
    )
}