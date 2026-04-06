<template>
    <nav class="inner">
        <ul>
            <li class="top">
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
            </li>
            <li :class="{ active: activeSection === 'stack' }">
                <a href="#stack" @click.prevent="handleNavClick('stack')">STACK</a>
            </li>
            <li :class="{ active: activeSection === 'work' }">
                <a href="#work" @click.prevent="handleNavClick('work')">WORK</a>
            </li>
            <li :class="{ active: activeSection === 'projects' }">
                <a href="#projects" @click.prevent="handleNavClick('projects')">PROJECTS</a>
            </li>
            <li :class="{ active: activeSection === 'credentials' }">
                <a href="#credentials" @click.prevent="handleNavClick('credentials')">CREDENTIALS</a>
            </li>
            <li :class="{ active: activeSection === 'contacts' }">
                <a href="#contacts" @click.prevent="handleNavClick('contacts')">CONTACTS</a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const activeSection = ref('')

const handleNavClick = (id) => {
    const target = document.getElementById(id)

    if (!target) return

    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })

    window.history.replaceState(null, '', `#${id}`)
}

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
    padding: 0;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
}
nav::-webkit-scrollbar {
    display: none;
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
    white-space: nowrap;
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
    background-color: var(--sub-point-color);
}
ul .top a:nth-child(2) {
    background-color: var(--point-color);
}
ul .top a:nth-child(3) {
    background-color: var(--text-color);
}
ul li {
    padding: 0.5rem 1rem;
}
ul li.active {
    border-radius: 2rem;
    background-color: var(--bg-color);
    font-weight: 600;
}

@media (max-width: 768px) {
    nav {
        display: none;
    }
}
</style>
