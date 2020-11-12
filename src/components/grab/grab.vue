<template>
<!-- 抓娃娃 -->
<section class="grab-section">
  <!-- 娃娃机主体内容 -->
  <div class="game-container">
    <!-- 爪子 + 奖品内容 -->
    <div class="zhua-container">
      <!-- 爪子 -->
      <div class="zhua-gongju">
        <div class="zhua-title"></div>
        <div class="zhua-sheng"></div>
        <div class="zhua-top"></div>
        <div class="zhua-left"></div>
        <div class="zhua-center"></div>
        <div class="zhua-right"></div>
      </div>
      <!-- 奖品 -->
      <div class="prize-container">
        <div class="common-prize common-prize-one">
          <div class="prize-one">礼包</div>
          <div class="prize-bottom"></div>
        </div>
        <div class="common-prize common-prize-two">
          <div class="prize-two">礼包</div>
          <div class="prize-bottom"></div>
        </div>
        <div class="common-prize common-prize-three">
          <div class="prize-three">礼包</div>
          <div class="prize-bottom"></div>
        </div>
        <div class="common-prize common-prize-four">
          <div class="prize-four">礼包</div>
          <div class="prize-bottom"></div>
        </div>
        <div class="common-prize common-prize-five">
          <div class="prize-five">礼包</div>
          <div class="prize-bottom"></div>
        </div>
      </div>
    </div>
  </div>
  <span class="grab-btn" @click="handleInterval">抓取礼品</span>
</section>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'grab',
  data() {
    return {
      zhuaMove: null,
      resetMove: null,
      playTime: 0, // 夹娃娃的剩余次数
    }
  },
  mounted() {
    this.handleZhuaMove()
  },
  destroyed() {
    this.zhuaMove && clearInterval(this.zhuaMove)
    this.resetMove && clearTimeout(this.resetMove)
  },
  methods: {
    handleZhuaMove() { // 爪子移动
      const zhuaContainerWidth = $('.zhua-container').width()
      const zhuaGongjuWidth = $('.zhua-gongju').width()
      // const maxLeft = zhuaContainerWidth - zhuaGongjuWidth
      // const minLeft = 0
      let moveTag = 1
      let moveLeft = 0
      this.zhuaMove = setInterval(() => {
        let zhuaGongjuLeft = $('.zhua-gongju').position().left
        if (zhuaGongjuLeft <= 0 || zhuaGongjuLeft + zhuaGongjuWidth >= zhuaContainerWidth) {
          moveTag++
        }
        moveTag % 2 === 0 ? moveLeft-- : moveLeft++
        $('.zhua-gongju').css({
          transform: "translateX(" + moveLeft + "px)"
        })
      }, 15)
    },
    handleInterval() { // 点击按钮抓取娃娃
      if (this.zhuaMove) {
        clearInterval(this.zhuaMove)
        const vm = this
        // 是否中奖标志
        let isWinning = false
        // 奖品一
        const prizeOne = $('.prize-one')
        const minPrizeOne = prizeOne.offset().left
        const maxPrizeOne = prizeOne.offset().left + prizeOne.width()
        // 奖品二
        const prizeTwo = $('.prize-two')
        const minPrizeTwo = prizeTwo.offset().left
        const maxPrizeTwo = prizeTwo.offset().left + prizeTwo.width()
        // 奖品三
        const prizeThree = $('.prize-three')
        const minPrizeThree = prizeThree.offset().left
        const maxPrizeThree = prizeThree.offset().left + prizeThree.width()
        // 奖品四
        const prizeFour = $('.prize-four')
        const minPrizeFour = prizeFour.offset().left
        const maxPrizeFour = prizeFour.offset().left + prizeFour.width()
        // 奖品五
        const prizeFive = $('.prize-five')
        const minPrizeFive = prizeFive.offset().left
        const maxPrizeFive = prizeFive.offset().left + prizeFive.width()
        // 最终抓取的奖品
        let prize
        // 爪子位置
        const zhua = $('.zhua-gongju')
        const zhuaLocation = zhua.offset().left + zhua.width() / 2
        // 下拉逻辑
        let shengHeight
        const zhuaSheng = $('.zhua-sheng')
        const zhuaLeft = $('.zhua-left')
        const zhuaRight = $('.zhua-right')
        if ((minPrizeOne < zhuaLocation && zhuaLocation <= maxPrizeOne) || (minPrizeFive < zhuaLocation && zhuaLocation <= maxPrizeFive)) {
          shengHeight = 108
        } else if ((minPrizeTwo < zhuaLocation && zhuaLocation <= maxPrizeTwo) || (minPrizeFour < zhuaLocation && zhuaLocation <= maxPrizeFour)) {
          shengHeight = 165
        } else {
          shengHeight = 208
        }
        zhuaSheng.animate({
          height: `${shengHeight}px`
        }, 1000, function() {
          if (zhuaSheng.height()) {
            zhuaLeft.css({ transform: 'rotateY(-10deg)' })
            zhuaRight.css({ transform: 'rotateY(10deg)' })
            // 判断是否抓到娃娃逻辑
            const oneLocation = (minPrizeOne + maxPrizeOne) / 2
            const twoLocation = (minPrizeTwo + maxPrizeTwo) / 2
            const threeLocation = (minPrizeThree + maxPrizeThree) / 2
            const fourLocation = (minPrizeFour + maxPrizeFour) / 2
            const fiveLocation = (minPrizeFive + maxPrizeFive) / 2
            if (zhuaLocation >= oneLocation - 10 && zhuaLocation <= oneLocation + 10) {
              isWinning = true
              prize = prizeOne
              prizeOne.animate({ top: '-108px' }, 1000)
            } else if (zhuaLocation >= twoLocation - 8 && zhuaLocation <= twoLocation + 5) {
              isWinning = true
              prize = prizeTwo
              prizeTwo.animate({ top: '-165px' }, 1000)
            } else if (zhuaLocation >= threeLocation - 8 && zhuaLocation <= threeLocation + 5) {
              isWinning = true
              prize = prizeThree
              prizeThree.animate({ top: '-208px' }, 1000)
            } else if (zhuaLocation >= fourLocation - 8 && zhuaLocation <= fourLocation + 5) {
              isWinning = true
              prize = prizeFour
              prizeFour.animate({ top: '-165px' }, 1000)
            } else if (zhuaLocation >= fiveLocation - 8 && zhuaLocation <= fiveLocation + 5) {
              isWinning = true
              prize = prizeFive
              prizeFive.animate({ top: '-108px' }, 1000)
            }
            // 当爪子绳子到底部时直接拉回去
            zhuaSheng.animate({ height: 0 }, 1000, function() {
              // vm.handleAnimation(isWinning, prize, zhuaLeft, zhuaRight)
              console.log(isWinning);
              vm.resetAnimation(prize, zhuaLeft, zhuaRight, 3000) // 3秒后重置动画
            })
          }
        })
      }
    },
    resetAnimation(prize, zhuaLeft, zhuaRight, time) { // 重置动画
      this.resetMove = setTimeout(() => {
        $('.zhua-gongju').css({
          transform: "translateX(-50%)"
        })
        zhuaLeft.css({ transform: 'rotate(30deg)' })
        zhuaRight.css({ transform: 'rotate(-30deg)' })
        prize && prize.css({ top: 0 })
        this.handleZhuaMove()
      }, time)
    }
  }
}
</script>

<style lang="scss">
.grab-section {
  text-align: center;
}
.game-container {
  position: relative;
  .zhua-container {
    width: 100%;
    position: absolute;
    top: 100px;
    .zhua-gongju {
      z-index: 4;
      position: absolute;
      display: inline-block;
      left: 50%;
      transform: translateX(-50%);
      .zhua-title, .zhua-sheng, .zhua-top {
        margin: 0 auto;
      }
      .zhua-title {
        background: url('./image/zhua-title.png');
        width: 79px;
        height: 15px;
        background-size: 100%;
      }
      .zhua-sheng {
        width: 7px;
        height: 0;
        // height: 68px;
        background: linear-gradient(180deg,rgba(72,0,255,1),rgba(136,25,221,1),rgba(29,146,255,1),rgba(61,9,255,1));
      }
      .zhua-top {
        background: url('./image/zhua-top.png');
        width: 35px;
        height: 20px;
        margin-top: -3px;
        background-size: 100%;
      }
      .zhua-left, .zhua-center, .zhua-right {
        display: inline-block;
      }
      .zhua-center {
        z-index: 2;
        position: relative;
        top: -23px;
        background: url('./image/zhua-center.png');
        width: 49px;
        height: 37px;
        background-size: 100%;
      }
      .zhua-left {
        position: relative;
        left: 15px;
        background: url('./image/zhua-left.png');
        width: 26px;
        height: 52px;
        background-size: 100%;
        transform: rotate(30deg);
      }
      .zhua-right {
        position: relative;
        right: 14px;
        background: url('./image/zhua-right.png');
        width: 26px;
        height: 52px;
        background-size: 100%;
        transform: rotate(-30deg);
      }
    }
    .prize-container {
      width: 100%;
      position: relative;
      margin-top: 88px;
      .common-prize {
        position: absolute;
        .prize-one, .prize-two, .prize-three, .prize-four, .prize-five {
          margin: 0 auto;
          z-index: 2;
          position: relative;
          width: 68px;
          height: 80px;
          text-align: center;
          line-height: 80px;
          background-color: #8080f3;
          color: #ffffff;
          border: 1px solid #8080f3;
          border-radius: 50%;
        }
        .prize-bottom {
          position: relative;
          width: 125px;
          height: 95px;
          margin-top: -50px;
          // background: url('./image/prize-bottom.png');
          background-size: 100%;
        }
      }
      .common-prize-one {
        top: 75px;
        left: 0;
        .prize-bottom {
          margin-top: -62.5px;
        }
      }
      .common-prize-two, .common-prize-four {
        top: 139px;
        .prize-bottom {
          width: 135px;
          height: 102.5px;
          margin-top: -67.5px;
        }
      }
      .common-prize-two {
        left: 45px;
      }
      .common-prize-three {
        left: 50%;
        transform: translateX(-50%);
        top: 183px;
        .prize-bottom {
          width: 150px;
          height: 112.5px;
          margin-top: -77.5px;
        }
      }
      .common-prize-four {
        right: 45px;
      }
      .common-prize-five {
        top: 75px;
        right: 0px;
      }
    }
  }
}
.grab-btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 30px;
  background: #8080f3;
  border-radius: 20px;
  color: #ffffff;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
