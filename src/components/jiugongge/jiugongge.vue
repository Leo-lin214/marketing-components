<template>
	<section class="jiugongge-section">
		<!-- 奖品列表 -->
		<div class="prize-item" :class="[ 'prize-item-' + prizeIndex, {'active': activeIndex !== null && (activeIndex % 8) === prizeIndex} ]" v-for="(prizeItem, prizeIndex) in prizeConfig" :key="prizeIndex">
			<span>{{ prizeItem.name }}</span>
		</div>
		<!-- 奖品按钮 -->
		<span class="draw-btn" @click="startGame">抽奖</span>
	</section>
</template>

<script>
export default {
	name: 'jiugongge',
	data() {
		return {
			currentPrize: null,
			activeIndex: null,
			time: 500,
			prizeConfig: [
				{ name: '奖品一' },
				{ name: '奖品二' },
				{ name: '奖品三' },
				{ name: '奖品四' },
				{ name: '奖品五' },
				{ name: '奖品六' },
				{ name: '奖品七' },
				{ name: '奖品八' },
			]
		}
	},
	methods: {
		startGame() {
			this.currentPrize = parseInt(Math.random() * 8) + 32;
			console.log('currentPrize: ', this.currentPrize)
			this.draw(0);
		},
		draw(index) {
			console.log(index);
			if (index === this.currentPrize) return;
			if (this.activeIndex < 10) this.time -= 42;
			if (this.activeIndex > 30) this.time += 42;
			this.handleRotate(this.time, index);
		},
		handleRotate(time, index) {
			setTimeout(() => {
				this.activeIndex = index;
				this.draw(index + 1);
			}, time);
		}
	}
}
</script>

<style lang="scss">
.jiugongge-section {
	position: relative;
	margin: 100px auto;
	width: 260px;
	height: 260px;
	padding: 10px;
	border: 1px solid #8080f3;
	border-radius: 8px;
	.prize-item {
		display: inline-block;
		margin-left: 10px;
		margin-bottom: 10px;
		width: 80px;
		height: 80px;
		text-align: center;
		line-height: 80px;
		color: #ffffff;
		border-radius: 8px;
		background-color: #8080f3;
		&.active {
			background-color: orange;
		}
	}
	.prize-item-0, .prize-item-3, .prize-item-5 {
		margin-left: 0;
	}
	.prize-item-3, .prize-item-4 {
		margin-left: 180px;
	}
	.prize-item-5 {
		margin-left: -170px;
	}
	.prize-item-6 {
		margin-left: -170px;
	}
	.prize-item-7 {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
	}
	.draw-btn {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 80px;
		height: 80px;
		background-color: orange;
		text-align: center;
		line-height: 80px;
		border-radius: 8px;
		color: #ffffff;
		cursor: pointer;
	}
}
</style>