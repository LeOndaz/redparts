// const listToString = (list: any[]) => {
//     return list.reduce((acc, curr) => acc + curr, "")
// }
//
// const editorjs = {
//     header: ({data}) => return,
// }
//
// export const parseEditorjsJson = (blocks: []) => {
//     return listToString(blocks.map(block => {
//         switch (block.type) {
//             case "header":
//                 return `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
//             // case "embded":
//             //     return `<div><iframe width="560" height="315" src="${block.data.embed}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
//             //     break;
//             case "paragraph":
//                 return `<p>${block.data.text}</p>`;
//             case "delimiter":
//                 return  "<br />";
//             // case "image":
//             //     return `<!--<img class="img-fluid" alt="" src="${block.data.file.url}" title="${block.data.caption}" />-->`;
//             case "list":
//                 if (block.data.style === "unordered"){
//                     return `<ul>
//                         ${listToString(block.data.items.map((item) => {
//                             return `<li>${item}</li>`
//                     }))}
//                     </ul>`
//                 }
//                 break;
//             case "quote":
//                 return `<blockquote style="text-align: ${block.data.alignment}"> ${block.data.text} </blockquote> - ${block.data.caption}\`;
// `
//             default:
//                 return `<span>${block.data.text}</span>`
//         }
//     }))
// }

import parser from "editorjs-html";

const customEditorjsParser = parser({
    quote: ({data}) => {
        return data.text ? `<blockquote style="text-align: ${data.alignment}">${data.text}</blockquote> - ${data.caption}` : '';
    },
    paragraph: ({data}) => {
        return data.text ? `<p>${data.text}</p>` : ''
    }
})

export const parseEditorjsText = (text: string) => {
    return customEditorjsParser.parse(JSON.parse(text));
}
