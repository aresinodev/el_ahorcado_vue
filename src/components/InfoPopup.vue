<template lang="html">
    <div class="popup-container">
        <div class="content">
            <div class="content-title">
                {{ title.toUpperCase() }}
            </div>
            <div class="content-subtitle">
                <span class="text">{{ subtitle }}</span>
                <div class="actions">
                    <button v-if="!error" type="button">{{ $t("infoPopup.newWord") }}</button>
                    <button v-else type="button">{{ $t("infoPopup.newGame") }}</button>
                    <button type="button">{{ $t("infoPopup.finish") }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js">
export default {
    name: 'InfoPopup',
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        error: {
            type: Boolean,
            required: true
        },
        wordOfMouth: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            
        }
    },
}
</script>

<style lang="scss" scoped>
    @import '../styles/_variables.scss';

    .popup-container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.6);
        position: fixed;
        z-index: 9999;

        .content {
            width: 90%;
            height: 30%;
            border-radius: 15px;
            background-color: get-color("white");

            &-title {
                width: 100%;
                text-align: center;
                font-weight: bold;
                font-size: 1.5em;
                padding-top: .5em;
                padding-bottom: .5em;
                border-bottom: 1px solid get-color("black");
            }

            &-subtitle {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                padding-top: 1em;

                .text {
                    width: 100%;
                    text-align: center;
                    font-size: 2em;
                }

                .actions {
                    width: 100%;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    margin-top: 1em;

                    button {
                        border: 5px dashed get-color("black");
                        background-color: get-color("white");
                        color: get-color("black");
                        text-transform: uppercase;
                        font-weight: bold;
                        font-size: 1.7em;
                        height: 70px;
                        cursor: pointer;
                        outline: none;
                    }
                }
            }
        }
    }
</style>