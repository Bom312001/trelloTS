import React, {ReactNode} from 'react';
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar';
import '@coreui/coreui/dist/css/coreui.min.css'

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss'
// import 'bootstrap/dist/css/bootstrap.min.css'


const cx = classNames.bind(styles);
export interface DefaultLayoutProps  {
    children: ReactNode;
};

function DefaultLayout({ children }: DefaultLayoutProps): JSX.Element{
    return(
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    )
} 

export default DefaultLayout