<template>
    <section id="credentials">
        <div class="inner">
            <div class="section-header">
                <span class="section-title">CREDENTIALS</span>
                <p class="section-desc">학업과 자격 취득을 통해 쌓아온 역량과 성장의 과정입니다.</p>
            </div>

            <div>
                <div class="divider">
                    <span class="divider-text">Education</span>
                </div>
                <div class="info-item">
                    <div class="info-side">
                        <StarIcon class="icon status-icon" />
                        <span class="date">{{ EDUCATION.date }}</span>
                    </div>
                    <div class="info-content">
                        <span class="content-title">{{ EDUCATION.school }}</span>
                        <span class="content-subtitle">{{ EDUCATION.major }}</span>
                    </div>
                </div>

                <div class="divider">
                    <span class="divider-text">Certifications</span>
                </div>
                <ul>
                    <li v-for="cert in CERTIFICATIONS" :key="cert.name">
                        <div class="info-item">
                            <div class="info-side">
                                <StarIcon class="icon status-icon" :class="{ active: cert.status === 'active' }" />
                                <span class="date">{{ cert.date }}</span>
                            </div>
                            <div class="info-content">
                                <span class="content-title">{{ cert.name }}</span>
                                <span class="content-subtitle">{{ cert.issuer }}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { EDUCATION, CERTIFICATIONS } from '@/constants/index'
import StarIcon from '@/assets/icons/star.svg'
</script>

<style scoped>
.info-item .info-side {
    width: 11rem;
}
.info-item .info-content {
    width: 25rem;
}

ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

@media (max-width: 640px) {
    .info-item .info-side {
        width: auto;
    }
    .info-item .info-content {
        width: 100%;
    }

    ul {
        gap: 1.5rem;
    }
}
</style>
