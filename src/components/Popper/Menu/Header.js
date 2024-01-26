import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);
function Header({ title, onBack }) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

export default Header;
