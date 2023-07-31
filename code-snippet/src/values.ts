export type Values = {
    lang: string
    codesnippet: string
}

export const valuesDefault: Readonly<Values> = Object.freeze({
    lang: "html",
    codesnippet: "<p>Default Code Snippet</p>"
})
