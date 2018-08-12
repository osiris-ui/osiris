# Button

Base button usage

## Types
```html
/*vue*/

<template>
  <div>
    <a-button>Default</a-button>
    <a-button type="primary">Primary</a-button>
    <a-button type="secondary">Secondary</a-button>
    <a-button type="tertiary">Tertiary</a-button>
    <div style="margin-top: 10px">
      <a-button type="success">Success</a-button>
      <a-button type="warning">Warning</a-button>
      <a-button type="danger">Danger</a-button>
      <a-button type="text">Text</a-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>
```
## Disabled
```html
/*vue*/

<template>
  <div>
    <a-button disabled>Default</a-button>
    <a-button type="primary" disabled>Primary</a-button>
    <a-button type="secondary" disabled>Secondary</a-button>
    <a-button type="tertiary" disabled>Tertiary</a-button>
    <div style="margin-top:10px; margin-left: 0">
      <a-button type="success" disabled>Success</a-button>
      <a-button type="warning" disabled>Warning</a-button>
      <a-button type="danger" disabled>Danger</a-button>
      <a-button type="text" disabled>Text</a-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>
```

## Sizes
```html
/*vue*/

<template>
  <div>
    <div>
      <a-button size="large">Large</a-button>
      <a-button>Normal</a-button>
      <a-button size="small">Small</a-button>
      <a-button size="mini">Mini</a-button>
    </div>
    <div style="margin-top: 10px">
      <a-button type="primary" size="large">Large</a-button>
      <a-button type="primary">Normal</a-button>
      <a-button type="primary" size="small">Small</a-button>
      <a-button type="primary" size="mini">Mini</a-button>
    </div>
    <div style="margin-top: 10px">
      <a-button type="secondary" size="large">Large</a-button>
      <a-button type="secondary">Normal</a-button>
      <a-button type="secondary" size="small">Small</a-button>
      <a-button type="secondary" size="mini">Mini</a-button>
    </div>
    <div style="margin-top: 10px">
      <a-button type="tertiary" size="large">Large</a-button>
      <a-button type="tertiary">Normal</a-button>
      <a-button type="tertiary" size="small">Small</a-button>
      <a-button type="tertiary" size="mini">Mini</a-button>
    </div>
    <div style="margin-top: 10px">
      <a-button type="success" size="large">Large</a-button>
      <a-button type="success">Normal</a-button>
      <a-button type="success" size="small">Small</a-button>
      <a-button type="success" size="mini">Mini</a-button>
    </div>
    <div style="margin-top: 10px">
      <a-button type="warning" size="large">Large</a-button>
      <a-button type="warning">Normal</a-button>
      <a-button type="warning" size="small">Small</a-button>
      <a-button type="warning" size="mini">Mini</a-button>
    </div>
    <div style="margin-top: 10px">
      <a-button type="danger" size="large">Large</a-button>
      <a-button type="danger">Normal</a-button>
      <a-button type="danger" size="small">Small</a-button>
      <a-button type="danger" size="mini">Mini</a-button>
    </div>
    <div style="margin-top: 10px">
      <a-button type="text" size="large">Large</a-button>
      <a-button type="text">Normal</a-button>
      <a-button type="text" size="small">Small</a-button>
      <a-button type="text" size="mini">Mini</a-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>
```
## Round
```html
/*vue*/

<template>
  <div>
    <a-button round>Default</a-button>
    <a-button type="primary" round>Primary</a-button>
    <a-button type="secondary" round>Secondary</a-button>
    <a-button type="tertiary" round>Tertiary</a-button>
    <div style="margin-top:10px; margin-left: 0">
      <a-button type="success" round>Success</a-button>
      <a-button type="warning" round>Warning</a-button>
      <a-button type="danger" round>Danger</a-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>
```

## Circle

```html
/*vue*/

<template>
    <div>
      <a-button circle>D</a-button>
      <a-button type="primary" circle>P</a-button>
      <a-button type="secondary" circle>S</a-button>
      <a-button type="tertiary" circle>T</a-button>
      <a-button type="success" circle>SC</a-button>
      <a-button type="warning" circle>W</a-button>
      <a-button type="danger" circle>D</a-button>
    </div>
</template>

<script>
export default {}
</script>
```
