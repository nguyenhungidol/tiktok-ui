import Header from '../components/Header';
import Sidebar from '@layouts/components/Sidebar';
import styles from './Default.module.scss';
import classNames from 'classnames/bind';
import propTypes from 'prop-types';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: propTypes.node.isRequired,
};

export default DefaultLayout;
