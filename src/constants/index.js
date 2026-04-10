import JavaImg from '@/assets/images/stack/Java.png'
import SpringBootImg from '@/assets/images/stack/SpringBoot.png'
import PythonImg from '@/assets/images/stack/Python.png'
import DjangoImg from '@/assets/images/stack/Django.png'
import MyBatisImg from '@/assets/images/stack/MyBatis.png'
import JSPImg from '@/assets/images/stack/JSP.png'
import MySQLImg from '@/assets/images/stack/MySQL.png'
import AWSImg from '@/assets/images/stack/AWS.png'
import VueImg from '@/assets/images/stack/Vue.png'
import ReactImg from '@/assets/images/stack/React.png'
import ViteImg from '@/assets/images/stack/Vite.png'
import JavaScriptImg from '@/assets/images/stack/JavaScript.png'
import TypeScriptImg from '@/assets/images/stack/TypeScript.png'
import HTML5Img from '@/assets/images/stack/HTML5.png'
import CSS3Img from '@/assets/images/stack/CSS3.png'
import jQueryImg from '@/assets/images/stack/jQuery.png'
import GitImg from '@/assets/images/stack/Git.png'
import GitHubImg from '@/assets/images/stack/GitHub.png'
import IntelliJImg from '@/assets/images/stack/IntelliJ.png'
import VSCodeImg from '@/assets/images/stack/VSCode.png'
import EclipseImg from '@/assets/images/stack/Eclipse.png'
import JPAImg from '@/assets/images/stack/JPA.png'
import SwaggerImg from '@/assets/images/stack/Swagger.png'
import SQLiteImg from '@/assets/images/stack/SQLite.png'
import BeautifulSoupImg from '@/assets/images/stack/BeautifulSoup.png'

import NoteIcon from '@/assets/icons/note.svg'
import PlaneIcon from '@/assets/icons/plane.svg'
import MonitorIcon from '@/assets/icons/monitor.svg'
import CatIcon from '@/assets/icons/cat.svg'

export const STACK_CATEGORIES = ['ALL', 'BACKEND', 'DB & INFRA', 'FRONTEND', 'TOOLS']

export const STACK_LOGOS = [
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
        title: 'MyBatis',
        url: MyBatisImg,
        type: 'BACKEND',
    },
    {
        title: 'JSP',
        url: JSPImg,
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
        title: 'MySQL',
        url: MySQLImg,
        type: 'DB & INFRA',
    },
    {
        title: 'AWS',
        url: AWSImg,
        type: 'DB & INFRA',
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
        title: 'JavaScript',
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
        title: 'Git',
        url: GitImg,
        type: 'TOOLS',
    },
    {
        title: 'GitHub',
        url: GitHubImg,
        type: 'TOOLS',
    },
    {
        title: 'IntelliJ',
        url: IntelliJImg,
        type: 'TOOLS',
    },
    {
        title: 'VSCode',
        url: VSCodeImg,
        type: 'TOOLS',
    },
    {
        title: 'Eclipse',
        url: EclipseImg,
        type: 'TOOLS',
    },
]

export const WORK_EXPERIENCE = [
    {
        status: 'active',
        date: '2023.11. - 현재',
        company: '제이티통신(아이알리미)',
        brief: '국내 1위 자녀 안심망 서비스 (누적 가입자 170만 명)',
        stacks: ['Backend & DB: Java, Spring Boot, MyBatis, JSP, MySQL, AWS', 'Frontend: Vue, Vite, JavaScript, jQuery, HTML5, CSS3', 'Tools: Git, GitHub, IntelliJ, VSCode, Eclipse'],
        detail: [
            {
                mainTitle: '1. 비즈니스 로직 설계 및 운영 자동화',
                subProjects: [
                    {
                        period: '2026.02. - 2026.04.',
                        subTitle: '시스템 성능 최적화 및 트랜잭션 안정성 개선',
                        tasks: [
                            {
                                heading: '통계성 조회 쿼리 성능 개선',
                                detail: '중복 통계 조회 제거, GROUP BY 기반 쿼리 통합, 상관 서브쿼리 제거를 통해 대시보드 응답 성능을 개선했습니다.',
                            },
                            {
                                heading: '집계 쿼리 구조 최적화',
                                detail: 'NOT EXISTS 기반 반복 검사와 중복 스캔 구조를 CTE, LEFT JOIN, CASE WHEN 방식으로 재구성해 DB 부하를 줄였습니다.',
                            },
                            {
                                heading: 'DB 락 경합 완화',
                                detail: 'INSERT ... SELECT, UPDATE ... JOIN 등 락 유발 가능성이 높은 쿼리를 분석하고 일부 고위험 구간을 개선했습니다.',
                            },
                            {
                                heading: '동시성 제어 방식 개선',
                                detail: '중복 요청 차단 UI를 적용하고 불필요한 FOR UPDATE 사용을 제거해 잠금 점유를 완화했습니다.',
                            },
                        ],
                        achievements: [
                            {
                                heading: '대시보드 응답 속도 개선',
                                detail: '운영 환경 기준 TTFB를 3.01s에서 887.19ms로, LCP를 3.8초에서 1.7초 수준으로 개선했습니다.',
                            },
                            {
                                heading: 'DB 부하 및 락 대기 감소',
                                detail: '반복 조회와 불필요한 잠금 구조를 개선해 테이블 락 대기와 응답 지연 현상을 완화했습니다.',
                            },
                        ],
                        stacks: 'Java / Spring Boot / SQL / MyBatis',
                    },
                    {
                        period: '2024.07. - 현재',
                        subTitle: '전사 CS 통합 관리 플랫폼 구축 및 운영 프로세스 고도화',
                        tasks: [
                            {
                                heading: '서버 사이드 방어 로직 구축',
                                detail: '최종 처리 직전 DB 상태를 재검증하는 이중 검증 로직을 적용해 상태 불일치로 인한 부정 수정과 레이스 컨디션을 방지했습니다.',
                            },
                            {
                                heading: '분산 리소스 트랜잭션 정합성 확보',
                                detail: 'AWS S3 파일 삭제 실패가 DB 트랜잭션에 반영되지 않던 문제를 명시적 예외 처리로 개선했습니다.',
                            },
                            {
                                heading: '파일 처리 로직 공통 모듈화',
                                detail: '파편화된 업로드·수정 로직을 공통 모듈로 분리해 재사용성과 유지보수성을 높였습니다.',
                            },
                            {
                                heading: '민원 답변 자동화 기능 구축',
                                detail: '표준 답변 데이터를 연동해 반복 민원에 빠르게 대응할 수 있는 자동 답변 기능을 구현했습니다.',
                            },
                        ],
                        achievements: [
                            {
                                heading: '데이터 무결성 강화',
                                detail: '서버 사이드 검증 강화를 통해 비정상 데이터 변경과 리소스 불일치 리스크를 줄였습니다.',
                            },
                            {
                                heading: '운영 공수 절감',
                                detail: '사용자 자가 처리 기능과 자동화 도구를 통해 상담 및 운영 리드타임을 단축했습니다.',
                            },
                        ],
                        stacks: 'Java / Spring Boot / SQL / MyBatis / AWS / JSP / JavaScript / jQuery / HTML / CSS',
                    },
                    {
                        period: '2025.02. - 현재',
                        subTitle: '전사 운영 관리 시스템(CMS) 고도화 및 API 표준화',
                        tasks: [
                            {
                                heading: '운영 데이터 관리 시스템화',
                                detail: '하드코딩으로 관리되던 약관, FAQ, 공지사항 일부 영역을 CMS에서 직접 관리할 수 있도록 개편했습니다.',
                            },
                            {
                                heading: 'DB 스키마 및 API 표준화',
                                detail: '여러 서비스가 동일한 인터페이스로 사용할 수 있도록 DB 구조와 API 호출 체계를 표준화했습니다.',
                            },
                            {
                                heading: '데이터 코드화 및 마이그레이션',
                                detail: '혼용되던 단말기 관련 데이터를 코드 체계로 정비하고 기존 데이터를 일괄 마이그레이션했습니다.',
                            },
                        ],
                        achievements: [
                            {
                                heading: '운영 자율성 확보',
                                detail: '운영팀이 개발자 개입 없이 주요 운영 데이터를 직접 관리할 수 있는 환경을 구축했습니다.',
                            },
                            {
                                heading: '데이터 일관성 향상',
                                detail: '관리 기준을 표준화해 검색, 필터링, 서비스 간 연동의 신뢰도를 높였습니다.',
                            },
                        ],
                        stacks: 'Java / Spring Boot / SQL / MyBatis / JSP / Vue.js / JavaScript / jQuery / HTML / CSS',
                    },
                    {
                        period: '2025.09. - 2026.02.',
                        subTitle: '전자출결 단말기 재발급 프로세스 자동화',
                        tasks: [
                            {
                                heading: '재발급 자동 검증 로직 개발',
                                detail: '시스템 데이터를 기반으로 사용자가 재발급 가능 여부를 실시간으로 확인할 수 있는 자동 검증 로직을 구현했습니다.',
                            },
                            {
                                heading: '예외 사유 안내 처리',
                                detail: '재발급 불가 사유를 명확히 안내해 불필요한 CS 문의를 줄일 수 있도록 했습니다.',
                            },
                            {
                                heading: '운영 전달 프로세스 자동화',
                                detail: '검증 완료 건이 운영 배송 단계로 바로 이어지도록 처리 흐름을 설계했습니다.',
                            },
                        ],
                        achievements: [
                            {
                                heading: '수동 검토 공정 축소',
                                detail: '적격성 검토 과정 자동화를 통해 신청부터 처리까지의 운영 리드타임을 단축했습니다.',
                            },
                            {
                                heading: '휴먼 에러 감소',
                                detail: '수기 판단과 접수 과정에서 발생할 수 있는 입력 오류와 처리 누락을 줄였습니다.',
                            },
                        ],
                        stacks: 'Java / Spring Boot / SQL / MyBatis / JSP / JavaScript / jQuery / HTML / CSS',
                    },
                    {
                        period: '2024.10. - 2026.01.',
                        subTitle: '공통 서류 발급 서비스 구축 및 고도화',
                        tasks: [
                            {
                                heading: '동적 문서 생성 로직 구현',
                                detail: '사용자 입력 데이터를 서식에 바인딩해 견적서 및 증빙 서류를 PDF와 HWP 형식으로 실시간 생성하는 기능을 구현했습니다.',
                            },
                            {
                                heading: '운영 관리 도구 개발',
                                detail: '운영팀이 서류 양식을 직접 등록·관리할 수 있는 관리 기능과 스토리지 연동 구조를 구축했습니다.',
                            },
                            {
                                heading: '서비스 확장 적용',
                                detail: '기존 로직을 모듈화해 다른 서비스에서도 재사용 가능하도록 확장했습니다.',
                            },
                        ],
                        achievements: [
                            {
                                heading: '문서 발급 자동화',
                                detail: '수기 작성 중심이던 서류 발급 과정을 자동화해 처리 시간을 크게 단축했습니다.',
                            },
                            {
                                heading: '운영 정확도 향상',
                                detail: '데이터 자동 바인딩을 통해 오기입과 재발급 요청을 줄였습니다.',
                            },
                        ],
                        stacks: 'Java / Spring Boot / SQL / MyBatis / JSP / JavaScript / jQuery / HTML / CSS',
                    },
                    {
                        period: '2026.03. - 2026.04.',
                        subTitle: '분실 단말기 조회 기능 신규 구축',
                        tasks: [
                            {
                                heading: '학교 및 단말기 상태 기준 조회 로직 구현',
                                detail: '학교 소속과 단말기 상태에 따라 학생 정보 노출 여부를 분기 처리하는 조회 기능을 구현했습니다.',
                            },
                            {
                                heading: '운영 예외 케이스 반영',
                                detail: '돌봄·늘봄교실 단말기, 삭제 단말기 복구 사례 등 실제 운영 상황을 조회 조건에 반영했습니다.',
                            },
                            {
                                heading: '입력값 검증 강화',
                                detail: '카드번호 자릿수 검증과 12자리 입력 시 9자리 기준 조회 로직을 적용해 오입력을 방지했습니다.',
                            },
                        ],
                        achievements: [
                            {
                                heading: '현장 대응 정확도 향상',
                                detail: '운영 정책과 예외 상황을 반영한 조회 기능을 구축해 단말기 문의 대응의 정확도를 높였습니다.',
                            },
                        ],
                        stacks: 'Java / Spring Boot / SQL / MyBatis / JSP / JavaScript / jQuery / HTML / CSS',
                    },
                    {
                        period: '2026.03.',
                        subTitle: '운영사이트 멀티 서비스 관리 기능 확장',
                        tasks: [
                            {
                                heading: '멀티 서비스 운영 구조 확장',
                                detail: '기존 단일 서비스 운영 구조를 신규 서비스까지 함께 관리할 수 있도록 확장했습니다.',
                            },
                            {
                                heading: '서비스별 게시물 관리 기능 구현',
                                detail: '공지사항과 FAQ에 서비스별 등록, 전체 등록, 서비스별 조회 기능을 추가했습니다.',
                            },
                            {
                                heading: '서비스 소속 기준 노출 정책 적용',
                                detail: '기관별 화면에서 소속 서비스에 해당하는 게시물만 노출되도록 분기 처리했습니다.',
                            },
                        ],
                        achievements: [
                            {
                                heading: '운영 확장성 확보',
                                detail: '신규 서비스 추가 시에도 기존 운영사이트 안에서 통합 관리가 가능하도록 기반을 마련했습니다.',
                            },
                        ],
                        stacks: 'Java / Spring Boot / SQL / MyBatis / Database / JSP / JavaScript / jQuery / HTML / CSS',
                    },
                    {
                        period: '2024.02. - 2024.06.',
                        subTitle: '교육 플랫폼 운영 관리 및 고객 지원 UI 구축',
                        tasks: [
                            {
                                heading: '고객 지원 및 운영 관리 화면 구축',
                                detail: '사용자가 문의를 접수하고 처리 현황을 확인할 수 있는 Helpdesk 화면과 관리자용 운영 화면을 구현했습니다.',
                            },
                            {
                                heading: '민원 현황 조회 및 데이터 바인딩 구현',
                                detail: '운영자가 민원 현황을 빠르게 확인하고 관리할 수 있도록 조회 화면과 데이터 연동 로직을 개발했습니다.',
                            },
                            {
                                heading: '세션 유지 및 데이터 보호 처리',
                                detail: '새로고침 시 프로세스가 끊기지 않도록 세션 유지 로직을 적용하고, 개인정보 보호를 위한 암호화 처리를 구현했습니다.',
                            },
                        ],
                        achievements: [
                            {
                                heading: '운영 관리 효율 향상',
                                detail: '관리자 중심의 운영 화면을 구축하여 민원 처리 및 현황 파악의 편의성을 높였습니다.',
                            },
                            {
                                heading: '서비스 안정성 강화',
                                detail: '세션 유지 및 데이터 보호 로직을 적용해 운영 중 단절 이슈를 줄이고 서비스 신뢰도를 높였습니다.',
                            },
                        ],
                        stacks: 'Vue.js / JavaScript / HTML / CSS',
                    },
                    {
                        period: '2023.11. - 2024.02.',
                        subTitle: '공식 홈페이지 리뉴얼 및 운영 고도화',
                        tasks: [
                            {
                                heading: '공식 홈페이지 리뉴얼',
                                detail: '최신 웹 트렌드를 반영해 공식 홈페이지의 화면 구조와 사용자 경험을 전면 개편했습니다.',
                            },
                            {
                                heading: '빌드 및 리소스 로딩 환경 개선',
                                detail: 'Webpack 설정을 정비하고 SVG 로더 및 리소스 로딩 구조를 개선해 운영 및 유지보수 편의성을 높였습니다.',
                            },
                            {
                                heading: '프론트·백엔드 통합 유지보수',
                                detail: '런칭 이후 프론트엔드 기능 개선뿐 아니라 백엔드 API 및 DB 관리까지 함께 수행하며 안정적인 운영을 지원했습니다.',
                            },
                        ],
                        achievements: [
                            {
                                heading: '운영 안정성 확보',
                                detail: '프론트와 백엔드를 함께 관리하며 장애 대응과 기능 개선 속도를 높였습니다.',
                            },
                            {
                                heading: '유지보수 효율 향상',
                                detail: '빌드 환경과 리소스 관리 구조를 정비해 이후 운영 및 개선 작업의 생산성을 높였습니다.',
                            },
                        ],
                        stacks: 'Java / Spring Boot / SQL / MyBatis / Vue.js / JavaScript / HTML / CSS',
                    },
                ],
            },
        ],
    },
]

export const SIDE_PROJECTS = [
    {
        id: 1,
        status: 'past',
        date: '2025.12.',
        title: 'Shopify 글로벌 커머스 테마 커스터마이징 및 섹션 개발)',
        stacks: ['Platform: Shopify Online Store 2.0', 'Languages: Liquid, JavaScript, HTML/CSS', 'Tools: Shopify CLI, Theme Library Management'],
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
        stacks: ['Skills: React, Vite, Tailwind CSS, JavaScript', 'Tools: GitHub (README), ESLint, Prettier'],
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
        icon: NoteIcon,
        title: 'PlanPad (플랜패드)',
        desc: '개인 맞춤형 일정 관리와 태그 기반 메모를 제공하는 웹 애플리케이션',
        stacks: [
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
                title: 'AWS',
                url: AWSImg,
            },
            {
                title: 'Swagger',
                url: SwaggerImg,
            },
        ],
        detail: {
            icon: NoteIcon,
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
            stacks: [
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
                    title: 'AWS',
                    url: AWSImg,
                },
                {
                    title: 'Swagger',
                    url: SwaggerImg,
                },
            ],
            details: [
                {
                    heading: '1. 확장성 있는 레이어드 아키텍처 및 데이터 모델링',
                    txt: [
                        'Controller-Service-Domain-Repository 패턴을 엄격히 준수하여 비즈니스 로직과 데이터 접근 계층 분리, 유지보수성 극대화',
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
                        'Swagger(OpenAPI 3.0)를 도입하여 프론트엔드 개발자와의 커뮤니케이션 비용 절감, 실시간 API 테스트 환경 제공',
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
        stacks: [
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
            icon: PlaneIcon,
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
            stacks: [
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
        stacks: [
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
            icon: MonitorIcon,
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
            stacks: [
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
                    txt: ['eautifulSoup4와 Requests를 활용하여 각기 다른 HTML 구조를 가진 3개 이상의 글로벌 채용 플랫폼에서 데이터를 동시 추출하는 로직 구현'],
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
