<template>
  <section class="flip-section">
    <div class="prize-item" :class="[ 'prize-item-' + prizeIndex, {'active': activeIndex === prizeIndex || allShow} ]" v-for="(prizeItem, prizeIndex) in prizeConfig" :key="prizeIndex" @click="handleActive(prizeIndex)">
      <!-- 背面内容 -->
      <div class="back-item"></div>
      <!-- 正面内容 -->
      <div class="front-item">
        <span>{{ prizeItem.name }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'flip',
  data() {
    return {
      allShow: false, // 全部显示标记
      activeIndex: null,
      allShowTimeout: null,
      prizeConfig: [
        { name: '奖品1' },
        { name: '奖品2' },
        { name: '奖品3' },
        { name: '奖品4' },
        { name: '奖品5' },
        { name: '奖品6' },
        { name: '奖品7' },
        { name: '奖品8' },
        { name: '奖品9' },
      ]
    }
  },
  methods: {
    handleActive(prizeIndex) {
      if (!this.allShowTimeout) {
        this.activeIndex = prizeIndex;
        this.allShowTimeout = setTimeout(() => {
          this.allShow = true;
        }, 2000);
        setTimeout(() => {
          this.allShowTimeout = null;
          this.allShow = false;
          this.activeIndex = null;
        }, 6000);
      }
    }
  }
}
</script>

<style lang="scss">
.flip-section {
  position: relative;
	margin: 100px auto;
	width: 260px;
	height: 290px;
	padding: 10px;
	border: 1px solid #8080f3;
	border-radius: 8px;
  .prize-item {
    position: relative;
		display: inline-block;
		margin-left: 10px;
		margin-bottom: 10px;
		width: 80px;
		height: 90px;
		color: #ffffff;
		border-radius: 8px;
		background-color: #8080f3;
    div {
      position: absolute;
      transform-style: preserve-3d;
      backface-visibility: hidden;
      transition: all 0.5s;
    }
    .back-item {
      transform: rotateY(0);
    }
    .front-item {
      position: relative;
      margin: 5px;
      width: 70px;
      height: 80px;
      border-radius: 8px;
      text-align: center;
      line-height: 90px;
      color: #8080f3;
      background-color: #ffffff;
      transform: rotateY(-180deg);
    }
    &.active {
      .back-item {
        transform: rotateY(-180deg);
      } 
      .front-item {
        transform: rotateY(0);
      }
    }
  }
  .prize-item-0, .prize-item-3, .prize-item-6 {
		margin-left: 0;
	}
}
</style>