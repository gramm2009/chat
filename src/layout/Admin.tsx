import React from 'react'
import "../styles/layout-admin.scss"

const Admin: React.FC = () => {


    return (
        <div className="layout-admin">
            <div className="layout-admin__container">

                <nav className="layout-admin__nav">
                    <div className="layout-admin__nav__avatar-box">
                        <div className="layout-admin__nav__avatar-box__avatar">
                        </div>
                        <div className="layout-admin__nav__avatar-box__name">
                        </div>
                    </div>
                </nav>

                <main className="layout-admin__main">main</main>

            </div>
        </div>
    )
}

export default Admin