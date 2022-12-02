import clsx from "clsx"
import classes from './styles.module.scss'

import { useParams } from "react-router-dom"
import { FrequentlyQuestions } from "../../../components/FrequentlyQuestions"
import { ProductInformation } from "../../../ProductInformation"
import { TopForm } from "../../../ProductInformation/top-form"

import icon1 from './photo/icon1.jpg'
import { PopularSets } from "../../../components/PopularSets"
import { Order } from "./Item"
import { Product } from "../../../components/assets/catalog"

export const ProductSofa = () => {
    const { id } = useParams()
    // const product = useSelector(CATALOG)
    const product = Product
    const sofas = product.find(sofas => id !== undefined && sofas.id === parseInt(id))

    if (!sofas || id === undefined) {
        return null
    }
    return (
        <div className={classes.box}>
            <div className={classes.block}>
                <div className={classes.iconBox}>
                    <img className={classes.photo} src={sofas.photo} alt="" />
                </div>
                <div className={classes.secondPart}>
                    <div className={classes.name}>{sofas.name} </div>
                    <div className={classes.top}>
                        <div className={classes.price}>{sofas.price}</div>
                        <div className={classes.promotional_price}>{sofas.promotional_price}</div>
                        <div className={classes.discount}>{sofas.discount}</div>
                    </div>
                    <div className={classes.id}>{id}</div>
                    <div className={classes.colorBox}>
                        <div className={classes.colorTitle}>Colors:</div>
                        {sofas.pic?.map(color => (
                            <img className={classes.img} src={color} alt="" />
                        ))}
                    </div>
                    <div className={classes.kind} >{sofas.kind}</div>
                    <Order id={parseInt(id)} />
                    <div className={classes.checkoutBox}>
                        <div className={classes.checkout}>Guaranteed Safe Checkout</div>
                        <div className={classes.icons}>
                            <svg width="72" height="71" viewBox="0 0 72 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.390323" y="0.390323" width="70.2581" height="70.2194" fill="white" />
                                <rect width="64.0129" height="39.0323" transform="translate(3.9032 16.3936)" fill="white" />
                                <g clip-path="url(#clip0_2_831)">
                                    <path d="M41.1895 45.8729H30.634V26.9033H41.1897L41.1895 45.8729Z" fill="#FF5F00" />
                                    <path d="M31.3034 36.3885C31.3034 32.5405 33.1052 29.1127 35.9108 26.9037C33.7871 25.2291 31.1604 24.3202 28.4559 24.3242C21.7937 24.3242 16.3932 29.7255 16.3932 36.3885C16.3932 43.0514 21.7937 48.4527 28.4559 48.4527C31.1604 48.4567 33.7872 47.5479 35.911 45.8733C33.1056 43.6646 31.3034 40.2366 31.3034 36.3885Z" fill="#EB001B" />
                                    <path d="M55.4303 36.3885C55.4303 43.0514 50.0298 48.4527 43.3676 48.4527C40.6627 48.4567 38.0357 47.5478 35.9115 45.8733C38.7179 43.6642 40.5196 40.2366 40.5196 36.3885C40.5196 32.5403 38.7179 29.1127 35.9115 26.9037C38.0356 25.2291 40.6626 24.3203 43.3674 24.3242C50.0296 24.3242 55.4301 29.7255 55.4301 36.3885" fill="#F79E1B" />
                                </g>
                                <rect x="0.390323" y="0.390323" width="70.2581" height="70.2194" stroke="#D3D3D3" stroke-width="0.780645" />
                                <defs>
                                    <clipPath id="clip0_2_831">
                                        <rect width="39.0323" height="23.9516" fill="white" transform="translate(16.3933 24.3242)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="72" height="71" viewBox="0 0 72 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.390323" y="0.390323" width="70.2581" height="70.2194" fill="white" />
                                <rect width="64.0129" height="39.0323" transform="translate(3.90308 16.3936)" fill="white" />
                                <g clip-path="url(#clip0_2_837)">
                                    <path d="M36.9396 33.2612C36.9111 35.5086 38.9424 36.7628 40.4727 37.5084C42.045 38.2736 42.5731 38.7642 42.5671 39.4483C42.555 40.4954 41.3128 40.9575 40.1502 40.9755C38.1218 41.007 36.9426 40.4279 36.005 39.9899L35.2743 43.4089C36.215 43.8425 37.9568 44.2206 39.7631 44.2371C44.0028 44.2371 46.7768 42.1442 46.7918 38.8992C46.8083 34.781 41.0953 34.553 41.1343 32.7121C41.1478 32.1541 41.6804 31.5585 42.8476 31.4069C43.4252 31.3304 45.02 31.2719 46.8278 32.1045L47.5374 28.7965C46.5652 28.4424 45.3155 28.1034 43.7598 28.1034C39.7691 28.1034 36.9621 30.2247 36.9396 33.2612ZM54.356 28.3884C53.5819 28.3884 52.9293 28.84 52.6382 29.5331L46.5817 43.994H50.8184L51.6616 41.6641H56.8389L57.328 43.994H61.0621L57.8036 28.3884H54.356ZM54.9486 32.6041L56.1713 38.4641H52.8228L54.9486 32.6041ZM31.8028 28.3884L28.4632 43.994H32.5004L35.8384 28.3884H31.8028ZM25.8303 28.3884L21.6281 39.0102L19.9283 29.9787C19.7288 28.9705 18.9411 28.3884 18.0665 28.3884H11.1968L11.1008 28.8415C12.5111 29.1476 14.1133 29.6411 15.084 30.1692C15.6781 30.4918 15.8476 30.7738 16.0427 31.5405L19.2622 43.994H23.5289L30.07 28.3884H25.8303Z" fill="url(#paint0_linear_2_837)" />
                                </g>
                                <rect x="0.390323" y="0.390323" width="70.2581" height="70.2194" stroke="#D3D3D3" stroke-width="0.780645" />
                                <defs>
                                    <linearGradient id="paint0_linear_2_837" x1="34.0701" y1="44.5607" x2="34.5371" y2="27.9912" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#222357" />
                                        <stop offset="1" stop-color="#254AA5" />
                                    </linearGradient>
                                    <clipPath id="clip0_2_837">
                                        <rect width="49.9613" height="16.1984" fill="white" transform="translate(11.1008 28.1033)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="72" height="71" viewBox="0 0 72 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.390323" y="0.390323" width="70.2581" height="70.2194" fill="white" />
                                <rect width="64.0129" height="39.0323" transform="translate(3.90332 16.3936)" fill="white" />
                                <g clip-path="url(#clip0_2_842)">
                                    <path d="M34.4095 35.6727V40.6868H32.8276V28.3096H37.0229C38.0349 28.2898 39.0076 28.6748 39.7445 29.3854C40.4814 30.0467 40.894 31.0041 40.8744 31.9912C40.894 32.988 40.4814 33.9455 39.7445 34.6166C39.0076 35.3174 38.1037 35.6727 37.0328 35.6727H34.4095ZM34.4095 29.8296V34.1527H37.0622C37.6517 34.1725 38.2216 33.9356 38.6244 33.5112C39.4595 32.7018 39.4694 31.3693 38.6637 30.5304L38.6244 30.4909C38.2216 30.0566 37.6517 29.8197 37.0622 29.8394L34.4095 29.8296ZM44.5195 31.9418C45.6886 31.9418 46.6122 32.2577 47.2901 32.8795C47.968 33.5112 48.3021 34.3699 48.3021 35.4655V40.677H46.789V39.5024H46.7203C46.062 40.4697 45.1974 40.9533 44.1068 40.9533C43.1832 40.9533 42.3972 40.677 41.7783 40.1242C41.1691 39.611 40.8252 38.851 40.8449 38.0515C40.8449 37.173 41.1789 36.4821 41.8372 35.959C42.4955 35.4359 43.3797 35.1792 44.4802 35.1792C45.4234 35.1792 46.1897 35.3569 46.7989 35.6925V35.3273C46.7989 34.7844 46.5631 34.2712 46.1504 33.9257C45.7279 33.5507 45.1876 33.3434 44.6275 33.3434C43.7433 33.3434 43.0457 33.7184 42.525 34.4686L41.1298 33.5901C41.8863 32.4945 43.0162 31.9418 44.5195 31.9418ZM42.4758 38.091C42.4758 38.5055 42.6723 38.8904 42.9966 39.1273C43.3503 39.4037 43.7826 39.5517 44.2247 39.5419C44.8928 39.5419 45.5314 39.2754 46.003 38.8016C46.5238 38.3081 46.789 37.7258 46.789 37.0546C46.2978 36.6598 45.61 36.4624 44.7258 36.4624C44.0871 36.4624 43.5468 36.6203 43.1145 36.9263C42.692 37.2421 42.4758 37.6271 42.4758 38.091ZM56.9874 32.2182L51.7016 44.4178H50.0706L52.0356 40.1538L48.5575 32.228H50.2769L52.7823 38.3081H52.8216L55.2681 32.228L56.9874 32.2182Z" fill="#5F6368" />
                                    <path d="M28.0134 34.587C28.0134 34.1034 27.9741 33.6198 27.8955 33.146H21.2242V35.88H25.0462C24.889 36.7585 24.3781 37.5481 23.6314 38.0416V39.8183H25.9108C27.247 38.5845 28.0134 36.7585 28.0134 34.587Z" fill="#4285F4" />
                                    <path d="M21.2244 41.5355C23.1304 41.5355 24.7417 40.9038 25.9109 39.8181L23.6315 38.0414C22.9929 38.4757 22.1774 38.7225 21.2244 38.7225C19.3773 38.7225 17.8151 37.469 17.255 35.791H14.9069V37.6269C16.1055 40.0155 18.552 41.5355 21.2244 41.5355Z" fill="#34A853" />
                                    <path d="M17.255 35.7911C16.9602 34.9127 16.9602 33.9553 17.255 33.067V31.241H14.9068C14.4079 32.2289 14.1478 33.3212 14.1478 34.429C14.1478 35.5369 14.4079 36.6292 14.9068 37.6171L17.255 35.7911Z" fill="#FBBC04" />
                                    <path d="M21.2244 30.1355C22.2364 30.1157 23.209 30.5007 23.9361 31.2014L25.9502 29.1781C24.673 27.964 22.9831 27.3027 21.2244 27.3225C18.552 27.3225 16.1055 28.8425 14.9069 31.2409L17.255 33.0768C17.8151 31.389 19.3773 30.1355 21.2244 30.1355Z" fill="#EA4335" />
                                </g>
                                <rect x="0.390323" y="0.390323" width="70.2581" height="70.2194" stroke="#D3D3D3" stroke-width="0.780645" />
                                <defs>
                                    <clipPath id="clip0_2_842">
                                        <rect width="42.9355" height="17.1742" fill="white" transform="translate(14.0516 27.3225)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <svg width="72" height="71" viewBox="0 0 72 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.390323" y="0.390323" width="70.2581" height="70.2194" fill="white" />
                                <rect width="64.0129" height="39.0323" transform="translate(3.90332 16.3936)" fill="white" />
                                <g clip-path="url(#clip0_2_851)">
                                    <path d="M28.2692 40.844C28.0159 41.4349 27.7024 41.9982 27.3336 42.525C26.8439 43.2266 26.442 43.709 26.135 43.9795C25.6526 44.418 25.141 44.6446 24.5928 44.6592C24.1981 44.6592 23.723 44.5496 23.1676 44.3157C22.6825 44.1053 22.1613 43.9911 21.6327 43.9795C21.0898 43.9893 20.5538 44.1034 20.054 44.3157C19.4912 44.5422 19.0381 44.6592 18.6872 44.6738C18.161 44.6957 17.6347 44.4619 17.1085 43.9722C16.7723 43.6798 16.3557 43.1755 15.8514 42.4665C15.2858 41.6541 14.838 40.7658 14.5212 39.828C14.1484 38.7463 13.9584 37.7011 13.9584 36.6852C13.9584 35.5231 14.2069 34.5218 14.7112 33.6812C15.0928 33.0221 15.6361 32.4712 16.2899 32.0806C16.9345 31.6917 17.6713 31.4823 18.4241 31.474C18.8407 31.474 19.3962 31.6055 20.0759 31.8613C20.7556 32.1171 21.1942 32.2487 21.3842 32.2487C21.5304 32.2487 22.0128 32.0952 22.8387 31.7955C23.6183 31.5178 24.2761 31.4009 24.8121 31.4447C26.2739 31.5617 27.3702 32.1391 28.1011 33.1769C26.7928 33.9663 26.1496 35.0772 26.1642 36.4952C26.1788 37.6061 26.5808 38.527 27.3702 39.2579C27.721 39.5885 28.1266 39.8556 28.5688 40.0473C28.4811 40.325 28.3788 40.5881 28.2692 40.844ZM24.9217 27.6733C24.9217 28.5431 24.6074 29.3544 23.9716 30.0999C23.2114 30.9916 22.2832 31.5032 21.2892 31.4228C21.2741 31.3138 21.2668 31.2039 21.2673 31.0939C21.2673 30.2607 21.6327 29.369 22.2759 28.6381C22.6176 28.2501 23.0356 27.9366 23.5038 27.7172C23.9403 27.4927 24.4176 27.3585 24.9071 27.3225C24.9144 27.4395 24.9217 27.5564 24.9217 27.6733Z" fill="#272727" />
                                    <path d="M38.1583 36.3929C38.5189 36.3929 38.8332 36.3491 39.1012 36.2613C39.3692 36.1688 39.5909 36.0396 39.7663 35.874C39.9466 35.7034 40.0806 35.4988 40.1683 35.26C40.256 35.0164 40.2998 34.746 40.2998 34.4487C40.2998 34.1661 40.256 33.9103 40.1683 33.6813C40.0806 33.4523 39.949 33.2574 39.7736 33.0966C39.5982 32.9358 39.3765 32.814 39.1085 32.7312C38.8405 32.6434 38.5238 32.5996 38.1583 32.5996H36.6892V36.3929H38.1583ZM38.1583 31.0793C38.8648 31.0793 39.4764 31.1622 39.9929 31.3278C40.5093 31.4935 40.9357 31.725 41.2719 32.0222C41.6081 32.3194 41.8566 32.6751 42.0174 33.0893C42.1831 33.5035 42.2659 33.9566 42.2659 34.4487C42.2659 34.9604 42.1806 35.4306 42.0101 35.8594C41.8396 36.2833 41.5838 36.6487 41.2427 36.9557C40.9016 37.2627 40.4728 37.5014 39.9563 37.672C39.4447 37.8425 38.8454 37.9278 38.1583 37.9278H36.6892V41.648H34.7231V31.0793H38.1583Z" fill="#272727" />
                                    <path d="M47.5139 38.4467C46.9926 38.4711 46.554 38.5174 46.1983 38.5856C45.8426 38.6489 45.5576 38.7318 45.3432 38.8341C45.1288 38.9364 44.9753 39.0558 44.8827 39.1922C44.7901 39.3286 44.7439 39.4773 44.7439 39.6381C44.7439 39.9548 44.8364 40.1813 45.0216 40.3178C45.2116 40.4542 45.4577 40.5224 45.7598 40.5224C46.1301 40.5224 46.4493 40.4566 46.7173 40.3251C46.9901 40.1887 47.2557 39.984 47.5139 39.7111V38.4467ZM43.3771 35.1943C44.2395 34.4049 45.2774 34.0102 46.4907 34.0102C46.9292 34.0102 47.3215 34.0833 47.6674 34.2295C48.0134 34.3708 48.3057 34.5706 48.5445 34.8288C48.7832 35.0822 48.9635 35.3867 49.0853 35.7424C49.212 36.0981 49.2754 36.4879 49.2754 36.9118V41.648H48.4568C48.2862 41.648 48.1547 41.6236 48.0621 41.5749C47.9695 41.5213 47.8964 41.4166 47.8428 41.2606L47.682 40.7198C47.492 40.8903 47.3068 41.0414 47.1266 41.1729C46.9463 41.2996 46.7587 41.4068 46.5638 41.4945C46.3689 41.5822 46.1593 41.648 45.9352 41.6919C45.7159 41.7406 45.4723 41.7649 45.2043 41.7649C44.8876 41.7649 44.5952 41.7235 44.3273 41.6407C44.0593 41.553 43.8278 41.4239 43.6329 41.2533C43.438 41.0828 43.287 40.8708 43.1798 40.6174C43.0726 40.3641 43.019 40.0693 43.019 39.7331C43.019 39.543 43.0506 39.3554 43.114 39.1703C43.1773 38.9803 43.2796 38.8 43.4209 38.6294C43.5671 38.4589 43.7547 38.2981 43.9837 38.147C44.2127 37.996 44.4929 37.8644 44.8243 37.7524C45.1605 37.6403 45.5503 37.5501 45.9937 37.4819C46.4371 37.4088 46.9438 37.365 47.5139 37.3504V36.9118C47.5139 36.41 47.4067 36.0396 47.1923 35.8009C46.9779 35.5573 46.6685 35.4354 46.2641 35.4354C45.9718 35.4354 45.7281 35.4696 45.5332 35.5378C45.3432 35.606 45.1751 35.6839 45.0289 35.7717C44.8827 35.8545 44.7487 35.93 44.6269 35.9982C44.51 36.0664 44.3784 36.1006 44.2322 36.1006C44.1055 36.1006 43.9984 36.0689 43.9106 36.0055C43.8229 35.9373 43.7523 35.8594 43.6987 35.7717L43.3771 35.1943Z" fill="#272727" />
                                    <path d="M57.8657 34.1491L53.78 43.7091C53.7264 43.8358 53.6558 43.9308 53.5681 43.9942C53.4853 44.0624 53.3561 44.0965 53.1807 44.0965H51.8359L53.2392 41.0852L50.206 34.1491H51.792C51.9333 34.1491 52.043 34.1832 52.1209 34.2514C52.2038 34.3196 52.2647 34.3976 52.3036 34.4853L53.897 38.3736C53.9506 38.5052 53.9944 38.6367 54.0285 38.7683C54.0675 38.8999 54.1041 39.0339 54.1382 39.1703C54.182 39.0339 54.2259 38.8999 54.2697 38.7683C54.3136 38.6319 54.3623 38.4979 54.4159 38.3663L55.9215 34.4853C55.9605 34.3878 56.0239 34.3074 56.1116 34.2441C56.2042 34.1808 56.3065 34.1491 56.4186 34.1491H57.8657Z" fill="#272727" />
                                </g>
                                <rect x="0.390323" y="0.390323" width="70.2581" height="70.2194" stroke="#D3D3D3" stroke-width="0.780645" />
                                <defs>
                                    <clipPath id="clip0_2_851">
                                        <rect width="43.7161" height="17.1742" fill="white" transform="translate(13.9584 27.3225)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div className={classes.deliveryBox}>
                        <div className={classes.delBox}>
                            <svg width="94" height="95" viewBox="0 0 94 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.749 47.25H46.999V53.125H11.749V47.25ZM5.87402 32.5625H35.249V38.4375H5.87402V32.5625Z" fill="black" />
                                <path d="M87.8871 49.0301L79.0746 28.4676C78.8485 27.9391 78.4721 27.4887 77.9922 27.1722C77.5122 26.8557 76.9499 26.6872 76.3751 26.6875H67.5626V20.8125C67.5626 20.0334 67.2531 19.2863 66.7022 18.7354C66.1513 18.1845 65.4041 17.875 64.6251 17.875H17.6251V23.75H61.6876V60.6332C60.349 61.4105 59.1776 62.445 58.2409 63.6772C57.3041 64.9094 56.6206 66.3148 56.2297 67.8125H37.7704C37.0555 65.0434 35.3551 62.6302 32.9882 61.0251C30.6212 59.42 27.7501 58.7333 24.913 59.0936C22.0759 59.454 19.4677 60.8367 17.5771 62.9826C15.6866 65.1284 14.6436 67.8901 14.6436 70.75C14.6436 73.6099 15.6866 76.3716 17.5771 78.5174C19.4677 80.6633 22.0759 82.046 24.913 82.4063C27.7501 82.7667 30.6212 82.08 32.9882 80.4749C35.3551 78.8698 37.0555 76.4566 37.7704 73.6875H56.2297C56.8687 76.2086 58.3301 78.4446 60.3827 80.0418C62.4352 81.639 64.9618 82.5062 67.5626 82.5062C70.1634 82.5062 72.6899 81.639 74.7425 80.0418C76.795 78.4446 78.2564 76.2086 78.8954 73.6875H85.1876C85.9666 73.6875 86.7138 73.378 87.2647 72.8271C87.8156 72.2762 88.1251 71.5291 88.1251 70.75V50.1875C88.1252 49.7895 88.0443 49.3957 87.8871 49.0301V49.0301ZM26.4376 76.625C25.2756 76.625 24.1397 76.2804 23.1736 75.6349C22.2075 74.9893 21.4544 74.0718 21.0098 72.9983C20.5651 71.9247 20.4488 70.7435 20.6755 69.6038C20.9021 68.4642 21.4617 67.4174 22.2833 66.5957C23.1049 65.7741 24.1518 65.2146 25.2914 64.9879C26.4311 64.7612 27.6123 64.8775 28.6858 65.3222C29.7593 65.7669 30.6769 66.5199 31.3225 67.486C31.968 68.4522 32.3126 69.588 32.3126 70.75C32.311 72.3077 31.6915 73.8011 30.5901 74.9025C29.4887 76.004 27.9952 76.6234 26.4376 76.625V76.625ZM67.5626 32.5625H74.4363L80.7343 47.25H67.5626V32.5625ZM67.5626 76.625C66.4006 76.625 65.2647 76.2804 64.2986 75.6349C63.3325 74.9893 62.5794 74.0718 62.1348 72.9983C61.6901 71.9247 61.5738 70.7435 61.8005 69.6038C62.0271 68.4642 62.5867 67.4174 63.4083 66.5957C64.2299 65.7741 65.2768 65.2146 66.4164 64.9879C67.556 64.7612 68.7373 64.8775 69.8108 65.3222C70.8843 65.7669 71.8019 66.5199 72.4474 67.486C73.093 68.4522 73.4376 69.588 73.4376 70.75C73.436 72.3077 72.8165 73.8011 71.7151 74.9025C70.6137 76.004 69.1202 76.6234 67.5626 76.625ZM82.2501 67.8125H78.8954C78.2484 65.2963 76.7846 63.066 74.7337 61.4712C72.6828 59.8764 70.1606 59.0072 67.5626 59V53.125H82.2501V67.8125Z" fill="black" />
                            </svg>
                        </div>
                        <div className={classes.titledel}>
                            <div className={classes.title}>Free UK Delivery</div>
                            <div className={classes.text}>Order now and enjoy free delivery on us! Restrictions apply.</div>
                        </div>
                    </div>
                    <ProductInformation />
                    <TopForm />
                </div>
            </div>
            <div className={classes.aluminiumFurnitureBox}>
                <div className={classes.icon1}>
                    <img src={icon1} className={classes.icon} />
                </div>
                <div className={classes.aluminiumBlock}>
                    <div className={classes.aluminiumTitle}>Cast Aluminium Furniture</div>
                    <div className={classes.aluminiumText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non suspendisse vivamus convallis proin. Molestie pulvinar tortor <br /> neque adipiscing mattis diam nibh nunc quis. Nisl sit faucibus amet<br /> et pharetra. Vitae quis porta aliquet semper. Pulvinar augue <br />commodo facilisis sit habitant donec. Sed senectus natoque vitae<br /> faucibus volutpat cras ac ullamcorper nec. Quam tortor in aliquam <br />iaculis fringilla. Diam feugiat mattis pulvinar congue mattis. Dui<br /> felis lacus, porta a facilisi. Nunc aliquam vulputate sem sapien<br /> lacus, nisi. Ullamcorper purus ut nisl non malesuada amet. Neque<br /> viverra quis dui et. Elit, et fringilla convallis elementum sodales<br /> non in.
                        <br />  Amet amet, ut nunc quam.</div>
                </div>
            </div>
            <FrequentlyQuestions />
            <div className={classes.shopTitle}>Shop Our Other Popular Sets</div>
            <PopularSets />
            <div className={classes.reviewsBox}>
                <div className={classes.reviews}>Reviews </div>
                <div className={classes.buttonBox}>
                    <button type="submit" className={clsx(classes.buttonReview, classes.orderReview)}>Write A Review</button>
                </div>
            </div>
        </div>
    )
}

