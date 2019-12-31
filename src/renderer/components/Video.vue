<template>
  <video
    :id="videoId"
    class="video-js"
  >
    <source
      :src="src"
      :type="srcType"
    >
  </video>
</template>

<script>
export default {
  name: 'Video',
  props: {
    src: {
      type: String,
      default: '',
    },
    srcType: {
      type: String,
      default: 'video/mp4',
    },
    videoId: {
      type: String,
      default: '',
    },
  },
  mounted() {
    this.initVideo();
  },
  methods: {
    initVideo() {
      // 初始化视频方法
      // eslint-disable-next-line no-undef
      this.$video(document.getElementById(this.videoId), {
        falsh: {
          swf: './lib/video-js.swf',
        },
        // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        // 自动播放属性,muted:静音播放
        autoplay: 'muted',
        // 建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: 'auto',
        // 设置视频播放器的显示宽度（以像素为单位）
        width: '800px',
        // 设置视频播放器的显示高度（以像素为单位）
        height: '400px',
        // 设置语言
        language: 'zh-CN',
        // 视频封面
        techOrder: ['html5', 'flash'],
        // poster: 'MY_VIDEO_POSTER.jpg',
        dataSetup: '{}',
        controlBar: { // 设置控制条组件
          /* 设置控制条里面组件的相关属性及显示与否
            'currentTimeDisplay':true,
            'timeDivider':true,
            'durationDisplay':true,
            'remainingTimeDisplay':false,
            volumePanel: {
              inline: false,
            }
            */
          /* 使用children的形式可以控制每一个控件的位置，以及显示与否 */
          children: [
            { name: 'playToggle' }, // 播放按钮
            { name: 'currentTimeDisplay' }, // 当前已播放时间
            { name: 'progressControl' }, // 播放进度条
            { name: 'durationDisplay' }, // 总时间
            { // 倍数播放
              name: 'playbackRateMenuButton',
              playbackRates: [0.5, 1, 1.5, 2, 2.5],
            },
            {
              name: 'volumePanel', // 音量控制
              inline: false, // 不使用水平方式
            },
            { name: 'FullscreenToggle' }, // 全屏
          ],
        },
      });
    },
  },
};
</script>

<style>
.video-js{ /* 给.video-js设置字体大小以统一各浏览器样式表现，因为video.js采用的是em单位 */
  font-size: 14px;
  position: relative;
}
.video-js button{
  outline: none;
}
.video-js.vjs-fluid,
.video-js.vjs-16-9,
.video-js.vjs-4-3{ /* 视频占满容器高度 */
  height: 100%;
  background-color: #161616;
}
.vjs-poster{
  background-color: #161616;
}
.video-js .vjs-big-play-button{ /* 中间大的播放按钮 */
  font-size: 2.5em;
  line-height: 2.3em;
  height: 2.5em;
  width: 2.5em;
  -webkit-border-radius: 2.5em;
  -moz-border-radius: 2.5em;
  border-radius: 2.5em;
  background-color: rgba(115,133,159,.5);
  border-width: 0.12em;
  margin-top: -1.25em;
  margin-left: -1.75em;
}
.video-js.vjs-paused .vjs-big-play-button{ /* 视频暂停时显示播放按钮 */
  display: block;
}
.video-js.vjs-error .vjs-big-play-button{ /* 视频加载出错时隐藏播放按钮 */
  display: none;
}
.vjs-loading-spinner { /* 加载圆圈 */
  font-size: 2.5em;
  width: 2em;
  height: 2em;
  border-radius: 1em;
  margin-top: -1em;
  margin-left: -1.5em;
}
.video-js .vjs-control-bar{ /* 控制条默认显示 */
  display: flex;
}
.video-js .vjs-time-control{display:block;}
.video-js .vjs-remaining-time{display: none;}

.vjs-button > .vjs-icon-placeholder:before{ /* 控制条所有图标，图标字体大小最好使用px单位，如果使用em，各浏览器表现可能会不大一样 */
  font-size: 22px;
  line-height: 1.9;
}
.video-js .vjs-playback-rate .vjs-playback-rate-value{
  line-height: 2.4;
  font-size: 18px;
}
/* 进度条背景色 */
.video-js .vjs-play-progress{
  color: #ffb845;
  background-color: #ffb845;
}
.video-js .vjs-progress-control .vjs-mouse-display{
  background-color: #ffb845;
}
.vjs-mouse-display .vjs-time-tooltip{
  padding-bottom: 6px;
  background-color: #ffb845;
}
.video-js .vjs-play-progress .vjs-time-tooltip{
  display: none!important;
}
.video-js.vjs-paused .vjs-big-play-button{
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
