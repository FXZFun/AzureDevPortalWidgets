import { buildOnChange, getEditorValues } from "@azure/api-management-custom-widgets-tools"
import { Values, valuesDefault } from "./values"

export const onChange = buildOnChange<Values>()

function initialize() {
    const values = getEditorValues<Values>()

    Object.entries(valuesDefault).forEach(([key, valueDefault]) => {
        const element = document.getElementById(key) as HTMLElement | HTMLDivElement | null
        if (element && "innerHTML" in element) {
            const value = values[key as keyof Values]
            if (value) element.innerHTML = value;
        }
    })
}

export default initialize