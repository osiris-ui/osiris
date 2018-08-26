# Radio

## Basic Usage
```html
/*vue*/

<template>
  <div>
    <o-radio :value="1" label="1" v-model="modelValue"></o-radio>
    <o-radio :value="2" label="2" v-model="modelValue"></o-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelValue: 1,
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
    <o-radio v-model="modelValue" :value="1" name="radio" label="1"></o-radio>
    <o-radio v-model="modelValue" :value="2" name="radio" label="2" disabled></o-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelValue: 1,
    };
  },
}
</script>
```
