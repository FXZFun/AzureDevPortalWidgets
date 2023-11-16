# Introduction 
A collection of custom widgets for the Azure Developer Portal. 
These are custom components used to extend the functionality of the developer portal, 
such as a code syntax highlighting widget, or a markdown to html converter.
These widgets can be developed with standard website technologies, with built-in templates for Typescript, React, and Vue.

Additional information on using the Developer Portal editor can be found in the [DevPortalWiki.md](DevPortalWiki.md)


## Getting Started
To get started creating widgets, you will need to have [NodeJS](https://nodejs.org/en/) installed.
 
In the developer portal, on the left hand side, open the widgets panel (indicated by a puzzle piece) and click `+ Create new custom widget`.
Specify the widget name and template language (Typescript/React/Vue) and and click `Create`.

Now copy the command generated in the portal and run it on your local machine to download the code scaffold.
Once the process has completed, move into the generated directory (`cd 'api-management-custom-...'`).
Run `npm install` to load all the dependencies for the widgets.

You are now set up for developing your custom widget. 
Open the folder in Visual Studio or another editor to change the template to fit your needs.


## Build and Test
**Test**

Before you test your widget, configure the `vite.config.ts` file with the url to your portal.

    server: {
	    "port": 3000,
	    "open": "https://{your_portal_name}.developer.azure-api.net/?MS_APIM_CW_localhost_port=3000"
    }

Once you have all the dependencies installed and are ready to develop your widget, run the command `npm start`
to host a local server with the widget code. This will open the portal with the url you configured in the vite config, 
and this should allow you to test your widget in the portal.
By default this page will also be available on [port 3000](http://localhost:3000).

**Deployment**

Before you can deploy the widget, you must update the `deploy.js` file with the proper resource id. 
In the `serviceInformation` block, specify the resource id, which you can copy from the url of the portal.

    const serviceInformation = {
	    "resourceId": "subscriptions/{subscription_guid}/resourceGroups/{resource_group}/providers/Microsoft.ApiManagement/service/{your_service_name}",
	    "managementApiEndpoint": "https://management.azure.com"
    }

Once you are satisfied with your widget, deploy it with the command `npm run deploy`.
This will push the latest version of your widget onto the portal backend, and it will be available in the widgets section.
If you already are using a version of the widget in the pages, you must either replace the widget 
or change the custom values in the widget editor panel to update it to the most recent version.

## Individual Widget Documentation
Each widget has some basic documentation in its respective folder as well.
| Widget Name     | Documentation Link                                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Code Snippet    | [code-snippet/code-snippet.md](https://github.com/FXZFun/AzureDevPortalWidgets/blob/main/code-snippet/code-snippet.md)             |
| Markdown Widget | [markdown-widget/markdown-widget.md](https://github.com/FXZFun/AzureDevPortalWidgets/blob/main/markdown-widget/markdown-widget.md) |

## Errors

If you encounter an error while deploying the widget to the portal, check to see if the port used for authentication is already in use (default is port 80).
If the default port is already in use, the deployment will fail and you have two options:
  - stop the process using the default port, or
  - use a different port

#### Use a different port
Open `index.js` located in `node_modules/@azure/{your widget name}/dist` folder
(if using Visual Studio, you have to enable the 'Show all files' option)

Search for `InteractiveBrowserCredential()` and replace with `InteractiveBrowserCredential({ redirectUri: "http://localhost:1337" })`
Save the updated file and you should be good to go. 

#### Find the proccess using the default port
To find which process is using a certain port on your computer, open powershell with admin rights.
You can use Get-NetTCPConnection cooupled with Get-Process to obtain the process details: `Get-Process -Id (Get-NetTCPConnection -LocalPort 80).OwningProcess`
The command returns output similar to the following:<pre>
    Handles  NPM(K)    PM(K)      WS(K)     CPU(s)     Id  SI ProcessName
    -------  ------    -----      -----     ------     --  -- -----------
    6816     0         244        22928     3,335.80    4   0 <b>System</b></pre>
In this case, it is a system process using port 80.


## Official Widget Documentation
The official Microsoft documentation can be found at [https://aka.ms/apimdocs/portal/customwidgets](https://aka.ms/apimdocs/portal/customwidgets)
