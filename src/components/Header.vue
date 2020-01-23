<template lang="html">
    <header>
        <div class="title">
            <img class="title_logo" src="../assets/verdugo-logo.png">
            <h1 class="title_text">{{ $t('header.title') }}</h1>
        </div>

        <div class="restart" @click="restartGame()">
            <span class="restart_icon">
                <i class="fas fa-redo-alt"></i>
            </span>
            <span class="restart_icon_text">{{ $t('header.restart') }}</span>
        </div>
    </header>
</template>

<script lang="js">
    export default {
				name: 'app-header',
				methods: {
					restartGame: function() {
						this.$emit("restartGame");
					}
				},
    }
</script>

<style lang="scss" scoped>
    @import '../styles/_variables.scss';

    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px dashed get-color('black');

        .title {
            width: 80%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &_logo {
                height: 70px;
            }

            &_text {
                width: 100%;
                padding-left: .5em;
            }
        }

        .restart {
            width: 20%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;

            &_icon {
                color: get-color('black');
                font-size: 2em;
            }

            &_text {
                font-size: .9em;
            }
        }
    }
</style>
