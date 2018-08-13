# Icon

For icons we choose a free open source solution called [Feather Icons](https://feathericons.com/) through a fork from [AT-UI](https://github.com/AT-UI/feather-font). 

## Basic Usage
```html
/*vue*/

<template>
  <div>
    <i class="a-icon a-icon-activity"></i>
    <i class="a-icon a-icon-menu"></i>
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
    <input v-model="searchInput" placeholder="Type to filter">
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
              <i class="a-icon" :class="icon"></i>
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
                  'a-icon-alert-octagon',
'a-icon-alert-circle',
'a-icon-activity',
'a-icon-alert-triangle',
'a-icon-align-center',
'a-icon-airplay',
'a-icon-align-justify',
'a-icon-align-left',
'a-icon-align-right',
'a-icon-arrow-down-left',
'a-icon-arrow-down-right',
'a-icon-anchor',
'a-icon-aperture',
'a-icon-arrow-left',
'a-icon-arrow-right',
'a-icon-arrow-down',
'a-icon-arrow-up-left',
'a-icon-arrow-up-right',
'a-icon-arrow-up',
'a-icon-award',
'a-icon-bar-chart',
'a-icon-at-sign',
'a-icon-bar-chart-',
'a-icon-battery-charging',
'a-icon-bell-off',
'a-icon-battery',
'a-icon-bluetooth',
'a-icon-bell',
'a-icon-book',
'a-icon-briefcase',
'a-icon-camera-off',
'a-icon-calendar',
'a-icon-bookmark',
'a-icon-box',
'a-icon-camera',
'a-icon-check-circle',
'a-icon-check',
'a-icon-check-square',
'a-icon-cast',
'a-icon-chevron-down',
'a-icon-chevron-left',
'a-icon-chevron-right',
'a-icon-chevron-up',
'a-icon-chevrons-down',
'a-icon-chevrons-right',
'a-icon-chevrons-up',
'a-icon-chevrons-left',
'a-icon-circle',
'a-icon-clipboard',
'a-icon-chrome',
'a-icon-clock',
'a-icon-cloud-lightning',
'a-icon-cloud-drizzle',
'a-icon-cloud-rain',
'a-icon-cloud-off',
'a-icon-codepen',
'a-icon-cloud-snow',
'a-icon-compass',
'a-icon-copy',
'a-icon-corner-down-right',
'a-icon-corner-down-left',
'a-icon-corner-left-down',
'a-icon-corner-left-up',
'a-icon-corner-up-left',
'a-icon-corner-up-right',
'a-icon-corner-right-down',
'a-icon-corner-right-up',
'a-icon-cpu',
'a-icon-credit-card',
'a-icon-crosshair',
'a-icon-disc',
'a-icon-delete',
'a-icon-download-cloud',
'a-icon-download',
'a-icon-droplet',
'a-icon-edit-',
'a-icon-edit',
'a-icon-edit-1',
'a-icon-external-link',
'a-icon-eye',
'a-icon-feather',
'a-icon-facebook',
'a-icon-file-minus',
'a-icon-eye-off',
'a-icon-fast-forward',
'a-icon-file-text',
'a-icon-film',
'a-icon-file',
'a-icon-file-plus',
'a-icon-folder',
'a-icon-filter',
'a-icon-flag',
'a-icon-globe',
'a-icon-grid',
'a-icon-heart',
'a-icon-home',
'a-icon-github',
'a-icon-image',
'a-icon-inbox',
'a-icon-layers',
'a-icon-info',
'a-icon-instagram',
'a-icon-layout',
'a-icon-link-',
'a-icon-life-buoy',
'a-icon-link',
'a-icon-log-in',
'a-icon-list',
'a-icon-lock',
'a-icon-log-out',
'a-icon-loader',
'a-icon-mail',
'a-icon-maximize-',
'a-icon-map',
'a-icon-maximize',
'a-icon-map-pin',
'a-icon-menu',
'a-icon-message-circle',
'a-icon-message-square',
'a-icon-minimize-',
'a-icon-mic-off',
'a-icon-minus-circle',
'a-icon-mic',
'a-icon-minus-square',
'a-icon-minus',
'a-icon-moon',
'a-icon-monitor',
'a-icon-more-vertical',
'a-icon-more-horizontal',
'a-icon-move',
'a-icon-music',
'a-icon-navigation-',
'a-icon-navigation',
'a-icon-octagon',
'a-icon-package',
'a-icon-pause-circle',
'a-icon-pause',
'a-icon-percent',
'a-icon-phone-call',
'a-icon-phone-forwarded',
'a-icon-phone-missed',
'a-icon-phone-off',
'a-icon-phone-incoming',
'a-icon-phone',
'a-icon-phone-outgoing',
'a-icon-pie-chart',
'a-icon-play-circle',
'a-icon-play',
'a-icon-plus-square',
'a-icon-plus-circle',
'a-icon-plus',
'a-icon-pocket',
'a-icon-printer',
'a-icon-power',
'a-icon-radio',
'a-icon-repeat',
'a-icon-refresh-ccw',
'a-icon-rewind',
'a-icon-rotate-ccw',
'a-icon-refresh-cw',
'a-icon-rotate-cw',
'a-icon-save',
'a-icon-search',
'a-icon-server',
'a-icon-scissors',
'a-icon-share-',
'a-icon-share',
'a-icon-shield',
'a-icon-settings',
'a-icon-skip-back',
'a-icon-shuffle',
'a-icon-sidebar',
'a-icon-skip-forward',
'a-icon-slack',
'a-icon-slash',
'a-icon-smartphone',
'a-icon-square',
'a-icon-speaker',
'a-icon-star',
'a-icon-stop-circle',
'a-icon-sun',
'a-icon-sunrise',
'a-icon-tablet',
'a-icon-tag',
'a-icon-sunset',
'a-icon-target',
'a-icon-thermometer',
'a-icon-thumbs-up',
'a-icon-thumbs-down',
'a-icon-toggle-left',
'a-icon-toggle-right',
'a-icon-trash-',
'a-icon-trash',
'a-icon-trending-up',
'a-icon-trending-down',
'a-icon-triangle',
'a-icon-type',
'a-icon-twitter',
'a-icon-upload',
'a-icon-umbrella',
'a-icon-upload-cloud',
'a-icon-unlock',
'a-icon-user-check',
'a-icon-user-minus',
'a-icon-user-plus',
'a-icon-user-x',
'a-icon-user',
'a-icon-users',
'a-icon-video-off',
'a-icon-video',
'a-icon-voicemail',
'a-icon-volume-x',
'a-icon-volume-',
'a-icon-volume-1',
'a-icon-volume',
'a-icon-watch',
'a-icon-wifi',
'a-icon-x-square',
'a-icon-wind',
'a-icon-x',
'a-icon-x-circle',
'a-icon-zap',
'a-icon-zoom-in',
'a-icon-zoom-out',
'a-icon-command',
'a-icon-cloud',
'a-icon-hash',
'a-icon-headphones',
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

