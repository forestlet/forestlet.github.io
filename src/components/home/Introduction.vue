<template>
    <div class="introduction">
        <el-row>
            <el-col :span="18">
                <h1 class="pretty-font">Hi, I'm Chen Zhi <span class="cn_bold">陈植</span>.</h1>
                <p>I'm a coder, illustrator & creator.</p>
            </el-col>
            <el-col :span="6">
                <img src="/assets/avatar.png" alt="avatar" class="avatar">
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.introduction {
    margin: auto;
    background-color: var(--el-color-info-light-9);
    padding: 64px 24px;
    border-radius: 12px;

    h1 {
        font-size: 2rem;
        margin: 20px 0;

        .cn_bold {
            font-weight: bolder;
        }
    }

    p {
        margin: 20px 0;
    }

    .avatar {
        width: 100px;
        border-radius: 50%;
    }
}
</style>
