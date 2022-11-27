import { generatePath, Link } from 'react-router-dom'

import classes from './styles.module.scss'

export const LivingRoom = () => {
    return (
        <div className={classes.box}>
            <div className={classes.block}>
                <div className={classes.sofaBox}>
                    <input className={classes.checkboxSofa} type="checkbox"></input>
                    <div className={classes.soBlock}>
                        <Link to={generatePath("/collection/sofa")}>
                            <button className={classes.sofa}>Sofas</button>
                        </Link>
                    </div>
                </div>
                <div className={classes.seatsBox}>
                    <input className={classes.checkboxseats} type="checkbox"></input>
                    <div className={classes.seBlock}>
                        <label className={classes.seats}>Love Seats</label>
                    </div>
                </div>
                <div className={classes.chairsBox}>
                    <input className={classes.checkboxChairs} type="checkbox"></input>
                    <div className={classes.chBlock}>
                        <label className={classes.chairs}>Chairs </label>
                    </div>
                </div>
                <div className={classes.sectionalsBox}>
                    <input className={classes.checkboxSectionals} type="checkbox"></input>
                    <div className={classes.sectBlock}>
                        <label className={classes.sectionals}>Sectionals</label>
                    </div>
                </div>
                <div className={classes.ottomansBox}>
                    <input className={classes.checkboxOttomans} type="checkbox"></input>
                    <div className={classes.ottBlock}>
                        <label className={classes.ottomans}>Ottomans</label>
                    </div>
                </div>
                <div className={classes.loungesBox}>
                    <input className={classes.checkboxLounges} type="checkbox"></input>
                    <div className={classes.louBlock}>
                        <label className={classes.lounges}>Chaise Lounges</label>
                    </div>
                </div>
                <div className={classes.collectionsBox}>
                    <input className={classes.checkboxCollections} type="checkbox"></input>
                    <div className={classes.collectBlock}>
                        <label className={classes.collections}>Collections</label>
                    </div>
                </div>
            </div>
        </div>
    )
}