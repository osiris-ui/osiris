# Checkbox

## Basic Usage
```html
/*vue*/

<template>
  <div>
    <o-checkbox :value="1" label="1" v-model="modelValue"></o-checkbox>
    <o-checkbox :value="2" label="2" v-model="modelValue"></o-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelValue: [],
    };
  },
}
</script>
```

## Disabled

```html
/*vue*/

<template>
  <div>
    <o-checkbox v-model="modelValue" :value="1" label="1"></o-checkbox>
    <o-checkbox v-model="modelValue" :value="2" label="2" disabled></o-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelValue: [1],
    };
  },
}
</script>
```
