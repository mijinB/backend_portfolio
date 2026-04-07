<template>
    <div class="modal-overlay" @click="$emit('close')">
        <div class="modal-content" @click.stop>
            <div class="close-btn-wrap">
                <button class="close-btn" @click="$emit('close')">
                    <CloseIcon class="icon" />
                </button>
            </div>

            <div v-for="info in data" :key="info.mainTitle">
                <h3>{{ info.mainTitle }}</h3>
                <div v-for="project in info.subProjects" :key="project.subTitle" class="project-card">
                    <span class="sub-title">{{ project.subTitle }}</span>
                    <span class="period">{{ project.period }}</span>

                    <div class="task-box">
                        <span class="box-label">수행 업무</span>
                        <ul>
                            <li v-for="task in project.tasks" :key="task.heading" class="dot-item">
                                <p class="item-heading">{{ task.heading }}</p>
                                <p class="item-detail">{{ task.detail }}</p>
                            </li>
                        </ul>
                    </div>

                    <div class="task-box">
                        <span class="box-label">주요 성과</span>
                        <ul>
                            <li v-for="achievement in project.achievements" :key="achievement.heading" class="dot-item">
                                <p class="item-heading">{{ achievement.heading }}</p>
                                <p class="item-detail">{{ achievement.detail }}</p>
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

@media (max-width: 640px) {
    h3 {
        font-size: 1.05rem;
    }

    .project-card {
        padding: 1rem 1.1rem;
    }
    .project-card .sub-title {
        font-size: 0.92rem;
    }
}
</style>
