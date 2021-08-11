import React from 'react';
import Avatar from "../../public/img/avatar.jpg"
import '../styles/layout-admin.scss';

const Admin: React.FC = () => {
    return (
        <div className="layout-admin">
            <div className="layout-admin__container">
                <nav className="layout-admin__nav">
                    <div className="layout-admin__nav__avatar-box">
                        <div className="layout-admin__nav__avatar-box__avatar">
                            <img src={Avatar} alt="" />
                        </div>
                        <div className="layout-admin__nav__avatar-box__name">John Doe</div>
                    </div>

                    <div className="layout-admin__nav__links-box">
                        <ul>
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Icon/Outline/grid">
                                        <path
                                            id="Mask1"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M15 19V15H19L19.001 19H15ZM19 13H15C13.897 13 13 13.897 13 15V19C13 20.103 13.897 21 15 21H19C20.103 21 21 20.103 21 19V15C21 13.897 20.103 13 19 13ZM5 19V15H9L9.001 19H5ZM9 13H5C3.897 13 3 13.897 3 15V19C3 20.103 3.897 21 5 21H9C10.103 21 11 20.103 11 19V15C11 13.897 10.103 13 9 13ZM15 9V5H19L19.001 9H15ZM19 3H15C13.897 3 13 3.897 13 5V9C13 10.103 13.897 11 15 11H19C20.103 11 21 10.103 21 9V5C21 3.897 20.103 3 19 3ZM5 9V5H9L9.001 9H5ZM9 3H5C3.897 3 3 3.897 3 5V9C3 10.103 3.897 11 5 11H9C10.103 11 11 10.103 11 9V5C11 3.897 10.103 3 9 3Z"
                                            fill="#231F20"
                                        />
                                        <mask id="mask01" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18">
                                            <path
                                                id="Mask_2"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15 19V15H19L19.001 19H15ZM19 13H15C13.897 13 13 13.897 13 15V19C13 20.103 13.897 21 15 21H19C20.103 21 21 20.103 21 19V15C21 13.897 20.103 13 19 13ZM5 19V15H9L9.001 19H5ZM9 13H5C3.897 13 3 13.897 3 15V19C3 20.103 3.897 21 5 21H9C10.103 21 11 20.103 11 19V15C11 13.897 10.103 13 9 13ZM15 9V5H19L19.001 9H15ZM19 3H15C13.897 3 13 3.897 13 5V9C13 10.103 13.897 11 15 11H19C20.103 11 21 10.103 21 9V5C21 3.897 20.103 3 19 3ZM5 9V5H9L9.001 9H5ZM9 3H5C3.897 3 3 3.897 3 5V9C3 10.103 3.897 11 5 11H9C10.103 11 11 10.103 11 9V5C11 3.897 10.103 3 9 3Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask01)">
                                            <g id="&#240;&#159;&#142;&#168; Color">
                                                <rect id="Base" width="24" height="24" fill="#707C97" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                home
                            </li>
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Icon/Fill/message-circle">
                                        <mask id="mask02" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="21" height="20">
                                            <path
                                                id="Mask02"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.9996 12.9992C15.4476 12.9992 14.9996 12.5512 14.9996 11.9992C14.9996 11.4472 15.4476 10.9992 15.9996 10.9992C16.5516 10.9992 16.9996 11.4472 16.9996 11.9992C16.9996 12.5512 16.5516 12.9992 15.9996 12.9992ZM11.9996 12.9992C11.4476 12.9992 10.9996 12.5512 10.9996 11.9992C10.9996 11.4472 11.4476 10.9992 11.9996 10.9992C12.5516 10.9992 12.9996 11.4472 12.9996 11.9992C12.9996 12.5512 12.5516 12.9992 11.9996 12.9992ZM7.99961 12.9992C7.44761 12.9992 6.99961 12.5512 6.99961 11.9992C6.99961 11.4472 7.44761 10.9992 7.99961 10.9992C8.55161 10.9992 8.99961 11.4472 8.99961 11.9992C8.99961 12.5512 8.55161 12.9992 7.99961 12.9992ZM19.0706 4.92817C16.7866 2.64417 13.6256 1.62517 10.3966 2.12417C6.31961 2.76017 2.93961 6.04417 2.17661 10.1112C1.80961 12.0692 2.02061 14.0632 2.78761 15.8762C2.88561 16.1062 2.91561 16.3222 2.87661 16.5152L2.01961 20.8032C1.95361 21.1312 2.05661 21.4702 2.29261 21.7062C2.48161 21.8952 2.73661 21.9992 2.99961 21.9992C3.06461 21.9992 3.13061 21.9932 3.19561 21.9792L7.47861 21.1232C7.72461 21.0762 7.96361 21.1452 8.12261 21.2112C9.93661 21.9782 11.9306 22.1882 13.8876 21.8222C17.9546 21.0592 21.2386 17.6792 21.8746 13.6022C22.3776 10.3742 21.3556 7.21317 19.0706 4.92817Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask02)">
                                            <g id="&#240;&#159;&#142;&#168; Color">
                                                <rect id="Base" width="24" height="24" fill="url(#paint0_linear)" />
                                            </g>
                                        </g>
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear" x1="6" y1="4" x2="18" y2="19.5" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#7CB8F7" />
                                            <stop offset="0.934101" stopColor="#2A8BF2" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                chat
                            </li>
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Icon/Outline/person">
                                        <path
                                            id="Mask03"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M14 7C14 5.897 13.103 5 12 5C10.897 5 10 5.897 10 7C10 8.103 10.897 9 12 9C13.103 9 14 8.103 14 7ZM16 7C16 9.206 14.206 11 12 11C9.794 11 8 9.206 8 7C8 4.794 9.794 3 12 3C14.206 3 16 4.794 16 7ZM5 20C5 16.14 8.141 13 12 13C15.859 13 19 16.14 19 20C19 20.552 18.553 21 18 21C17.447 21 17 20.552 17 20C17 17.243 14.757 15 12 15C9.243 15 7 17.243 7 20C7 20.552 6.553 21 6 21C5.447 21 5 20.552 5 20Z"
                                            fill="#231F20"
                                        />
                                        <mask id="mask003" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="3" width="14" height="18">
                                            <path
                                                id="Mask_203"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M14 7C14 5.897 13.103 5 12 5C10.897 5 10 5.897 10 7C10 8.103 10.897 9 12 9C13.103 9 14 8.103 14 7ZM16 7C16 9.206 14.206 11 12 11C9.794 11 8 9.206 8 7C8 4.794 9.794 3 12 3C14.206 3 16 4.794 16 7ZM5 20C5 16.14 8.141 13 12 13C15.859 13 19 16.14 19 20C19 20.552 18.553 21 18 21C17.447 21 17 20.552 17 20C17 17.243 14.757 15 12 15C9.243 15 7 17.243 7 20C7 20.552 6.553 21 6 21C5.447 21 5 20.552 5 20Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask003)">
                                            <g id="&#240;&#159;&#142;&#168; Color">
                                                <rect id="Base" width="24" height="24" fill="#707C97" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                contact
                            </li>
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Icon/Outline/bell">
                                        <path
                                            id="Mask04"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M5.5146 16L6.6946 14.818C7.0726 14.44 7.2806 13.938 7.2806 13.404V8.72702C7.2806 7.37002 7.8706 6.07302 8.9006 5.17102C9.9386 4.26102 11.2606 3.86102 12.6376 4.04202C14.9646 4.35102 16.7196 6.45502 16.7196 8.93702V13.404C16.7196 13.938 16.9276 14.44 17.3046 14.817L18.4856 16H5.5146ZM13.9996 18.341C13.9996 19.24 13.0836 20 11.9996 20C10.9156 20 9.9996 19.24 9.9996 18.341V18H13.9996V18.341ZM20.5206 15.208L18.7196 13.404V8.93702C18.7196 5.45602 16.2176 2.49902 12.8996 2.06002C10.9776 1.80402 9.0376 2.39102 7.5826 3.66702C6.1186 4.94902 5.2806 6.79302 5.2806 8.72702L5.2796 13.404L3.4786 15.208C3.0096 15.678 2.8706 16.377 3.1246 16.99C3.3796 17.604 3.9726 18 4.6366 18H7.9996V18.341C7.9996 20.359 9.7936 22 11.9996 22C14.2056 22 15.9996 20.359 15.9996 18.341V18H19.3626C20.0266 18 20.6186 17.604 20.8726 16.991C21.1276 16.377 20.9896 15.677 20.5206 15.208Z"
                                            fill="#231F20"
                                        />
                                        <mask id="mask004" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="19" height="20">
                                            <path
                                                id="Mask_204"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M5.5146 16L6.6946 14.818C7.0726 14.44 7.2806 13.938 7.2806 13.404V8.72702C7.2806 7.37002 7.8706 6.07302 8.9006 5.17102C9.9386 4.26102 11.2606 3.86102 12.6376 4.04202C14.9646 4.35102 16.7196 6.45502 16.7196 8.93702V13.404C16.7196 13.938 16.9276 14.44 17.3046 14.817L18.4856 16H5.5146ZM13.9996 18.341C13.9996 19.24 13.0836 20 11.9996 20C10.9156 20 9.9996 19.24 9.9996 18.341V18H13.9996V18.341ZM20.5206 15.208L18.7196 13.404V8.93702C18.7196 5.45602 16.2176 2.49902 12.8996 2.06002C10.9776 1.80402 9.0376 2.39102 7.5826 3.66702C6.1186 4.94902 5.2806 6.79302 5.2806 8.72702L5.2796 13.404L3.4786 15.208C3.0096 15.678 2.8706 16.377 3.1246 16.99C3.3796 17.604 3.9726 18 4.6366 18H7.9996V18.341C7.9996 20.359 9.7936 22 11.9996 22C14.2056 22 15.9996 20.359 15.9996 18.341V18H19.3626C20.0266 18 20.6186 17.604 20.8726 16.991C21.1276 16.377 20.9896 15.677 20.5206 15.208Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask004)">
                                            <g id="&#240;&#159;&#142;&#168; Color">
                                                <rect id="Base" width="24" height="24" fill="#707C97" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                notifications
                            </li>
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7 16C7 15.45 7.45 15 8 15C8.55 15 9 15.45 9 16C9 16.55 8.55 17 8 17C7.45 17 7 16.55 7 16ZM12 15H16C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17H12C11.45 17 11 16.55 11 16C11 15.45 11.45 15 12 15ZM18 20H6C5.449 20 5 19.551 5 19V13H19V19C19 19.551 18.551 20 18 20ZM6 6H7V7C7 7.55 7.45 8 8 8C8.55 8 9 7.55 9 7V6H15V7C15 7.55 15.45 8 16 8C16.55 8 17 7.55 17 7V6H18C18.551 6 19 6.449 19 7V11H5V7C5 6.449 5.449 6 6 6ZM18 4H17V3C17 2.45 16.55 2 16 2C15.45 2 15 2.45 15 3V4H9V3C9 2.45 8.55 2 8 2C7.45 2 7 2.45 7 3V4H6C4.346 4 3 5.346 3 7V19C3 20.654 4.346 22 6 22H18C19.654 22 21 20.654 21 19V7C21 5.346 19.654 4 18 4Z"
                                        fill="#231F20"
                                    />
                                    <mask id="mask005" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="2" width="18" height="20">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7 16C7 15.45 7.45 15 8 15C8.55 15 9 15.45 9 16C9 16.55 8.55 17 8 17C7.45 17 7 16.55 7 16ZM12 15H16C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17H12C11.45 17 11 16.55 11 16C11 15.45 11.45 15 12 15ZM18 20H6C5.449 20 5 19.551 5 19V13H19V19C19 19.551 18.551 20 18 20ZM6 6H7V7C7 7.55 7.45 8 8 8C8.55 8 9 7.55 9 7V6H15V7C15 7.55 15.45 8 16 8C16.55 8 17 7.55 17 7V6H18C18.551 6 19 6.449 19 7V11H5V7C5 6.449 5.449 6 6 6ZM18 4H17V3C17 2.45 16.55 2 16 2C15.45 2 15 2.45 15 3V4H9V3C9 2.45 8.55 2 8 2C7.45 2 7 2.45 7 3V4H6C4.346 4 3 5.346 3 7V19C3 20.654 4.346 22 6 22H18C19.654 22 21 20.654 21 19V7C21 5.346 19.654 4 18 4Z"
                                            fill="white"
                                        />
                                    </mask>
                                    <g mask="url(#mask005)">
                                        <rect width="24" height="24" fill="#707C97" />
                                    </g>
                                </svg>
                                calendar
                            </li>
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Icon/Outline/settings-2">
                                        <path
                                            id="Mask06"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M11.3745 20H12.6255V19.233C12.6255 18.298 13.2005 17.458 14.0895 17.091C15.0095 16.708 16.0145 16.896 16.6765 17.562L17.2155 18.103L18.1035 17.215L17.5585 16.671C16.8955 16.009 16.7085 15.005 17.0815 14.114C17.0815 14.114 17.0825 14.113 17.0825 14.112L17.0935 14.084C17.4575 13.201 18.2985 12.625 19.2335 12.625H19.9995V11.375H19.2335C18.2985 11.375 17.4575 10.8 17.0915 9.911C16.7065 8.991 16.8955 7.986 17.5615 7.323L18.1025 6.784L17.2155 5.897L16.6705 6.442C16.0085 7.104 15.0055 7.291 14.1145 6.919C13.2015 6.542 12.6255 5.702 12.6255 4.767V4H11.3745V4.767C11.3745 5.702 10.7995 6.542 9.91051 6.909C8.99151 7.294 7.98651 7.105 7.32351 6.438L6.78451 5.897L5.89651 6.785L6.44151 7.329C7.10351 7.991 7.29151 8.995 6.91851 9.886C6.54251 10.799 5.70151 11.375 4.76651 11.375H3.99951V12.625H4.76651C5.70151 12.625 6.54251 13.2 6.90851 14.089C7.29351 15.009 7.10451 16.014 6.43851 16.677L5.89751 17.216L6.78451 18.103L7.32951 17.558C7.99151 16.896 8.99451 16.709 9.88551 17.081C10.7985 17.458 11.3745 18.298 11.3745 19.233V20ZM12.9425 22H11.0505C10.1265 22 9.37451 21.248 9.37451 20.324V19.233C9.37451 19.086 9.25751 18.985 9.14751 18.94C9.00351 18.881 8.84951 18.869 8.74351 18.972L7.97351 19.743C7.31751 20.397 6.25151 20.399 5.59651 19.743L4.25651 18.403C3.93851 18.085 3.76451 17.663 3.76451 17.213C3.76551 16.764 3.94051 16.342 4.25951 16.024L5.02751 15.259C5.13251 15.154 5.12151 15 5.07451 14.889C5.01451 14.742 4.91451 14.625 4.76651 14.625H3.68251C2.75451 14.625 1.99951 13.871 1.99951 12.943V11.051C1.99951 10.126 2.75151 9.375 3.67651 9.375H4.76651C4.91351 9.375 5.01451 9.257 5.05951 9.147C5.11951 9.003 5.13151 8.848 5.02751 8.744L4.25651 7.974C3.60251 7.317 3.60251 6.251 4.25651 5.597L5.59651 4.257C5.91451 3.939 6.33551 3.765 6.78451 3.765H6.78651C7.23551 3.765 7.65851 3.94 7.97551 4.259L8.74051 5.028C8.84551 5.134 9.00051 5.122 9.11151 5.075C9.25751 5.014 9.37451 4.914 9.37451 4.767V3.683C9.37451 2.755 10.1295 2 11.0575 2H12.9495C13.8735 2 14.6255 2.752 14.6255 3.676V4.767C14.6255 4.914 14.7425 5.015 14.8525 5.06C14.9975 5.12 15.1515 5.133 15.2565 5.028L16.0265 4.257C16.6825 3.603 17.7485 3.601 18.4035 4.257L19.7445 5.598C20.0625 5.915 20.2365 6.337 20.2355 6.787C20.2355 7.235 20.0605 7.658 19.7415 7.975L18.9725 8.741C18.8675 8.846 18.8785 9 18.9255 9.111C18.9855 9.258 19.0855 9.375 19.2335 9.375H20.3175C21.2455 9.375 21.9995 10.129 21.9995 11.057V12.949C21.9995 13.874 21.2485 14.625 20.3235 14.625H19.2335C19.0865 14.625 18.9855 14.743 18.9405 14.853C18.9395 14.854 18.9275 14.884 18.9265 14.886C18.8805 14.997 18.8685 15.152 18.9725 15.256L19.7435 16.026C20.3975 16.683 20.3975 17.749 19.7435 18.403L18.4035 19.743C18.0855 20.061 17.6645 20.235 17.2155 20.235H17.2135C16.7645 20.235 16.3415 20.06 16.0245 19.741L15.2595 18.972C15.1545 18.867 14.9985 18.879 14.8885 18.925C14.7425 18.986 14.6255 19.086 14.6255 19.233V20.317C14.6255 21.245 13.8705 22 12.9425 22ZM12 10.5C11.173 10.5 10.5 11.173 10.5 12C10.5 12.827 11.173 13.5 12 13.5C12.827 13.5 13.5 12.827 13.5 12C13.5 11.173 12.827 10.5 12 10.5ZM12 15.5C10.07 15.5 8.50001 13.93 8.50001 12C8.50001 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
                                            fill="#231F20"
                                        />
                                        <mask id="mask006" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="2" width="21" height="20">
                                            <path
                                                id="Mask_206"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.3745 20H12.6255V19.233C12.6255 18.298 13.2005 17.458 14.0895 17.091C15.0095 16.708 16.0145 16.896 16.6765 17.562L17.2155 18.103L18.1035 17.215L17.5585 16.671C16.8955 16.009 16.7085 15.005 17.0815 14.114C17.0815 14.114 17.0825 14.113 17.0825 14.112L17.0935 14.084C17.4575 13.201 18.2985 12.625 19.2335 12.625H19.9995V11.375H19.2335C18.2985 11.375 17.4575 10.8 17.0915 9.911C16.7065 8.991 16.8955 7.986 17.5615 7.323L18.1025 6.784L17.2155 5.897L16.6705 6.442C16.0085 7.104 15.0055 7.291 14.1145 6.919C13.2015 6.542 12.6255 5.702 12.6255 4.767V4H11.3745V4.767C11.3745 5.702 10.7995 6.542 9.91051 6.909C8.99151 7.294 7.98651 7.105 7.32351 6.438L6.78451 5.897L5.89651 6.785L6.44151 7.329C7.10351 7.991 7.29151 8.995 6.91851 9.886C6.54251 10.799 5.70151 11.375 4.76651 11.375H3.99951V12.625H4.76651C5.70151 12.625 6.54251 13.2 6.90851 14.089C7.29351 15.009 7.10451 16.014 6.43851 16.677L5.89751 17.216L6.78451 18.103L7.32951 17.558C7.99151 16.896 8.99451 16.709 9.88551 17.081C10.7985 17.458 11.3745 18.298 11.3745 19.233V20ZM12.9425 22H11.0505C10.1265 22 9.37451 21.248 9.37451 20.324V19.233C9.37451 19.086 9.25751 18.985 9.14751 18.94C9.00351 18.881 8.84951 18.869 8.74351 18.972L7.97351 19.743C7.31751 20.397 6.25151 20.399 5.59651 19.743L4.25651 18.403C3.93851 18.085 3.76451 17.663 3.76451 17.213C3.76551 16.764 3.94051 16.342 4.25951 16.024L5.02751 15.259C5.13251 15.154 5.12151 15 5.07451 14.889C5.01451 14.742 4.91451 14.625 4.76651 14.625H3.68251C2.75451 14.625 1.99951 13.871 1.99951 12.943V11.051C1.99951 10.126 2.75151 9.375 3.67651 9.375H4.76651C4.91351 9.375 5.01451 9.257 5.05951 9.147C5.11951 9.003 5.13151 8.848 5.02751 8.744L4.25651 7.974C3.60251 7.317 3.60251 6.251 4.25651 5.597L5.59651 4.257C5.91451 3.939 6.33551 3.765 6.78451 3.765H6.78651C7.23551 3.765 7.65851 3.94 7.97551 4.259L8.74051 5.028C8.84551 5.134 9.00051 5.122 9.11151 5.075C9.25751 5.014 9.37451 4.914 9.37451 4.767V3.683C9.37451 2.755 10.1295 2 11.0575 2H12.9495C13.8735 2 14.6255 2.752 14.6255 3.676V4.767C14.6255 4.914 14.7425 5.015 14.8525 5.06C14.9975 5.12 15.1515 5.133 15.2565 5.028L16.0265 4.257C16.6825 3.603 17.7485 3.601 18.4035 4.257L19.7445 5.598C20.0625 5.915 20.2365 6.337 20.2355 6.787C20.2355 7.235 20.0605 7.658 19.7415 7.975L18.9725 8.741C18.8675 8.846 18.8785 9 18.9255 9.111C18.9855 9.258 19.0855 9.375 19.2335 9.375H20.3175C21.2455 9.375 21.9995 10.129 21.9995 11.057V12.949C21.9995 13.874 21.2485 14.625 20.3235 14.625H19.2335C19.0865 14.625 18.9855 14.743 18.9405 14.853C18.9395 14.854 18.9275 14.884 18.9265 14.886C18.8805 14.997 18.8685 15.152 18.9725 15.256L19.7435 16.026C20.3975 16.683 20.3975 17.749 19.7435 18.403L18.4035 19.743C18.0855 20.061 17.6645 20.235 17.2155 20.235H17.2135C16.7645 20.235 16.3415 20.06 16.0245 19.741L15.2595 18.972C15.1545 18.867 14.9985 18.879 14.8885 18.925C14.7425 18.986 14.6255 19.086 14.6255 19.233V20.317C14.6255 21.245 13.8705 22 12.9425 22ZM12 10.5C11.173 10.5 10.5 11.173 10.5 12C10.5 12.827 11.173 13.5 12 13.5C12.827 13.5 13.5 12.827 13.5 12C13.5 11.173 12.827 10.5 12 10.5ZM12 15.5C10.07 15.5 8.50001 13.93 8.50001 12C8.50001 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask006)">
                                            <g id="&#240;&#159;&#142;&#168; Color">
                                                <rect id="Base" width="24" height="24" fill="#707C97" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                settings
                            </li>
                            <li>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Icon/Outline/power">
                                        <path
                                            id="Mask07"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M13 12C13 12.553 12.552 13 12 13C11.448 13 11 12.553 11 12V2C11 1.447 11.448 1 12 1C12.552 1 13 1.447 13 2V12ZM15.2389 3.5413C15.4919 3.0503 16.0959 2.8593 16.5859 3.1113C19.9249 4.8383 21.9999 8.2433 21.9999 12.0003C21.9999 17.5133 17.5139 22.0003 11.9999 22.0003C6.48588 22.0003 1.99988 17.5133 1.99988 12.0003C1.99988 8.2433 4.07488 4.8383 7.41488 3.1113C7.90388 2.8583 8.50788 3.0493 8.76188 3.5413C9.01588 4.0313 8.82288 4.6343 8.33288 4.8883C5.65988 6.2693 3.99988 8.9943 3.99988 12.0003C3.99988 16.4113 7.58888 20.0003 11.9999 20.0003C16.4109 20.0003 19.9999 16.4113 19.9999 12.0003C19.9999 8.9943 18.3399 6.2693 15.6679 4.8883C15.1769 4.6343 14.9849 4.0313 15.2389 3.5413Z"
                                            fill="#231F20"
                                        />
                                        <mask id="mask007" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="21" height="22">
                                            <path
                                                id="Mask_207"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M13 12C13 12.553 12.552 13 12 13C11.448 13 11 12.553 11 12V2C11 1.447 11.448 1 12 1C12.552 1 13 1.447 13 2V12ZM15.2389 3.5413C15.4919 3.0503 16.0959 2.8593 16.5859 3.1113C19.9249 4.8383 21.9999 8.2433 21.9999 12.0003C21.9999 17.5133 17.5139 22.0003 11.9999 22.0003C6.48588 22.0003 1.99988 17.5133 1.99988 12.0003C1.99988 8.2433 4.07488 4.8383 7.41488 3.1113C7.90388 2.8583 8.50788 3.0493 8.76188 3.5413C9.01588 4.0313 8.82288 4.6343 8.33288 4.8883C5.65988 6.2693 3.99988 8.9943 3.99988 12.0003C3.99988 16.4113 7.58888 20.0003 11.9999 20.0003C16.4109 20.0003 19.9999 16.4113 19.9999 12.0003C19.9999 8.9943 18.3399 6.2693 15.6679 4.8883C15.1769 4.6343 14.9849 4.0313 15.2389 3.5413Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask007)">
                                            <g id="&#240;&#159;&#142;&#168; Color">
                                                <rect id="Base" width="24" height="24" fill="#707C97" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                log out
                            </li>
                        </ul>
                    </div>
                </nav>

                <main className="layout-admin__main">main</main>
            </div>
        </div>
    );
};

export default Admin;
