import {AbstractFilterBuilder} from "./abstract-filter-builder";
import {IShopCategory} from "~/interfaces/category";
import {IProduct} from "~/interfaces/product";
import {ICategoryFilter} from "~/interfaces/filter";
import {prepareCategory} from "~/fake-server/endpoints";
import {shopCategoriesTree} from "~/fake-server/database/categories";


export class CategoryFilterBuilder extends AbstractFilterBuilder {
    private value: string | null = null;

    private items: IShopCategory[] = [];

    /**
     *
     * let items = edges.map(edge => this.toInternal(edge.node));
     * filters.forEach(builder => builder.makeItems(items, filterValues[builder.slug]));
     * filters.forEach(builder => builder.calc(filters));
     * items = items.filter(item => filters.reduce<boolean>((acc, filter) => acc && filter.test(item), true));
     *
     */


    test(product: IProduct): boolean {
        if (!this.value) {
            return true
        }
        return product.categories?.map(cat => cat.slug).includes(this.value) || false;
    }

    makeItems(categories: IShopCategory[], value: string): void {
        this.value = value === undefined ? null : value;
        let category = categories.find(cat => cat.slug === value)

        if (category) {
            this.items = [prepareCategory(category, 1)];
        } else {
            this.items = categories.map((cat) => prepareCategory(cat));
        }

    }

    calc(products: IProduct[], filterBuilders: AbstractFilterBuilder[]): void {
    }

    build(): ICategoryFilter {
        return {
            type: 'category',
            slug: this.slug,
            name: this.name,
            items: this.items,
            value: this.value,
        };
    }
}
