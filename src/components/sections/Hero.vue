<template>
    <section>
        <div class="inner">
            <span class="eyebrow">BACKEND-FOCUSED FULL-STACK DEVELOPER</span>
            <h1>기본부터 탄탄하게 고민하고 해결하는 개발자, <strong>백미진</strong>입니다.</h1>
            <p class="description">보이지 않는 곳의 완벽함이, 보이는 곳의 신뢰를 만든다고 믿습니다.</p>
            <div class="proof-list" aria-label="주요 경력 요약">
                <span><strong>70%</strong> 대시보드 TTFB 개선</span>
                <span><strong>10+→약 5명</strong> 신학기 임시 운영 인력 감소 기여</span>
                <span><strong>1인 개발</strong> 누리알리미 웹 서비스</span>
            </div>
            <a href="/resume.pdf" download="백미진_이력서.pdf" class="download-btn">
                이력서 다운로드
                <DownloadIcon />
            </a>
        </div>
    </section>
</template>

<script setup>
import DownloadIcon from '@/assets/icons/download.svg'
</script>

<style scoped>
.eyebrow {
    display: inline-block;
    margin-top: 4rem;
    color: var(--point-color);
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.14em;
}
h1 {
    margin-top: 1.2rem;
    color: var(--text-color);
    font-size: 3rem;
    line-height: 1.4;
    letter-spacing: 0.3rem;
}
h1 > strong {
    position: relative;
}
h1 > strong::after {
    display: inline-block;
    position: absolute;
    bottom: 0.2rem;
    left: -0.15rem;
    z-index: -1;
    width: 100%;
    height: 1.3rem;
    border-radius: 0.8rem;
    background-color: color-mix(in srgb, var(--sub-point-color), transparent 20%);
    content: '';
}
.description {
    margin-top: 1.5rem;
    color: #9ca3af;
    font-size: 1.15rem;
    font-weight: 400;
    line-height: 1.6;
    word-break: keep-all;
}
.proof-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.7rem;
    margin-top: 1.6rem;
}
.proof-list span {
    padding: 0.55rem 0.9rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 99px;
    background: rgba(255, 255, 255, 0.025);
    color: var(--gray-color);
    font-size: 0.86rem;
}
.proof-list strong {
    margin-right: 0.25rem;
    color: var(--text-color);
}
.download-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-top: 2rem;
    padding: 0.5rem 1.3rem;
    border-radius: 0.5rem;
    background-color: #d1d5db1a;
    color: var(--text-color);
}
.download-btn:hover {
    background-color: #d1d5db36;
}
.download-btn svg {
    flex-shrink: 0;
    width: 1.2rem;
}

@media (max-width: 640px) {
    .eyebrow {
        margin-top: 2rem;
        font-size: 0.72rem;
    }
    h1 {
        margin-top: 1rem;
        font-size: 1.9rem;
        word-break: keep-all;
        letter-spacing: 0.05rem;
    }
    h1 > strong::after {
        bottom: 0.1rem;
        height: 1rem;
    }
    .description {
        font-size: 1rem;
    }
    .proof-list {
        align-items: stretch;
        flex-direction: column;
    }
    .download-btn {
        margin-top: 1.5rem;
    }
}

@media (max-width: 768px) and (min-width: 641px) {
    h1 {
        font-size: 2.3rem;
        letter-spacing: 0.1rem;
    }
}
</style>
