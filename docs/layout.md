# Layout

We use a flex based grid system with 24 columns with a 20px gutter by default. 

### Row Attributes

| Attribute | Description | Type | Accepted Value | Default |
|--|--|--|--|--|
| gutter      | grid spacing | number | - | 20 |
| direction | direction of layout | string | row/row-reverse/column/column-reverse | row | 
| wrap | how content will wrap | string | wrap/nowrap/wrap-reverse | wrap |
| justify | horizontal alignment | string | flex-start/flex-end/center/space-around/space-between/space-evenly | flex-start |
| align | vertical alignment | string | flex-start/flex-end/center/baseline/stretch | flex-start |
| content | content alignment | string | flex-start/flex-end/center/space-between/space-around/stretch | flex-start |   


### Col Attributes

| Attribute | Description | Type | Accepted Value | Default |
|--|--|--|--|--|
| span | column width | number | 0-24 | 24 |
| offset | column spacing | number | 0-24 | 0 | 
| xs | column width for `<768px` | number/object (e.g { span: 4, offset: 4 }) | 0-24/object | - | 
| sm | column width for `≥768px` | number/object (e.g { span: 4, offset: 4 }) | 0-24/object | - | 
| md | column width for `≥992px` | number/object (e.g { span: 4, offset: 4 }) | 0-24/object | - | 
| lg | column width for `≥1200px` | number/object (e.g { span: 4, offset: 4 }) | 0-24/object | - | 
| xl | column width for `≥1920px` | number/object (e.g { span: 4, offset: 4 }) | 0-24/object | - | 

## Basic Usage

```html
/*vue*/
<template>
  <o-row>
    <o-col :span="24">
      <div class="box-1"></div>
    </o-col>
    <o-col :span="12">
      <div class="box-2"></div>
    </o-col>
    <o-col :span="12">
      <div class="box-1"></div>
    </o-col>
    <o-col :span="8">
      <div class="box-2"></div>
    </o-col>
    <o-col :span="8">
      <div class="box-1"></div>
    </o-col>
    <o-col :span="8">
      <div class="box-2"></div>
    </o-col>
    <o-col :span="6">
      <div class="box-1"></div>
    </o-col>
    <o-col :span="6">
      <div class="box-2"></div>
    </o-col>
    <o-col :span="6">
      <div class="box-1"></div>
    </o-col>
    <o-col :span="6">
      <div class="box-2"></div>
    </o-col>
  </o-row>
</template>

<script>
    export default {}
</script>
```
