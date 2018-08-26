import { storiesOf } from '@storybook/vue';

import OButton from './button.vue';

storiesOf('Button', module)
  // .add('default', () => '<o-row>simple row</o-row>');
  .add('types', () => ({
    components: { OButton },
    template: `
      <div>
        <o-button>Default</o-button>
        <o-button type="primary">Primary</o-button>
        <o-button type="secondary">Secondary</o-button>
        <o-button type="info">Info</o-button>
        <o-button type="success">Success</o-button>
        <o-button type="warning">Warning</o-button>
        <div style="margin-top:10px; margin-left: 0">
          <o-button type="danger">Danger</o-button>
          <o-button type="text">Text</o-button>
        </div>
      </div>
    `,
  }))
  .add('plain', () => ({
    components: { OButton },
    template: `
      <div>
        <o-button plain>Default</o-button>
        <o-button type="primary" plain>Primary</o-button>
        <o-button type="secondary" plain>Secondary</o-button>
        <o-button type="info" plain>Info</o-button>
        <o-button type="success" plain>Success</o-button>
        <o-button type="warning" plain>Warning</o-button>
        <div style="margin-top:10px; margin-left: 0">
          <o-button type="danger" plain>Danger</o-button>
        </div>
      </div>
    `,
  }))
  .add('disabled', () => ({
    components: { OButton },
    template: `
    <div>
      <div>
        <o-button disabled>Default</o-button>
        <o-button type="primary" disabled>Primary</o-button>
        <o-button type="secondary" disabled>Secondary</o-button>
        <o-button type="info" disabled>Info</o-button>
        <o-button type="success" disabled>Success</o-button>
        <o-button type="warning" disabled>Warning</o-button>
        <div style="margin-top:10px; margin-left: 0">
          <o-button type="danger" disabled>Danger</o-button>
          <o-button type="text" disabled>Text</o-button>
        </div>
      </div>
      <div style="margin-top: 10px">
        <o-button plain disabled>Default</o-button>
        <o-button type="primary" plain disabled>Primary</o-button>
        <o-button type="secondary" plain disabled>Secondary</o-button>
        <o-button type="info" plain disabled>Info</o-button>
        <o-button type="success" plain disabled>Success</o-button>
        <o-button type="warning" plain disabled>Warning</o-button>
        <div style="margin-top:10px; margin-left: 0">
          <o-button type="danger" plain disabled>Danger</o-button>
          <o-button type="text" plain disabled>Text</o-button>
        </div>
      </div>
    </div>
    `,
  }))
  .add('sizes', () => ({
    components: { OButton },
    template: `
      <div>
        <div>
          <o-button size="large">Default Large</o-button>
          <o-button>Default Normal</o-button>
          <o-button size="small">Default Small</o-button>
          <o-button size="mini">Default Mini</o-button>
        </div>
        <div style="margin-top: 10px">
          <o-button type="primary" size="large">Primary Large</o-button>
          <o-button type="primary">Primary Normal</o-button>
          <o-button type="primary" size="small">Primary Small</o-button>
          <o-button type="primary" size="mini">Primary Mini</o-button>
        </div>
        <div style="margin-top: 10px">
          <o-button type="secondary" size="large">Secondary Large</o-button>
          <o-button type="secondary">Secondary Normal</o-button>
          <o-button type="secondary" size="small">Secondary Small</o-button>
          <o-button type="secondary" size="mini">Secondary Mini</o-button>
        </div>
        <div style="margin-top: 10px">
          <o-button type="info" size="large">Info Large</o-button>
          <o-button type="info">Info Normal</o-button>
          <o-button type="info" size="small">Info Small</o-button>
          <o-button type="info" size="mini">Info Mini</o-button>
        </div>
        <div style="margin-top: 10px">
          <o-button type="success" size="large">Success Large</o-button>
          <o-button type="success">Success Normal</o-button>
          <o-button type="success" size="small">Success Small</o-button>
          <o-button type="success" size="mini">Success Mini</o-button>
        </div>
        <div style="margin-top: 10px">
          <o-button type="warning" size="large">Warning Large</o-button>
          <o-button type="warning">Warning Normal</o-button>
          <o-button type="warning" size="small">Warning Small</o-button>
          <o-button type="warning" size="mini">Warning Mini</o-button>
        </div>
        <div style="margin-top: 10px">
          <o-button type="danger" size="large">Danger Large</o-button>
          <o-button type="danger">Danger Normal</o-button>
          <o-button type="danger" size="small">Danger Small</o-button>
          <o-button type="danger" size="mini">Danger Mini</o-button>
        </div>
        <div style="margin-top: 10px">
          <o-button type="text" size="large">Text Large</o-button>
          <o-button type="text">Text Normal</o-button>
          <o-button type="text" size="small">Text Small</o-button>
          <o-button type="text" size="mini">Text Mini</o-button>
        </div>
      </div>
    `,
  }))
  .add('round', () => ({
    components: { OButton },
    template: `
      <div>
        <o-button round>Default</o-button>
        <o-button type="primary" round>Primary</o-button>
        <o-button type="secondary" round>Secondary</o-button>
        <o-button type="info" round>Info</o-button>
        <o-button type="success" round>Success</o-button>
        <o-button type="warning" round>Warning</o-button>
        <div style="margin-top:10px; margin-left: 0">
          <o-button type="danger" round>Danger</o-button>
        </div>
      </div>
    `,
  }))
  .add('circle', () => ({
    components: { OButton },
    template: `
      <div>
        <o-button circle>D</o-button>
        <o-button type="primary" circle>P</o-button>
        <o-button type="secondary" circle>S</o-button>
        <o-button type="info" circle>I</o-button>
        <o-button type="success" circle>SC</o-button>
        <o-button type="warning" circle>W</o-button>
        <o-button type="danger" circle>D</o-button>
      </div>
    `,
  }));
