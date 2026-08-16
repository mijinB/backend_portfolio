<template>
    <section id="experience">
        <div class="inner">
            <div class="section-header">
                <span class="section-title">EXPERIENCE</span>
                <p class="section-desc">서비스를 책임지며 성능, 데이터, 운영 프로세스를 개선해온 기록입니다.</p>
            </div>

            <div>
                <div class="divider">
                    <span class="divider-text">Work Experience</span>
                </div>
                <ul>
                    <li v-for="work in WORK_EXPERIENCE" :key="work.company" class="info-item">
                        <div class="info-side">
                            <StarIcon class="icon status-icon" :class="{ active: work.status === 'active' }" />
                            <span class="date">{{ work.date }}</span>
                        </div>
                        <div class="info-content">
                            <span class="content-title">{{ work.company }}</span>
                            <p class="content-subtitle">{{ work.brief }}</p>
                            <div class="service-list">
                                <article v-for="service in work.services" :key="service.title" class="service-card">
                                    <span class="service-period">{{ service.period }}</span>
                                    <strong>{{ service.title }}</strong>
                                    <p>{{ service.detail }}</p>
                                </article>
                            </div>
                            <div class="info-keys">
                                <div v-for="key in work.keyAchievements" :key="key.heading">
                                    <p class="heading">{{ key.heading }}</p>
                                    <p class="detail">{{ key.detail }}</p>
                                </div>
                            </div>
                            <button class="content-action" @click="openDetail(work.detail)">
                                <OpenIcon class="icon open-icon" />
                                <span>주요 업무 내용 더보기</span>
                            </button>
                        </div>
                    </li>
                </ul>

                <div class="divider">
                    <span class="divider-text">Side Projects</span>
                </div>
                <ul>
                    <li v-for="proj in SIDE_PROJECTS" :key="proj.id">
                        <div class="info-item">
                            <div class="info-side">
                                <StarIcon class="icon status-icon" :class="{ active: proj.status === 'active' }" />
                                <span class="date">{{ proj.date }}</span>
                            </div>
                            <div class="info-content">
                                <span class="content-title">{{ proj.title }}</span>
                                <div class="skills-wrap">
                                    <span v-for="skill in proj.skills" :key="skill">{{ skill }}</span>
                                </div>
                                <button class="content-action" @click="toggleDetail(proj.id)">
                                    <ChevronIcon class="icon chevron-icon" :class="{ 'is-rotated': activeDetailId === proj.id }" />
                                    <span>주요 업무 내용 더보기</span>
                                </button>

                                <div class="detail-wrapper" :class="{ 'is-open': activeDetailId === proj.id }">
                                    <div class="info-card detail-inner">
                                        <p v-for="text in proj.detail" :key="text" class="dot-item">{{ text }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <ExpDetailPopup v-if="selectedItem" :data="selectedItem" @close="closeDetail" />
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { WORK_EXPERIENCE, SIDE_PROJECTS } from '@/constants/index'
import ExpDetailPopup from '@/components/ExpDetailPopup.vue'
import StarIcon from '@/assets/icons/star.svg'
import OpenIcon from '@/assets/icons/open.svg'
import ChevronIcon from '@/assets/icons/chevron.svg'

const selectedItem = ref(null)
const activeDetailId = ref(null)

const openDetail = (detail) => {
    selectedItem.value = detail
}
const closeDetail = () => {
    selectedItem.value = null
}
const toggleDetail = (id) => {
    activeDetailId.value = activeDetailId.value === id ? null : id
}
</script>

<style scoped>
.content-action {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: var(--point-color);
    font-size: 0.9rem;
}
.skills-wrap {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    color: var(--gray-color);
    text-align: left;
}
.info-card {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin: 12px 0px;
    padding: 1.25rem;
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.03);
    text-align: left;
    line-height: 1.3;
}
.info-keys {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: left;
    line-height: 1.3;
}
.service-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    width: 100%;
    margin: 0.4rem 0 1rem;
}
.service-card {
    padding: 1rem;
    border: 1px solid rgba(96, 165, 250, 0.18);
    border-radius: 0.65rem;
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.07), rgba(45, 212, 191, 0.035));
    text-align: left;
}
.service-card .service-period {
    display: block;
    margin-bottom: 0.35rem;
    color: var(--sub-point-color);
    font-size: 0.78rem;
}
.service-card strong {
    display: block;
    margin-bottom: 0.45rem;
    color: var(--text-color);
    font-size: 0.95rem;
}
.service-card p {
    color: var(--gray-color);
    font-size: 0.84rem;
    line-height: 1.6;
    word-break: keep-all;
}
.info-keys .heading {
    font-weight: 600;
}
.info-keys .detail {
    margin-left: 10px;
    color: var(--gray-color);
}

.status-icon.active {
    stroke: var(--point-color);
    filter: drop-shadow(0 0 5px rgba(74, 222, 128, 0.5));
}
.open-icon {
    width: 1.2rem;
    height: 1.2rem;
    stroke: var(--point-color);
}
.chevron-icon {
    stroke: var(--point-color);
    transition: transform 0.3s ease;
}
.chevron-icon.is-rotated {
    transform: rotate(90deg);
}

.detail-wrapper {
    max-height: 0;
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
}
.detail-wrapper.is-open {
    max-height: 31.25rem;
}
.detail-inner {
    padding: 1.25rem;
}

@media (max-width: 640px) {
    .info-card {
        padding: 1rem;
    }

    .service-list {
        grid-template-columns: 1fr;
    }

    .detail-wrapper.is-open {
        max-height: 80rem;
    }
}
</style>
