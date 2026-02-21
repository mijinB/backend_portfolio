<template>
    <section>
        <div class="inner">
            <h1>기본부터 탄탄하게 고민하고 해결하는 개발자, <strong>백미진</strong>입니다.</h1>
            <p class="description">보이지 않는 곳의 완벽함이, 보이는 곳의 신뢰를 만든다고 믿습니다.</p>
            <a href="/resume.pdf" download="백미진_이력서.pdf" class="download-btn">
                이력서 다운로드
                <img src="@/assets/images/download.png" alt="download icon" />
            </a>
        </div>
    </section>
</template>

<script></script>

<style scoped>
h1 {
    margin-top: 5rem;
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
    background-color: color-mix(in srgb, var(--point-color), transparent 20%);
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
.download-btn {
    display: inline-block;
    margin-top: 2rem;
    padding: 0.5rem 1.3rem;
    border-radius: 0.5rem;
    background-color: #d1d5db1a;
    color: var(--text-color);
}
.download-btn:hover {
    background-color: #d1d5db36;
}
.download-btn img {
    vertical-align: sub;
    width: 1.2rem;
}
</style>
