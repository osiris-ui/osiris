# Button

| Attribute | Description | Type | Accepted Value | Default |
|--|--|--|--|--|
| size |  size of button | String | large/normal/small/mini | normal |
| type | button visual type | String | default/primary/secondary/tertiary<br>/success/warning/danger/text | default |
| plain |  whether a plain button | Boolean | true/false | false |
| round |  whether a round button | Boolean | true/false | false |
| circle |  whether a circle button | Boolean | true/false | false |
| disabled |  if button is disabled | Boolean | true/false | false |
| nativeType |  same as native button type | String | button/submit | button |

## Types
```html
/*vue*/

<template>
  <div>
    <o-button>Default</o-button>
    <o-button type="primary">Primary</o-button>
    <o-button type="secondary">Secondary</o-button>
    <o-button type="tertiary">Tertiary</o-button>
    <div style="margin-top: 10px">
      <o-button type="success">Success</o-button>
      <o-button type="warning">Warning</o-button>
      <o-button type="danger">Danger</o-button>
      <o-button type="text">Text</o-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>
```

## Plain
```html
/*vue*/

<template>
  <div>
    <o-button plain>Default</o-button>
    <o-button type="primary" plain>Primary</o-button>
    <o-button type="secondary" plain>Secondary</o-button>
    <o-button type="tertiary" plain>Tertiary</o-button>
    <div style="margin-top:10px; margin-left: 0">
      <o-button type="success" plain>Success</o-button>
      <o-button type="warning" plain>Warning</o-button>
      <o-button type="danger" plain>Danger</o-button>
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
    <div>
      <o-button disabled>Default</o-button>
      <o-button type="primary" disabled>Primary</o-button>
      <o-button type="secondary" disabled>Secondary</o-button>
      <o-button type="tertiary" disabled>Tertiary</o-button>
      <div style="margin-top:10px; margin-left: 0">
        <o-button type="success" disabled>Success</o-button>
        <o-button type="warning" disabled>Warning</o-button>
        <o-button type="danger" disabled>Danger</o-button>
        <o-button type="text" disabled>Text</o-button>
      </div>
    </div>
    <div style="margin-top: 10px">
      <o-button plain disabled>Default</o-button>
      <o-button type="primary" plain disabled>Primary</o-button>
      <o-button type="secondary" plain disabled>Secondary</o-button>
      <o-button type="tertiary" plain disabled>Tertiary</o-button>
      <div style="margin-top:10px; margin-left: 0">
        <o-button type="success" plain disabled>Success</o-button>
        <o-button type="warning" plain disabled>Warning</o-button>
        <o-button type="danger" plain disabled>Danger</o-button>
        <o-button type="text" plain disabled>Text</o-button>
      </div>
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
      <o-button size="large">Large</o-button>
      <o-button>Normal</o-button>
      <o-button size="small">Small</o-button>
      <o-button size="mini">Mini</o-button>
    </div>
    <div style="margin-top: 10px">
      <o-button type="primary" size="large">Large</o-button>
      <o-button type="primary">Normal</o-button>
      <o-button type="primary" size="small">Small</o-button>
      <o-button type="primary" size="mini">Mini</o-button>
    </div>
    <div style="margin-top: 10px">
      <o-button type="secondary" size="large">Large</o-button>
      <o-button type="secondary">Normal</o-button>
      <o-button type="secondary" size="small">Small</o-button>
      <o-button type="secondary" size="mini">Mini</o-button>
    </div>
    <div style="margin-top: 10px">
      <o-button type="tertiary" size="large">Large</o-button>
      <o-button type="tertiary">Normal</o-button>
      <o-button type="tertiary" size="small">Small</o-button>
      <o-button type="tertiary" size="mini">Mini</o-button>
    </div>
    <div style="margin-top: 10px">
      <o-button type="success" size="large">Large</o-button>
      <o-button type="success">Normal</o-button>
      <o-button type="success" size="small">Small</o-button>
      <o-button type="success" size="mini">Mini</o-button>
    </div>
    <div style="margin-top: 10px">
      <o-button type="warning" size="large">Large</o-button>
      <o-button type="warning">Normal</o-button>
      <o-button type="warning" size="small">Small</o-button>
      <o-button type="warning" size="mini">Mini</o-button>
    </div>
    <div style="margin-top: 10px">
      <o-button type="danger" size="large">Large</o-button>
      <o-button type="danger">Normal</o-button>
      <o-button type="danger" size="small">Small</o-button>
      <o-button type="danger" size="mini">Mini</o-button>
    </div>
    <div style="margin-top: 10px">
      <o-button type="text" size="large">Large</o-button>
      <o-button type="text">Normal</o-button>
      <o-button type="text" size="small">Small</o-button>
      <o-button type="text" size="mini">Mini</o-button>
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
    <o-button round>Default</o-button>
    <o-button type="primary" round>Primary</o-button>
    <o-button type="secondary" round>Secondary</o-button>
    <o-button type="tertiary" round>Tertiary</o-button>
    <div style="margin-top:10px; margin-left: 0">
      <o-button type="success" round>Success</o-button>
      <o-button type="warning" round>Warning</o-button>
      <o-button type="danger" round>Danger</o-button>
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
      <o-button circle>D</o-button>
      <o-button type="primary" circle>P</o-button>
      <o-button type="secondary" circle>S</o-button>
      <o-button type="tertiary" circle>T</o-button>
      <o-button type="success" circle>SC</o-button>
      <o-button type="warning" circle>W</o-button>
      <o-button type="danger" circle>D</o-button>
    </div>
</template>

<script>
export default {}
</script>
```
