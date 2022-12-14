import classes from './styles.module.scss'
import background from './photo/background.jpg'
import { SecondPartFooter } from './SecondPartFooter'

export const Footer = () => {
    return (
        <div>
            <div className={classes.nn}>
                <div className={classes.top}>
                    <div className={classes.block}>
                        <div className={classes.firstPart}>
                            <div className={classes.title}>How Can We Help You?</div>
                            <div className={classes.text}>We pride ourselves on superior customer service. Speak to a member of our sales team to help with your order. </div>
                            <div className={classes.email}>Get In Touch support@Meridian.com </div>
                        </div>
                        <div className={classes.secondPart}>
                            <div className={classes.bg}>
                                <div className={classes.phoneBox}>
                                    <div className={classes.phoneIcon}>
                                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25.5116 17.4883C25.3569 17.3334 25.1732 17.2105 24.9711 17.1267C24.7689 17.0428 24.5521 16.9997 24.3332 16.9997C24.1143 16.9997 23.8976 17.0428 23.6954 17.1267C23.4932 17.2105 23.3095 17.3334 23.1549 17.4883L20.4982 20.145C19.2666 19.7783 16.9682 18.945 15.5116 17.4883C14.0549 16.0317 13.2216 13.7333 12.8549 12.5017L15.5116 9.84501C15.6665 9.69036 15.7894 9.50669 15.8732 9.3045C15.9571 9.10231 16.0002 8.88556 16.0002 8.66668C16.0002 8.44779 15.9571 8.23104 15.8732 8.02885C15.7894 7.82666 15.6665 7.64299 15.5116 7.48834L8.8449 0.821676C8.69026 0.666767 8.50658 0.54387 8.30439 0.460019C8.1022 0.376168 7.88546 0.333008 7.66657 0.333008C7.44768 0.333008 7.23094 0.376168 7.02875 0.460019C6.82656 0.54387 6.64288 0.666767 6.48824 0.821676L1.96824 5.34168C1.33491 5.97501 0.978239 6.84501 0.991572 7.73334C1.02991 10.1067 1.65824 18.35 8.1549 24.8467C14.6516 31.3433 22.8949 31.97 25.2699 32.01H25.3166C26.1966 32.01 27.0282 31.6633 27.6582 31.0333L32.1782 26.5133C32.3331 26.3587 32.456 26.175 32.5399 25.9728C32.6237 25.7706 32.6669 25.5539 32.6669 25.335C32.6669 25.1161 32.6237 24.8994 32.5399 24.6972C32.456 24.495 32.3331 24.3113 32.1782 24.1567L25.5116 17.4883ZM25.2999 28.675C23.2199 28.64 16.1032 28.0817 10.5116 22.4883C4.90157 16.8783 4.35824 9.73668 4.3249 7.69834L7.66657 4.35668L11.9766 8.66668L9.82157 10.8217C9.62567 11.0174 9.48164 11.2589 9.40249 11.5243C9.32334 11.7897 9.31157 12.0706 9.36824 12.3417C9.40824 12.5333 10.3866 17.0783 13.1532 19.845C15.9199 22.6117 20.4649 23.59 20.6566 23.63C20.9275 23.6883 21.2087 23.6774 21.4743 23.5985C21.7399 23.5196 21.9814 23.3751 22.1766 23.1783L24.3332 21.0233L28.6432 25.3333L25.2999 28.675Z" fill="#232323" />
                                        </svg>
                                    </div>
                                    <a href="#number" className={classes.number}>01789 339533</a>
                                </div>
                            </div>
                            <div className={classes.time}>8am to 6pm, 7 days a week</div>
                        </div>
                    </div>
                </div>
            </div>
            <SecondPartFooter />
        </div>
    )
}