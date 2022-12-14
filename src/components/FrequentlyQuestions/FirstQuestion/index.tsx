import classes from './styles.module.scss'

export const FirstQuestion = () => {
    return (
        <div className={classes.box}>
            <div className={classes.text}>In the unlikely event that you wish to return your furniture, Sabai Living offer a 30-day returns policy. However, you will be charged an administrative fee to cover this. Your refund will be processed as soon as the product has been returned to our warehouse and has been thoroughly checked for any damage or quality issues. Sabai Living can only issue refunds for items that are not damaged.
                <br />
                <br />
                What do I do if my item arrives damaged, or if I have received the wrong item?
                In the unlikely event that you receive a damaged item, please contact us within 24 hours of receiving your order. You can contact us via telephone or email. We will ask you to send photographs and a description of the damage and will then thoroughly investigate. If required, we will repair, replace, or refund your damaged item.
                <br />
                <br />
                If you receive an incorrect item, please report it to us as soon as possible and we will make arrangements for this to be returned and the correct item sent to you.</div>
        </div>
    )
}