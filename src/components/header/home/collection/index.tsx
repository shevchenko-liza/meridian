
import classes from './styles.module.scss'
import icon1 from './photo/icon1.png'
import icon2 from './photo/icon2.jpg'
import icon3 from './photo/icon3.jpg'
import icon4 from './photo/icon4.jpg'
import icon5 from './photo/icon5.jpg'
import gren from './photo/gren.jpg'

export const Collection = () => {
    return (
        <div className={classes.box}>
            <div className={classes.iconBox}>
                <img src={icon1} className={classes.icon1} />
                <img src={icon2} className={classes.icon2} />
            </div>
            <div className={classes.icons}>
                <img src={icon3} className={classes.icon3} />
                <img src={icon4} className={classes.icon4} />
                <img src={icon5} className={classes.icon5} />
            </div>
            <img src={gren} className={classes.green} />
        </div>

    )
}