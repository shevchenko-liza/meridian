import classes from './styles.module.scss'

import icon1 from './photo/icon1.jpg'
import icon2 from './photo/icon2.jpg'
import icon3 from './photo/icon3.jpg'
import icon4 from './photo/icon4.jpg'
import right from './photo/right.jpg'
import left from './photo/left.jpg'
import clsx from 'clsx'

export const ReadyToShip = () => {
    return (
        <div>
            <div className={classes.block}>
                <div className={classes.title}>Ready To Ship</div>
                <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est id pretium pellentesque leo. Lorem.</div>
            </div>
            <div className={classes.box}>
                <div className={classes.top}>
                    <img src={left} className={classes.left} />
                    <div className={classes.couchPart}>
                        <div className={classes.couch}>
                            <img src={icon1} className={classes.iconCouch} />
                        </div>
                        <div className={classes.couchText}>Alina Velvet Modular Armless</div>
                        <div className={classes.couchPrice}>£799.00</div>
                        <button type="submit" className={clsx(classes.button, classes.order)}>View Details Products</button>
                    </div>
                    <div className={classes.sectionalPart}>
                        <div className={classes.sectional}>
                            <img src={icon2} className={classes.iconSectional} />
                        </div>
                        <div className={classes.sectionalText}>Alina Velvet Modular Sectional</div>
                        <div className={classes.sectionalPrice}>£699.00</div>
                        <button type="submit" className={clsx(classes.button, classes.order)}>View Details Products</button>
                    </div>
                    <div className={classes.sofaPart}>
                        <div className={classes.sofa}>
                            <img src={icon3} className={classes.iconSofa} />
                        </div>
                        <div className={classes.sofaText}>Serpentine Velvet Sofa</div>
                        <div className={classes.sofaPrice}>£795.00</div>
                        <button type="submit" className={clsx(classes.button, classes.order)}>View Details Products</button>
                    </div>
                    <div className={classes.chairPart}>
                        <div className={classes.chair}>
                            <img src={icon4} className={classes.iconChair} />
                        </div>
                        <div className={classes.chairText}>Serpentine Velvet Sofa</div>
                        <div className={classes.chairPrice}>£795.00</div>
                        <button type="submit" className={clsx(classes.button, classes.order)}>View Details Products</button>
                    </div>
                    <img src={right} className={classes.right} />
                </div>
            </div>
        </div>
    )
}