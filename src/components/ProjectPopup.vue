<template>
    <div class="modal-overlay" @click="$emit('close')">
        <div class="modal-content" @click.stop>
            <button class="close-btn" @click="$emit('close')">
                <CloseIcon class="icon" />
            </button>

            <div class="content-info">
                <div class="info-title">
                    <component :is="data.icon" />
                    <h3>{{ data.title }}</h3>
                </div>
                <div class="info-item">
                    <span class="item-title">프로젝트 설명</span>
                    <p class="item-txt">{{ data.desc }}</p>
                </div>
                <div class="info-item">
                    <span class="item-title">참여인원</span>
                    <p class="item-txt">{{ data.teamSize }}</p>
                </div>
                <div class="info-item">
                    <span class="item-title">기간</span>
                    <p class="item-txt">{{ data.period }}</p>
                </div>
                <div class="info-item">
                    <span class="item-title">링크</span>
                    <div class="item-txt link-list">
                        <div v-for="link in data.links" :key="link.url" class="link-item">
                            <LinkIcon />
                            <a :href="link.url" target="_blank">{{ link.txt }}</a>
                        </div>
                    </div>
                </div>
                <div class="info-item">
                    <span class="item-title">기술 스택</span>
                    <div>
                        <img v-for="stack in data.stacks" :src="stack.url" :alt="stack.title" :title="stack.title" />
                    </div>
                </div>
            </div>

            <hr />

            <div class="content-detail">
                <span>상세 내용</span>
                <ul>
                    <li v-for="detail in data.details" :key="detail.heading">
                        <p class="item-heading">{{ detail.heading }}</p>
                        <p v-for="value in detail.txt" :key="value" class="dot-item item-detail">{{ value }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import CloseIcon from '@/assets/icons/close.svg'
import LinkIcon from '@/assets/icons/link.svg'

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
})

defineEmits(['close'])
</script>

<style scoped>
.content-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.info-title {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    margin-bottom: 1rem;
    padding-right: 2rem;
}

.info-title svg {
    width: 1.5rem;
    height: 1.5rem;
}

.info-title h3 {
    color: var(--text-color);
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 0.02rem;
}

.info-item {
    display: grid;
    grid-template-columns: 6.2rem 1fr;
    align-items: start;
    gap: 1rem;
}
.info-item .item-title {
    display: inline-flex;
    align-items: center;
    min-height: 1.7rem;
    color: rgba(209, 213, 219, 0.75);
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.01em;
}
.info-item .item-txt {
    color: var(--text-color);
    font-size: 0.92rem;
    line-height: 1.7;
    word-break: keep-all;
}
.info-item .link-list {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}
.info-item img {
    width: 1.7rem;
    height: 1.7rem;
    margin-right: 0.45rem;
}

.link-item {
    display: flex;
    align-items: center;
    color: var(--sub-point-color);
    transition: opacity 0.2s ease;
    cursor: pointer;
}
.link-item:hover {
    opacity: 0.8;
    text-decoration: underline;
}
.link-item svg {
    width: 1rem;
    height: 1rem;
    margin-right: 0.3rem;
}
.link-item a {
    color: var(--sub-point-color);
    font-size: 0.88rem;
    font-weight: 500;
}

hr {
    margin: 2.5rem 0;
    border: none;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.content-detail {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}
.content-detail > span {
    font-size: 1.2rem;
    font-weight: 600;
}
.content-detail .item-heading {
    margin: 1rem 0 0.4rem;
    color: var(--text-color);
    font-weight: 600;
}
.content-detail .item-detail {
    margin-bottom: 0.08rem;
    color: var(--gray-color);
    font-weight: 400;
    line-height: 1.5;
}
.content-detail .dot-item::before {
    background: var(--text-color) !important;
}
</style>
