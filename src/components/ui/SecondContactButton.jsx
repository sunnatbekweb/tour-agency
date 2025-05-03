import React from "react"
import './SecondContactButton.css'
import { Link } from "@/i18n/navigation"
export default function SecondContactButton({ children }) {
    return (
        <Link href={'/'}>
            <button className="secondContactButton__button cursor-pointer active:opacity-50 active:duration-75">
                {children}
            </button>
        </Link>
    )
}