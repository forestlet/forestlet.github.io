<template>
    <div class="card"><a :href="props.link">
            <el-image :key="props.img" :src="props.img" :alt="props.title">
                <template #error>
                    <div class="image-slot">
                        <i class="bi bi-image"></i>
                    </div>
                </template>
            </el-image>
            <div class="mask">
                <h1>
                    {{ props.title }}
                </h1>
            </div>
        </a>
    </div>
</template>

<script setup>
const props = defineProps({
    link: String,
    title: String,
    img: String
});
</script>

<style scoped lang="scss">
.card {
    margin: 10px 0;
    position: relative;
    height: 100%;

    &:hover {

        .mask {
            box-shadow: var(--el-color-info-light-9) 0px 0px 0px 4px;
            display: flex;
            flex-direction: column-reverse;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            width: 100%;
            height: 100%;
            border-radius: 12px;
            text-align: left;

            h1 {
                font-size: 1.6rem;
                padding: 20px;
                color: #fff;
                border-radius: 0 0 12px 12px;
                background: linear-gradient(transparent, var(--el-overlay-color-lighter));
            }
        }
    }

    img {
        width: 100%;
        // height: ;
        display: block;
    }

    .el-image {
        height: 100%;
        border-radius: 12px;
        display: block;

        img {
            display: block;
        }

        .image-slot {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            background: var(--el-fill-color-light);
            color: var(--el-text-color-secondary);
            font-size: 30px;

            i {
                font-size: 30px;
            }
        }
    }

    .mask {
        display: none;
    }
}
</style>
