<template>
  <section class="wheel-section">
    <div class="panel" :style="{transform: rotate_deg, transition: rotate_transition}">
      <div class="sector" v-for="(prizeItem, prizeIndex) in prizeConfig" :key="prizeIndex">
        <div class="sector-inner">
          <span>{{ prizeItem.name }}</span>
        </div>
      </div>
    </div>
    <div class="pointer" @click="handlePrize">开始抽奖</div>
  </section>
</template>

<script>
export default {
  name: 'wheel',
  data() {
    return {
      prizeConfig: [
        { name: '奖品1' },
        { name: '奖品2' },
        { name: '奖品3' },
        { name: '奖品3' },
        { name: '奖品4' },
        { name: '奖品5' },
        { name: '奖品6' },
        { name: '奖品7' },
      ],
      round: 5, // 所配置的圈数
      isAllowClick: true, //是否能够点击
      initDeg: 0, //初始旋转角度
      rotate_deg: 0, //将要旋转的角度
      rotate_transition: "transform 3s ease-in-out"//初始化选中的过度属性控制
    }
  },
  methods: {
    handlePrize() {
      if (this.isAllowClick) {
        this.isAllowClick = false;
        const randomDeg = Math.floor(Math.random() * 360); // 目标旋转角度
        this.initDeg = randomDeg + 360 * this.round + this.initDeg - this.initDeg % 360; // 旋转后相对原始位置偏移的角度
        this.rotate_deg = `rotate(${ this.initDeg }deg)`;
        setTimeout(() => {
          this.isAllowClick = true;
        }, 2000);
      }
    }
  }
}
</script>

<style lang="scss">
.wheel-section {
  position: relative;
  margin: 100px auto;
  height: 200px;
  width: 200px;
  padding: 6px;
  background-color: #8080f3;
  box-shadow: #000000 0px 0px 10px;
  border-radius: 50%;
  .panel {
    position: relative;
    height: 200px;
    width: 200px;
    background-color: #fff;
    border-radius: 50%;
  }
  .sector {
    position: absolute;
    width: 100px;
    height: 200px;
    border-radius: 0px 100px 100px 0;
    overflow: hidden;
    left: 100px;
    top: 0px;
    transform-origin: left center;
  }
  .sector:nth-child(1) {
    transform: rotate(-22.5deg);
  }
  .sector:nth-child(2) {
    transform: rotate(22.5deg);
  }
  .sector:nth-child(3) {
    transform: rotate(67.5deg);
  }
  .sector:nth-child(4) {
    transform: rotate(112.5deg);
  }
  .sector:nth-child(5) {
    transform: rotate(157.5deg);
  }
  .sector:nth-child(6) {
    transform: rotate(202.5deg);
  }
  .sector:nth-child(7) {
    transform: rotate(247.5deg);
  }
  .sector:nth-child(8) {
    transform: rotate(292.5deg);
  }
  .sector:nth-child(9) {
    transform: rotate(337.5deg);
  }
  .sector:nth-child(2n+1) .sector-inner {
    background: #c2c2f9;
  }
  .sector:nth-child(2n) .sector-inner {
    background: #ffffff;
  }
  .sector-inner {
    text-align: center;
    display: block;
    width: 40px;
    padding: 5px 3px 0 57px;
    height: 195px;
    transform: translateX(-100px) rotate(45deg);
    transform-origin: right center;
    border-radius: 100px 0 0 100px;
  }
  .sector-inner span {
    display: block;
    margin: 12px 0 0 -18px;
    transform-origin: center;
    transform: rotate(-23deg);
    color: #8080f3;
  }
  .pointer {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    height: 30px;
    width: 30px;
    padding: 6px;
    color: #fff899;
    line-height: 15px;
    font-size: 12px;
    text-align: center;
    background-color: #8080f3;
    border-radius: 50%;
    border: 1px solid #8080f3;
  }
  .pointer::after {
    content: '';
    position: absolute;
    left: 14px;
    top: -24px;
    border-width: 12px 6px;
    border-style: solid;
    border-color: transparent;
    border-bottom-color: #8080f3;
  }
}
</style>