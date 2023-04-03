import { useEffect, useState } from 'react';
import { CButton, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CForm, CFormInput, CImage, CNavbar, CNavbarNav } from '@coreui/react';
import classNames from 'classnames/bind';
import styles from './Popover.module.scss';
import imgPopover from '../../../assets/images/ImagePopover/imgLogo.svg'
import { listImage } from '../../../assets/images/ImagePopover/listImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {  faChevronDown, faEarthAmericas, faEllipsisVertical, faLock, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { listColor } from '../../../assets/images/ImagePopover/listColor';
import './GlobalPopover.scss'

const cx = classNames.bind(styles);


function Popover () {
    const [isdisable, setIsDisable] = useState(false)
    const [value, setValue] = useState('');

    const [selectedTitle, setSelectedTitle] = useState('Riêng tư')

    const handleChange = (event :any) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        if(value === '') {
            setIsDisable(true)
        } else{
            setIsDisable(false)
        }
    },[value])

    return (
        <div className={cx('wrapper',"text-sm","font-normal", "text-[#172b4d]")}>

        <div className={cx("flex", "justify-center", "mb-2")}>
            <div className={cx('img-logo')}>
                <CImage src={imgPopover} />
            </div>
        </div>
        <div className={cx("content")}>
            <div>Phông nền</div>
            <div className={cx("content-list")}>
                <CNavbar>
                    {listImage.map(data => (
                        <CNavbarNav key={data.id.toString()} className="flex-row">
                            <CButton color="light" className="w-16 h-10 p-0" >
                                <CImage className='w-full h-full rounded' src={data.image.toString()}/>
                            </CButton>
                        </CNavbarNav>
                    ))}
                </CNavbar>
                <CNavbar>
                    {listColor.map(data => (
                        <CNavbarNav key={data.id.toString()} className="flex-row">
                            <CButton color="light" className="w-10 h-8 p-0" >
                                <CImage className='w-full h-full rounded' src={data.color}/>
                            </CButton>
                        </CNavbarNav>
                    ))}
                    <CButton color="light" className="w-10 h-8 p-0" >
                        <FontAwesomeIcon icon={faEllipsisVertical as IconProp}/>
                    </CButton> 
                </CNavbar>
            </div>
        </div>
        <CForm>
                <CFormInput 
                    id="exampleFormControlInput1"
                    label={<span className="text-xs font-bold">Tiêu đề bảng*</span>}
                    value={value}
                    text={value ? '' : "Tiêu đề bảng là bắt buộc*"}
                    onChange={handleChange}   
                />

                <div className="text-xs font-bold mb-2 mt-1">Quyền xem</div>
                <CDropdown className="w-full p-0">
                    <CDropdownToggle  color="" className="w-full p-0 border-0">
                        <div className="mb-2">
                            <CFormInput 
                                className="relative"
                                readOnly
                                value={selectedTitle}
                            />
                            <FontAwesomeIcon className="absolute top-3 right-4" icon={faChevronDown as IconProp}/>
                        </div>
                    </CDropdownToggle>
                    <CDropdownMenu className={cx('drop-menu',"mt-11", "w-full", "z-10")}>
                        <CDropdownItem className="w-full whitespace-normal" onClick={() => setSelectedTitle("Riêng tư")}>
                            <div className="flex items-center w-full">
                                <FontAwesomeIcon className="w-6 p-2 mr-2" icon={faLock as IconProp}/>
                                <div className="flex flex-col w-full">
                                    <span className={cx('title')}>Riêng tư</span>
                                    <span className="text-xs">Chỉ có các thành viên nhóm mới có thể xem và sửa bảng này</span>
                                </div>
                            </div>
                        </CDropdownItem>
                        <CDropdownItem  className="w-full whitespace-normal" onClick={() => setSelectedTitle("Không gian làm việc")}>
                            <div className="flex items-center w-full">
                                <FontAwesomeIcon className="w-6 p-2 mr-2" icon={faUserGroup as IconProp}/>
                                <div className="flex flex-col w-full">
                                    <span className={cx('title')}>Không gian làm việc</span>
                                    <span className="text-xs">Tất cả các thành viên của Không gian làm việc có thể xem và sửa bảng này</span>
                                </div>
                            </div>
                        </CDropdownItem>
                        <CDropdownItem  className="w-full whitespace-normal" onClick={() => setSelectedTitle("Công khai")}>
                            <div className="flex items-center w-full">
                                <FontAwesomeIcon className="w-6 p-2 mr-2" icon={faEarthAmericas as IconProp}/>
                                <div className="flex flex-col w-full">
                                    <span className={cx('title')}>Công khai</span>
                                    <span className="text-xs">Tất cả các thành viên của Không gian làm việc có thể xem và sửa bảng này</span>
                                </div>
                            </div>
                        </CDropdownItem>
                    </CDropdownMenu>
                </CDropdown>

                {isdisable ?
                (<CButton 
                    color="light"
                    className="form-btn w-full h-10 p-0 cursor-not-allowed"
                    disabled
                >
                    Tạo mới
                </CButton>
                ) : (
                    <CButton 
                    color='primary'
                    className="w-full h-10 p-0" 
                >
                    Tạo mới
                </CButton>
                )}
        </CForm>

        <CButton color="light" className="w-full h-10 p-0 mt-2">
            Bắt đầu với mẫu
        </CButton>

        <div className="text-xs text-left mt-3"> 
            <div className="text-[#5e6c84]">Bằng cách sử dụng hình ảnh từ Unsplash, bạn đồng ý với 
                <a href="/" className="text-xs text-[#5e6c84] ml-1 hover:text-[blue]" target="_blank">giấy phép</a> và 
                <a href="/" className="text-xs text-[#5e6c84] ml-1 hover:text-[blue]" target="_blank">Điều khoản dịch vụ</a>
            </div>
        </div>
    </div>
    )
}

export default Popover