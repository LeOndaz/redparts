import {convertToHTML} from "draft-convert";
import {convertFromRaw, RawDraftContentState} from "draft-js";


export function parseRawHTMLFromJson(raw: RawDraftContentState) {
    return convertToHTML({
        styleToHTML: (style) => {
            switch (style) {
                case "BOLD":
                    return <span style={{fontWeight: "bold"}}/>
                case "ITALIC":
                    return <span style={{fontStyle: "italic"}}/>
                case "STRIKETHROUGH":
                    return <span style={{textDecoration: "line-through"}}/>
            }
        },
        blockToHTML: (block) => {
            // @ts-ignore
            switch (block.type) {
                case "paragraph":
                    return <p/>
                /* headers */
                case "header-one":
                    return <h1/>
                case "header-two":
                    return <h2/>
                case "header-three":
                    return <h3/>
                case "header-four":
                    return <h4/>
                case "header-five":
                    return <h5/>
                case "header-six":
                    return <h6/>
                case "ordered-list-item":
                    return <li/>
                case "unordered-list-item":
                    return <li/>
                case "atomic":
                    return {
                        start: "",
                        end: "",
                    }
            }
            return <span/>
        },
        entityToHTML: (entity, originalText) => {
            switch (entity.type) {
                case "LINK":
                    return <a href={entity.data.url}>{originalText}</a>;
                case "IMAGE":
                    return <img src={entity.data.url} alt={originalText}/>
            }
            return originalText
        }
    })(convertFromRaw(raw));
}
