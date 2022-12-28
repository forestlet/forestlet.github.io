<template>
    <div class="work">
        <el-row :gutter="30" justify="start">
            <template v-for="work in works">
                <el-col :span="30" :xs="24" :sm="12" :md="12" :lg="12" class="work-card">
                    <Card :link="work.link" :title="work.title" :img="work.img"></Card>
                </el-col>
            </template>
        </el-row>
    </div>
</template>

<script setup>
import Card from "@/components/work/Card.vue"
defineProps(["works"])
</script>

<style lang="scss">
.work {
    .work-card {
        padding: 15px;
    }
}
</style>