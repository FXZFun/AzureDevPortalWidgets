const {deployNodeJS} = require("@azure/api-management-custom-widgets-tools")

const serviceInformation = {
	"resourceId": "subscriptions/00000000-0000-0000-0000-a0a0a000000a/resourceGroups/example/providers/Microsoft.ApiManagement/service/apim-service-example",
	"managementApiEndpoint": "https://management.azure.com"
}
const name = "markdown-widget"
const fallbackConfigPath = "./static/config.msapim.json"

deployNodeJS(serviceInformation, name, fallbackConfigPath)
