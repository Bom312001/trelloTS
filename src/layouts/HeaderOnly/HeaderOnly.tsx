import React,{ReactNode} from 'react';
import Header from '../components/Header/Header';
import '@coreui/coreui/dist/css/coreui.min.css'


import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss'
// import 'bootstrap/dist/css/bootstrap.min.css'


const cx = classNames.bind(styles);

export interface HeaderOnlyProps  {
    children: ReactNode;
};

function HeaderOnly({ children }:HeaderOnlyProps):JSX.Element {
    return (
        <div className={cx('wrapper', 'min-h-screen')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    {children}
                    {/* sau nội dung content thay đổi thì mk đưa từ ngoài vào, nhận dưới dạng children */}
                </div>
            </div>
        </div>
    );
}

export default HeaderOnly;
