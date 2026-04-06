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
                    <img
                        v-for="logo in STACK_LOGOS"
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
import { STACK_CATEGORIES, STACK_LOGOS } from '@/constants/index'
import { ref } from 'vue'

const activeCategory = ref('ALL')

const selectCategory = (category) => {
    activeCategory.value = category
}
</script>

<style scoped>
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
    color: #a5a5a5;
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
    gap: 1.2rem;
    width: min(30rem, 100%);
    margin-top: 1.25rem;
}
.stack-logos > img {
    width: 3.5rem;
}
.stack-logos .is-dimmed {
    opacity: 0.2;
    filter: grayscale(100%);
}

@media (max-width: 640px) {
    ul.stack-nav {
        display: flex;
        justify-content: space-between;
        gap: 0;
        width: 100%;
        padding: 0.6rem 0.75rem;
        overflow-x: auto;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
    ul.stack-nav::-webkit-scrollbar {
        display: none;
    }
    ul.stack-nav li {
        flex-shrink: 0;
        padding: 0.2rem 0.3rem;
        font-size: 0.82rem;
    }

    .stack-logos {
        gap: 1rem;
    }
    .stack-logos > img {
        width: 3rem;
    }
}
</style>
