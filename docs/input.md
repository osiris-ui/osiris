## Input

| Attribute | Description | Type | Accepted Value | Default |
|--|--|--|--|--|
| width | width of input | String |  | '300px' |
| prefixIcon | wheather has a prefix icon | String |  |  |
| suffixIcon | wheather has a suffix icon | String |  |  |
| size |  size of input | String | large/normal/small/mini | normal |
| readonly |  whether is a readonly input | Boolean | true/false | false |
| disabled |  if input is disabled | Boolean | true/false | false |
| isSuccess |  whether has a success status | Boolean | true/false | false |
| isError |  whether has a error status | Boolean | true/false | false |
| name | same as native name attr | String |  |  |
| placeholder | same as native placeholder attr | String |  |  |
| type | same as native type attr | String |  | text |

## Basic Usage

```html
/*vue*/

<template>
  <o-input placeholder="Type a text"></o-input>
</template>

<script>
export default {}
</script>
```

## Custom width

```html
/*vue*/

<template>
  <o-input placeholder="Type a text" width="100%"></o-input>
</template>

<script>
export default {}
</script>
```

## With icon

```html
/*vue*/

<template>
  <div>
    <o-input placeholder="Type a text" prefix-icon="o-icon o-icon-search"></o-input>
    <o-input placeholder="Type a text" suffix-icon="o-icon o-icon-calendar"></o-input>
  </div>
</template>

<script>
export default {}
</script>
```

## With status

```html
/*vue*/

<template>
  <div>
    <o-input placeholder="Type here" value="Yay, you did it!" is-success></o-input>
    <o-input placeholder="Type here" value="Opsss, this is an error" is-error></o-input>
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
      <o-input placeholder="Large size" size="large"></o-input>
      <o-input placeholder="Normal size"></o-input>
    </div>
    <div style="margin-top: 10px">
      <o-input placeholder="Small Size" size="small"></o-input>
      <o-input placeholder="Mini Size" size="mini"></o-input>
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
  <o-input placeholder="Type a text" disabled></o-input>
</template>

<script>
export default {}
</script>
```

## Readonly

```html
/*vue*/

<template>
  <o-input placeholder="Type a text" readonly></o-input>
</template>

<script>
export default {}
</script>
```

