import { storiesOf } from '@storybook/vue';

import OAlert from './alert.vue';

storiesOf('Alert', module)
  // .add('default', () => '<o-row>simple row</o-row>');
  .add('types', () => ({
    components: { OAlert },
    template: `
      <div>
        <div style="margin-top: 10px">
          <o-alert type="primary">This is a primary alert</o-alert>
        </div>
        <div style="margin-top: 10px">
          <o-alert type="secondary">This is a secondary alert</o-alert>
        </div>
        <div style="margin-top: 10px">
          <o-alert type="info">This is an info alert</o-alert>
        </div>
        <div style="margin-top: 10px">
          <o-alert type="success">This is a success alert</o-alert>
        </div>
        <div style="margin-top: 10px">
          <o-alert type="warning">This is a warning alert</o-alert>
        </div>
      </div>
    `,
  }))
  .add('sizes', () => ({
    components: { OAlert },
    template: `
      <div>
        <div style="margin-top: 10px">
          <o-alert type="primary" size="large">Primary Large</o-alert>
          <o-alert type="primary">Primary Normal</o-alert>
          <o-alert type="primary" size="small">Primary Small</o-alert>
          <o-alert type="primary" size="mini">Primary Mini</o-alert>
        </div>
        <div style="margin-top: 10px">
          <o-alert type="secondary" size="large">Secondary Large</o-alert>
          <o-alert type="secondary">Secondary Normal</o-alert>
          <o-alert type="secondary" size="small">Secondary Small</o-alert>
          <o-alert type="secondary" size="mini">Secondary Mini</o-alert>
        </div>
        <div style="margin-top: 10px">
          <o-alert type="info" size="large">Info Large</o-alert>
          <o-alert type="info">Info Normal</o-alert>
          <o-alert type="info" size="small">Info Small</o-alert>
          <o-alert type="info" size="mini">Info Mini</o-alert>
        </div>
        <div style="margin-top: 10px">
          <o-alert type="success" size="large">Success Large</o-alert>
          <o-alert type="success">Success Normal</o-alert>
          <o-alert type="success" size="small">Success Small</o-alert>
          <o-alert type="success" size="mini">Success Mini</o-alert>
        </div>
        <div style="margin-top: 10px">
          <o-alert type="warning" size="large">Warning Large</o-alert>
          <o-alert type="warning">Warning Normal</o-alert>
          <o-alert type="warning" size="small">Warning Small</o-alert>
          <o-alert type="warning" size="mini">Warning Mini</o-alert>
        </div>
        <div style="margin-top: 10px">
          <o-alert type="danger" size="large">Danger Large</o-alert>
          <o-alert type="danger">Danger Normal</o-alert>
          <o-alert type="danger" size="small">Danger Small</o-alert>
          <o-alert type="danger" size="mini">Danger Mini</o-alert>
        </div>
      </div>
    `,
  }))
  .add('round', () => ({
    components: { OAlert },
    template: `
      <div>
        <o-alert type="primary" round>Primary</o-alert>
        <o-alert type="secondary" round>Secondary</o-alert>
        <o-alert type="info" round>Info</o-alert>
        <o-alert type="success" round>Success</o-alert>
        <o-alert type="warning" round>Warning</o-alert>
        <div style="margin-top:10px; margin-left: 0">
          <o-alert type="danger" round>Danger</o-alert>
        </div>
      </div>
    `,
  }));
