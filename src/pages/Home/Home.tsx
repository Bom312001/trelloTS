// eslint-disable-next-line
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CCloseButton, CImage, CListGroup, CListGroupItem, CPopover } from '@coreui/react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
// import anh1 from '../../assets/images/anh1.jpg'
import logoHome from '../../assets/images/icon/logoHome.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faClock, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import Popover from './Popover/Popover';
import './GlobalHome.scss';
import anhMu from '../../assets/images/mu.png'
import config from '../../config';



const cx = classNames.bind(styles);

function Home() {
    const [show, setShow] = useState(false);
    // onHide={() => setShow(false)}
    return (
        <div className={cx('wrapper',"mt-10","flex")}>
            <div className={cx('info', "w-[420px]","pl-11")}>
                <CCard className="w-full">
                    <CCardImage orientation="top" className="h-28" src={logoHome} />
                    <CCardBody className="flex flex-col justify-center items-center">
                        <CCardTitle className="text-base font-bold">Theo dõi và cập nhật</CCardTitle>
                        <CCardText className="text-sm my-2 text-center">
                        Mời mọi người vào bảng và thẻ, để lại nhận xét, thêm ngày hết hạn và chúng tôi sẽ hiển thị hoạt động quan trọng nhất ở đây.
                        </CCardText>
                    </CCardBody>
                </CCard>
            </div>
            <div className={cx('table-list',"pl-12 h-[90vh]","w-full", "max-w-[342px]")}>
                <div>
                    <div className="py-2 px-3 flex">
                        <FontAwesomeIcon className="text-sm font-normal" icon={faClock as IconProp}/>
                        <span className="flex-1 pl-2 text-xs font-semibold text-[#5e6c84]">Đã xem gần đây</span>
                    </div>
                    <CListGroup className={cx('list-gr')}>
                       <NavLink className='no-underline' to={config.routes.boards}>
                            <CListGroupItem className={cx('list-gr__item',"flex","items-center","rounded","h-12","hover:bg-slate-400")}>
                                <div className="flex item-center h-12 rounded w-full">
                                    <div className="flex w-full items-center rounded">
                                        <CImage className="w-8 h-7 bg-cover mr-2" align="start" rounded src={anhMu}/>
                                        <div className="flex flex-1 items-center ml-1 h-full">
                                            <h6 className="flex flex-col pt-2">
                                                <span className="text-[#172b4d] text-sm whitespace-nowrap">1</span>
                                                <span className="text-xs text-[#5e6c84] font-normal whitespace-nowrap">tuan anh</span>
                                            </h6>
                                        </div>
                                        <FontAwesomeIcon className={cx('list-gr__icon', "ml-2")} icon={faStar as IconProp}/>
                                    </div>
                                </div>
                            </CListGroupItem>
                       </NavLink>
                        <NavLink className='no-underline' to={config.routes.boards}>
                            <CListGroupItem className={cx('list-gr__item',"flex","items-center","rounded","h-12","hover:bg-slate-400")}>
                                <div className="flex item-center h-12 rounded w-full">
                                    <div className="flex w-full items-center rounded">
                                        <CImage className="w-8 h-7 bg-cover mr-2" align="start" rounded src={anhMu}/>
                                        <div className="flex flex-1 items-center ml-1 h-full">
                                            <h6 className="flex flex-col pt-2">
                                                <span className="text-[#172b4d] text-sm whitespace-nowrap">Khoi nghiep LT Android</span>
                                                <span className="text-xs text-[#5e6c84] font-normal whitespace-nowrap">Khoi nghiep lap trinh Android</span>
                                            </h6>
                                        </div>
                                        <FontAwesomeIcon className={cx('list-gr__icon', "ml-2")} icon={faStar as IconProp}/>
                                    </div>
                                </div>
                            </CListGroupItem>
                        </NavLink>
                    </CListGroup>
                </div>
                <div>
                    <div className="flex items-center h-8 pl-2 justify-start">
                        <span className=" pl-2 text-xs font-semibold text-[#5e6c84]">Liên kết</span>
                    </div>
                    <CListGroup className={cx('list-gr')}>
                        <CListGroupItem>
                                <CPopover 
                                    className="popover"
                                    placement="left"
                                    title={
                                        <div className='flex justify-between'>
                                            <span>"Tạo bảng"</span>
                                            <CCloseButton onClick={() => setShow(true)}/>
                                        </div> 
                                    }
                                    content={<Popover />}
                                    // content="abc"

                                    hidden={show}
                                    onHide={() => setShow(false)}
                                    onShow={() => setShow(false)}
                                >
                                    <CButton  color="light" className={cx('list-gr__btn',"flex", "grow", "items-center", "w-full" ,"justify-start", "border-0")}>
                                        <FontAwesomeIcon className="text-[#42526e] p-3" icon={faPlus as IconProp}/>
                                        <span className="pl-4  text-[#5e6c84]">Tạo bảng</span>
                                    </CButton>
                                </CPopover>
                        </CListGroupItem>
                    </CListGroup>
                </div>
            </div>
        </div>
    );
}

export default Home;
