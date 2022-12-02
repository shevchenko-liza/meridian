import classes from './styles.module.scss'

import icon1 from './photo/icon1.jpg'
import icon2 from './photo/icon2.jpg'
import icon3 from './photo/icon3.jpg'
import icon4 from './photo/icon4.jpg'
import clsx from 'clsx'

export const Instagram = () => {
    return (
        <div className={classes.box}>
            <div className={clsx(classes.title, classes.block)}>Get Inspired & Find Us on Instagram</div>
            <div className={classes.iconBox}>
                <img src={icon1} className={classes.icon1} />
                <img src={icon2} className={classes.icon2} />
                <img src={icon3} className={classes.icon3} />
                <img src={icon4} className={classes.icon4} />
            </div>
            <div className={classes.part}>
                {/* <div className={classes.border}>
                    <div className={classes.text}>View Product</div>
                </div> */}
            </div>
        </div>
    )
}