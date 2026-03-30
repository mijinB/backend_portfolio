<template>
    <div class="modal-overlay" @click="$emit('close')">
        <div class="modal-content" @click.stop>
            <button class="close-btn" @click="$emit('close')">
                <CloseIcon class="icon" />
            </button>

            <div v-for="info in data" :key="info.mainTitle">
                <h3>{{ info.mainTitle }}</h3>
                <div v-for="project in info.subProjects" :key="project.subTitle" class="project-card">
                    <span class="sub-title">{{ project.subTitle }}</span>
                    <span class="period">{{ project.period }}</span>

                    <div class="task-box">
                        <span class="box-label">수행 업무</span>
                        <ul>
                            <li v-for="task in project.tasks" :key="task.heading">
                                <p class="item-heading">{{ task.heading }}</p>
                                <p v-for="value in task.detail" :key="value" class="item-detail">{{ value }}</p>
                            </li>
                        </ul>
                    </div>

                    <div class="task-box">
                        <span class="box-label">주요 성과</span>
                        <ul>
                            <li v-for="achievement in project.achievements" :key="achievement.heading">
                                <p class="item-heading">{{ achievement.heading }}</p>
                                <p v-for="value in achievement.detail" :key="value" class="item-detail">{{ value }}</p>
                            </li>
                        </ul>
                    </div>

                    <div class="stack-box">
                        <span class="box-label stack-label">사용 기술</span>
                        <p class="stack-text">{{ project.stacks }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import CloseIcon from '@/assets/icons/close.svg'

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
})

defineEmits(['close'])
</script>

<style scoped>
.modal-overlay {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    z-index: 1000;
    inset: 0;
    padding: 3rem 1rem;
    background-color: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(6px);
}
.modal-content {
    position: relative;
    width: 52rem;
    height: 60rem;
    padding: 2.5rem 2.5rem 2rem;
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 1rem;
    background-color: #0d1828;
    color: var(--text-color);
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--sub-point-color) transparent;
}
.modal-content::-webkit-scrollbar {
    width: 3px;
}
.modal-content::-webkit-scrollbar-track {
    background: transparent;
}
.modal-content::-webkit-scrollbar-thumb {
    background-color: var(--sub-point-color);
    border-radius: 99px;
}
.close-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    width: 2rem;
    height: 2rem;
    border-radius: 0.4rem;
    background-color: rgba(255, 255, 255, 0.05);
    transition: background-color 0.2s;
}
.close-btn:hover {
    background-color: rgba(45, 212, 191, 0.15);
}
.close-btn .icon {
    width: 1.1rem;
    height: 1.1rem;
    stroke: var(--text-color);
}

h3 {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 1.2rem;
    padding-bottom: 0.8rem;
    border-bottom: 1px solid var(--gray-color);
    color: var(--text-color);
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 0.02em;
}

.project-card {
    margin-bottom: 1.2rem;
    padding: 1.3rem 1.4rem;
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 0.75rem;
    background-color: rgba(255, 255, 255, 0.028);
}

.project-card .sub-title {
    display: block;
    margin-bottom: 0.3rem;
    color: var(--sub-point-color);
    font-size: 1rem;
    font-weight: 600;
}

.project-card .period {
    display: inline-block;
    margin-bottom: 1.1rem;
    color: var(--gray-color);
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 0.04em;
}

.project-card .box-label {
    display: inline-block;
    margin-bottom: 0.55rem;
    padding: 0.12rem 0.6rem;
    border: 1px solid rgba(45, 212, 191, 0.2);
    border-radius: 0.3rem;
    background: linear-gradient(135deg, rgba(45, 212, 191, 0.12), rgba(96, 165, 250, 0.08));
    color: var(--point-color);
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.05em;
}

.project-card .task-box {
    margin-bottom: 0.9rem;
}
.project-card .task-box ul li {
    position: relative;
    margin-bottom: 0.6rem;
    padding-left: 0.85rem;
}
.project-card .task-box ul li::before {
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
.project-card .task-box .item-heading {
    color: var(--text-color);
    font-size: 0.87rem;
    font-weight: 600;
    margin-bottom: 0.15rem;
}
.project-card .task-box .item-detail {
    margin-bottom: 0.08rem;
    color: var(--gray-color);
    font-size: 0.81rem;
    font-weight: 400;
    line-height: 1.65;
}

.project-card .stack-box {
    margin-top: 0.2rem;
}
.project-card .stack-box .stack-label {
    border-color: rgba(96, 165, 250, 0.22);
    background: linear-gradient(135deg, rgba(96, 165, 250, 0.12), rgba(45, 212, 191, 0.08));
    color: var(--sub-point-color);
}
.project-card .stack-box .stack-text {
    color: var(--text-color);
    font-size: 0.82rem;
    line-height: 1.7;
}
</style>
