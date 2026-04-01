export const STACK_CATEGORIES = ['ALL', 'BACKEND', 'DB & INFRA', 'FRONTEND', 'TOOLS']

export const STACK_LOGOS = [
    {
        title: 'Java',
        url: '/images/stack/Java.png',
        type: 'BACKEND',
    },
    {
        title: 'SpringBoot',
        url: '/images/stack/SpringBoot.png',
        type: 'BACKEND',
    },
    {
        title: 'Python',
        url: '/images/stack/Python.png',
        type: 'BACKEND',
    },
    {
        title: 'Django',
        url: '/images/stack/Django.png',
        type: 'BACKEND',
    },
    {
        title: 'MyBatis',
        url: '/images/stack/MyBatis.png',
        type: 'BACKEND',
    },
    {
        title: 'JSP',
        url: '/images/stack/JSP.png',
        type: 'BACKEND',
    },
    {
        title: 'MySQL',
        url: '/images/stack/MySQL.png',
        type: 'DB & INFRA',
    },
    {
        title: 'AWS',
        url: '/images/stack/AWS.png',
        type: 'DB & INFRA',
    },
    {
        title: 'Vue',
        url: '/images/stack/Vue.png',
        type: 'FRONTEND',
    },
    {
        title: 'React',
        url: '/images/stack/React.png',
        type: 'FRONTEND',
    },
    {
        title: 'Vite',
        url: '/images/stack/Vite.png',
        type: 'FRONTEND',
    },
    {
        title: 'JavaScript',
        url: '/images/stack/JavaScript.png',
        type: 'FRONTEND',
    },
    {
        title: 'TypeScript',
        url: '/images/stack/TypeScript.png',
        type: 'FRONTEND',
    },
    {
        title: 'HTML5',
        url: '/images/stack/HTML5.png',
        type: 'FRONTEND',
    },
    {
        title: 'CSS3',
        url: '/images/stack/CSS3.png',
        type: 'FRONTEND',
    },
    {
        title: 'jQuery',
        url: '/images/stack/jQuery.png',
        type: 'FRONTEND',
    },
    {
        title: 'Git',
        url: '/images/stack/Git.png',
        type: 'TOOLS',
    },
    {
        title: 'GitHub',
        url: '/images/stack/GitHub.png',
        type: 'TOOLS',
    },
    {
        title: 'IntelliJ',
        url: '/images/stack/IntelliJ.png',
        type: 'TOOLS',
    },
    {
        title: 'VSCode',
        url: '/images/stack/VSCode.png',
        type: 'TOOLS',
    },
    {
        title: 'Eclipse',
        url: '/images/stack/Eclipse.png',
        type: 'TOOLS',
    },
]

export const WORK_EXPERIENCE = [
    {
        status: 'active',
        date: '2023 - 현재',
        company: '제이티통신(아이알리미)',
        brief: '국내 1위 자녀 안심망 서비스 (누적 가입자 170만 명)',
        stacks: ['Backend & DB: Java, Spring Boot, MyBatis, JSP, MySQL, AWS', 'Frontend: Vue, Vite, JavaScript, HTML5, CSS3, jQuery', 'Tools: Git, GitHub, IntelliJ, VSCode, Eclipse'],
        detail: [
            {
                mainTitle: '1. 비즈니스 로직 설계 및 운영 자동화',
                subProjects: [
                    {
                        period: '2024.07. - 현재',
                        subTitle: '전사 CS 통합 관리 플랫폼 구축 및 운영 프로세스 고도화',
                        tasks: [
                            {
                                heading: '서버 사이드 방어적 로직 구축',
                                detail: ['프론트엔드와 DB 간의 상태 불일치로 발생할 수 있는 부정 수정을 차단하기 위해, 최종 처리 직전 DB 상태를 재확인하는 이중 검증 로직 및 레이스 컨디션 방어 설계'],
                            },
                            {
                                heading: '분산 리소스 트랜잭션 정합성 확보',
                                detail: ['AWS S3 파일 삭제 실패 시 DB 롤백이 보장되지 않던 결함을 명시적 예외 처리를 통해 해결하여 DB-스토리지 간 정합성 구현'],
                            },
                            {
                                heading: '파일 처리 및 비즈니스 로직 공통 모듈화',
                                detail: ['파편화된 파일 업로드/수정 로직을 독립적인 공통 모듈로 분리하여 코드 재사용성을 높이고 유지보수가 용이한 아키텍처로 리팩토링'],
                            },
                            {
                                heading: '민원 답변 자동화 엔진 및 워크플로우 설계',
                                detail: ['3단 계층형 카테고리와 연동된 표준 답변 데이터를 호출하여 실시간으로 텍스트를 주입하는 심리스한 자동 답변 시스템 구축'],
                            },
                        ],
                        achievements: [
                            {
                                heading: '데이터 무결성 및 시스템 신뢰도 확보',
                                detail: ['서버 사이드 검증 강화를 통해 비정상적인 데이터 조작 및 리소스 누수 리스크를 원천 차단하여 운영 데이터의 정합성 100% 실현'],
                            },
                            {
                                heading: '운영 프로세스 최적화 및 비용 절감',
                                detail: ['사용자 자가 관리 기능과 상담원 자동 답변 도구를 통해 상담 리드타임을 대폭 단축하고 운영팀의 수동 관리 공수 개선'],
                            },
                            {
                                heading: '유지보수 생산성 및 확장성 제고',
                                detail: ['표준화된 공통 모듈 적용 및 레거시 코드 정비를 통해 신규 기능 확장 시 발생하는 개발 공수 및 버그 발생 가능성 최소화'],
                            },
                            {
                                heading: '서비스 품질 상향 평준화',
                                detail: ['표준 답변 시스템 활용을 통해 상담원별 답변 편차를 제거하고 고객에게 일관되고 전문적인 행정 서비스 제공 기반 마련'],
                            },
                        ],
                        stacks: 'JAVA / Spring Boot / SQL / MyBatis / AWS / JSP / JavaScript / jQuery / HTML / CSS',
                    },
                    {
                        period: '2025.09. - 2026.02.',
                        subTitle: '전자출결 단말기 재발급 프로세스 자동화',
                        tasks: [
                            {
                                heading: '자가 검증 기반 재발급 신청 로직 개발',
                                detail: ['사용자가 직접 재발급 적격 여부를 확인할 수 있도록 시스템 내부 데이터와 연동된 실시간 자동 검증 엔진 구축'],
                            },
                            {
                                heading: '부적격 사유 안내 및 예외 처리',
                                detail: ['재발급이 불가능한 경우, 단순 거절이 아닌 명확한 사유를 팝업으로 안내하여 불필요한 CS 문의를 차단하고 가시성 확보'],
                            },
                            {
                                heading: '운영 워크플로우 효율화',
                                detail: ['CS팀의 수동 확인 및 승인 과정을 생략하고, 검증 완료된 건에 한해 운영팀 배송 시스템으로 즉시 접수 데이터가 전송되도록 파이프라인 설계'],
                            },
                        ],
                        achievements: [
                            {
                                heading: '중간 처리 단계 제거를 통한 업무 효율화',
                                detail: ['CS팀의 수동 적격성 검토 과정을 100% 자동화하여, 신청부터 운영팀 발송 대기 단계까지의 리드타임 대폭 단축'],
                            },
                            {
                                heading: 'CS팀 업무 부하 감소',
                                detail: ['단순 재발급 가능 여부 확인 및 접수 업무를 시스템이 대체함으로써 신학기 등 집중 기간 내 CS 인입량 절감'],
                            },
                            {
                                heading: '데이터 기반의 정확한 접수 처리',
                                detail: ['수동 접수 시 발생할 수 있는 데이터 오기입 등의 휴먼 에러를 방지하고 운영 데이터의 신뢰도 확보'],
                            },
                        ],
                        stacks: 'JAVA / Spring Boot / SQL / MyBatis / JSP / JavaScript / jQuery / HTML / CSS',
                    },
                    {
                        period: '2025.11. - 2026.01.',
                        subTitle: '서비스 신청 프로세스 통합 및 레거시 시스템 리팩토링',
                        tasks: [
                            {
                                heading: '신청 프로세스 통합 (UX/DX 개선)',
                                detail: ['기존에 이원화되어 있던 "서비스 연장 신청"과 "단말기 구매 신청" 기능을 단일 파이프라인으로 통합하여 사용자 편의성 향상'],
                            },
                            {
                                heading: '데이터 모델링 최적화 및 무결성 확보',
                                detail: [
                                    '누락되던 핵심 데이터의 저장 로직을 복구하여 데이터 무결성 확보',
                                    '비즈니스 로직에 필요한 데이터를 통합 관리함으로써 기존의 복잡한 다중 테이블 JOIN 쿼리를 단일 테이블 조회로 단순화 및 조회 성능 개선',
                                ],
                            },
                            {
                                heading: '프론트엔드 아키텍처 개선',
                                detail: [
                                    '수많은 조건 분기문으로 얽혀 있던 공통 JSP 파일을 분리하여 독립적인 화면 구성 및 유지보수성 향상',
                                    '기존 레거시 JavaScript 코드를 ES6 표준으로 전환(Arrow Functions, Destructuring, Template Literals 등을 적극 활용)하여 코드 가독성 및 개발 효율성 증대',
                                ],
                            },
                            {
                                heading: 'UI/UX 상태 가시성 강화',
                                detail: ['불투명했던 신청 진행 상태 로직을 전면 수정하여 사용자에게 직관적이고 정확한 진행 단계 정보 제공'],
                            },
                        ],
                        achievements: [
                            {
                                heading: 'CS 업무 자동화 및 민원 감소',
                                detail: [
                                    '연간 1회 제한되어 본사 CS팀을 통해서만 가능했던 "단말기 재신청"을 연장 신청 시즌에 사용자가 직접 수정 가능하도록 기능을 고도화',
                                    '신학기 집중 기간에 높은 비중을 차지하던 재신청 관련 민원 발생률을 80% 개선',
                                ],
                            },
                            {
                                heading: '유지보수 비용 절감',
                                detail: ['코드 가독성 향상 및 모듈화를 통해 신규 요구사항 반영 시 개발 공수 및 버그 발생 가능성 최소화'],
                            },
                            {
                                heading: '시스템 성능 최적화',
                                detail: ['쿼리 복잡도 감소를 통해 DB 부하를 줄이고 데이터 응답 속도 향상'],
                            },
                        ],
                        stacks: 'JAVA / Spring Boot / SQL / MyBatis / JSP / JavaScript / jQuery / HTML / CSS',
                    },
                    {
                        period: '2024.10. - 2025.01. (신규 구축)   |   2025.10. - 2026.01. (리뉴얼 및 사용 기관 확장)',
                        subTitle: '공통 서류 발급 서비스 구축 및 고도화',
                        tasks: [
                            {
                                heading: '서류 발급 자동화 시스템 구축',
                                detail: ['사용자 입력 데이터를 API로 수집하여 서류 서식 내 필요 항목에 동적으로 바인딩하는 로직 구현'],
                            },
                            {
                                heading: 'PDF/HWP 동적 리포트 생성',
                                detail: ['iTextPDF 및 hwplib 라이브러리를 활용하여, 사용자 입력 데이터를 기반으로 견적서 및 증빙 서류를 PDF와 HWP 포맷으로 실시간 생성하는 로직 구현'],
                            },
                            {
                                heading: 'Admin 관리 도구 개발',
                                detail: ['운영팀이 직접 서류 양식을 등록하고 관리할 수 있는 CMS 구축 및 서버 스토리지 연동'],
                            },
                            {
                                heading: '시스템 확장 및 통합',
                                detail: [
                                    '(V1) 초등 스쿨메신저 내 서류 다운로드 서비스 인터페이스 개발 및 배포',
                                    '(V2) 기존 로직을 모듈화하여 "돌봄교실 전자출결" 서비스로 기능을 확장하고 매체별 최적화된 노출 로직 적용',
                                ],
                            },
                        ],
                        achievements: [
                            {
                                heading: '문서 업무 자동화',
                                detail: ['기존 수기 작성 방식에서 시스템 자동 생성 방식으로 전환하여 서류 발급 소요 시간 90% 단축 및 데이터 오기입률 제거'],
                            },
                            {
                                heading: '업무 효율성 증대 및 현장 맞춤형 서비스 제공',
                                detail: ['교육 현장에서 활용도가 높은 HWP 포맷 지원을 통해 교직원의 문서 편집 편의성 극대화 및 관련 민원 요청량 80% 감소'],
                            },
                            {
                                heading: '민원 발생률 감소',
                                detail: ['데이터 자동 삽입 기능을 통한 오기입 방지로 서류 재발급 요청 및 사용자 민원 대폭 개선'],
                            },
                        ],
                        stacks: 'JAVA / Spring Boot / SQL / MyBatis / JSP / JavaScript / jQuery / HTML / CSS',
                    },
                ],
            },
            {
                mainTitle: '2. 데이터 거버넌스 및 시스템 표준화',
                subProjects: [
                    {
                        period: '2025.05. - 현재',
                        subTitle: '행정 신뢰도 제고를 위한 데이터 정합성 관리 및 기술 운영',
                        tasks: [
                            {
                                heading: '행정 민감 데이터의 정밀 보정',
                                detail: ['어린이집 입퇴소 일자, 수기 출결 상태(결석 등)와 같이 지원금 산정 및 행정 보고의 근거가 되는 고민감도 데이터를 직접 관리 및 보정'],
                            },
                            {
                                heading: '데이터 이력 추적 및 감사 지원',
                                detail: ['단말기 재발급 이력 및 수행자 추적 등 DB 로그 분석을 통해 운영팀에 기술적 근거를 제공하고 서비스 운영의 투명성 확보'],
                            },
                            {
                                heading: '비즈니스 로직 기반의 무결성 검증',
                                detail: ['단순 데이터 수정을 넘어, 데이터 변경이 시스템 전체 정합성과 행정 결과에 미치는 영향을 사전 분석하여 오류 없는 쿼리 수행 및 검증'],
                            },
                        ],
                        achievements: [
                            {
                                heading: '서비스 행정 신뢰도 유지',
                                detail: ['시스템 UI로 처리 불가능한 예외 케이스를 기술적으로 해결함으로써, 지원금 오산정 및 행정 보고 누락 등의 크리티컬한 리스크를 사전에 차단'],
                            },
                            {
                                heading: '도메인 전문성 기반의 정확한 대응',
                                detail: ['기관 행정 프로세스에 대한 깊은 이해를 바탕으로 현장의 요구사항을 정확히 파악하여 신속하고 정확한 기술 지원 실현'],
                            },
                            {
                                heading: '운영 리스크 최소화',
                                detail: ['철저한 데이터 무결성 검증을 통해 수동 데이터 처리 시 발생할 수 있는 휴먼 에러를 방지하고, 시스템 데이터의 공신력 확보'],
                            },
                        ],
                        stacks: 'JAVA / Spring Boot / SQL / MyBatis',
                    },
                    {
                        period: '2025.02. - 현재',
                        subTitle: '전사 운영 관리 시스템(CMS) 고도화 및 API 표준화',
                        tasks: [
                            {
                                heading: '하드코딩 기반 약관 및 FAQ 관리의 시스템화',
                                detail: ['기존 소스 코드 내 하드코딩 방식을 관리자 전용 웹(CMS)에서 직접 관리 가능한 방식으로 전면 개편'],
                            },
                            {
                                heading: '표준 DB 스키마 재설계 및 통합 API 엔진 구현',
                                detail: ['모든 서비스 사이트에서 동일한 인터페이스로 데이터를 수신할 수 있도록 DB 구조 표준화 및 단일 호출 체계 구축'],
                            },
                            {
                                heading: '단말기 정보의 코드 기반 표준화 및 마이그레이션',
                                detail: ['한글/영문 혼용 데이터를 코드 체계로 개편하고 기존 데이터 일괄 마이그레이션 수행'],
                            },
                            {
                                heading: '공지사항 시스템 현대화 및 가변 레이아웃 제어',
                                detail: ['프론트엔드 리팩토링 및 운영자가 UI에서 직접 팝업 크기를 조정할 수 있는 제어 기능 개발'],
                            },
                            {
                                heading: '레거시 코드 정비 및 관심사 분리',
                                detail: ['여러 서비스에서 혼용되던 공통 소스를 분석하여 모듈화하고 향후 기능 확장이 용이하도록 구조 개선'],
                            },
                        ],
                        achievements: [
                            {
                                heading: '운영 프로세스 최적화 및 병목 현상 제거',
                                detail: ['기술 지원팀 개입 없이 운영팀 독자적으로 콘텐츠와 정보를 실시간 제어할 수 있는 자율적 환경 구축'],
                            },
                            {
                                heading: '데이터 신뢰도 및 시스템 안정성 확보',
                                detail: ['데이터 표준화 및 관리 일원화를 통해 검색·필터링 로직의 오류를 근본적으로 해결하고 데이터 일관성 보장'],
                            },
                            {
                                heading: '유지보수 생산성 향상 및 리스크 방지',
                                detail: ['코드 현대화를 통해 유지보수 공수를 절감하고 약관 및 운영 데이터 파편화로 인한 결함 리스크 원천 차단'],
                            },
                        ],
                        stacks: 'JAVA / Spring Boot / SQL / MyBatis / JSP / Vue.js / JavaScript / jQuery / HTML / CSS',
                    },
                ],
            },
            {
                mainTitle: '3. 대규모 데이터 처리 및 행정 서비스',
                subProjects: [
                    {
                        period: '2024.08. - 2025.08.',
                        subTitle: '다차원 통계 분석 및 행정 리포팅 시스템 구축',
                        tasks: [
                            {
                                heading: '다차원 데이터 가시성 강화 (UI/UX)',
                                detail: ['광고 성과(노출·클릭·CTR) 및 복지 서비스 이용 현황(지역·기관·연령별) 등 복잡한 통계 데이터를 다각도로 조회할 수 있는 대시보드 UI 구현'],
                            },
                            {
                                heading: 'UI-엑셀 간 시각적 일관성 기반 매핑',
                                detail: ['화면에 출력된 계층형 테이블 구조를 엑셀 서식에 1:1로 대응시키는 백엔드 데이터 처리 로직 구현'],
                            },
                        ],
                        achievements: [
                            {
                                heading: '행정 보고 업무 혁신',
                                detail: ['수기로 진행되던 대규모 통계 집계 및 보고서 작성 과정을 시스템화하여 행정 소요 시간 및 데이터 오기입 확률 획기적 감소'],
                            },
                            {
                                heading: '데이터 기반 의사결정 지원',
                                detail: ['실시간 성과 지표 산출 및 리포트 다운로드 기능을 통해 운영팀과 마케팅팀의 업무 생산성 제고'],
                            },
                        ],
                        stacks: 'JAVA / Spring Boot / JSP / JavaScript / jQuery / HTML / CSS',
                    },
                ],
            },
            {
                mainTitle: '4. 신규 서비스 구축 및 사용자 경험(UX) 현대화',
                subProjects: [
                    {
                        period: '2025.01. - 2025.09.',
                        subTitle: '신규 주거 서비스 운영 관리 시스템 구축',
                        tasks: [
                            {
                                heading: '관리자 시스템 프론트엔드 전담 및 백엔드 API 협업 개발',
                                detail: ['서비스 운영의 기반이 되는 어드민 웹의 프론트엔드 전 영역을 전담하여 구축하고, 화면별 비즈니스 로직에 최적화된 백엔드 API를 공동 설계 및 구현'],
                            },
                            {
                                heading: '단지별 데이터 조회 및 이력 관리 기능',
                                detail: ['각 아파트 단지에서 발생하는 입출입 로그를 조회하고, 현장 문의 대응에 필요한 데이터 이력 확인 기능 구현'],
                            },
                        ],
                        achievements: [
                            {
                                heading: '신규 서비스 운영 안정성 확보',
                                detail: ['서비스 런칭 초기 단계에서 실시간 데이터 관리가 가능한 안정적인 어드민 환경 구축'],
                            },
                            {
                                heading: '데이터 활용성 극대화',
                                detail: ['직관적인 조회 UI를 통해 현장 관리자가 서비스 이용 현황을 파악하고 운영 정책에 반영할 수 있는 토대 마련'],
                            },
                        ],
                        stacks: 'JAVA / Spring Boot / SQL / MyBatis / JSP / JavaScript / jQuery / HTML / CSS',
                    },
                    {
                        period: '2024.02. - 2024.06.',
                        subTitle: '교육 플랫폼(Class123 2.0) 운영 관리 및 고객 지원 UI 구축',
                        tasks: [
                            {
                                heading: '운영 및 민원 처리 프로세스 최적화',
                                detail: ['사용자가 민원을 손쉽게 접수하고 확인 수 있는 직관적인 Helpdesk 화면 구축'],
                            },
                            {
                                heading: '관리자 전용 대시보드 구현',
                                detail: ['본사 직원들이 민원 현황을 한눈에 파악하고 효율적으로 관리할 수 있는 서비스 어드민 인터페이스 설계 및 데이터 바인딩'],
                            },
                            {
                                heading: '데이터 유실 방지 및 보안 강화',
                                detail: ['개인정보 암호화(Crypto-JS) 및 보안 쿠키 기반의 세션 유지 로직으로 새로고침 시 프로세스 단절 오류 해결'],
                            },
                        ],
                        achievements: [
                            {
                                heading: '운영 및 관리 효율성 극대화',
                                detail: ['관리자 시스템 고도화를 통해 본사 직원의 민원 처리 공수를 최적화하고 서비스 관리의 편의성 제공'],
                            },
                            {
                                heading: '사용자 만족도 제고',
                                detail: ['접근성 높은 Helpdesk UI를 제공함으로써 사용자의 서비스 이용 문의 및 민원 해결 경험 혁신'],
                            },
                        ],
                        stacks: 'Vue.js / JavaScript / HTML / CSS',
                    },
                    {
                        period: '2024.01. - 2024.06.',
                        subTitle: '교육용 메신저 서비스 학사 행정 지원 기능 확장',
                        tasks: [
                            {
                                heading: '신규 기능 프론트엔드 구현',
                                detail: ['교육 현장에 필수적인 행정 지원 기능(학사일정, 학급소식)의 UI 개발 및 비즈니스 로직 연동'],
                            },
                            {
                                heading: '전역 상태 관리를 통한 보안 인증 유지 (Vuex)',
                                detail: ['사용자 토큰 및 인증 상태를 전역으로 관리하여 서비스 전반의 보안 세션 유지 및 권한별 접근 제어 로직 구현'],
                            },
                            {
                                heading: '인터랙티브 UI 구현',
                                detail: ['사용자가 일정을 등록하고 소식을 게시하는 과정에서 오류를 최소화할 수 있도록 직관적인 입력 폼 및 유효성 검사 적용'],
                            },
                        ],
                        achievements: [
                            {
                                heading: '서비스 현장 안착 기여',
                                detail: ['메신저 내에서 학사 일정과 소식을 즉시 확인할 수 있는 기능을 제공하여 교사와 학교 간의 정보 공유 효율성 강화'],
                            },
                            {
                                heading: 'UI/UX 일관성 확보',
                                detail: ['복잡한 행정 데이터를 깔끔하고 가시성 높은 인터페이스로 제공하여 사용자 편의성 증대'],
                            },
                        ],
                        stacks: 'Vue.js / JavaScript / HTML / CSS',
                    },
                    {
                        period: '2023.11. - 2024.02.',
                        subTitle: '공식 홈페이지 리뉴얼',
                        tasks: [
                            {
                                heading: '프론트엔드 아키텍처 리뉴얼 및 디자인 현대화',
                                detail: ['최신 웹 트렌드를 반영한 디자인 시스템 전면 개편 및 스크롤 애니메이션을 활용한 역동적인 인터랙션 구현으로 시각적 완성도 제고'],
                            },
                            {
                                heading: '빌드 환경 고도화',
                                detail: ['Webpack 커스텀 설정을 통한 SVG 로더 최적화 및 최신 웹 트렌드를 반영한 UI/UX 고도화'],
                            },
                            {
                                heading: 'Full-stack 통합 유지보수',
                                detail: ['서비스 런칭 이후 프론트엔드 기능 개선은 물론 백엔드 API 로직 및 DB 관리까지 전담하여 운영 중'],
                            },
                        ],
                        achievements: [
                            {
                                heading: '안정적인 서비스 운영',
                                detail: ['프론트/백엔드 통합 유지보수를 통해 장애 발생 시 원인 파악 및 해결 시간을 단축하여 서비스 가용성 확보'],
                            },
                            {
                                heading: '개발 및 운영 효율성 제고',
                                detail: ['빌드 자동화와 표준화된 환경 구축으로 유지보수 편의성을 높이고 리소스 로딩 성능 최적화'],
                            },
                        ],
                        stacks: 'JAVA / Spring Boot / SQL / MyBatis / Vue.js / JavaScript / HTML / CSS',
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
