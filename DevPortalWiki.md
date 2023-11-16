# Overview
The Azure Developer Portal is a website builder with drag n drop customization. It is designed to be a consumer facing site with API integration, based on the https://paperbits.io/ project.

The portal is available on the Premium, Standard, Basic, and Developer tiers of the API Management Service, but not the Consumption Tier.

A full overview and more documentation can be found at https://aka.ms/apimdocs/portal

## Editing Menu

<img src="https://user-images.githubusercontent.com/58504073/257296337-ec502e19-2cc6-406d-aac9-3525c9176885.png" width="100" align="right" />
The editing menu is found on the left side of the visual editor, and provides many of the basic features of the editor.

**1. Pages**
  - The pages tab contains a list of links to all the pages in the site and the option to add another page.<br>

**2. Media**
  - The media tab contains all images and other files used on the site.<br>

**3. Layouts**
  - The layouts section allows you to define the outer template of a page, such as the header and footer.<br>

**4. Navigation**
  - The navigation section allows you to setup menus, defining the pages used with the menu widget in the pages.<br>

**5. Settings**
  - The settings section allows you to set the favicon, title, and description of all the pages<br>

**6. Styles**
  - The styles section is a way to adjust the styling for the whole site.<br>

**7. Custom Widgets**
  - Custom widgets are a way to introduce custom functionality to the portal while maintaining the functionality of the visual editor.<br>

**8. Operations**
  - Currently the only operation here is publishing the website. Publishing takes about 5 minutes on average.<br>

### Pages
<img src="https://user-images.githubusercontent.com/58504073/257296344-f482f7f1-c524-4d18-a060-f40376a5bc0c.png" align="right" width="400"/>

The page menu enables you to create new pages and edit existing pages. Use the `+ Add Page button` to create a new page.

Under the Page > Design tab there are multiple customization options:
| Property    | Description                                      |
|-------------|--------------------------------------------------|
| Title       | the title of the page, added to the tab title    |
| Permalink   | customize the url to the page                    |
| Description | a short description for other editors (optional) |
| Keywords    | used for search engine optimization (optional)   |
 
Under the Page > Access tab you can set who has access to the page:
| Access Level                           | Description                                              |
|----------------------------------------|----------------------------------------------------------|
| Everyone                               | public page                                              |
| Selected user groups                   | only specific authenticated users                        |
| Users with access to selected APIs     | only authenticated with access to the specified APIs     |
| Users with access to selected products | only authenticated with access to the specified products |
| No one                                 | only visible in the editor                               |


### Media
<img src="https://user-images.githubusercontent.com/58504073/257296334-32fef92e-6ecb-458a-b69f-6ccc574b2fbd.png" align="right" width="400"/>

The media menu contains a gallery of all images and other files used on the site.
Click on a file in the gallery to open the media file submenu.

**Upload**

To upload files, use the upload button to add files from your local computer, or use the link files button to add a file from a url.

#### Properties
| Property    | Description                                                   |
|-------------|---------------------------------------------------------------|
| Name        | the name of the file (not publicly displayed)                 |
| Permalink   | the link to the file, can be changed after upload             |
| Description | a short description of the file for future editors (optional) |
| Keywords    | used for search engine optimization (optional)                |

You can also crop, delete, or download images in the media menu.


### Layouts
<img src="https://user-images.githubusercontent.com/58504073/257296348-8b5c466e-15e5-4839-a3eb-263f781172af.png" align="right" width="400"/>

The layouts menu contains a list of templates used for pages on the site.
If you click on a template name, it will load the template and open the submenu for editing.

The template defines the layout of the header and footer, and leaves a blank in the center for the page content.
The layout can be reused for any page, as specified in the permalink template property.

There are two layouts defined by default, the Home layout and the Default layout. 
The Home layout contains the header and footer for the homepage of the site, and the Default is the layout used for all other pages.

You can create more layouts if you need additional customization on different pages.

#### Properties
| Property           | Description                                                                       |
|--------------------|-----------------------------------------------------------------------------------|
| Title              | the name for the layout (only shown in the editor)                                |
| Permalink template | the matching pattern used to determine which pages are associated with the layout |
| Description        | a short description of what the layout should be used for                         |

### Navigation
<img src="https://user-images.githubusercontent.com/58504073/257296339-20a8a28f-509a-45f4-8f68-5b23a7cd1bdf.png" align="right" width="400"/>

The navigation section allows you to define multiple navigation menus, that are used in the menu widget in the editor.
This section is somewhat more complicated than the other sections. 
The menus are defined using navigation items, and a navigation item becomes a menu when other navigation items are positioned as child items.
The parent navigation item is not linked, only the child items. You can have multiple layers of child items.

By default, the portal comes with three navigation items, the Main menu, Authenticated user menu, and Anonymous user menu.
Each of these menus have additional navigation items nested under them, which represent pages.

The navigation items do not display by themselves, but are used in conjunction with the menu widget in the drag n drop editor.
Once you add a menu widget to the page, you can edit the menu and choose a root navigation item you configured here.

#### Properties
When you click a navigation item, the navigation item submenu opens, and you can set two properties.
| Property | Description                                                   |
|----------|---------------------------------------------------------------|
| Label    | the title displayed in the menu on the page                   |
| Link     | the page, media file, or external link that the item links to |

Clicking the chain icon in the link input allows you to choose the location to link to.

### Settings
<img src="https://user-images.githubusercontent.com/58504073/257296345-8021054f-9388-41da-b84f-45d60dcb7123.png" align="right" width="300"/>
The settings menu contains a list of site-wide settings, including the favicon, title, and description.

#### Favicon
Choose an existing photo from the media library or upload another one for the site favicon

#### Title
Set the title of the site, used on the tab and in search engine results

#### Description
Used in the search engine results and sharing previews

#### Keywords
Used for search engine optimization (although most search engines no longer rank pages on keywords now)

#### Author
Set the author of the site (default is Microsoft Azure)

### Styles
The styles menu opens a separate page to edit the styling for the site. The styles are set up so that you can edit the styling for each component, and it will apply across the site.
The styles are split into these categories:
* Fonts
* Typography
* Colors
* Gradients
* Shadows
* Icons
* Form Controls
* Buttons
* Cards
* Pictures
* Video Player
* Menus

### Custom Widgets
<img src="https://user-images.githubusercontent.com/58504073/257296346-c5c0899d-edb2-4153-8f86-39d9cd22d57c.png" align="right" width="400"/>
The custom widgets menu displays a list of all custom widgets added to the site.
You can create new widgets with the `+ Create new custom widget` button.

Custom widgets are a way to extend the portal with custom functionality while maintaining the drag n drop functionality of the visual editor.

It is also possible to create some custom functionality with the HTML Code Snippet, but for full extension of the portal, create a custom widget.
The widget is loaded in an iframe in the site, and saved on the site.

Additional details about custom widgets can be found on the Microsoft site at https://aka.ms/apimdocs/portal/customwidgets

## Responsive Design
The portal is designed to work on both desktop and mobile devices. The main site widgets should adapt to work on any screen size, but sometimes you may need to adjust the sizing of one of them, or if you have some custom widgets, you may need additional sizing for them. On the bottom left toolbar you will find a devices button to change the emulated screen size, and this will allow you to adjust widgets for different screen sizes.

## Publishing
When you're ready for the site to become public, you can publish the site so it is accessible outside the editor. Make sure you have all your changes saved, then open the operations menu (the bottom button in the left toolbar) and click publish. You can also publish the site from the Azure Portal backend. Open the portal overview page, then choose Publish in the section Publish the Portal.
Publishing the portal takes about five minutes on average. 
If you open the revisions tab in the portal backend on the overview page, once the green checkmark moves to the most recent revision your changes are live.

## Tips
<img src="https://user-images.githubusercontent.com/58504073/257296347-dfe070ab-d56d-46e3-b3dc-6977e085197d.png" align="right" width="200"/>

* To navigate between pages on the dev portal when in editing mode, you can hold the ctrl key on your keyboard while clicking to where you want to go.
* The home page styles are all unique to that page alone. No changes made to the styling of the home page will affect the rest of the portal.
* The paint palette allows you to change the styling on the element level. This enables you to edit the styling of an element across all pages of the portal.
* Clicking an element will display the element menu, with options to (1) edit the details, (2) select the parent element, or (3) delete the element. 

## Scripting
The developer portal has some scripts available to automate some common tasks, such as migrating the site to another instance or downloading a backup copy of the site.
There is also a REST API available, which the scripts use internally.

### Migrating Content
If you have a developer portal that is set up the way you want it, and you want to transfer all that data to another portal, you can do so with the migration scripts.
This can also be set up as an automated process for CI/CD with the build automatically migrating the files to the production site.

To get started you need to download the scripts, found in the developer portal GitHub repository.
```shell
 > git clone https://github.com/Azure/api-management-developer-portal/
```

Once you have cloned the portal, step into the directory and install the dependencies with npm.
```shell
 > cd api-management-developer-portal
 > npm install
```

Now if you look in the folder you will have numerous different directories, the scripts are located in the `scripts.v3` folder.
```shell
 > cd scripts.v3
```

The script to migrate the content is `migrate.js`, and it has a number of parameters used to identify the source and destination portals.
| Parameter                    | Description                                                                                                                                        |
|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| sourceSubscriptionId         | your subscription ID                                                                                                                               |
| sourceResourceGroupName      | your resource group name                                                                                                                           |
| sourceServiceName            | your service name                                                                                                                                  |
| destSubscriptionId           | your subscription ID                                                                                                                               |
| destResourceGroupName        | your resource group name                                                                                                                           |
| destServiceName              | your service name                                                                                                                                  |
| sourceTenantId               | optional (needed if source and destination is in different subscription) source tenant ID                                                          |
| sourceServicePrincipal       | optional (needed if source and destination is in different subscription) source service principal or user name.                                    |
| sourceServicePrincipalSecret | optional (needed if source and destination is in different subscription) secret or password for service principal or az login for the source apim. |
| destTenantId                 | optional (needed if source and destination is in different subscription) destination tenant ID                                                     |
| destServicePrincipal         | optional (needed if source and destination is in different subscription)destination service principal or user name.                                |
| destServicePrincipalSecret   | optional (needed if source and destination is in different subscription) secret or password for service principal or az login for the destination. |

An example migration call would look like this:
```shell
 > node ./migrate ^
     --sourceSubscriptionId "3d99a180-31a0-49dd-a12f-98a24e58e8d5" ^
     --sourceResourceGroupName "Sites" ^
     --sourceServiceName "apim-service-wikiexamplesite-qa" ^
     --destSubscriptionId "3d99a180-31a0-49dd-a12f-98a24e58e8d5" ^
     --destResourceGroupName "Sites" ^
     --destServiceName "apim-service-wikiexamplesite-prod"
```

These values can be found in the API Managment Service overview, or in the url used to access the Managment Service page.
 https://portal.azure.com/#@**organization.com**/resource/subscriptions/**SUBSCRIPTION_ID**/resourceGroups/**RESOURCE_GROUP_NAME**/providers/Microsoft.ApiManagement/service/**SERVICE_NAME**/overview
 
This information is also listed in the `migrate.js` file on your local clone of the repo or at https://github.com/Azure/api-management-developer-portal/blob/master/scripts.v3/migrate.js

### Download All Content
You can also download all the content from the site, including the pages, media, and styling. The process is similar to migrating the site.
To get started you need to download the scripts, found in the developer portal GitHub repository.
```shell
 > git clone https://github.com/Azure/api-management-developer-portal/
```

Once you have cloned the portal, step into the directory and install the dependencies with npm.
```shell
 > cd api-management-developer-portal
 > npm install
```

Now if you look in the folder you will have numerous different directories, the scripts are located in the `scripts.v3` folder.
```shell
 > cd scripts.v3
```

To download the content, you will use the `capture.js` script.
```shell
 > node ./capture ^
    --subscriptionId "3d99a180-31a0-49dd-a12f-98a24e58e8d5" ^
    --resourceGroupName "Sites" ^
    --serviceName "apim-service-wikiexamplesite-qa"
```

This will download all the content to the `./api-management-developer-portal/dist/snapshot/` folder.
In the snapshot folder, you will find `data.json` and a `media` folder.
The `data.json` file includes all the pages, stored as json objects, all in the same file.
The `media` folder includes a folder with the custom widgets (if any are added) and all the media files uploaded to the site.
Each media file is represented by a unique guid. The file content is in the guid file, and the file-type is listed in guid.info.
To add the endings on the files, you can use this powershell script:
```powershell
 Get-ChildItem -Filter *.info | ForEach-Object {
 	$content = Get-Content $_.FullName
 	$result = If ($content -match '\/(.+)"') { $Matches[1] }
 	If($result -eq "javascript") { $result = "js" }
 	$name = [System.IO.Path]::GetFileNameWithoutExtension($_)
 	Rename-Item $name ($name + "." + $result)
 	Remove-Item $_
 }
```

### Upload All Content
You can also upload a copy of the content to the site, including the pages, media, and styling. This can be used after downloading a copy of the site, perhaps as a backup and now you need to restore it.

To get started you need to download the script, found in your clone of the developer portal repository or at https://github.com/Azure/api-management-developer-portal/blob/master/scripts.v3/generate.js

Now that you have the script, open the folder with the copy of the site to upload. Use the following command to upload the content to the site.
```shell
> node ./generate ^
    --subscriptionId "3d99a180-31a0-49dd-a12f-98a24e58e8d5" ^
    --resourceGroupName "Sites" ^
    --serviceName "apim-service-wikiexamplesite-qa" ^
    --folder "../dist/snapshot"
    --publish
```
The default folder path is `"../dist/snapshot"`.
If the site is stored in a separate folder, specify the location with the `--folder` flag.

If you specify the `--publish` flag it will publish the site after finishing the upload.

### REST API
The developer portal can also be configured through an API Management endpoint. The two main endpoints used for the developer portal are [/content-type](https://learn.microsoft.com/en-us/rest/api/apimanagement/current-ga/content-type) and [/content-item](https://learn.microsoft.com/en-us/rest/api/apimanagement/current-ga/content-item).

In the backend, the developer portal divides all content into content types ands content items. 
Both endpoints have the same structure:

| Operation        | Description                                                         |
|------------------|---------------------------------------------------------------------|
| Create Or Update | Add a new item or update the existing one, as specified by the type |
| Delete           | Remove an item from the portal                                      | 
| Get              | Get an item by the type and identifier                              |
| List By Service  | List items or types specified by the provided content type.         |

The main content types are Page, Document, Layout, Blog Post, Blob, URL, Navigation Item, Block, and Popup.

| Type            | Description                                                  |
|-----------------|--------------------------------------------------------------|
| Page            | Describes the page details, contents stored in documents     |
| Document        | Contains the content of each page and layout                 |
| Layout          | Defines the layout details, contents stored in documents     |
| Blog Post       | Defines the details for a blog post content                  |
| Blob            | Defines the details and contains the link to all media files |
| URL             | Defines an id for an external URL                            |
| Navigation Item | Defines the menu items                                       |
| Block           | Defines a saved layout block                                 |
| Popup           | Defines the details of the popup box                         |

The scripts available on the portal GitHub use these APIs through the [utils.js](https://github.com/Azure/api-management-developer-portal/blob/master/scripts.v3/utils.js) script.
The utils script provides some helpful functionality for writing your own custom scripts as well. The `ImporterExporter` class is included, which contains some useful helper methods.

# Official Documentation
| Component         | Documentation Link                                                                 |
|-------------------|------------------------------------------------------------------------------------|
| Developer Portal  | https://aka.ms/apimdocs/portal                                                     |
| Custom Widgets    | https://aka.ms/apimdocs/portal/customwidgets                                       |
| Portal Automation | https://learn.microsoft.com/en-us/azure/api-management/automate-portal-deployments |
| Portal Github     | https://github.com/Azure/api-management-developer-portal/                          |
| Paperbits Github  | https://github.com/paperbits/paperbits-demo                                        |
| APIM REST API     | https://learn.microsoft.com/en-us/rest/api/apimanagement/                          |
