import classes from './styles.module.scss'

import icon from './photo/main.jpg'
export const Meridian=()=>{
    return(
        <div className={classes.box}>
            <div className={classes.iconBox}>
                <img src={icon} className={icon}/>
            </div>
            <div className={classes.textBox}>
                <div className={classes.title}>We Are Meridian</div>
                <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nulla a ut diam et, sapien dis. Iaculis turpis dui sed ipsum etiam. Habitant feugiat at enim pharetra. Lacus, dolor viverra amet purus nulla a, donec in egestas. Condimentum aenean odio pretium justo. Vitae in ut quam fermentum, eget. Luctus fermentum nulla magna eget at dapibus urna sit. Id non non arcu consequat at. Integer tortor interdum sit in quis fringilla euismod eros. Aliquam in enim morbi pulvinar. Sagittis accumsan pellentesque egestas ac massa sed sem. Mattis leo elementum dictum dolor faucibus. A sapien, nisi, justo euismod morbi.</div>
            </div>
        </div>

    )
    
}