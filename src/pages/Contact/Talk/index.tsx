import clsx from 'clsx'
import classes from './styles.module.scss'

export const Talk = () => {
    return (
        <div>
            <div className={classes.title}>Let’s Talk With Us</div>
            <div className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nulla a ut diam et, sapien dis</div>
            <div className={classes.box}>
                <div className={classes.first}>
                    <div className={classes.name}>Name</div>
                    <input placeholder='Name' name='userName ' type='text' className={classes.userName}></input>
                </div>
                <div className={classes.second}>
                    <div className={classes.email}>Email</div>
                    <input placeholder='Enter your email' name='userName ' type='text' className={classes.userEmail}></input>
                </div>
            </div>
            <div className={classes.block}>
                <div className={classes.message}>Message</div>
                <div>
                    <input placeholder='Write your message' name='userName ' type='text' className={classes.userMessage}></input>
                </div>
                <button type="submit" className={clsx(classes.button, classes.order)}>Send message</button>
            </div>
        </div>

    )
}