# Radio

## Basic Usage
```html
/*vue*/

<template>
  <div>
    <a-radio v-model="modelValue" :value="1" name="radio" label="1" />
    <a-radio v-model="modelValue" :value="2" name="radio" label="2" />
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
    <a-radio v-model="modelValue" :value="1" :disabled="true" name="radio" label="Disabled" />
    <a-radio v-model="modelValue" :value="2" name="radio" label="2" />
  </div>
</template>

<script>
export default {}
</script>
```
