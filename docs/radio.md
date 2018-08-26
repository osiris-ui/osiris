# Radio

## Basic Usage
```html
/*vue*/

<template>
  <div>
    <a-radio :value="1" label="1" v-model="modelValue"></a-radio>
    <a-radio :value="2" label="2" v-model="modelValue"></a-radio>
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
    <a-radio v-model="modelValue" :value="1" name="radio" label="1"></a-radio>
    <a-radio v-model="modelValue" :value="2" name="radio" label="2" disabled></a-radio>
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
