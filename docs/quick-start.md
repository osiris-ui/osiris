# Quick Start

To get started with Osiris UI is pretty simple, the only dependency is `vue`, we always recommend use in the newest version possible.

## Installation

There are many ways on how to use Osiris UI, follow those who better fits your need's.

### CDN

```html
  <!-- Before your </head> -->
  <link src="//unpkg.com/@osiris-ui/style" rel="stylesheet">
  
  <!-- After your Vue.js importation -->
  <script src="//unpkg.com/@osiris-ui/osiris"></script>
```


### ES Module

There's a few ways on how to use in a node.js project

#### Using as plugin

``` js
import Vue from 'vue';
import Osiris from '@osiris-ui/osiris';

Vue.use(Osiris);
```

#### Using as component

``` js
import { button as OButton } from '@osiris-ui/osiris';
```

#### Importing globally only few components
```js
import Vue from 'vue';
import { button, input } from '@osiris-ui/osiris';

Vue.component(button.name, button);
Vue.component(input.name, input);
```

*Don't forget to include the Osiris css theme*


## Custom Theme

Osiris theme use sass as pre-processor. To customize themes and colors, you gonna need follow this steps:

  - Install the Osiris Theme running: `npm install --save @osiris-ui/style`
  - Install `node-sass` and `sass-loader`: `npm install --save node-sass sass-loader`
  - Create two files: `app.scss` and `variables.scss` (You can set any name and put these files in any folder that you find better).
  - In `variables.scss`, copy all the content from `@osiris-ui/style/src/variables.scss`, this is the main file you need to customize with the colors and others visual things.
  - In `app.scss`, copy all the content from `@osiris-ui/style/src/index.scss`, and replace the path to the respective destination in your `node_modules`, like:

  ```scss
    @import '../node_modules/@osiris-ui/style/src/reset';
    @import '../node_modules/@osiris-ui/style/src/icons';
    @import '../node_modules/@osiris-ui/style/src/row';
    @import '../node_modules/@osiris-ui/style/src/col';
    @import '../node_modules/@osiris-ui/style/src/button';
    @import '../node_modules/@osiris-ui/style/src/input';
    @import '../node_modules/@osiris-ui/style/src/radio';
    @import '../node_modules/@osiris-ui/style/src/form';
    /* ETC... */
  ```
  - Finally, you can import the `app.scss` in your application
  - If you use a CDN project, you need to compile the scss files to a css file, create a simple project that has node-sass and sass-loader as dependencies and finally create a script that run node-sass, like this: `node-sass --include-path $PATH $PATH/app.scss dist/osiris-style.css --output-style compressed`

In the future we plan to create a more easily tool for customizing all variables, colors and other stuffs of Osiris UI.
