<template>
    <header class="header pretty-font">
        <el-row>
            <el-col :span="8">
                <h1>
                    <router-link to="/">Chen Zhi</router-link>
                </h1>
            </el-col>
            <el-col :span="16" class="routers">

                <router-link to="/project">
                    <el-button text>Project</el-button>
                </router-link>

                <router-link to="/work">
                    <el-button text>Work</el-button>
                </router-link>

                <router-link to="/about">
                    <el-button text>About</el-button>
                </router-link>

                <el-button text @click="changeTheme()">
                    <i class="bi bi-brightness-high" v-if="darkMode"></i>
                    <i class="bi bi-moon-stars" v-else></i>
                </el-button>

            </el-col>
        </el-row>
    </header>
</template>

<script setup>
import { ref } from 'vue'
const darkMode = ref(window.matchMedia('(prefers-color-scheme: dark)').matches)
if (darkMode.value)
    document.getElementsByTagName("html")[0].classList.add("dark")

const changeTheme = () => {
    darkMode.value = !darkMode.value
    document.getElementsByTagName("html")[0].className = darkMode.value ? "dark" : "light"
}
</script>

<style lang="scss">
.header {
    width: var(--page-width);
    margin: 0 calc((100% - var(--page-width)) / 2);
    padding: 12px 0;
    text-align: center;
    line-height: 2;
    position: fixed;
    top: 0;

    h1 {
        text-align: left;
        font-size: 1.2rem;
        line-height: 2.5;
        margin: 0;
    }

    .routers {
        display: flex;
        justify-content: flex-end;

        .el-button {
            margin: 8px 2px;
        }
    }
}
</style>
