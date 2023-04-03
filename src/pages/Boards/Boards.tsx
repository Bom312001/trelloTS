import { CButton, CImage, CNavbar } from '@coreui/react';
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Boards.module.scss';
import img from '../../assets/images/imgInfo.png'
import img1 from '../../assets/images/bgWork.jpg'
import config from '../../config';

const cx = classNames.bind(styles);


function Boards() {
    return (
        <div className={cx('wrapper')}>
            <div>
                <div className="flex items-center pb-2">
                    <FontAwesomeIcon icon={faClock as IconProp}/>   
                    <div className='flex-1 text-base font-semibold leading-6 ml-4'>Đã xem gần đây</div>
                </div>
                <div className="flex justify-start">
                    <CNavbar className={cx('navbar-container') + " mr-4 w-1/4 rounded"}>
                        {/* <CNavbarNav className="flex-row w-full"> */}
                            <NavLink className="inline-block w-full rounded" to={config.routes.works}>
                                <CButton color="light" className="w-full h-24 p-0 border-0" >
                                    <CImage className={cx('navbar-img') + ' w-full h-full '} src={img}/>
                                </CButton>
                            </NavLink>
                            <div className={cx('overlay',"absolute", "flex", "justify-between","text-white")}>
                                <span className='absolute left-2 -top-11 text-base font-bold z-10'>Bom</span>
                                <FontAwesomeIcon className={cx('navbar-icon') + ' absolute  top-8 z-10'} icon={faStar as IconProp}/>
                            </div>
                        {/* </CNavbarNav> */}
                    </CNavbar>
                    <CNavbar className={cx('navbar-container') + " mr-4 w-1/4 rounded"}>
                        {/* <CNavbarNav className="flex-row w-full"> */}
                            <NavLink className="flex-row w-full relative rounded" to={config.routes.works}>
                                <CButton color="light" className="w-full h-24 p-0 border-0" >
                                    <CImage className={cx('navbar-img') + ' w-full h-full '} src={img1}/>
                                </CButton>
                            </NavLink>
                            <div className={cx('overlay',"absolute", "flex", "justify-between","text-white")}>
                                <span className='absolute left-2 -top-11 text-base font-bold z-10'>1</span>
                                <FontAwesomeIcon className={cx('navbar-icon') + ' absolute  top-8 z-10'} icon={faStar as IconProp}/>
                            </div>
                        {/* </CNavbarNav> */}
                    </CNavbar>
                </div >
            </div>
        </div>
    )
}

export default Boards;
