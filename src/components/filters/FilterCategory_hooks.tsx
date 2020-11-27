// react
import React from 'react';
// third-party
import {FormattedMessage} from 'react-intl';
import classNames from 'classnames';
// application
import AppLink from '~/components/shared/AppLink';
import url from '~/services/url';
import {ArrowRoundedLeft6x9Svg} from '~/svg';
import {getCategoryParents} from '~/services/utils';
import {ICategoryFilter} from '~/interfaces/filter';
import {useGetCategoryBySlugQuery, useGetCategoryListQuery} from "~/api/graphql/types";
import {categoryMapper, client} from "~/api";
import {CategoryType} from "~/interfaces/category";

interface Props {
    options: ICategoryFilter;
}

function FilterCategory(props: Props) {
    const {options} = props;

    let categories;
    let useQueryHook = options.value ? useGetCategoryBySlugQuery : useGetCategoryListQuery;
    let queryVars = options.value ? {slug: options.value} : {first: 100};

    const {loading, error, data} = useQueryHook({
        client: client,
        variables: queryVars
    });

    if (loading) {
        return <div><ul><li>...</li></ul></div>
    }

    if (error) {
        return <div><ul><li>...</li></ul></div>
    }

    if (data.category) {
        categories = [categoryMapper.toInternal(data.category, {type: CategoryType.SHOP})]
    }

    if (data.categories) {
        categories = data.categories.edges.map(e => categoryMapper.toInternal(e.node, {type: CategoryType.SHOP}));
    }

    return (
        <div className="filter-category">
            <ul className="filter-category__list">
                {options.value && (
                    <li className="filter-category__item filter-category__item--parent">
                        <span className="filter-category__arrow">
                            <ArrowRoundedLeft6x9Svg/>
                        </span>
                        <AppLink href={url.products()}>
                            <FormattedMessage id="LINK_ALL_PRODUCTS"/>
                        </AppLink>
                    </li>
                )}
                {categories.map((item) => (
                    <React.Fragment key={item.id}>
                        {getCategoryParents(item).map((parent) => (
                            <li key={parent.id} className="filter-category__item filter-category__item--parent">
                                <span className="filter-category__arrow">
                                    <ArrowRoundedLeft6x9Svg/>
                                </span>
                                <AppLink href={url.category(parent)}>
                                    {parent.name}
                                </AppLink>
                            </li>
                        ))}
                        <li
                            className={classNames('filter-category__item', {
                                'filter-category__item--current': options.value,
                            })}
                        >
                            <AppLink href={url.category(item)}>
                                {item.name}
                            </AppLink>
                        </li>
                        {item.children?.map((child) => (
                            <li key={child.id} className="filter-category__item filter-category__item--child">
                                <AppLink href={url.category(child)}>{child.name}</AppLink>
                            </li>
                        ))}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
}

export default FilterCategory;
