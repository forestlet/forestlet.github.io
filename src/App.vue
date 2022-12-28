<template>
  <Header></Header>
  <el-scrollbar height="calc(100vh - var(--header-height))" ref="scrollbarRef">
    <div class="main">
      <router-view> </router-view>
      <Footer></Footer>
    </div>
  </el-scrollbar>
</template>

<script setup>
import Header from '@/components/common/Header.vue'
import Footer from '@/components/common/Footer.vue'
import { scrollbarRef } from "@/util/scrollbar.js"
</script>

<style>
.el-scrollbar {
  margin: auto;
  margin-top: var(--header-height);
  height: calc(100vh - var(--header-height));
  max-height: calc(100vh - var(--header-height));
}

.main {
  width: var(--page-width);
  padding: 0 var(--main-padding);
  margin: auto;
}
</style>
