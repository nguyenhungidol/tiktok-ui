import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PoperWrapper } from '@components/Poper';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import AccountReview from './AccountReview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderReview = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <PoperWrapper>
                <AccountReview />
            </PoperWrapper>
        </div>
    );
    return (
        <div>
            <Tippy interactive placement="bottom" delay={[800, 0]} offset={[-20, 0]} render={renderReview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://banobagi.vn/wp-content/uploads/2025/04/gai-vu-to-13.jpg"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>nttdung</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Nguyễn Thị Thùy Dung</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
