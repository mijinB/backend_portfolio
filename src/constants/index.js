import { markRaw } from 'vue'

import JavaImg from '@/assets/images/skills/Java.png'
import SpringBootImg from '@/assets/images/skills/SpringBoot.png'
import JSPImg from '@/assets/images/skills/JSP.png'
import MyBatisImg from '@/assets/images/skills/MyBatis.png'
import JPAImg from '@/assets/images/skills/JPA.png'
import PythonImg from '@/assets/images/skills/Python.png'
import DjangoImg from '@/assets/images/skills/Django.png'
import JsonImg from '@/assets/images/skills/Json.png'
import SwaggerUIImg from '@/assets/images/skills/SwaggerUI.png'
import MySQLImg from '@/assets/images/skills/MySQL.png'
import MariaDBImg from '@/assets/images/skills/MariaDB.png'
import VueImg from '@/assets/images/skills/Vue.png'
import ReactImg from '@/assets/images/skills/React.png'
import ViteImg from '@/assets/images/skills/Vite.png'
import JavaScriptImg from '@/assets/images/skills/JavaScript.png'
import TypeScriptImg from '@/assets/images/skills/TypeScript.png'
import HTML5Img from '@/assets/images/skills/HTML5.png'
import CSS3Img from '@/assets/images/skills/CSS3.png'
import jQueryImg from '@/assets/images/skills/jQuery.png'
import AWSImg from '@/assets/images/skills/AWS.png'
import DBeaverImg from '@/assets/images/skills/DBeaver.png'
import HeidiSQLImg from '@/assets/images/skills/HeidiSQL.png'
import GitImg from '@/assets/images/skills/Git.png'
import GitHubImg from '@/assets/images/skills/GitHub.png'
import IntelliJImg from '@/assets/images/skills/IntelliJ.png'
import VSCodeImg from '@/assets/images/skills/VSCode.png'
import EclipseImg from '@/assets/images/skills/Eclipse.png'
import PostmanImg from '@/assets/images/skills/Postman.png'
import NotionImg from '@/assets/images/skills/Notion.png'
import SQLiteImg from '@/assets/images/skills/SQLite.png'
import BeautifulSoupImg from '@/assets/images/skills/BeautifulSoup.png'

import PlaneIcon from '@/assets/icons/plane.svg'
import MonitorIcon from '@/assets/icons/monitor.svg'
import CatIcon from '@/assets/icons/cat.svg'

export { WORK_EXPERIENCE } from './workExperience.js'

export const SKILL_CATEGORIES = ['ALL', 'BACKEND', 'DATABASE', 'FRONTEND', 'TOOLS & INFRA']

export const SKILL_SUMMARY = [
    { label: '백엔드 실무', value: 'Java · Spring Boot · MyBatis · MySQL/MariaDB · JSP' },
    { label: '프론트엔드 실무', value: 'Vue.js · JavaScript · jQuery · HTML/CSS · Vite' },
    { label: '서비스 운영', value: 'AWS S3/CloudFront · Git/GitHub · SQL 튜닝' },
]

export const SKILL_LOGOS = [
    {
        title: 'Java',
        url: JavaImg,
        type: 'BACKEND',
    },
    {
        title: 'SpringBoot',
        url: SpringBootImg,
        type: 'BACKEND',
    },
    {
        title: 'JSP',
        url: JSPImg,
        type: 'BACKEND',
    },
    {
        title: 'MyBatis',
        url: MyBatisImg,
        type: 'BACKEND',
    },
    {
        title: 'JPA',
        url: JPAImg,
        type: 'BACKEND',
    },
    {
        title: 'Python',
        url: PythonImg,
        type: 'BACKEND',
    },
    {
        title: 'Django',
        url: DjangoImg,
        type: 'BACKEND',
    },
    {
        title: 'RESTful API(JSON)',
        url: JsonImg,
        type: 'BACKEND',
    },
    {
        title: 'SwaggerUI',
        url: SwaggerUIImg,
        type: 'BACKEND',
    },
    {
        title: 'MySQL',
        url: MySQLImg,
        type: 'DATABASE',
    },
    {
        title: 'MariaDB',
        url: MariaDBImg,
        type: 'DATABASE',
    },
    {
        title: 'Vue',
        url: VueImg,
        type: 'FRONTEND',
    },
    {
        title: 'React',
        url: ReactImg,
        type: 'FRONTEND',
    },
    {
        title: 'Vite',
        url: ViteImg,
        type: 'FRONTEND',
    },
    {
        title: 'JavaScript(ES6+)',
        url: JavaScriptImg,
        type: 'FRONTEND',
    },
    {
        title: 'TypeScript',
        url: TypeScriptImg,
        type: 'FRONTEND',
    },
    {
        title: 'jQuery',
        url: jQueryImg,
        type: 'FRONTEND',
    },
    {
        title: 'HTML5',
        url: HTML5Img,
        type: 'FRONTEND',
    },
    {
        title: 'CSS3',
        url: CSS3Img,
        type: 'FRONTEND',
    },
    {
        title: 'AWS(EC2, S3, CloudFront)',
        url: AWSImg,
        type: 'TOOLS & INFRA',
    },
    {
        title: 'DBeaver',
        url: DBeaverImg,
        type: 'TOOLS & INFRA',
    },
    {
        title: 'HeidiSQL',
        url: HeidiSQLImg,
        type: 'TOOLS & INFRA',
    },
    {
        title: 'Git',
        url: GitImg,
        type: 'TOOLS & INFRA',
    },
    {
        title: 'GitHub',
        url: GitHubImg,
        type: 'TOOLS & INFRA',
    },
    {
        title: 'IntelliJ',
        url: IntelliJImg,
        type: 'TOOLS & INFRA',
    },
    {
        title: 'VSCode',
        url: VSCodeImg,
        type: 'TOOLS & INFRA',
    },
    {
        title: 'Eclipse',
        url: EclipseImg,
        type: 'TOOLS & INFRA',
    },
    {
        title: 'Postman',
        url: PostmanImg,
        type: 'TOOLS & INFRA',
    },
    {
        title: 'Notion',
        url: NotionImg,
        type: 'TOOLS & INFRA',
    },
]

export const SIDE_PROJECTS = [
    {
        id: 1,
        status: 'past',
        date: '2025.12.',
        title: 'Shopify 글로벌 커머스 테마 커스터마이징 및 섹션 개발',
        skills: ['Platform: Shopify Online Store 2.0', 'Languages: Liquid, JavaScript, HTML/CSS', 'Tools: Shopify CLI, Theme Library Management'],
        detail: [
            'Shopify Online Store 2.0 및 Liquid 엔진 기반의 네이티브 개발 방식을 적용하여 기존 테마와 100% 호환되는 고도화된 커스텀 섹션 구현',
            '이미지, 텍스트(색상/크기/정렬), 버튼 스타일(호버 효과 포함) 등 섹션의 모든 요소를 Shopify Admin UI에서 제어 가능하도록 매핑하여 운영자의 관리 자율성 확보',
            '스크롤 인터랙션이 가미된 "Sticky Image-Text" 교차 레이아웃을 두 개의 독립된 섹션으로 구조화하여 페이지 구성의 유연성과 시각적 완성도 동시 달성',
            'Shopify CLI를 활용한 개발 환경 구축부터 Unpublished 테마를 통한 안정적인 배포 및 라이브 전환 가이드 제공으로 외주 프로젝트의 프로세스 표준화 수립',
            '기존 브랜드 아이덴티티 유지를 위한 외부 폰트(Adobe Typekit) 연동 및 CSS 최적화 작업을 통해 디자인 일관성과 플랫폼 안정성 동시 확보',
        ],
    },
    {
        id: 2,
        status: 'past',
        date: '2025.11.',
        title: '전문 노무법인 공식 웹사이트 반응형 프론트엔드 개발',
        skills: ['Skills: React, Vite, Tailwind CSS, JavaScript', 'Tools: GitHub (README), ESLint, Prettier'],
        detail: [
            'React와 Vite를 활용한 개발 환경에서 Tailwind CSS의 중단점 시스템을 적용하여 기기별 최적화된 반응형 UI 구현',
            'UI 요소를 독립적인 React 컴포넌트 단위로 설계하여 반복되는 디자인의 재사용성을 높이고 유지보수 효율성을 극대화한 아키텍처 구축',
            'ESLint와 Prettier를 프로젝트에 도입하여 코드 스타일 가이드를 자동화하고 일관된 코드 품질 및 가독성 확보',
            'GitHub README를 통해 개발 스펙 및 컴포넌트 사용 가이드를 상세히 문서화하여 전달함으로써 프로젝트 인수인계 및 운영 연속성 보장',
        ],
    },
]

export const PROJECTS = [
    {
        icon: CatIcon,
        title: 'PlanPad (플랜패드)',
        desc: '개인 맞춤형 일정 관리와 태그 기반 메모를 제공하는 웹 애플리케이션',
        skills: [
            {
                title: 'Java',
                url: JavaImg,
            },
            {
                title: 'SpringBoot',
                url: SpringBootImg,
            },
            {
                title: 'JPA',
                url: JPAImg,
            },
            {
                title: 'MySQL',
                url: MySQLImg,
            },
            {
                title: 'AWS(EC2)',
                url: AWSImg,
            },
            {
                title: 'SwaggerUI',
                url: SwaggerUIImg,
            },
        ],
        detail: {
            icon: markRaw(CatIcon),
            title: 'PlanPad (플랜패드)',
            desc: '개인 맞춤형 일정 관리와 태그 기반 메모를 제공하는 웹 애플리케이션',
            teamSize: '2명',
            period: '2024.12. - 2025.04.',
            links: [
                {
                    url: 'https://github.com/mijinB/planpad',
                    txt: 'GitHub Repository',
                },
            ],
            skills: [
                {
                    title: 'Java',
                    url: JavaImg,
                },
                {
                    title: 'SpringBoot',
                    url: SpringBootImg,
                },
                {
                    title: 'JPA',
                    url: JPAImg,
                },
                {
                    title: 'MySQL',
                    url: MySQLImg,
                },
                {
                    title: 'AWS(EC2)',
                    url: AWSImg,
                },
                {
                    title: 'SwaggerUI',
                    url: SwaggerUIImg,
                },
            ],
            details: [
                {
                    heading: '1. 확장성 있는 레이어드 아키텍처 및 데이터 모델링',
                    txt: [
                        'Controller-Service-Domain-Repository 계층을 분리해 비즈니스 로직과 데이터 접근 책임을 구분',
                        'Enum을 적극 활용하여 일부 데이터를 상수로 관리함으로써 런타임 에러 방지, 데이터 무결성 상승, 타입 안정성 확보',
                        '모든 API 통신에 Request/Response DTO를 적용하여 엔티티 노출을 차단하고, 필요한 데이터만 전송하여 네트워크 오버헤드 감소',
                    ],
                },
                {
                    heading: '2. 견고한 보안 및 인증 시스템 구축 (Spring Security & JWT)',
                    txt: [
                        'requestMatchers를 통해 인가된 사용자만 특정 자원에 접근할 수 있도록 화이트리스트 기반 보안 설정 구현',
                        'JWT Blacklist Service를 구현하여 로그아웃된 토큰의 재사용 원천 차단, Stateless 인증 방식의 보안 취약점 보완',
                        '24시간의 토큰 유효기간 설정을 통해 사용자 편의성과 보안성 사이의 균형을 맞춘 인증 프로세스 설계',
                    ],
                },
                {
                    heading: '3. 일관된 인터페이스 제공 및 협업 도구 활용',
                    txt: [
                        '@RestControllerAdvice를 활용하여 모든 에러 응답을 일관된 JSON 형식으로 반환, 프론트엔드 개발자가 예측 가능하도록 에러 처리 지원',
                        'SwaggerUI(OpenAPI 3.0)를 도입하여 프론트엔드 개발자와의 커뮤니케이션 비용 절감, 실시간 API 테스트 환경 제공',
                    ],
                },
                {
                    heading: '4. 클라우드 인프라 배포 및 운영 경험',
                    txt: ['AWS EC2를 활용하여 리눅스 환경에서 애플리케이션 배포', '백그라운드 프로세스를 관리하여 서비스가 24시간 중단 없이 가동될 수 있도록 가용성 확보 및 서버 안정성 확보'],
                },
            ],
        },
    },
    {
        icon: PlaneIcon,
        title: 'Airbnb-Clone Service',
        desc: 'Django와 React로 구현한 숙소 예약 및 커뮤니티 플랫폼',
        skills: [
            {
                title: 'Python',
                url: PythonImg,
            },
            {
                title: 'Django',
                url: DjangoImg,
            },
            {
                title: 'React',
                url: ReactImg,
            },
            {
                title: 'SQLite',
                url: SQLiteImg,
            },
        ],
        detail: {
            icon: markRaw(PlaneIcon),
            title: 'Airbnb-Clone Service',
            desc: 'Django와 React로 구현한 숙소 예약 및 커뮤니티 플랫폼',
            teamSize: '1명',
            period: '2024.06. - 2024.07. (4주 과정)',
            links: [
                {
                    url: 'https://github.com/mijinB/airbnb_clone_backend',
                    txt: 'GitHub Repository (Backend)',
                },
                {
                    url: 'https://github.com/mijinB/airbnb_clone_frontend',
                    txt: 'GitHub Repository (Frontend)',
                },
            ],
            skills: [
                {
                    title: 'Python',
                    url: PythonImg,
                },
                {
                    title: 'Django',
                    url: DjangoImg,
                },
                {
                    title: 'React',
                    url: ReactImg,
                },
                {
                    title: 'SQLite',
                    url: SQLiteImg,
                },
            ],
            details: [
                {
                    heading: '1. Django REST Framework 기반의 데이터 설계 및 API 구축',
                    txt: [
                        '숙소, 예약, 리뷰 등 다대다(M:N) 및 일대다(1:N) 관계를 명확히 정의하여 데이터 무결성을 유지하는 아키텍처 설계',
                        '프론트엔드와 효율적으로 데이터를 주고받기 위한 리소스 중심의 RESTful API를 설계하고, Django의 Serializer를 통해 효율적인 데이터 변환 처리 수행',
                    ],
                },
                {
                    heading: '2. 보안 및 사용자 인증 시스템 고도화',
                    txt: [
                        'Session 및 JWT 기반 인증과 더불어 소셜 로그인(Kakao, Google) 연동을 통해 사용자 접근성 향상 및 보안성 강화',
                        '소유자만 숙소 정보를 수정하거나 리뷰를 관리할 수 있도록 서버 측 권한 검증 로직 적용',
                    ],
                },
                {
                    heading: '3. React & Chakra UI 기반의 반응형 프론트엔드 구축',
                    txt: [
                        'Chakra UI를 활용하여 디자인 시스템의 일관성을 유지하고, 모바일과 데스크탑 환경에 모두 대응하는 반응형 레이아웃 구현',
                        'React Query 등을 활용하여 서버 데이터 상태를 효율적으로 관리하고 사용자에게 끊김 없는 데이터 로딩 경험 제공',
                    ],
                },
            ],
        },
    },
    {
        icon: MonitorIcon,
        title: 'Web Scraper & Flask Server',
        desc: '다중 채용 플랫폼의 채용 공고를 실시간 수집·정제해 제공하는 구직 정보 아카이빙 플랫폼',
        skills: [
            {
                title: 'Python',
                url: PythonImg,
            },
            {
                title: 'BeautifulSoup',
                url: BeautifulSoupImg,
            },
        ],
        detail: {
            icon: markRaw(MonitorIcon),
            title: 'Web Scraper & Flask Server',
            desc: '다중 채용 플랫폼의 채용 공고를 실시간 수집·정제해 제공하는 구직 정보 아카이빙 플랫폼',
            teamSize: '1명',
            period: '2024.06. (2주 과정)',
            links: [
                {
                    url: 'https://github.com/mijinB/web_scrapper_challenges',
                    txt: 'GitHub Repository',
                },
            ],
            skills: [
                {
                    title: 'Python',
                    url: PythonImg,
                },
                {
                    title: 'BeautifulSoup',
                    url: BeautifulSoupImg,
                },
            ],
            details: [
                {
                    heading: '1. 다중 소스 대상 실시간 크롤링 엔진 구축',
                    txt: ['BeautifulSoup4와 Requests를 활용하여 각기 다른 HTML 구조를 가진 3개 이상의 글로벌 채용 플랫폼에서 데이터를 추출하는 로직 구현'],
                },
                {
                    heading: '2. 비정형 데이터의 구조화 및 정제',
                    txt: ['웹 사이트별로 상이한 태그 구조에서 직무명, 회사명, 상세 링크 등 핵심 정보만을 파싱하여 파이썬 Dictionary 기반의 정형 데이터셋으로 변환'],
                },
                {
                    heading: '3. On-demand 방식의 데이터 서빙 레이어 구현',
                    txt: ['Flask 프레임워크를 활용하여 사용자 요청 시점에 즉시 크롤링을 수행하고, 결과를 웹 인터페이스로 서빙하는 실시간 응답 구조 설계'],
                },
            ],
        },
    },
]

export const EDUCATION = {
    date: '2017.03. - 2021.02.',
    school: '원광대학교',
    major: '컴퓨터소프트웨어공학과 졸업',
}

export const CERTIFICATIONS = [
    {
        date: '2020.12.',
        name: '정보처리기사',
        issuer: '한국산업인력공단',
    },
    {
        date: '2024.09.',
        name: 'SQL개발자(SQLD)',
        issuer: '한국데이터베이스진흥센터',
    },
    {
        date: '2025.12.',
        name: '정보통신기술자경력수첩(중급)',
        issuer: '한국정보통신공사협회',
    },
    {
        date: '2021.02.',
        name: '컴퓨터활용능력1급',
        issuer: '대한상공회의소',
    },
    {
        date: '2020.08.',
        name: 'ICDL Start Certification',
        issuer: '한국생산성본부',
    },
]

export const CONTACTS = [
    {
        label: 'Email',
        value: 'bmj13465@gmail.com',
        href: 'mailto:bmj13465@gmail.com',
        note: '가장 빠르게 확인하는 연락 수단입니다.',
        external: false,
    },
    {
        label: 'GitHub',
        value: '@mijinB',
        href: 'https://github.com/mijinB',
        note: '프로젝트 코드와 작업 흔적을 확인하실 수 있습니다.',
        external: true,
    },
]
