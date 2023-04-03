import { useState } from 'react';
import { CButton, CFormInput, CModal, CModalBody, CModalHeader, } from '@coreui/react';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLink, faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);


function Modal () {
    const [toggleLink, setToggleLink] = useState(false)
    const handleToggle = () => {
        setToggleLink(!toggleLink)
    }


    const [visible, setVisible] = useState(false)
    return (
        <div className={cx('wrapper')} >
            <CButton className="bg-transparent border-0 " onClick={() => setVisible(!visible)} >
                <FontAwesomeIcon className="text-[#5e6c84] mt-1 p-1 rounded hover:bg-[#ccc]" icon={faPlus as IconProp}/>
            </CButton>
            <CModal 
                className={cx('modal-wrapper')} 
                alignment="center"  visible={visible} onClose={() => setVisible(false)}
            >
                <CModalHeader className="border-0 text-lg">
                    Mời vào không gian làm việc
                </CModalHeader>
                <CModalBody >
                    <CFormInput placeholder='Địa chỉ email hoặc tên'/>
                </CModalBody>

                <div className={cx('footer-modal') + " px-3 py-3"} >
                    <div className="flex items-center justify-between">
                        <div className='flex items-center' >
                            <div className="bg-[#EBECF0] flex items-center py-1 rounded mr-2"><FontAwesomeIcon icon={faLink as IconProp} className="w-6 h-6 px-1" /></div>
                            <div className="flex flex-col flex-1">
                                <span className="text-sm ">Mời ai đó vào Không gian làm việc này bằng liên kết</span>
                                {!toggleLink ? (<span className="text-xs normal-case font-normal underline cursor-pointer" onClick={handleToggle}>
                                    Tạo liên kết
                                </span>) :
                                (<span className="text-xs normal-case font-normal underline cursor-pointer">
                                    Sao chép liên kết
                                </span>
                                )}
                            </div>
                        </div>
                        {toggleLink && (
                        <CButton color='light' size='sm' className='border-0' onClick={handleToggle}> 
                            Tắt liên kết
                        </CButton>)}
                    </div>
                </div>
            </CModal>
        </div>
    )
}

export default Modal