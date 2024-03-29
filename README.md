# DOM-renderer

Simple example of how DOM can be created from pattern

```javascript
import Render from "./Render.js";

    // This data could be sent from the server, or it can be your local configuration
    // The idea is that you can set any data, but the structure must be the same (pattern)
    // and your page will be generated

[{
    type: "div",
    attrebutes: [
      { name: "class", value: "wrapper" }
    ],
    children: [{
        type: "form",
        attrebutes: [
            { name: "id", value: "form" },
            { name: "method", value: "POST" }
        ],
        children: [{
                type: "h3",
                text: "Let's keep in touch!",
                attrebutes: [ ... ],
               children: [ ... ]
           ...
        }]
    }]
}]

const htmlTree = Render.render(template);
document.body.append(...htmlTree);

```

The example above will generate an html tree, like this (ckeck [online](https://husakyurii.github.io/DOM-renderer/dist/) )

```html

<div class="wrapper">
  <form id="form" method="POST">
    <h3>Let's keep in touch!</h3>
    ....
  </form>
</div>"

```
