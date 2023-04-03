
import classNames from 'classnames/bind';
import styles from './PopperWrapper.module.scss';

const cx = classNames.bind(styles);

interface PopperWrapperProps {
    className?: string;
    children: React.ReactNode;
}

function PopperWrapper({ children, className}: PopperWrapperProps) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}


export default PopperWrapper;