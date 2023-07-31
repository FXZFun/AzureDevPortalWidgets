import { buildOnChange, getEditorValues } from "@azure/api-management-custom-widgets-tools"
import { Values, valuesDefault } from "./values"

export const onChange = buildOnChange<Values>()

function initialize() {
    const values = getEditorValues<Values>()

    const snippet = document.getElementById("codesnippet") as HTMLElement;
    if (snippet) {
        snippet.classList.add("language-" + values.lang ?? valuesDefault.lang);
        snippet.textContent = values.codesnippet ?? valuesDefault.codesnippet;
    }

    const lang = document.getElementById("lang") as HTMLInputElement;
    if (lang) {
        lang.placeholder = "HTML/XML, CSS, JS, JSON, C, C#, Bash, Batch, Powershell"
        lang.value = values.lang ?? valuesDefault.lang;
    }
}

export default initialize
