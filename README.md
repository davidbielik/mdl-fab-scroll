# mdl-fab-scroll (<a href="http://codepen.io/davidbielik/pen/dpBdRb/">DEMO</a>)
Angular module to animate hide/show for MDL floating-action-buttons

* Requires Angular and material-design-lite
* Hides the floating action button (fab) when the user scrolls down
* Unhides the fab when the user scrolls up


## Getting Started

Install this module
```
npm install mdl-fab-scroll --save
```

Add this module to your HTML page
```html
<script src="node_modules/mdl-fab-scroll/mdl-fab-scroll.js"></script>
```

Add the module into your angular app

```javascript
angular.module('app', ['mdl-fab-scroll']);
```

This will automagically animate the fab buttons when the `mdl-layout__content` is scrolled.
