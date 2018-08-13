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
  <a-input placeholder="Type a text"></a-input>
</template>

<script>
export default {}
</script>
```

## Custom width

```html
/*vue*/

<template>
  <a-input placeholder="Type a text" width="100%"></a-input>
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
    <a-input placeholder="Type a text" prefix-icon="a-icon a-icon-search"></a-input>
    <a-input placeholder="Type a text" suffix-icon="a-icon a-icon-calendar"></a-input>
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
    <a-input placeholder="Type here" value="Yay, you did it!" is-success></a-input>
    <a-input placeholder="Type here" value="Opsss, this is an error" is-error></a-input>
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
      <a-input placeholder="Large size" size="large"></a-input>
      <a-input placeholder="Normal size"></a-input>
    </div>
    <div style="margin-top: 10px">
      <a-input placeholder="Small Size" size="small"></a-input>
      <a-input placeholder="Mini Size" size="mini"></a-input>
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
  <a-input placeholder="Type a text" disabled></a-input>
</template>

<script>
export default {}
</script>
```

## Readonly

```html
/*vue*/

<template>
  <a-input placeholder="Type a text" readonly></a-input>
</template>

<script>
export default {}
</script>
```

