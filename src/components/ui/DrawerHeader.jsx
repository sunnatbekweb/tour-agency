import React from "react"
export default function DrawerHeader() {
    return (
        <div>
            <header className="drawerHeader">
                <div className="container drawerHeader__container">
                    <div className="drawerHeader__top-box">
                        <Link href={'/'}>
                            <img className="drawerHeader__left-close-burger inline-block" src="/icons/close__burger.svg" alt="open__burger" />
                        </Link>
                        <Link href={'/'}>
                            <img className="drawerHeader__middle-mini-logo inline-block w-[67px] h-[37px]" src="/icons/mini__logo.svg" alt="mini__logo" />
                        </Link>
                        <Link href={'/'}>
                            <img className="drawerHeader__left-open-burger inline-block" src="/icons/open__burger.svg" alt="open__burger" />
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}