<template>
<!-- 老虎机 -->
<section class="tiger-section">
  <div class="tiger-container">
    <div class="group-container" v-for="group in groupNum" :key="group" @webkitTransitionEnd="endGame(group)">
      <div class="group-content animation-case">
        <ul class="group-ul" v-for="r in (round + 1)" :key="r">
          <li class="group-prize" v-for="prize in prizes" :key="prize">{{ prize }}</li>
        </ul>
      </div>
    </div>
  </div>
  <span class="startBtn" @click="startGame">{{ disClick ? '正在游戏中...' : '开始游戏' }}</span>
</section>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'tiger',
  data() {
    return {
      groupNum: 3, // 老虎机的轮子个数
      prizes: ['哈', '呵', '嘻', '咔'], // 老虎机展示奖品文字
      disClick: false, // 防止多次点击
      prizeHeight: 0, // 文字高度
      round: 6,
    }
  },
  mounted() {
    this.prizeHeight = $('.group-prize').outerHeight();
    // $('.group-content').css('height', this.prizeHeight * this.prizes.length * (this.round + 1))
  },
  methods: {
    startGame() {
      const vm = this;
      if (vm.disClick) return ;
      vm.disClick = true;
      vm.reset();
      const prizeHeight = vm.prizeHeight;
      const ulHeight = vm.round * $('.group-ul').height();
      $('.group-content').each(function(e) {
        const location = parseInt(Math.random() * vm.prizes.length) * prizeHeight + ulHeight;
        setTimeout(() => {
          $(this).addClass('animation-case').css('transform', 'translate3d(0, -' + location + 'px, 0)')
        }, e * 300);
      })
    },
    reset() {
      $('.group-content').removeClass('animation-case').css('transform','');
    },
    endGame(group) {
      if (group === 3) this.disClick = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.tiger-container {
  display: flex;
  margin-top: 30px;
  justify-content: center;
  height: 30px;
  overflow: hidden;
  .animation-case {
    transition-property: transform;
    transition-duration: 3s;
    transition-timing-function: ease;
  }
  .group-container {
    float: left;
    margin-right: 10px;
    width: 30px;
    overflow: hidden;
    border: 1px solid black;
    border-radius: 8px;
    text-align: center;
  }
  ul {
    margin: 0;
    padding: 0;
    width: 30px;
  }
  li {
    height: 30px;
    line-height: 30px;
    list-style: none;
  }
}
.startBtn {
  display: block;
  margin: 20px auto 0;
  width: 100px;
  padding: 10px;
  text-align: center;
  background: #8080f3;
  border-radius: 20px;
  color: #ffffff;
}
</style>
