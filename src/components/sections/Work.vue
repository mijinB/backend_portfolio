<template>
    <section id="works">
        <div class="inner">
            <div class="section-header">
                <span class="section-title">WORKS</span>
                <p class="section-desc">실무에서의 문제 해결과 개인적인 기술 탐구 과정을 담은 프로젝트 이력입니다.</p>
            </div>

            <div>
                <div class="divider">
                    <span class="divider-text">Works Experience</span>
                </div>
                <ul>
                    <li v-for="work in WORK_EXPERIENCE" class="info-item">
                        <div class="info-side">
                            <StarIcon class="icon status-icon" :class="{ active: work.status === 'active' }" />
                            <span class="date">{{ work.date }}</span>
                        </div>
                        <div class="info-content">
                            <span class="content-title">{{ work.company }}</span>
                            <p class="content-subtitle">{{ work.brief }}</p>
                            <div class="info-card">
                                <span v-for="stack in work.stacks">{{ stack }}</span>
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
                    <li v-for="proj in SIDE_PROJECTS">
                        <div class="info-item">
                            <div class="info-side">
                                <StarIcon class="icon status-icon" :class="{ active: proj.status === 'active' }" />
                                <span class="date">{{ proj.date }}</span>
                            </div>
                            <div class="info-content">
                                <span class="content-title">{{ proj.title }}</span>
                                <div class="stack-wrap">
                                    <span v-for="stack in proj.stacks">{{ stack }}</span>
                                </div>
                                <button class="content-action" @click="toggleDetail(proj.id)">
                                    <ChevronIcon class="icon chevron-icon" :class="{ 'is-rotated': activeDetailId === proj.id }" />
                                    <span>주요 업무 내용 더보기</span>
                                </button>

                                <div class="detail-wrapper" :class="{ 'is-open': activeDetailId === proj.id }">
                                    <div class="info-card detail-inner">
                                        <p v-for="text in proj.detail">{{ text }}</p>
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
import { WORK_EXPERIENCE, SIDE_PROJECTS } from '@/constants/index'
import { ref } from 'vue'
import ExpDetailPopup from '../ExpDetailPopup.vue'
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
.info-item {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
}
.info-item .info-side {
    display: flex;
    align-items: center;
    gap: 0.3rem;
}
.info-item .info-side .date {
    color: var(--gray-color);
}
.info-item .info-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    width: 31.25rem;
}
.info-item .content-title {
    font-size: 1.2rem;
    font-weight: 600;
}
.info-item .content-subtitle {
    color: var(--gray-color);
}
.content-action {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: var(--point-color);
    font-size: 0.9rem;
}
.stack-wrap {
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
    padding: 1.25rem;
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.03);
    text-align: left;
    line-height: 1.3;
}
.info-card p {
    position: relative;
    margin-bottom: 0.6rem;
    padding-left: 0.85rem;
}
.info-card p::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5em;
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    background: var(--point-color);
    opacity: 0.6;
}

.status-svg {
    width: 1.25rem;
    height: 1.25rem;
}
.icon {
    width: 1.5rem;
    height: 1.5rem;
    stroke: var(--point-color);
}
.status-icon {
    stroke: var(--gray-color);
}
.status-icon.active {
    stroke: var(--point-color);
    filter: drop-shadow(0 0 5px rgba(74, 222, 128, 0.5));
}
.open-icon {
    width: 1.2rem;
    height: 1.2rem;
}
.chevron-icon {
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
</style>
