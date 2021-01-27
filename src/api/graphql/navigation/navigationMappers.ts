import {Category, Menu, MenuItem} from "~/api/graphql/types";
import {IMainMenuLink} from "~/interfaces/main-menu-link";
import {mapTranslatable} from "~/api/graphql/misc/helpers";
import {ILink, INestedLink} from "~/interfaces/link";
import url from "~/services/url";
import {CategoryType, ICategory} from "~/interfaces/category";
import {IAppLinkHref} from "~/components/shared/AppLink";
import {IMegamenuColumn} from "~/interfaces/menu";
import {IFooterLinks} from "~/components/footer/FooterLinks";
import {IDepartmentsLink} from "~/interfaces/departments-link";

const getCategoryUrl = (category: Category) => url.category({
    slug: category.slug,
    layout: "products",
    type: CategoryType.SHOP,
} as ICategory)


const getUrlFromMenuItem = (menuItem: MenuItem): IAppLinkHref | null => {
    if (menuItem.category) return getCategoryUrl(menuItem.category);

    return menuItem.url || null
}

const mapMenuItem = (item: MenuItem): INestedLink => {
    let [name] = mapTranslatable(item, ['name'])
    const url = getUrlFromMenuItem(item)

    return {
        title: name,
        links: item.children && item.children.length > 0 && mapChildrenToLinks(item.children) || undefined,
        ...(url ? {url} : {}),
    }
}

const mapChildrenToLinks = (children: MenuItem[]): INestedLink[] => {
    return (children || []).map(mapMenuItem)
}

const navbarMapIn = (menu: Menu): IMainMenuLink[] => {
    return (menu.items || []).map(menuItem => {
        let [name] = mapTranslatable(menuItem, ['name'])
        const submenuLinks = mapChildrenToLinks(menuItem.children);
        const url = getUrlFromMenuItem(menuItem);

        return {
            title: name,
            submenu: submenuLinks.length > 0 ? {
                type: "menu",
                links: submenuLinks,
            } : undefined,
            ...(url ? {url} : {}),
        }
    })

}

const footerMapIn = (menu: Menu): IFooterLinks[] => {
    const menuItems = menu.items;

    return (menuItems || []).map(item => {
        const [name] = mapTranslatable(item!, ['name']);

        const links: ILink[] = (item!.children || []).map(child => {
            const [name] = mapTranslatable(child!, ['name']);
            let url = child!.url;

            return {
                title: name,
                ...(url ? {url} : {}),
            }
        })

        return {
            header: name,
            links: links
        }
    })
}

const extractCategoryChildrenLinksRecursive = (category: ICategory): INestedLink => {
    let link: INestedLink = {
        title: category.name,
        url: url.category(category),
    }

    if (category.children!.length > 0) {
        link.links = category.children!.map(extractCategoryChildrenLinksRecursive);
    }

    return link
}

// returns the count of descendants of a category.
const countDescendants = (category: ICategory): number => {
    return (category.children! as ICategory[]).reduce((acc, curr) => {
        if (curr.children) {
            return curr.children.length + acc;
        } else return 0
    }, category.children!.length)
}

const headerMapIn = (categories: ICategory[]): IDepartmentsLink[] => {
    const departmentLinks: IDepartmentsLink[] = [];

    categories.forEach(cat => {
        const catLink = extractCategoryChildrenLinksRecursive(cat)
        // const descendantsCount = countDescendants(cat)
        const columns: IMegamenuColumn[] = [];

        columns.push({
            size: "1of5",
            links: [catLink]
        })

        const link: IDepartmentsLink = {
            title: cat.name,
            url: url.category(cat),
            submenu: {
                type: "megamenu",
                size: "nl",
                image: cat.image || undefined,
                columns: columns,
            }
        };
        departmentLinks.push(link);
    })

    return departmentLinks;
}

export const navbarMap = {
    in: navbarMapIn,
}

export const footerMap = {
    in: footerMapIn,
}

export const headerMap = {
    in: headerMapIn
}
