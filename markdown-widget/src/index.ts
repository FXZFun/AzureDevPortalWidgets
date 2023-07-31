import { getValues } from "@azure/api-management-custom-widgets-tools"
import { valuesDefault } from "./values"

class App {
    public readonly values

    constructor() {

        this.values = getValues(valuesDefault)
        var converter = new window.showdown.Converter({ "tables": true });

        Object.entries(this.values).forEach(([key, value]) => {
            const element = document.getElementById(`values.${key}`)
            if (element) element.innerHTML = converter.makeHtml(value)
            document.querySelector(".skeleton-tjrwtj9tx9o")?.remove();
            let pr = document.querySelector(".markdown-body") as HTMLElement;
            if (pr) {
                pr.style.display = "block";
            }
        })
    }
}

export default App

interface customWindow extends Window {
    showdown?: any;
}
declare const window: customWindow;
