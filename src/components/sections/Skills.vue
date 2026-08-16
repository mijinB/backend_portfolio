<template>
    <section id="skills">
        <div class="inner">
            <div class="section-header">
                <span class="section-title">SKILLS</span>
                <p class="section-desc">서비스 구축에 활용하는 주요 기술 스택입니다.</p>
            </div>

            <div class="skills-wrap">
                <div class="skill-summary">
                    <div v-for="item in SKILL_SUMMARY" :key="item.label" class="skill-summary-item">
                        <span>{{ item.label }}</span>
                        <p>{{ item.value }}</p>
                    </div>
                </div>
                <ul class="skills-nav">
                    <li v-for="category in SKILL_CATEGORIES" :key="category" :class="{ active: activeCategory === category }" @click="selectCategory(category)">
                        {{ category }}
                    </li>
                </ul>

                <div class="skills-logos">
                    <img
                        v-for="logo in SKILL_LOGOS"
                        :key="logo.title"
                        :src="logo.url"
                        :alt="logo.title"
                        :title="logo.title"
                        :data-type="logo.type"
                        :class="{ 'is-dimmed': activeCategory !== 'ALL' && activeCategory !== logo.type }"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { SKILL_CATEGORIES, SKILL_LOGOS, SKILL_SUMMARY } from '@/constants/index'
import { ref } from 'vue'

const activeCategory = ref('ALL')

const selectCategory = (category) => {
    activeCategory.value = category
}
</script>

<style scoped>
.skills-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.skill-summary {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;
    width: 100%;
    margin-bottom: 2rem;
}
.skill-summary-item {
    padding: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0.8rem;
    background: rgba(255, 255, 255, 0.025);
    text-align: left;
}
.skill-summary-item span {
    color: var(--point-color);
    font-size: 0.82rem;
    font-weight: 600;
}
.skill-summary-item p {
    margin-top: 0.45rem;
    color: var(--text-color);
    font-size: 0.88rem;
    line-height: 1.55;
    word-break: keep-all;
}

ul.skills-nav {
    display: inline-flex;
    gap: 2rem;
    padding: 0.8rem 2rem;
    border-radius: 2rem;
    background-color: var(--text-color);
    color: #a5a5a5;
    font-weight: 600;
}
ul.skills-nav li:hover,
ul.skills-nav li.active {
    color: var(--bg-color);
    cursor: pointer;
}

.skills-logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.2rem;
    width: min(30rem, 100%);
    margin-top: 1.25rem;
}
.skills-logos > img {
    width: 3.5rem;
}
.skills-logos .is-dimmed {
    opacity: 0.2;
    filter: grayscale(100%);
}

@media (max-width: 640px) {
    .skill-summary {
        grid-template-columns: 1fr;
        gap: 0.65rem;
    }
    ul.skills-nav {
        display: flex;
        justify-content: space-between;
        gap: 0;
        width: 100%;
        padding: 0.6rem 0.75rem;
        overflow-x: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    ul.skills-nav::-webkit-scrollbar {
        display: none;
    }
    ul.skills-nav li {
        flex-shrink: 0;
        padding: 0.2rem 0.3rem;
        font-size: 0.82rem;
    }

    .skills-logos {
        gap: 1rem;
    }
    .skills-logos > img {
        width: 3rem;
    }
}
</style>
