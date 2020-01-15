<template lang="html">
    <div class="word-container">
        <div class="word-container-content">
            <span :id="'letter-' + key" class="line"
                  v-for="(item, key) in wordToArray"
                  :key="key">_</span>
        </div>
    </div>
</template>

<script lang="js">
export default {
    name: "word",
    props: {
        word: {
            type: String,
            required: true
        }
    },
    data() {
        return {}
    },
    computed: {
        wordToArray: function () {
            return Array.from(this.word);
        }
    },
}
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.word-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1em;

    &-content {
        width: 90%;
        height: 60px;
        border: 1px solid get-color("black");
        display: flex;
        justify-content: space-around;
        align-items: center;

        .line {
            font-weight: bold;
            font-size: 2.5em;
        }
    }
}
</style>
