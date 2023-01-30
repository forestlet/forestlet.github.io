<template>

  <div class="repository">
    <el-row :gutter="24">
      <el-col :span="16" :xs="24">
        <a :href="repository.html_url">
          <h1>{{ repository.full_name }}</h1>
        </a>
        <p class="description">{{ repository.description }}</p>
        <p class="info">
          <el-tooltip effect="light" content="Star" placement="bottom">
            <span class="item">
              <i class="bi bi-star"></i>
              <span>{{ repository.stargazers_count }}</span>
            </span>
          </el-tooltip>

          <el-tooltip effect="light" content="Issues" placement="bottom">
            <span class="item">
              <i class="bi bi-info-circle"></i>
              <span>{{ repository.open_issues_count }}</span>
            </span>
          </el-tooltip>

          <el-tooltip effect="light" content="Fork" placement="bottom">
            <span class="item">
              <i class="bi bi-git"></i>
              <span>{{ repository.forks_count }}</span>
            </span>
          </el-tooltip>
        </p>
      </el-col>

      <el-col :span="8" :xs="24">
        <a :href="repository.homepage">
          <img class="repo-gif" :src="repo_src" />
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { inject, ref, watch } from 'vue'
import { theme } from "@/util/theme"

const axios = inject('axios')  // inject axios

const props = defineProps({ repository: Object })

let repo_src = ref("")

let repository = reactive({
  repo: props.repository.repo,
  html_url: `https://github.com/${props.repository.owner}/${props.repository.repo}`,
  api: `https://api.github.com/repos/${props.repository.owner}/${props.repository.repo}`,
  full_name: "",
  description: "",
  stargazers_count: 0,
  open_issues_count: 0,
  forks_count: 0,
  homepage: "",
  // license: "",
})

const getInfo = () => {
  axios
    .get(repository.api)
    .then((response) => {
      let data = response.data;

      repository.full_name = data.full_name;
      repository.description = data.description;
      repository.stargazers_count = data.stargazers_count;
      repository.open_issues_count = data.open_issues_count;
      repository.forks_count = data.forks_count;
      repository.homepage = data.homepage;
    })
    // fallback
    .catch(() => {
      repository.full_name = props.repository.full_name;
      repository.description = props.repository.description;
      repository.stargazers_count = props.repository.stargazers_count;
      repository.open_issues_count = props.repository.open_issues_count;
      repository.forks_count = props.repository.forks_count;
      repository.homepage = props.repository.homepage;
    });

  repo_src.value = '/img/projects/' + theme.value + '/' + repository.repo + '.gif'
};

getInfo()

watch(theme, (_) => {
  repo_src.value = '/img/projects/' + _ + '/' + repository.repo + '.gif'
})
</script>

<style lang="scss" scoped>
.repository {
  padding: 22px;
  margin: 20px 0;
  border-radius: 12px;
  border: 2px solid var(--el-fill-color-lighter);

  &:hover {
    padding: 20px;
    border: 4px solid var(--el-color-info-light-9);
  }

  h1 {
    font-size: 1.2rem;
    padding: 20px 0;
    font-weight: 900;

    &:hover {
      text-decoration: underline;
    }
  }

  .description {
    padding: 20px 0;
  }

  .info {
    .item {
      padding: 0 20px;

      i {
        margin-right: 6px;
      }
    }
  }

  .repo-gif {
    width: 100%;
    border-radius: 8px;
    box-shadow: var(--el-box-shadow-light);
  }
}
</style>