
<template lang="html">
    <div class="score">
        <div class="score_wins">
            <span class="text">{{ $t('score.wins') }}</span>
            <span class="result">{{ wins }}</span>
        </div>
        <div class="score_defeats">
            <span class="text">{{ $t('score.defeats') }}</span>
            <span class="result">{{ defeats }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-score',
    props: {
        wins: {
            type: Number,
            default: 0
        },
        defeats: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss">
    @import '../styles/_variables.scss';

    .score {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;

        &_wins {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            .text {
                font-size: 2em;
                font-weight: bold;
            }

            .result {
                font-size: 2em;
                margin-left: .5em;
                color: get-color('green');
                font-weight: bold;
            }
        }

        &_defeats {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            .text {
                font-size: 2em;
                font-weight: bold;
            }

            .result {
                font-size: 2em;
                margin-left: .5em;
                color: get-color('red');
                font-weight: bold;
            }
        }
    }
</style>
