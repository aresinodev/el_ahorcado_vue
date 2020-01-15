<template lang="html">
    <div class="picture">
        <canvas id="canvas"></canvas>
    </div>
</template>

<script lang="js">
export default {
    name: 'picture',
    data() {
        return {

        }
    }
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
