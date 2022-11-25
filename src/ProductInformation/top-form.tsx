import { useSelector } from "react-redux"

import { TOP_FORM_VARIANT, TopForm as ETopForm } from '../store/slices/productInformation'

import { Del } from "./del"
import { Delivery } from "./delivery"

export const TopForm = () => {
    const topForm = useSelector(TOP_FORM_VARIANT)

    switch (topForm) {
        case ETopForm.DELIVERY:
            return <Delivery />
        case ETopForm.DEL:
            return <Del />
        default:
            return null
    }
}