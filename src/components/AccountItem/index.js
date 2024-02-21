import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=30310797&x-expires=1708430400&x-signature=WADeowXuJvbiOUpCrXjS9cbxnIA%3D"
                alt="Trung"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Đào Lê Phương Hoa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>daolephuonghoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
