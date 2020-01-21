<template lang="html">
  <div class="picture">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script lang="js">
export default {
	name: 'app-picture',
    props: {
			error: {
					type: Number
			}
    },
    data() {
			return {}
    },
    methods: {
			drawDoll: function (piece) {
				let canvas = document.getElementById("canvas");
				let ctx = canvas.getContext("2d");

				switch (piece) {
					case 1:
						// Línea 1
						ctx.beginPath();
						ctx.moveTo(0, 10);
						ctx.lineTo(30, 10);
						ctx.lineWidth = 2;
						ctx.stroke();

						break;

					case 2:
						// Línea 2
						ctx.beginPath();
						ctx.moveTo(30, 9);
						ctx.lineTo(30, 25);
						ctx.lineWidth = 2;
						ctx.stroke();

						break;

					case 3:
						// Cabeza
						ctx.beginPath();
						ctx.fillStyle = "transparent";
						ctx.lineWidth = 2;
						ctx.arc(30,34,7,0,2*Math.PI);
						ctx.fill();
						ctx.stroke();

						break;

					case 4:
						// Tronco
						ctx.beginPath();
						ctx.moveTo(30, 40);
						ctx.lineTo(30, 80);
						ctx.lineWidth = 2;
						ctx.stroke();

						break;

					case 5:
						// Brazo izquierdo
						ctx.beginPath();
						ctx.moveTo(30, 50);
						ctx.lineTo(16, 60);
						ctx.lineWidth = 2;
						ctx.stroke();

						break;

					case 6:
						// Brazo derecha
						ctx.beginPath();
						ctx.moveTo(30, 50);
						ctx.lineTo(45, 60);
						ctx.lineWidth = 2;
						ctx.stroke();

						break;

					case 7:
						// Pierna izquierda
						ctx.beginPath();
						ctx.moveTo(30, 79);
						ctx.lineTo(20, 100);
						ctx.lineWidth = 2;
						ctx.stroke();

						break;

					case 8:
						// Pierna derecha
						ctx.beginPath();
						ctx.moveTo(30, 79);
						ctx.lineTo(40, 100);
						ctx.lineWidth = 2;
						ctx.stroke();

						break;
				}
			}
		},
		watch: {
			error: function(value) {
				this.drawDoll(value);
			}
		},
}
</script>

<style lang="scss">
@import '../styles/_variables.scss';

.picture {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	canvas {
			width: 300px;
			height: 150px;
			border: 1px solid get-color('black');
	}
}
</style>
