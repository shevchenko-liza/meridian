import clsx from 'clsx'

import classes from './styles.module.scss'

export const Collection = () => {
    return (
        <div className={classes.box}>
            <div className={classes.block}>
                <div className={classes.title}>Collection</div>
                <div className={classes.showing}>Showing Products</div>
                <div className={classes.sortBox}>
                    <div className={classes.sort}>Sort by</div>
                    <select className={clsx(classes.optionSort, classes.bt)} >
                        <option className={classes.first}>Most recent</option>
                        <option className={classes.second}>Most recent</option>
                    </select>
                </div>
            </div>
        </div>
    )
}