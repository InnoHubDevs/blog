let app = document.getElementById("musicPlayer");
app.innerHTML =`
<div class="player">
        <div class="player-track" :class="{'active': isTimerPlaying}">
          <div class="album-name" v-if="currentTrack">{{ currentTrack.name }}</div>
          <div class="track-name" v-if="currentTrack">{{ currentTrack.artist }}</div>
          <div class="track-time" :class="{'active': isTimerPlaying}">
            <div class="current-time" v-if="currentTrack">{{ currentTime }}</div>
            <div class="track-length" v-if="currentTrack">{{ duration }}</div>
          </div>
          <div class="s-area">
            <div class="ins-time"></div>
            <div class="s-hover"></div>
            <div class="seek-bar" :style="{ width : barWidth }"></div>
          </div>
        </div>
        <div class="player-content">
          <div class="album-art" :class="{'active': isTimerPlaying}" :class="{'buffering': isBuffer}">
            <img :src="tracks[currentTrackIndex].cover" class="playerAlbumArt" :class="{'active': isShowCover}">
            <div class="buffer-box">Buffering ...</div>
          </div>
          <div class="player-controls">
            <div class="player-controls-item">
              <div class="player-button" @click="prevTrack">
                <svg class='line' viewBox='0 0 24 24'><path d='M22 8.33994V15.6599C22 17.1599 20.37 18.0999 19.07 17.3499L15.9 15.5299L12.73 13.7C12.53 13.58 12.37 13.45 12.24 13.29V10.73C12.37 10.57 12.53 10.44 12.73 10.32L15.9 8.48993L19.07 6.66996C20.37 5.89996 22 6.83994 22 8.33994Z'></path><path d='M12.24 8.33994V15.6599C12.24 17.1599 10.61 18.0999 9.30999 17.3499L6.14001 15.5299L2.97 13.7C1.67 12.95 1.67 11.08 2.97 10.32L6.14001 8.48993L9.30999 6.66996C10.61 5.89996 12.24 6.83994 12.24 8.33994Z'></path></svg>
              </div>
            </div>
            <div class="player-controls-item">
              <div class="player-button" @click="play">
                <svg class='line' viewBox='0 0 24 24' v-if="isTimerPlaying"><path d='M10.65 19.11V4.89C10.65 3.54 10.08 3 8.64 3H5.01C3.57 3 3 3.54 3 4.89V19.11C3 20.46 3.57 21 5.01 21H8.64C10.08 21 10.65 20.46 10.65 19.11Z'></path><path d='M21 19.11V4.89C21 3.54 20.43 3 18.99 3H15.36C13.93 3 13.35 3.54 13.35 4.89V19.11C13.35 20.46 13.92 21 15.36 21H18.99C20.43 21 21 20.46 21 19.11Z'></path></svg>
                <svg class='line' viewBox='0 0 24 24' v-else><path d='M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z' stroke-miterlimit='10'></path></svg>
              </div>
            </div>
            <div class="player-controls-item">
              <div class="player-button" @click="nextTrack">
                <svg class='line' viewBox='0 0 24 24'><path d='M2 8.33994V15.6599C2 17.1599 3.62999 18.0999 4.92999 17.3499L8.10001 15.5299L11.27 13.7C11.47 13.58 11.63 13.45 11.76 13.29V10.73C11.63 10.57 11.47 10.44 11.27 10.32L8.10001 8.48993L4.92999 6.66996C3.62999 5.89996 2 6.83994 2 8.33994Z'></path><path d='M11.76 8.33994V15.6599C11.76 17.1599 13.39 18.0999 14.69 17.3499L17.86 15.5299L21.03 13.7C22.33 12.95 22.33 11.08 21.03 10.32L17.86 8.48993L14.69 6.66996C13.39 5.89996 11.76 6.83994 11.76 8.33994Z'></path></svg>
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
      isBuffer: false,
      isShowCover: true,
      tracks: playerTracks,
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
        this.isShowCover = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
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
      this.isTimerPlaying = true;
      this.isBuffer = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
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
      this.transitionName = "scale-out";
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
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
        this.isShowCover = true;
      }, 300);
    }
  },
  created() {
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
      this.isShowCover = true;
    };
  }
});
