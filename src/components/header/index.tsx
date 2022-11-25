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
                            <button className={classes.home}>Home</button>
                        </Link>
                        <Link to={generatePath("collection")}>
                            <button className={classes.product}>Products</button>
                        </Link>
                        <Link to={generatePath("")}>
                            <button className={classes.showroom}>Showroom</button>
                        </Link>
                        <Link to={generatePath("aboutUs")}>
                            <button className={classes.aboutUs}>About Us</button>
                        </Link>
                        <Link to={generatePath("contact")}>
                            <button className={classes.contact}>Contact</button>
                        </Link>
                    </div>
                    <Link to="/" className={classes.top}>
                        <div className={classes.boxLogo}>
                        <img src={icon} className={classes.logo} />
                        </div>
                    </Link>
                    <div className={classes.secondPart}>
                        <div className={classes.name}>
                            <Link to={generatePath("")}>
                                <button className={classes.login}>Dealer Login</button>
                            </Link>
                            <Link to={generatePath("")}>
                                <button className={classes.dealer}>Become A Dealer</button>
                            </Link>
                            <Link to={generatePath("")}>
                                <button className={classes.retail}>Find A Retail</button>
                            </Link>
                            <div className={classes.part}>
                            <Link to={generatePath("home/cart")}>
                                <button className={classes.cart}>
                                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.8333 9.00016V6.54183C17.8333 5.77578 17.6824 5.01724 17.3892 4.30951C17.0961 3.60178 16.6664 2.95871 16.1247 2.41704C15.583 1.87536 14.94 1.44568 14.2322 1.15253C13.5245 0.85938 12.766 0.708496 11.9999 0.708496C11.2339 0.708496 10.4753 0.85938 9.7676 1.15253C9.05987 1.44568 8.4168 1.87536 7.87513 2.41704C7.33345 2.95871 6.90377 3.60178 6.61062 4.30951C6.31747 5.01724 6.16658 5.77578 6.16658 6.54183V12.3752C6.16658 12.5962 6.25438 12.8081 6.41066 12.9644C6.56694 13.1207 6.7789 13.2085 6.99992 13.2085C7.22093 13.2085 7.43289 13.1207 7.58917 12.9644C7.74545 12.8081 7.83325 12.5962 7.83325 12.3752V10.6668H14.4999V9.00016H7.83325V6.54183C7.83325 5.43676 8.27224 4.37695 9.05364 3.59555C9.83504 2.81415 10.8948 2.37516 11.9999 2.37516C13.105 2.37516 14.1648 2.81415 14.9462 3.59555C15.7276 4.37695 16.1666 5.43676 16.1666 6.54183V12.3335C16.1666 12.5545 16.2544 12.7665 16.4107 12.9228C16.5669 13.079 16.7789 13.1668 16.9999 13.1668C17.2209 13.1668 17.4329 13.079 17.5892 12.9228C17.7455 12.7665 17.8333 12.5545 17.8333 12.3335V10.6668H21.9999V25.6668H1.99992V10.6668H4.49992V9.00016H0.333252V25.7418C0.333252 26.164 0.500945 26.5688 0.79944 26.8673C1.09794 27.1658 1.50278 27.3335 1.92492 27.3335H22.0749C22.4971 27.3335 22.9019 27.1658 23.2004 26.8673C23.4989 26.5688 23.6666 26.164 23.6666 25.7418V9.00016H17.8333Z" fill="#545454" />
                                    </svg>
                                </button>
                                </Link>
                                <button className={classes.search}>
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.75 21.75C17.2728 21.75 21.75 17.2728 21.75 11.75C21.75 6.22715 17.2728 1.75 11.75 1.75C6.22715 1.75 1.75 6.22715 1.75 11.75C1.75 17.2728 6.22715 21.75 11.75 21.75Z" stroke="#545454" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M24.25 24.25L18.8125 18.8125" stroke="#545454" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}