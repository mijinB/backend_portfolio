<template>
    <section id="projects">
        <div class="inner">
            <div class="section-header">
                <span class="section-title">PROJECTS</span>
                <p class="section-desc">아이디어를 기술로 실체화하며 배움의 과정을 담아낸 개인 프로젝트 모음입니다.</p>
            </div>

            <ul>
                <li v-for="proj in PROJECTS" class="project-card" @click="openDetail(proj.detail)">
                    <div class="card-content">
                        <div class="card-title">
                            <component :is="proj.icon" />
                            <span>{{ proj.title }}</span>
                        </div>
                        <p class="desc">{{ proj.desc }}</p>
                    </div>
                    <div class="stack-wrap">
                        <img v-for="stack in proj.stacks" :src="stack.url" :alt="stack.title" :title="stack.title" />
                    </div>
                </li>
            </ul>
        </div>

        <ProjectPopup v-if="selectedItem" :data="selectedItem" @close="closeDetail" />
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { PROJECTS } from '@/constants/index'
import ProjectPopup from '@/components/ProjectPopup.vue'

const selectedItem = ref(null)

const openDetail = (detail) => {
    selectedItem.value = detail
}
const closeDetail = () => {
    selectedItem.value = null
}
</script>

<style scoped>
ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
    margin-top: 2.2rem;
}
ul li.project-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 13.5rem;
    padding: 1.35rem 1.3rem 1.2rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 1rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.015) 100%);
    transition:
        transform 0.22s ease,
        border-color 0.22s ease,
        background-color 0.22s ease,
        box-shadow 0.22s ease;
    cursor: pointer;
}
ul li.project-card:hover {
    border-color: rgba(96, 165, 250, 0.45);
    background: linear-gradient(180deg, rgba(96, 165, 250, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%);
    transform: translateY(-4px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.22);
}
ul li.project-card:active {
    transform: translateY(-1px);
}

.card-content {
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
}
.card-content .card-title {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    color: var(--text-color);
}
.card-title svg {
    width: 1.5rem;
    height: 1.5rem;
}

.card-content .card-title span {
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: -0.01em;
}
.card-content .desc {
    text-align: start;
    color: var(--gray-color);
    line-height: 1.5;
    word-break: keep-all;
}

.stack-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    margin-top: 1.4rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.stack-wrap img {
    width: 2rem;
    height: 2rem;
    padding: 0.26rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.035);
}
</style>
