import { Background } from "./background"

import classes from './styles.module.scss'

import icon from './photo/logo.png'
import { generatePath, Link } from "react-router-dom"


export const Header = () => {
    return (
        <>
            <Background />
            <div className={classes.box}>
                <div className={classes.block}>
                    <div className={classes.title}>
                        <Link to={generatePath("home")}>
                            <div className={classes.home}>Home</div>
                        </Link>
                        <Link to={generatePath("")}>
                            <div className={classes.home}>Products</div>
                        </Link>
                        <Link to={generatePath("")}>
                            <div className={classes.home}>Showroom</div>
                        </Link>
                        <Link to={generatePath("aboutUs")}>
                            <div className={classes.home}>About Us</div>
                        </Link>
                        <Link to={generatePath("")}>
                            <div className={classes.home}>Contact</div>
                        </Link>
                    </div>
                    <div className={classes.top}>
                        <img src={icon} className={classes.logo} />
                    </div>
                    <div className={classes.secondPart}>
                        <div className={classes.name}>
                            <Link to={generatePath("")}>
                                <div className={classes.homes}>Dealer Login</div>
                            </Link>
                            <Link to={generatePath("")}>
                                <div className={classes.home}>Become A Dealer</div>
                            </Link>
                            <Link to={generatePath("")}>
                                <div className={classes.home}>Find A Retail</div>
                            </Link>
                            <Link to={generatePath("")}>
                                <div className={classes.home}>Bec</div>
                            </Link>
                            <Link to={generatePath("")}>
                                <div className={classes.home}>Fin</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}