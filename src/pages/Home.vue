<template>
    <div class="home">
        <Introduction></Introduction>
    </div>

    <!-- Projects -->
    <div class="section">
        <el-divider>
            <h2>My Projects</h2>
        </el-divider>

        <Project :repositories="home_repositories"></Project>

        <el-button text class="router-btn">
            <router-link to="/project"> See All My Projects ⌨️ </router-link>
        </el-button>
    </div>

    <!-- Works -->
    <div class="section">
        <el-divider>
            <h2>My Works</h2>
        </el-divider>

        <Work :works="home_works"></Work>

        <el-button text class="router-btn">
            <router-link to="/work"> See All My Works 🎨 </router-link>
        </el-button>
    </div>
</template>

<script setup>
import Introduction from '@/components/home/Introduction.vue';
import Project from "@/components/project/Project.vue"
import Work from "@/components/work/Work.vue"

import { home_repositories } from "@/data/repositories"
import { home_works } from "@/data/works.js"
</script>

<style lang="scss" scoped>
.section {
    .work-card {
        padding: 15px;
    }

    .router-btn {
        margin: 48px 0;
        text-align: center;
        width: 100%;
        padding: 20px;
    }
}
</style>
