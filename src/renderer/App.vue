<template>
  <div id="app">
<!--    <router-view></router-view>-->
    <div>
      <div>num: {{num}} + 6</div>
      <div>result: {{result}}</div>
      <el-button type="primary" @click="add">点击加</el-button>
      <el-badge :value="200" :max="99" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
    </div>
    <div class="test_two_box">
      <Video
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        src-type="video/mp4"
        videoId="video_mp4"
      />
    </div>
<!--    <div class="test_two_box">-->
<!--      <Video-->
<!--        src="rtmp://media3.sinovision.net:1935/live/livestream"-->
<!--        src-type="rtmp/flv"-->
<!--        videoId="rtmp_flv"-->
<!--      />-->
<!--    </div>-->
  </div>
</template>

<script>
  import edgeModules from '../main/edgeModules/index.js';
  import Video from './components/Video';
  // const ffmpeg = require('fluent-ffmpeg');


  export default {
    name: 'electron_demo',
    data() {
      return {
        num: 4,
        result: 0,
      };
    },
    components: {
      Video,
    },
    mounted() {
      // // console.log('通过dll获取到的值：');
      // edgeModules.helloWorld('JavaScript', (error, result) => {
      //   if (error) throw error;
      //   // console.log(result);
      // });
    },
    methods: {
      add() {
        const that = this;
        edgeModules.add(Number(this.num++), (error, result) => {
          if (error) throw error;
          that.result = result;
        });
      },
    },
  };
</script>

<style>
  /* CSS */
  .button{
    width: 100px;
    height: 40px;
    background-color: #4fc08d;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .test_two_box{
    margin-top: 20px;
  }
</style>
