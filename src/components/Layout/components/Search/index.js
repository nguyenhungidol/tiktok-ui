import AccountItem from '../../../AccountItem';
import { Wrapper as PoperWrapper } from '@layouts/Poper';
import { useEffect, useState, useRef } from 'react';
import { useDebounce } from '../../../../hooks';
import * as searchService from '../../../../apiService/searchService';

import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setsearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setsearchResult([]);
            return;
        }
        setLoading(true);
        const fetchApi = async () => {
            try {
                const result = await searchService.search(debouncedValue);
                setsearchResult(result);
            } catch (error) {
                console.log('Failed to fetch search', error);
            } finally {
                setLoading(false);
            }
        };
        fetchApi();
    }, [debouncedValue]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PoperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PoperWrapper>
                </div>
            )}
            placement="bottom"
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                    className={cx('search-input')}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button
                        className={cx('clear')}
                        onClick={() => {
                            setSearchValue('');
                            inputRef.current.focus();
                            setsearchResult([]);
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
