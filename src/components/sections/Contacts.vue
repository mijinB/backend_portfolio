<template>
    <section id="contacts">
        <div class="inner">
            <div class="section-header">
                <div class="section-desc">
                    <span>감사합니다.</span>
                    <span>더 궁금하신 점이 있으시면</span>
                    <span>편하게 연락해 주세요.</span>
                </div>
            </div>

            <ul class="contact-list">
                <li v-for="contact in CONTACTS" :key="contact.label" class="contact-card">
                    <a :href="contact.href" class="contact-card-link" :target="contact.external ? '_blank' : undefined" :rel="contact.external ? 'noreferrer' : undefined">
                        <span class="contact-label">{{ contact.label }}</span>
                        <div class="contact-link">
                            <span>{{ contact.value }}</span>
                            <OpenIcon class="icon contact-icon" />
                        </div>
                        <p class="contact-note">{{ contact.note }}</p>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { CONTACTS } from '@/constants/index'
import OpenIcon from '@/assets/icons/open.svg'
</script>

<style scoped>
.inner {
    padding-bottom: 8rem;
}

.section-desc {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    margin-bottom: 0;
}

.contact-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 2.5rem;
    text-align: left;
}
.contact-card {
    width: 30rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 1rem;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.035) 0%, rgba(255, 255, 255, 0.015) 100%);
    cursor: pointer;
    transition:
        transform 0.22s ease,
        border-color 0.22s ease,
        box-shadow 0.22s ease,
        background-color 0.22s ease;
}
.contact-card:hover {
    border-color: rgba(45, 212, 191, 0.35);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.18);
    transform: translateY(-4px);
}
.contact-card:active {
    transform: translateY(-1px);
}
.contact-card-link {
    display: block;
    padding: 1.5rem;
    color: var(--text-color);
}
.contact-label {
    color: var(--gray-color);
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.08rem;
    text-transform: uppercase;
}
.contact-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin: 0.9rem 0 0.7rem;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.4;
    transition: color 0.22s ease;
}
.contact-card:hover .contact-link {
    color: var(--point-color);
}
.contact-link span {
    word-break: break-all;
}
.contact-icon {
    width: 1.1rem;
    height: 1.1rem;
    flex-shrink: 0;
    stroke: currentColor;
}
.contact-note {
    color: var(--gray-color);
    line-height: 1.5;
    word-break: keep-all;
}
</style>
