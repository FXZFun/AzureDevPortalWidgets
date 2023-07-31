import { getValues } from "@azure/api-management-custom-widgets-tools"
import { valuesDefault } from "./values"

class App {
    public readonly values

    constructor() {

        this.values = getValues(valuesDefault)

        var snippet = document.getElementById("values.codesnippet")
        if (snippet) {
            snippet.classList.add("language-" + this.values.lang);
            snippet.textContent = this.values.codesnippet;

            // download as file button
            const downloadLink = document.getElementById("downloadLink") as HTMLAnchorElement;
            downloadLink.href = "data:text/" + this.values.lang + "," + this.values.codesnippet;
            downloadLink.download = "code." + this.values.lang.replace("javascript", "js").replace("c#", "cs");

            let pr = document.querySelector(".content") as HTMLElement;
            if (pr) {
                pr.style.opacity = "1";
                document.body.classList.remove("skeleton-tjrwtj9tx9o");
            }
        }
    }
}

export default App
