import React from 'react';
import { __ } from '@wordpress/i18n';
import classNames from 'classnames';
import { BaseControl, SelectControl, Tooltip } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { getDemosActiveCat, getActiveTab } from '../../store/selectors';

const Sidebar = ({props}) => {

  const dispatch = useDispatch('zolo/templates/library');
    const {activeTab, activeCat, setType, type } = props;

      const { categories } = useSelect(
          (select) => {
              const { getDemosCategories, getPatternsCategories, getActiveTab } = select('zolo/templates/library');
              const activeTab = getActiveTab();
              return {
                  categories: activeTab === 'demos' ? getDemosCategories() : getPatternsCategories(),
              };
          },
          [getActiveTab, getDemosActiveCat]
      );

    return (
        <div className="categories">
            <div className="demo-made-button">
                <button className="demo-made-btn made-zoloblocks-btn">{__('hand craft', 'zoloblocks')}</button>
                <button className="demo-made-btn made-ai-btn" title="upcoming">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                        <path
                            d="M14.0712 9.69993L14.9982 7.55057C15.152 7.19386 15.6539 7.19843 15.8014 7.55789L16.6354 9.59063C17.172 10.8987 18.2031 11.9386 19.5112 12.4441C20.2436 12.7271 20.9451 12.9933 21.726 13.3027C22.097 13.4496 22.0896 13.979 21.716 14.1188L19.6811 14.8802C18.2774 15.4055 17.1629 16.513 16.619 17.9233L15.8161 20.0053C15.6715 20.3804 15.1465 20.3798 15.0025 20.0045L14.2087 17.9342C13.6895 16.58 12.6432 15.5009 11.3145 14.9493L9.33125 14.1259C8.97253 13.977 8.96964 13.4642 9.32666 13.3112L11.3146 12.4589C12.5487 11.9299 13.5353 10.9424 14.0712 9.69993Z"
                            fill="black"
                        />
                        <path
                            d="M6.01488 3.07497L6.36536 2.26453C6.51939 1.90834 7.02058 1.91291 7.16823 2.27186L7.45362 2.96564C7.9915 4.2732 9.02484 5.3084 10.3342 5.81066C10.5983 5.91198 10.8636 6.01393 11.14 6.12187C11.512 6.26717 11.505 6.79641 11.1309 6.93603L10.5019 7.17075C9.09773 7.69476 7.98233 8.80125 7.43724 10.2109L7.18294 10.8686C7.0381 11.2431 6.51378 11.2426 6.36966 10.8678L6.11046 10.1936C5.59 8.83976 4.54261 7.76153 3.21341 7.21116L2.56601 6.9431C2.20678 6.79436 2.20389 6.28094 2.56142 6.12807L3.25573 5.83122C4.49031 5.30336 5.47779 4.31692 6.01488 3.07497Z"
                            fill="black"
                        />
                        <path
                            d="M4.71182 15.9861L4.7511 15.8956C4.88762 15.5812 5.33013 15.5852 5.461 15.9021C5.93846 17.0583 6.85588 17.9676 8.01378 18.4132L8.10773 18.4495C8.42754 18.573 8.4217 19.0269 8.10037 19.1463C6.89622 19.5939 5.93558 20.5497 5.46676 21.7574C5.34152 22.08 4.88724 22.0809 4.76262 21.7581C4.30772 20.5795 3.39184 19.6358 2.2334 19.158C1.91983 19.0287 1.92376 18.5778 2.23586 18.4449C3.33693 17.976 4.23152 17.0924 4.71182 15.9861Z"
                            fill="black"
                        />
                    </svg>
                    ai
                    <span>{__('upcoming', 'zoloblocks')}</span>
                </button>
            </div>
            <div className="demo-title-proFree-wrap">
                <h2 className="category-title">{__('Categories', 'zoloblocks')}</h2>
                <div className="demo-proFree-btn">
                    {type !== '' && (
                        <Tooltip>
                            <button
                                className="demo-pro-free-reset"
                                onClick={() => {
                                    setType('');
                                }}
                            >
                                <svg
                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    width={24}
                                    height={24}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                                    />
                                </svg>
                            </button>
                        </Tooltip>
                    )}
                    <button
                        className="demo-free-btn"
                        onClick={() => {
                            setType('free');
                        }}
                    >
                        {__('free', 'zoloblocks')}
                    </button>
                    <button
                        className="demo-pro-btn"
                        onClick={() => {
                            setType('pro');
                        }}
                    >
                        {__('pro', 'zoloblocks')}
                    </button>
                </div>
            </div>

            <div className="category-list">
                {categories &&
                    categories.length > 0 &&
                    activeTab !== 'favorites' &&
                    categories
                        ?.sort((a, b) => b?.count - a?.count)
                        ?.map((category) => (
                            <button
                                key={category?.slug}
                                className={classNames('single-category', {
                                    active: activeCat === category?.slug,
                                })}
                                onClick={() => dispatch.setActiveCat(category?.slug)}
                            >
                                <span className="single-category-text">{category?.slug === 'demos' ? 'All' : category?.label}</span>
                                <span className="single-category-count">{category?.count}</span>
                            </button>
                        ))}
            </div>
        </div>
    );
};

export default Sidebar;
