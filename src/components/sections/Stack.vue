<template>
    <section id="stack">
        <div class="inner">
            <div class="section-header">
                <span class="section-title">STACK</span>
                <p class="section-desc">서비스 구축에 활용하는 주요 기술 스택입니다.</p>
            </div>

            <div class="stack-wrap">
                <ul class="stack-nav">
                    <li v-for="category in STACK_CATEGORIES" :key="category" :class="{ active: activeCategory === category }" @click="selectCategory(category)">
                        {{ category }}
                    </li>
                </ul>

                <div class="stack-logos">
                    <div v-for="logo in STACK_LOGOS" :data-type="logo.type" :title="logo.title" :class="{ 'is-dimmed': activeCategory !== 'ALL' && activeCategory !== logo.type }">
                        <img :src="logo.url" :alt="logo.title" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { STACK_CATEGORIES, STACK_LOGOS } from '@/constants/index'
import { ref } from 'vue'

const activeCategory = ref('ALL')

const selectCategory = (category) => {
    activeCategory.value = category
}
</script>

<style scoped>
.test {
    width: 1.25rem;
    height: 1.25rem;
    margin: 0 auto 250rem;
    background-color: #fff;
}

.stack-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
}

ul.stack-nav {
    display: inline-flex;
    gap: 2rem;
    padding: 0.8rem 2rem;
    border-radius: 2rem;
    background-color: var(--text-color);
    color: #7d7d7d;
    font-weight: 600;
}
ul.stack-nav li:hover,
ul.stack-nav li.active {
    color: var(--bg-color);
    cursor: pointer;
}

.stack-logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    width: 31.25rem;
    margin-top: 1.25rem;
}
.stack-logos > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
    background-color: #fff;
    transition: all 0.3s ease;
}
.stack-logos > div > img {
    width: 2.5rem;
}
.stack-logos .is-dimmed {
    opacity: 0.2;
    filter: grayscale(100%);
}
</style>
