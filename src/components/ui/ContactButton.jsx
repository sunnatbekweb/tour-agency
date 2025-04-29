import React from "react"
import './ContactButton.css'
import { Link } from "@/i18n/navigation"
export default function ContactButton({ children }) {
    return (
        <Link href={'/'}>
            <button className="contactButton__button active:opacity-50 active:duration-75">
                {children}
            </button>
        </Link>
    )
}