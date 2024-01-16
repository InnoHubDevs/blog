const audioPlayer = document.getElementById("musicPlayer");
audioPlayer.innerHTML = `
<div class="audioPlayer">
<div class="player">
      <div class="player-track" :class="{'active': isTimerPlaying}" ref="progress">
        <div class="album-name">{{ currentTrack.artist }}</div>
        <div class="track-name">{{ currentTrack.name }}</div>
        <div class="track-time" :class="{'active': isTimerPlaying}">
          <div class="current-time">{{ currentTime }}</div>
          <div class="track-length">{{ duration }}</div>
        </div>
        <div class="s-area" @click="clickProgress">
          <div class="seek-bar" :style="{ width : barWidth }"></div>
        </div>
      </div>
      <div class="player-content">
        <div class="album-art" :class="{'active': isTimerPlaying,'buffering': isBuffer}">
          <img :src="currentTrack.cover" :class="{'active': isShowCover}">
          <div class="buffer-box">Buffering ...</div>
        </div>
        <div class="player-controls">
          <div class="control-item">
            <div class="item-button" :class="{'disabled':(currentTrackIndex==0)}" @click="prevTrack">
              <svg xmlns="http://www.w3.org/2000/svg" height="26" width="20" viewBox="0 0 320 512"><path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z"/></svg>
            </div>
          </div>
          <div class="control-item">
            <div class="item-button" :class="{'active': isTimerPlaying}" @click="play">
            <svg v-if="isTimerPlaying" xmlns="http://www.w3.org/2000/svg" height="26" width="20" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" height="26" width="24" viewBox="0 0 384 512" v-else><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
            </div>
          </div>
          <div class="control-item">
            <div class="item-button" :class="{'disabled':(currentTrackIndex==tracks.length-1)}"  @click="nextTrack">
              <svg xmlns="http://www.w3.org/2000/svg" height="26" width="20" viewBox="0 0 320 512"><path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"/></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
`;
new Vue({
  el: "#musicPlayer",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      isShowCover: true,
      isBuffer: false,
      tracks: playerTracks,
      currentTrack: null,
      currentTrackIndex: 0
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
        this.isBuffer = false;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
        this.isBuffer = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.audio.pause();
      this.updateBar(e.pageX);
      this.isTimerPlaying = true;
    },
    prevTrack() {
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        this.isShowCover = true;
        this.isBuffer = false;
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        };
      }, 300);
    },
  },
  created() {
    this.isBuffer = true;
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };
    setTimeout(() => {
      this.isBuffer = false;
    }, 300);

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
