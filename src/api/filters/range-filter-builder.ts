// application
import { IProduct } from '~/interfaces/product';
import { IRangeFilter } from '~/interfaces/filter';
import {AbstractFilterBuilder} from "~/api/filters/abstract-filter-builder";

export class RangeFilterBuilder extends AbstractFilterBuilder {
    private min!: number;

    private max!: number;

    private value!: [number, number];

    test(product: IProduct): boolean {
        const value = this.extractValue(product);

        return value >= this.value[0] && value <= this.value[1];
    }

    parseValue(value: string): [number, number] {
        return value.split('-').map((x) => parseFloat(x)) as [number, number];
    }

    makeItems(products: IProduct[], value: string): void {
        this.max = products.reduce((acc, product) => Math.max(acc, this.extractValue(product)), 0);
        this.min = products.reduce((acc, product) => Math.min(acc, this.extractValue(product)), this.max);

        /** Calculates the number of digits for rounding. */
        let digit = Math.max(Math.ceil(this.max).toString().length - 2, 1);

        digit = 10 ** digit;

        this.max = Math.ceil(this.max / digit) * digit;
        this.min = Math.floor(this.min / digit) * digit;

        if (this.min === this.max){
            /** if min equals max, we just round the max to the nearest nth number
             *  where n is the biggest place value number like 94123 has n = 9.
             * */
            const stringMin = this.min.toString()
            const firstDigit = parseInt(stringMin[0])
            let newMax: any = (firstDigit + 1).toString() + "0".repeat(stringMin.length - 1)
            newMax = parseFloat(newMax);
            this.max = newMax
        }

        this.value = [this.min, this.max];

        if (value) {
            this.value = this.parseValue(value);
        }

    }

    calc(products: IProduct[], filterBuilders: AbstractFilterBuilder[]): void {
    }

    extractValue(product: IProduct): number {
        if (this.slug === 'price') {
            return product.price;
        }

        throw Error();
    }

    build(): IRangeFilter {
        return {
            type: 'range',
            slug: this.slug,
            name: this.name,
            min: this.min,
            max: this.max,
            value: this.value,
        };
    }
}
