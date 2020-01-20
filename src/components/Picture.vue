<template lang="html">
    <div class="picture">
        <canvas id="canvas"></canvas>
    </div>
</template>

<script lang="js">
export default {
    name: 'app-picture',
    data() {
        return {

        }
    },
    methods: {
        drawDoll: function (piece) {
            let canvas = document.getElementById("canvas");
            let ctx = canvas.getContext("2d");

            switch (piece) {
                case 1:
                    ctx.beginPath();
                    ctx.moveTo(0, 10);
                    ctx.lineTo(30, 10);
                    ctx.lineWidth = 3;
                    ctx.stroke();

                    break;

                case 2:
                    ctx.beginPath();
                    ctx.moveTo(30, 9);
                    ctx.lineTo(30, 25);
                    ctx.lineWidth = 3;
                    ctx.stroke();

                    break;

                case 3:
                    ctx.beginPath();
                    ctx.fillStyle = "transparent";
                    ctx.lineWidth = 3;
                    ctx.arc(30,34,8,0,2*Math.PI);
                    ctx.fill();
                    ctx.stroke();

                    break;

                case 4:
                    ctx.beginPath();
                    ctx.moveTo(30, 40);
                    ctx.lineTo(30, 80);
                    ctx.lineWidth = 3;
                    ctx.stroke();

                    break;

                case 5:

                    break;

                case 6:
                    ctx.beginPath();
                    ctx.moveTo(30, 50);
                    ctx.lineTo(45, 60);
                    ctx.lineWidth = 3;
                    ctx.stroke();

                    break;

                case 7:

                    break;

                case 8:

                    break;

                case 9:

                    break;
            }
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
        width: 50%;
        height: 300px;
        border: 1px solid get-color('black');
    }
}
</style>
