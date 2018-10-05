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
          <o-alert type="secondary" icon="arrow-left">This is a secondary alert</o-alert>
        </div>
        <div style="margin-top: 10px">
          <o-alert type="info" icon="bar-chart">This is an info alert</o-alert>
        </div>
        <div style="margin-top: 10px">
          <o-alert type="success" icon="bookmark">This is a success alert</o-alert>
        </div>
        <div style="margin-top: 10px">
          <o-alert type="warning" icon="circle">This is a warning alert</o-alert>
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
          <o-alert type="secondary" size="large" icon="codepen">Secondary Large</o-alert>
          <o-alert type="secondary" icon="codepen">Secondary Normal</o-alert>
          <o-alert type="secondary" size="small" icon="codepen">Secondary Small</o-alert>
          <o-alert type="secondary" size="mini" icon="codepen">Secondary Mini</o-alert>
        </div>
        <div style="margin-top: 10px">
          <o-alert type="info" size="large" icon="edit">Info Large</o-alert>
          <o-alert type="info" icon="edit">Info Normal</o-alert>
          <o-alert type="info" size="small" icon="edit">Info Small</o-alert>
          <o-alert type="info" size="mini" icon="edit">Info Mini</o-alert>
        </div>
        <div style="margin-top: 10px">
          <o-alert type="success" size="large" icon="heart">Success Large</o-alert>
          <o-alert type="success" icon="heart">Success Normal</o-alert>
          <o-alert type="success" size="small" icon="heart">Success Small</o-alert>
          <o-alert type="success" size="mini" icon="heart">Success Mini</o-alert>
        </div>
        <div style="margin-top: 10px">
          <o-alert type="warning" size="large" icon="map">Warning Large</o-alert>
          <o-alert type="warning" icon="map">Warning Normal</o-alert>
          <o-alert type="warning" size="small" icon="map">Warning Small</o-alert>
          <o-alert type="warning" size="mini" icon="map">Warning Mini</o-alert>
        </div>
        <div style="margin-top: 10px">
          <o-alert type="danger" size="large" icon="move">Danger Large</o-alert>
          <o-alert type="danger" icon="move">Danger Normal</o-alert>
          <o-alert type="danger" size="small" icon="move">Danger Small</o-alert>
          <o-alert type="danger" size="mini" icon="move">Danger Mini</o-alert>
        </div>
      </div>
    `,
  }))
  .add('round', () => ({
    components: { OAlert },
    template: `
      <div>
        <o-alert type="primary" round>Primary</o-alert>
        <o-alert type="secondary" round icon="play">Secondary</o-alert>
        <o-alert type="info" round icon="radio">Info</o-alert>
        <o-alert type="success" round icon="sun">Success</o-alert>
        <o-alert type="warning" round icon="trash">Warning</o-alert>
        <div style="margin-top:10px; margin-left: 0">
          <o-alert type="danger" round icon="unlock">Danger</o-alert>
        </div>
      </div>
    `,
  }));
