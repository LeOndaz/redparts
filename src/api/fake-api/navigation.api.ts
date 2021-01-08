import {ILanguage} from "~/interfaces/language";
import {getMenuBySlug} from "~/api/graphql/navigation/navigationService";
import {MenuSlugs} from "~/api/graphql/consts";
import {IMainMenuLink} from "~/interfaces/main-menu-link";
import {AbstractNavigationApi} from "~/api/base/navigation";


export class NavigationApi extends AbstractNavigationApi {
    getNavigationBarMenus (language: ILanguage): Promise<IMainMenuLink[]>{
        return getMenuBySlug(MenuSlugs.Navbar, language)
    }

    getFooterMenus (language: ILanguage): Promise<IMainMenuLink[]> {
        return getMenuBySlug(MenuSlugs.Footer, language)
    }
}
