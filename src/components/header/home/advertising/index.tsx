import classes from './styles.module.scss'

import background from './photo/background.jpg'
import needle from './photo/needle.png'

export const Advertising = () => {
    return (
        <div>
            <div className={classes.boxes}>
                <div className={classes.box}>
                    <div className={classes.top}>
                        <img src={needle} className={classes.icon1} />
                    </div>
                    <div className={classes.titleTop}>
                        <div className={classes.title}>COMMITED TO EUROPIAN MANUFACTURING</div>
                    </div>
                </div>
                <div className={classes.textTop}>
                    <div className={classes.text}>our Products are made with high quality european fabric and sewn by a small team CRAFTSPEOPLE in EUROPE</div>
                </div>
            </div>
            <div className={classes.block}>
                <img src={background} className={classes.icon} />
            </div>
        </div>
    )
}