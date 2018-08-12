import { storiesOf } from '@storybook/vue';

import AButton from './button.vue';

storiesOf('Button', module)
  // .add('default', () => '<a-row>simple row</a-row>');
  .add('types', () => ({
    components: { AButton },
    template: `
      <div>
        <a-button>Default</a-button>
        <a-button type="primary">Primary</a-button>
        <a-button type="secondary">Secondary</a-button>
        <a-button type="tertiary">Tertiary</a-button>
        <a-button type="success">Success</a-button>
        <a-button type="warning">Warning</a-button>
        <div style="margin-top:10px; margin-left: 0">
          <a-button type="danger">Danger</a-button>
          <a-button type="text">Text</a-button>
        </div>
      </div>
    `,
  }))
  .add('disabled', () => ({
    components: { AButton },
    template: `
      <div>
        <a-button disabled>Default</a-button>
        <a-button type="primary" disabled>Primary</a-button>
        <a-button type="secondary" disabled>Secondary</a-button>
        <a-button type="tertiary" disabled>Tertiary</a-button>
        <a-button type="success" disabled>Success</a-button>
        <a-button type="warning" disabled>Warning</a-button>
        <div style="margin-top:10px; margin-left: 0">
          <a-button type="danger" disabled>Danger</a-button>
          <a-button type="text" disabled>Text</a-button>
        </div>
      </div
    `,
  }))
  .add('sizes', () => ({
    components: { AButton },
    template: `
      <div>
        <div>
          <a-button size="large">Default Large</a-button>
          <a-button>Default Normal</a-button>
          <a-button size="small">Default Small</a-button>
          <a-button size="mini">Default Mini</a-button>
        </div>
        <div style="margin-top: 10px">
          <a-button type="primary" size="large">Primary Large</a-button>
          <a-button type="primary">Primary Normal</a-button>
          <a-button type="primary" size="small">Primary Small</a-button>
          <a-button type="primary" size="mini">Primary Mini</a-button>
        </div>
        <div style="margin-top: 10px">
          <a-button type="secondary" size="large">Secondary Large</a-button>
          <a-button type="secondary">Secondary Normal</a-button>
          <a-button type="secondary" size="small">Secondary Small</a-button>
          <a-button type="secondary" size="mini">Secondary Mini</a-button>
        </div>
        <div style="margin-top: 10px">
          <a-button type="tertiary" size="large">Tertiary Large</a-button>
          <a-button type="tertiary">Tertiary Normal</a-button>
          <a-button type="tertiary" size="small">Tertiary Small</a-button>
          <a-button type="tertiary" size="mini">Tertiary Mini</a-button>
        </div>
        <div style="margin-top: 10px">
          <a-button type="success" size="large">Success Large</a-button>
          <a-button type="success">Success Normal</a-button>
          <a-button type="success" size="small">Success Small</a-button>
          <a-button type="success" size="mini">Success Mini</a-button>
        </div>
        <div style="margin-top: 10px">
          <a-button type="warning" size="large">Warning Large</a-button>
          <a-button type="warning">Warning Normal</a-button>
          <a-button type="warning" size="small">Warning Small</a-button>
          <a-button type="warning" size="mini">Warning Mini</a-button>
        </div>
        <div style="margin-top: 10px">
          <a-button type="danger" size="large">Danger Large</a-button>
          <a-button type="danger">Danger Normal</a-button>
          <a-button type="danger" size="small">Danger Small</a-button>
          <a-button type="danger" size="mini">Danger Mini</a-button>
        </div>
        <div style="margin-top: 10px">
          <a-button type="text" size="large">Text Large</a-button>
          <a-button type="text">Text Normal</a-button>
          <a-button type="text" size="small">Text Small</a-button>
          <a-button type="text" size="mini">Text Mini</a-button>
        </div>
      </div>
    `,
  }))
  .add('round', () => ({
    components: { AButton },
    template: `
      <div>
        <a-button round>Default</a-button>
        <a-button type="primary" round>Primary</a-button>
        <a-button type="secondary" round>Secondary</a-button>
        <a-button type="tertiary" round>Tertiary</a-button>
        <a-button type="success" round>Success</a-button>
        <a-button type="warning" round>Warning</a-button>
        <div style="margin-top:10px; margin-left: 0">
          <a-button type="danger" round>Danger</a-button>
        </div>
      </div>
    `,
  }))
  .add('circle', () => ({
    components: { AButton },
    template: `
      <div>
        <a-button circle>D</a-button>
        <a-button type="primary" circle>P</a-button>
        <a-button type="secondary" circle>S</a-button>
        <a-button type="tertiary" circle>T</a-button>
        <a-button type="success" circle>SC</a-button>
        <a-button type="warning" circle>W</a-button>
        <a-button type="danger" circle>D</a-button>
      </div>
    `,
  }));
