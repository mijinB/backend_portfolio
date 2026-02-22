<template>
    <nav class="inner">
        <ul>
            <li class="top">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
            </li>
            <li :class="{ active: activeSection === 'stack' }">
                <a href="#stack">STACK</a>
            </li>
            <li :class="{ active: activeSection === 'works' }">
                <a href="#works">WORKS</a>
            </li>
            <li :class="{ active: activeSection === 'log' }">
                <a href="#log">LOG</a>
            </li>
            <li :class="{ active: activeSection === 'credentials' }">
                <a href="#credentials">CREDENTIALS</a>
            </li>
            <li :class="{ active: activeSection === 'contact' }">
                <a href="#contact">CONTACT</a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const activeSection = ref('')

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    activeSection.value = entry.target.id
                }
            })
        },
        {
            rootMargin: '-50% 0px -50% 0px',
        },
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))
})
</script>

<style scoped>
nav {
    position: sticky;
    top: 0;
}
ul {
    display: inline-flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    background-color: #d1d5db3b;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}
ul .top {
    display: flex;
    gap: 0.4rem;
}
ul .top a {
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
}
ul .top a:nth-child(1) {
    background-color: #60a5fa;
}
ul .top a:nth-child(2) {
    background-color: #2dd4bf;
}
ul .top a:nth-child(3) {
    background-color: #d1d5db;
}
ul li {
    padding: 0.5rem 1rem;
}
ul li.active {
    border-radius: 2rem;
    background-color: var(--bg-color);
    font-weight: 600;
}
</style>
