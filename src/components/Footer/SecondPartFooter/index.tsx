import classes from './styles.module.scss'
import icon from './photo/icon.png'

import visa from './photo/visa.jpg'
import google from './photo/google.jpg'
import apple from './photo/apple.jpg'
import mastercard from './photo/mastercard.jpg'

export const SecondPartFooter = () => {
    return (
        <>
            <div className={classes.bg}>
                <div className={classes.box}>
                    <div className={classes.firstPart}>
                        <div className={classes.icon}>
                            <img src={icon} className={classes.logo} />
                        </div>
                        <div className={classes.office}>Head Office</div>
                        <div className={classes.address}>32 Plum St, Trenton, NJ 08638, United States</div>
                        <div className={classes.phoneBox}>
                            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.2644 28.5332C21.9842 28.5324 21.7048 28.5017 21.4311 28.4415C16.2199 27.3635 11.4191 24.836 7.58107 21.1498C3.82496 17.4556 1.2199 12.752 0.0810707 7.60818C-0.0532115 6.9671 -0.0202534 6.30226 0.176774 5.67761C0.373802 5.05296 0.728269 4.48952 1.20607 4.04151L4.5394 0.833178C4.70966 0.672168 4.91195 0.548869 5.13309 0.47133C5.35422 0.39379 5.58921 0.363753 5.82274 0.383178C6.06487 0.408439 6.29854 0.486439 6.5073 0.611693C6.71605 0.736948 6.89484 0.906415 7.03107 1.10818L11.1977 7.26651C11.354 7.50546 11.4294 7.78826 11.4129 8.07329C11.3964 8.35832 11.2889 8.63052 11.1061 8.84984L9.01441 11.3498C9.84745 13.1936 11.0272 14.8599 12.4894 16.2582C13.9422 17.7072 15.6593 18.8642 17.5477 19.6665L20.1394 17.6082C20.3571 17.4361 20.622 17.3344 20.8988 17.3166C21.1757 17.2987 21.4514 17.3655 21.6894 17.5082L27.9811 21.5748C28.197 21.7038 28.3809 21.8799 28.5191 22.09C28.6573 22.3001 28.7462 22.5387 28.779 22.788C28.8119 23.0373 28.7879 23.2908 28.7089 23.5296C28.6299 23.7683 28.4979 23.986 28.3227 24.1665L25.0727 27.3832C24.7036 27.7505 24.2654 28.0413 23.7834 28.2386C23.3015 28.436 22.7852 28.5361 22.2644 28.5332ZM5.6894 2.03318L2.35607 5.24151C2.08728 5.49197 1.88831 5.80808 1.77873 6.15875C1.66914 6.50942 1.65272 6.88257 1.73107 7.24151C2.79001 12.0683 5.22417 16.4851 8.7394 19.9582C12.3512 23.4261 16.8691 25.8035 21.7727 26.8165C22.1439 26.8941 22.5285 26.8784 22.8921 26.7708C23.2557 26.6631 23.5869 26.467 23.8561 26.1998L27.1061 22.9832L21.0311 19.0582L18.2477 21.2748C18.1412 21.3592 18.0156 21.4162 17.882 21.4409C17.7484 21.4656 17.6107 21.4572 17.4811 21.4165C15.17 20.565 13.0756 19.2133 11.3477 17.4582C9.56053 15.7892 8.17326 13.7382 7.2894 11.4582C7.25201 11.3201 7.25077 11.1748 7.2858 11.0362C7.32082 10.8975 7.39094 10.7702 7.4894 10.6665L9.7394 7.97485L5.6894 2.03318Z" fill="white" />
                            </svg>
                            <a href='#number' className={classes.phone}>01789 730695</a>
                        </div>
                        <div className={classes.emailBox}>
                            <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.4062 0.625H1.90625C1.40897 0.625 0.932055 0.822544 0.580425 1.17417C0.228794 1.52581 0.03125 2.00272 0.03125 2.5V17.5C0.03125 17.9973 0.228794 18.4742 0.580425 18.8258C0.932055 19.1775 1.40897 19.375 1.90625 19.375H24.4062C24.9035 19.375 25.3804 19.1775 25.7321 18.8258C26.0837 18.4742 26.2812 17.9973 26.2812 17.5V2.5C26.2812 2.00272 26.0837 1.52581 25.7321 1.17417C25.3804 0.822544 24.9035 0.625 24.4062 0.625ZM22.3438 2.5L13.1562 8.85625L3.96875 2.5H22.3438ZM1.90625 17.5V3.35312L12.6219 10.7687C12.7788 10.8776 12.9653 10.936 13.1562 10.936C13.3472 10.936 13.5337 10.8776 13.6906 10.7687L24.4062 3.35312V17.5H1.90625Z" fill="white" />
                            </svg>
                            <div className={classes.email}>support@Meridian.com</div>
                            </div>
                            <div className={classes.policy}>
                                <div className={classes.terms}>Terms & Conditions</div>
                                <div className={classes.privacy}>Privacy Policy</div>
                                <div className={classes.shopping}>Shipping Policy</div>
                            </div>
                            <div className={classes.cards}>
                                <img src={mastercard} className={classes.mastercard} />
                                <img src={visa} className={classes.visa} />
                                <img src={google} className={classes.google} />
                                <img src={apple} className={classes.apple} />
                            </div>         
                    </div>
                    <div className={classes.secondPart}> 
                    <div className={classes.second}>                 
                        <a href="#product"  className={classes.product}>Product</a>
                        <a href="#New Arrival" className={classes.newArrival}>New Arrival</a>                    
                        <a href="#Living Room" className={classes.livingRoom}>Living Room</a>
                        <a href="#Kitchen & Dining Room" className={classes.kitchen}>Kitchen & Dining Room</a>
                        <a href="#Bed Room" className={classes.bedRoom}>Bed Room</a>
                        <a href="#Accent" className={classes.accent}>Accent</a>
                        <a href="#Occasional Table" className={classes.table}>Occasional Table</a>
                        <a href="#Office/Home Office" className={classes.homeOffice}>Office/Home Office</a>
                        <a href="#Outdoor Furniture" className={classes.outdoorFurniture}>Outdoor Furniture</a>
                        </div>    
                    </div>
                    <div className={classes.thirdPart}>
                        <div className={classes.third}>
                        <a href="#Help" className={classes.help}>Help</a>
                        <a href="#About Us" className={classes.aboutUs}>About Us</a>
                        <a href="#Contact" className={classes.contact}>Contact</a>
                        </div>
                    </div>
                    <div className={classes.fourthPart}>
                        <div className={classes.name}>Join Meridian for Exclusive Offers</div>
                        <div className={classes.emailBlock}>                   
                            <div className={classes.emailTitle}>Email address</div>
                        </div>
                        <div className={classes.text}>Our newsletter is packed full of style ideas, new products and exclusive disounts. We are GDPR compliant, your information is secure with us.</div>
                        <div className={classes.socialNetwork}>
                            <a href='#facebook'>
                                <svg width="14" height="27" viewBox="0 0 14 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8155 4.72744H13.2311V0.520306C12.8143 0.462977 11.3811 0.333984 9.7119 0.333984C6.22911 0.333984 3.84331 2.52465 3.84331 6.55097V10.2565H0V14.9597H3.84331V26.7939H8.55538V14.9608H12.2432L12.8287 10.2576H8.55428V7.01733C8.55538 5.65795 8.92141 4.72744 10.8155 4.72744Z" fill="white" />
                                </svg>
                            </a>
                            <a href='#instagram' className={classes.instagram}>
                                <svg width="29" height="29" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.94 5.87778C19.9235 5.04808 19.7665 4.22719 19.4756 3.45C19.2241 2.78269 18.8302 2.17827 18.3211 1.67889C17.8217 1.16984 17.2173 0.775862 16.55 0.524444C15.7732 0.233624 14.9527 0.0765849 14.1233 0.06C13.0556 0.0111111 12.7156 0 10 0C7.28444 0 6.94444 0.0111111 5.87778 0.06C5.04808 0.0764597 4.22719 0.233501 3.45 0.524444C2.78229 0.775719 2.17748 1.1697 1.67778 1.67889C1.16873 2.17827 0.774751 2.78269 0.523333 3.45C0.232513 4.22683 0.0754738 5.04735 0.0588889 5.87667C0.0111111 6.94444 0 7.28444 0 10C0 12.7156 0.0111111 13.0556 0.06 14.1222C0.0764597 14.9519 0.233501 15.7728 0.524444 16.55C0.775862 17.2173 1.16984 17.8217 1.67889 18.3211C2.17824 18.8302 2.78267 19.2242 3.45 19.4756C4.22683 19.7664 5.04735 19.9234 5.87667 19.94C6.94444 19.9889 7.28444 20 10 20C12.7156 20 13.0556 19.9889 14.1222 19.94C14.9519 19.9235 15.7728 19.7665 16.55 19.4756C17.8938 18.9561 18.9561 17.8938 19.4756 16.55C19.7664 15.7732 19.9234 14.9527 19.94 14.1233C19.9889 13.0556 20 12.7156 20 10C20 7.28444 19.9889 6.94444 19.94 5.87778ZM18.14 14.0411C18.1323 14.6748 18.0158 15.3024 17.7956 15.8967C17.4595 16.7692 16.7701 17.4589 15.8978 17.7956C15.3032 18.0159 14.6752 18.1324 14.0411 18.14C12.9856 18.1878 12.67 18.1978 10 18.1978C7.33 18.1978 7.01333 18.1878 5.95889 18.14C5.32521 18.1323 4.69756 18.0158 4.10333 17.7956C3.66854 17.6355 3.27518 17.38 2.95222 17.0478C2.62016 16.7251 2.36463 16.3322 2.20444 15.8978C1.98405 15.3032 1.86754 14.6752 1.86 14.0411C1.81222 12.9856 1.80222 12.67 1.80222 10C1.80222 7.33 1.81222 7.01333 1.86 5.95889C1.86769 5.32521 1.9842 4.69756 2.20444 4.10333C2.36449 3.66854 2.62002 3.27518 2.95222 2.95222C3.27486 2.62016 3.66782 2.36463 4.10222 2.20444C4.6968 1.98407 5.32483 1.86756 5.95889 1.86C7.01444 1.81222 7.33 1.80222 10 1.80222C12.67 1.80222 12.9867 1.81222 14.0411 1.86C14.6748 1.86769 15.3024 1.9842 15.8967 2.20444C16.3315 2.36449 16.7248 2.62002 17.0478 2.95222C17.3798 3.27486 17.6354 3.66782 17.7956 4.10222C18.0159 4.6968 18.1324 5.32483 18.14 5.95889C18.1878 7.01444 18.1978 7.33 18.1978 10C18.1978 12.67 18.1878 12.9867 18.14 14.0411ZM4.86444 10C4.86444 7.16371 7.16371 4.86444 10 4.86444C11.362 4.86444 12.6683 5.40551 13.6314 6.36861C14.5945 7.33172 15.1356 8.63797 15.1356 10C15.1356 12.8363 12.8363 15.1356 10 15.1356C7.16371 15.1356 4.86444 12.8363 4.86444 10ZM10 13.3333C8.15905 13.3333 6.66667 11.8409 6.66667 10C6.66667 8.15905 8.15905 6.66667 10 6.66667C11.8409 6.66667 13.3333 8.15905 13.3333 10C13.3333 11.8409 11.8409 13.3333 10 13.3333ZM15.3378 5.86222C16.0005 5.86222 16.5378 5.32496 16.5378 4.66222C16.5378 3.99948 16.0005 3.46222 15.3378 3.46222C14.675 3.46222 14.1378 3.99948 14.1378 4.66222C14.1378 5.32496 14.675 5.86222 15.3378 5.86222Z" fill="currentColor" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}