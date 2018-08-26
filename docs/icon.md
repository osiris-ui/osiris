# Icon

For icons we choose a free open source solution called [Feather Icons](https://feathericons.com/) through a fork from [AT-UI](https://github.com/AT-UI/feather-font). 

## Basic Usage
```html
/*vue*/

<template>
  <div>
    <i class="o-icon o-icon-activity"></i>
    <i class="o-icon o-icon-menu"></i>
  </div>
</template>

<script>
export default {}
</script>
```

## Full list

```html
/*vue*/

<template>
  <div>
    <o-input v-model="searchInput" placeholder="Type to filter" width="100%" suffix-icon="o-icon o-icon-search"></o-input>
    <div>
      <div style="margin-top: 20px;   display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  text-align: center">
        <div class="icon-demobox" v-for="icon in filtered">
          <div class="wrapper">
            <div class="box">
              <i class="o-icon" :class="icon"></i>
            </div>
            <p class="small">{{icon}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                searchInput: '',
                style: {
                    color: 'blue'
                },
                icons: [
                  'o-icon-alert-octagon',
'o-icon-alert-circle',
'o-icon-activity',
'o-icon-alert-triangle',
'o-icon-align-center',
'o-icon-airplay',
'o-icon-align-justify',
'o-icon-align-left',
'o-icon-align-right',
'o-icon-arrow-down-left',
'o-icon-arrow-down-right',
'o-icon-anchor',
'o-icon-aperture',
'o-icon-arrow-left',
'o-icon-arrow-right',
'o-icon-arrow-down',
'o-icon-arrow-up-left',
'o-icon-arrow-up-right',
'o-icon-arrow-up',
'o-icon-award',
'o-icon-bar-chart',
'o-icon-at-sign',
'o-icon-bar-chart-',
'o-icon-battery-charging',
'o-icon-bell-off',
'o-icon-battery',
'o-icon-bluetooth',
'o-icon-bell',
'o-icon-book',
'o-icon-briefcase',
'o-icon-camera-off',
'o-icon-calendar',
'o-icon-bookmark',
'o-icon-box',
'o-icon-camera',
'o-icon-check-circle',
'o-icon-check',
'o-icon-check-square',
'o-icon-cast',
'o-icon-chevron-down',
'o-icon-chevron-left',
'o-icon-chevron-right',
'o-icon-chevron-up',
'o-icon-chevrons-down',
'o-icon-chevrons-right',
'o-icon-chevrons-up',
'o-icon-chevrons-left',
'o-icon-circle',
'o-icon-clipboard',
'o-icon-chrome',
'o-icon-clock',
'o-icon-cloud-lightning',
'o-icon-cloud-drizzle',
'o-icon-cloud-rain',
'o-icon-cloud-off',
'o-icon-codepen',
'o-icon-cloud-snow',
'o-icon-compass',
'o-icon-copy',
'o-icon-corner-down-right',
'o-icon-corner-down-left',
'o-icon-corner-left-down',
'o-icon-corner-left-up',
'o-icon-corner-up-left',
'o-icon-corner-up-right',
'o-icon-corner-right-down',
'o-icon-corner-right-up',
'o-icon-cpu',
'o-icon-credit-card',
'o-icon-crosshair',
'o-icon-disc',
'o-icon-delete',
'o-icon-download-cloud',
'o-icon-download',
'o-icon-droplet',
'o-icon-edit-',
'o-icon-edit',
'o-icon-edit-1',
'o-icon-external-link',
'o-icon-eye',
'o-icon-feather',
'o-icon-facebook',
'o-icon-file-minus',
'o-icon-eye-off',
'o-icon-fast-forward',
'o-icon-file-text',
'o-icon-film',
'o-icon-file',
'o-icon-file-plus',
'o-icon-folder',
'o-icon-filter',
'o-icon-flag',
'o-icon-globe',
'o-icon-grid',
'o-icon-heart',
'o-icon-home',
'o-icon-github',
'o-icon-image',
'o-icon-inbox',
'o-icon-layers',
'o-icon-info',
'o-icon-instagram',
'o-icon-layout',
'o-icon-link-',
'o-icon-life-buoy',
'o-icon-link',
'o-icon-log-in',
'o-icon-list',
'o-icon-lock',
'o-icon-log-out',
'o-icon-loader',
'o-icon-mail',
'o-icon-maximize-',
'o-icon-map',
'o-icon-maximize',
'o-icon-map-pin',
'o-icon-menu',
'o-icon-message-circle',
'o-icon-message-square',
'o-icon-minimize-',
'o-icon-mic-off',
'o-icon-minus-circle',
'o-icon-mic',
'o-icon-minus-square',
'o-icon-minus',
'o-icon-moon',
'o-icon-monitor',
'o-icon-more-vertical',
'o-icon-more-horizontal',
'o-icon-move',
'o-icon-music',
'o-icon-navigation-',
'o-icon-navigation',
'o-icon-octagon',
'o-icon-package',
'o-icon-pause-circle',
'o-icon-pause',
'o-icon-percent',
'o-icon-phone-call',
'o-icon-phone-forwarded',
'o-icon-phone-missed',
'o-icon-phone-off',
'o-icon-phone-incoming',
'o-icon-phone',
'o-icon-phone-outgoing',
'o-icon-pie-chart',
'o-icon-play-circle',
'o-icon-play',
'o-icon-plus-square',
'o-icon-plus-circle',
'o-icon-plus',
'o-icon-pocket',
'o-icon-printer',
'o-icon-power',
'o-icon-radio',
'o-icon-repeat',
'o-icon-refresh-ccw',
'o-icon-rewind',
'o-icon-rotate-ccw',
'o-icon-refresh-cw',
'o-icon-rotate-cw',
'o-icon-save',
'o-icon-search',
'o-icon-server',
'o-icon-scissors',
'o-icon-share-',
'o-icon-share',
'o-icon-shield',
'o-icon-settings',
'o-icon-skip-back',
'o-icon-shuffle',
'o-icon-sidebar',
'o-icon-skip-forward',
'o-icon-slack',
'o-icon-slash',
'o-icon-smartphone',
'o-icon-square',
'o-icon-speaker',
'o-icon-star',
'o-icon-stop-circle',
'o-icon-sun',
'o-icon-sunrise',
'o-icon-tablet',
'o-icon-tag',
'o-icon-sunset',
'o-icon-target',
'o-icon-thermometer',
'o-icon-thumbs-up',
'o-icon-thumbs-down',
'o-icon-toggle-left',
'o-icon-toggle-right',
'o-icon-trash-',
'o-icon-trash',
'o-icon-trending-up',
'o-icon-trending-down',
'o-icon-triangle',
'o-icon-type',
'o-icon-twitter',
'o-icon-upload',
'o-icon-umbrella',
'o-icon-upload-cloud',
'o-icon-unlock',
'o-icon-user-check',
'o-icon-user-minus',
'o-icon-user-plus',
'o-icon-user-x',
'o-icon-user',
'o-icon-users',
'o-icon-video-off',
'o-icon-video',
'o-icon-voicemail',
'o-icon-volume-x',
'o-icon-volume-',
'o-icon-volume-1',
'o-icon-volume',
'o-icon-watch',
'o-icon-wifi',
'o-icon-x-square',
'o-icon-wind',
'o-icon-x',
'o-icon-x-circle',
'o-icon-zap',
'o-icon-zoom-in',
'o-icon-zoom-out',
'o-icon-command',
'o-icon-cloud',
'o-icon-hash',
'o-icon-headphones',
                ],

            }
        },

        methods: {
            onClick() {
                alert('author: ' + this.searchInput)
                this.style.color = 'red'
            }
        },

        computed: {
          filtered() {
            const searchInput = this.searchInput;
            return this.icons.filter(function(icon) {
              return icon.indexOf(searchInput) !== -1
            });
          },
        },
    }
</script>
```

