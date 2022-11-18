import classes from './styles.module.scss'

import icon1 from './photo/icon1.jpg'
import icon2 from './photo/icon2.jpg'
import icon3 from './photo/icon3.jpg'
import icon4 from './photo/icon4.jpg'
import icon5 from './photo/icon5.jpg'

export const UniqueCollection = () => {
   return (
      <div className={classes.box}>
         <div className={classes.title}>Explore each unique collection</div>
         <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est id pretium pellentesque leo. Lorem.</div>
         <div className={classes.iconBox}>
            <img src={icon1} className={classes.icon1} />
            <img src={icon2} className={classes.icon2} />
         </div>
         <div className={classes.icons}>
            <img src={icon3} className={classes.icon3} />
            <img src={icon4} className={classes.icon4} />
            <img src={icon5} className={classes.icon5} />
         </div>
      </div>
   )
}