<template>
    <template v-for="repository in repositories" :key="repository">
        <template v-if="repository.position.includes(position)">
            <Repository :repository="repository"></Repository>
        </template>
    </template>
</template>

<script setup>
import Repository from "@/components/project/Repository.vue"
defineProps(["repositories", "position"]);  
</script>

<style lang="scss">

</style>