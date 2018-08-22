# Radio

## Basic Usage
```html
/*vue*/

<template>
  <div>
    <a-radio :value="1" label="1" />
    <a-radio :value="2" label="2" />
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
    <a-radio :value="1" :disabled="true" label="Disabled" />
    <a-radio :value="2" label="2" />
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
