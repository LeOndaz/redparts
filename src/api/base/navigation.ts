import {ILanguage} from "~/interfaces/language";
import {IMainMenuLink} from "~/interfaces/main-menu-link";

export abstract class AbstractNavigationApi {
    abstract getNavigationBarMenus (language: ILanguage): Promise<IMainMenuLink>
    abstract getFooterMenus (language: ILanguage): Promise<IMainMenuLink>
}
