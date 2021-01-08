import {Menu, MenuItem} from "~/api/graphql/types";
import {IMainMenuLink} from "~/interfaces/main-menu-link";
import {mapTranslatable} from "~/api/graphql/misc/helpers";
import {INestedLink} from "~/interfaces/link";
import url from "~/services/url";
import {CategoryType, ICategory} from "~/interfaces/category";
import {IAppLinkHref} from "~/components/shared/AppLink";
import {IMenu} from "~/interfaces/menu";


const navigationMenuMapIn = (menu: Menu): IMainMenuLink[] => {
    function getUrlFromMenuItem(menuItem: MenuItem): IAppLinkHref {
        if (menuItem.category) {
            const category: Partial<ICategory> = {
                type: CategoryType.SHOP,
                layout: "products",
                slug: menuItem.category.slug,
            }

            return url.category(category as ICategory);
        }

        return menuItem.url || {
            href: '/',
            as: '/',
        }
    }

    function mapMenuItem(item: MenuItem){
        let [name] = mapTranslatable(item, ['name'])
        return {
            title: name,
            url: getUrlFromMenuItem(item),
            links: item.children && item.children.length > 0 && mapChildrenToLinks(item.children) || undefined
        }
    }

    function mapChildrenToLinks(children: MenuItem[]): INestedLink[] {
        return (children || []).map(mapMenuItem)
    }

    return (menu.items || []).map(menuItem => {
        let [name] = mapTranslatable(menuItem, ['name'])
        const submenu: IMenu = {
            type: "menu",
            links: mapChildrenToLinks(menuItem.children)
        }

        return {
            title: name,
            url: getUrlFromMenuItem(menuItem),
            submenu: submenu.links.length > 0 ? submenu : undefined,
        }
    })

}


export const navigationMenuMap = {
    in: navigationMenuMapIn
}

