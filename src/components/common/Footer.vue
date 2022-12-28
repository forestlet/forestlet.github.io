<template>
    <div class="footer">
        <div class="brand">
            <el-tooltip effect="light" content="Bilibili" placement="top">
                <a :href=bilibili_url>
                    <el-button text>
                        <svg version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1024 1024"
                            style="width: 16" xml:space="preserve" fill="currentColor">
                            <path d="M911.6,380.5c-2.5-111.9-100.1-133.4-100.1-133.4s-76.2-0.4-175-1.3l72-69.4c0,0,11.3-14.3-8-30.3
	c-19.4-16-20.6-8.8-27.3-4.6c-5.9,4.2-92.2,88.9-107.3,104l-105.6-0.3c0,0-103.1-102-109.8-106.6c-6.7-4.6-7.6-11.5-27.3,4.5
	c-19.4,16-8,30.3-8,30.3l73.6,71.5c-80,0-148.9,0.4-180.9,1.7c-103.5,29.9-95.5,133.8-95.5,133.8s1.3,223,0,335.8
	c11.3,112.8,98,130.8,98,130.8s34.5,0.8,60.2,0.8c2.5,7.1,4.6,42.5,44.2,42.5c39.1,0,44.2-42.5,44.2-42.5s288.2-1.3,312.2-1.3
	c1.3,12.2,7.1,44.6,46.7,44.2c39.1-0.8,42.1-46.7,42.1-46.7s6-0.6,21.8-0.6c7.9,0,18.3,0.1,31.6,0.6
	c93.4-17.2,98.9-126.6,98.9-126.6S910.3,492.4,911.6,380.5z M830.7,737.3c0,17.7-13.3,31.3-30.6,31.3h-568
	c-17.2,0-30.3-13.6-30.3-31.3V360.7c0-17.7,13.1-31.5,30.3-31.5h568c17.2,0,30.6,13.9,30.6,31.5V737.3z" />
                            <path d="M619.9,634.7c0,0-44.4,71-102.4,17.3c-49.2,53.6-100.8-16.9-100.8-16.9l26.2-16.9c0,0,35.1,63.3,74.2-20.6
	c37.5,81.5,79,21.4,79,21.8L619.9,634.7z" />
                            <polygon points="442.9,498.5 284.4,529.1 270.7,469 430.8,438.4 " />
                            <polygon points="768.3,469 755,529.1 596.1,498.5 608.6,438.4 " />
                        </svg>
                    </el-button>
                </a>
            </el-tooltip>

            <el-tooltip effect="light" content="Github" placement="top">
                <a :href=github_url>
                    <el-button text>
                        <i class="bi bi-github"></i>
                    </el-button>
                </a>
            </el-tooltip>

            <el-tooltip effect="light" content="Behance" placement="top">
                <a :href=behance_url>
                    <el-button text>
                        <i class="bi bi-behance"></i>
                    </el-button>
                </a>
            </el-tooltip>

            <el-tooltip effect="light" content="Instagram" placement="top">
                <a :href=instagram_url>
                    <el-button text>
                        <i class="bi bi-instagram"></i>
                    </el-button>
                </a>
            </el-tooltip>

            <el-tooltip effect="light" content="Email" placement="top">
                <a :href=mail_to>
                    <el-button text>
                        <i class="bi bi-envelope"></i>
                    </el-button>
                </a>
            </el-tooltip>
        </div>

        <el-tooltip effect="light" content="Scroll To Top" placement="top">
            <el-button text @click="scrollToTop">
                <i class="bi bi-arrow-up-square-fill"></i>
            </el-button>
        </el-tooltip>
    </div>
</template>

<script setup>
import { github_url, instagram_url, behance_url, bilibili_url, mail_to } from "@/data/url.js"
import { scrollToTop } from "@/util/scrollbar.js"
</script>

<style lang="scss">
.footer {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    .el-button {
        margin-right: 4px;

        .bilibili {
            width: 16px;
            position: relative;
            bottom: 1px;
        }
    }
}
</style>
