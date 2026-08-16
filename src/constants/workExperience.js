export const WORK_EXPERIENCE = [
    {
        status: 'active',
        date: '2023.11. - 현재',
        company: '제이티통신 | 아이알리미',
        brief: '누적 가입자 170만 명 규모의 자녀 안심망 서비스를 개발·운영합니다.',
        services: [
            {
                period: '2024.06. - 현재',
                title: '아이알리미 웹 서비스 개발',
                detail: '프론트엔드 담당으로 시작해 서비스 이해와 실무 경험을 쌓으며 신규 기능·고도화의 백엔드 구현까지 역할을 넓혀왔습니다.',
            },
            {
                period: '2026.07. - 현재',
                title: '누리알리미 웹 서비스 AI 활용 1인 개발',
                detail: '아이알리미 웹 서비스와 같은 DB를 사용하는 독립 서비스로, AI를 보조 도구로 활용해 기획·디자인·프론트엔드·백엔드 구현을 혼자 진행하고 있습니다.',
            },
        ],
        keyAchievements: [
            {
                heading: '주요 운영 화면의 응답 성능 개선',
                detail: '중복 조회 제거, GROUP BY 기반 통합, 상관 서브쿼리 개선으로 대시보드 TTFB를 3.01초에서 0.89초로 약 70% 단축했습니다.',
            },
            {
                heading: '신학기 반복 업무를 기능과 프로세스로 자동화',
                detail: '표준 답변, 사용자 자가 처리, 재발급 자동 검증을 구축해 신학기 임시 운영 인력이 10명 이상에서 약 5명으로 줄어드는 데 기여했습니다.',
            },
            {
                heading: '메시지 발송목적·템플릿 관리 체계 신규 구축',
                detail: '계층형 분류 테이블과 관리 UI를 설계하고 기본값·공개 여부·중복 검증·템플릿 코드 연계까지 구현해 2026년 8월 운영 배포했습니다.',
            },
            {
                heading: '계약 변경 동의·계약관리 프로세스 설계 및 구현',
                detail: '동의/미동의와 유예·재동의 이력을 보존하는 데이터 구조, 관리자 후속 처리, 권한 제어, HWP 계약서 다운로드를 프론트부터 백엔드까지 구현했습니다.',
            },
            {
                heading: '두 서비스의 구축과 운영을 끝까지 책임',
                detail: '아이알리미 웹 서비스는 프론트엔드에서 시작해 백엔드 기능 개발까지 역할을 넓혔고, 누리알리미 웹 서비스는 AI를 활용해 기획·디자인·프론트·백엔드 개발을 1인으로 진행하고 있습니다.',
            },
        ],
        detail: [
            {
                mainTitle: '1. 성능과 데이터 안정성',
                subProjects: [
                    {
                        period: '2026.02. - 2026.04.',
                        subTitle: '운영 화면 성능 최적화',
                        tasks: [
                            {
                                heading: '통계 조회 구조 재설계',
                                detail: '기관 코드별 반복 호출을 GROUP BY 기반 단일 집계로 통합하고, 학교별 최신 일정 조회의 상관 서브쿼리를 파생 테이블 구조로 변경했습니다.',
                            },
                            {
                                heading: '중복 스캔과 화면 대기 제거',
                                detail: 'NOT EXISTS 반복 검사를 CTE·LEFT JOIN·CASE WHEN으로 재구성하고, 메시지 전송 화면의 조회 처리를 비동기로 분리했습니다.',
                            },
                            {
                                heading: '운영 지표로 전후 비교',
                                detail: 'Chrome Network·Lighthouse·Performance를 사용해 TTFB와 LCP를 개선 전후로 측정했습니다.',
                            },
                        ],
                        achievements: [
                            {
                                heading: '대시보드 TTFB 약 70% 단축',
                                detail: '운영 환경 기준 TTFB 3.01초 → 0.89초, LCP 3.8초 → 1.7초로 개선했습니다.',
                            },
                            {
                                heading: '메시지 전송 화면 대기 체감 개선',
                                detail: 'TTFB 14.71초 → 0.03초, LCP 15.7초 → 0.7초로 단축했습니다.',
                            },
                        ],
                        skills: 'Java / Spring Boot / MyBatis / MySQL / JavaScript',
                    },
                    {
                        period: '2024.07. - 현재',
                        subTitle: '트랜잭션·리소스 정합성 및 DB 락 개선',
                        tasks: [
                            {
                                heading: '서버 사이드 재검증',
                                detail: '중요 상태 변경 직전 DB 값을 다시 확인해 화면 상태와 실제 데이터가 달라 발생할 수 있는 비정상 수정을 차단했습니다.',
                            },
                            {
                                heading: 'S3와 DB 간 실패 전파',
                                detail: 'S3 파일 삭제 실패가 DB 트랜잭션에 반영되지 않던 흐름을 명시적 예외 처리로 변경해 리소스 불일치를 줄였습니다.',
                            },
                            {
                                heading: '락 원인 분석과 완화',
                                detail: 'INSERT ... SELECT, UPDATE ... JOIN, 불필요한 FOR UPDATE를 점검하고 중복 제출 차단을 함께 적용해 잠금 점유를 줄였습니다.',
                            },
                        ],
                        achievements: [
                            {
                                heading: '운영 장애 리스크 완화',
                                detail: '비정상 데이터 변경, 파일-DB 불일치, 테이블 락 대기 가능성을 줄였습니다.',
                            },
                        ],
                        skills: 'Java / Spring Boot / MyBatis / MySQL / AWS S3 / JavaScript',
                    },
                ],
            },
            {
                mainTitle: '2. 비즈니스 로직과 운영 자동화',
                subProjects: [
                    {
                        period: '2026.04. - 2026.08.',
                        subTitle: '메시지 발송목적·템플릿 관리 체계 구축',
                        tasks: [
                            {
                                heading: '서비스별 책임과 데이터 모델 분리',
                                detail: '기존 메시지 전송 화면·컨트롤러에서 신규 서비스 전용 흐름을 분리하고, 대·소분류·정렬·공개·기본값을 관리하는 계층형 분류 테이블을 설계했습니다.',
                            },
                            {
                                heading: '관리 기능과 데이터 규칙 구현',
                                detail: '관리자 CRUD, 중복 검증, 공개 여부 연동, 기본값 단일 선택 규칙과 상·하위 분류 삭제 정책을 프론트와 백엔드에 구현했습니다.',
                            },
                            {
                                heading: '외부 템플릿 코드 연계',
                                detail: '선택한 발송목적에 매핑된 승인 템플릿 코드가 발송 데이터에 저장되도록 연결하고 운영자가 코드까지 관리하도록 구성했습니다.',
                            },
                        ],
                        achievements: [
                            {
                                heading: '정책 변경에 대응 가능한 운영 구조 확보',
                                detail: '개발자 개입 없이 분류와 템플릿 코드를 관리할 수 있는 기능을 2026년 8월 운영 배포했습니다.',
                            },
                        ],
                        skills: 'Java / Spring Boot / MyBatis / MySQL / JSP / JavaScript / jQuery',
                    },
                    {
                        period: '2026.06. - 2026.07.',
                        subTitle: '계약 변경 동의·계약관리 프로세스 신규 구축',
                        tasks: [
                            {
                                heading: '동의 상태와 이력 중심 데이터 설계',
                                detail: '동의·미동의·당일 유예·취소 후 재동의를 구분하고 이전 처리 내역은 보존하는 데이터 구조와 상태 흐름을 설계했습니다.',
                            },
                            {
                                heading: '사용자와 운영자 흐름 연결',
                                detail: '최고관리자 권한·메뉴 접근 제한, 동의 화면, 계약 현황, 해지 문의, 운영사이트 후속 상담 처리까지 하나의 프로세스로 구현했습니다.',
                            },
                            {
                                heading: '계약서 다운로드 공통화',
                                detail: '기존 HWP 생성 기능을 재사용 가능한 모듈로 정리해 신규 계약서 다운로드와 기존 기능에 함께 적용했습니다.',
                            },
                        ],
                        achievements: [
                            {
                                heading: '법적·운영 리스크를 시스템으로 관리',
                                detail: '계약 변경 동의 증적과 후속 처리 상태를 사용자·운영자 양쪽에서 확인할 수 있는 흐름을 개발 완료했습니다.',
                            },
                        ],
                        skills: 'Java / Spring Boot / MyBatis / MySQL / AWS S3 / hwplib / JSP / JavaScript / jQuery',
                    },
                    {
                        period: '2025.09. - 2026.02.',
                        subTitle: '전자출결 단말기 재발급 프로세스 자동화',
                        tasks: [
                            {
                                heading: '업무 규칙을 서버 검증으로 전환',
                                detail: '정상 인식 이력과 재발급 이력을 기준으로 가능 여부를 판정하고 실패 사유를 사용자에게 안내했습니다.',
                            },
                            {
                                heading: '일괄 처리의 원자성 확보',
                                detail: '단말기 상태, 학생·학교 상담, 신청, 배송 추적 데이터가 하나라도 실패하면 전체 롤백되도록 트랜잭션을 구성했습니다.',
                            },
                            {
                                heading: '운영 후속 작업 자동 연결',
                                detail: '재발급 신청과 동시에 상담 이력·신청 접수·배송 추적이 생성되고, 한 달 내 이력은 별도 확인 대상으로 남도록 처리했습니다.',
                            },
                        ],
                        achievements: [
                            {
                                heading: '수동 검토와 처리 누락 감소',
                                detail: '사용자 신청부터 운영 배송 단계까지의 수기 판단과 중복 입력을 줄였습니다.',
                            },
                        ],
                        skills: 'Java / Spring Boot / MyBatis / MySQL / JSP / JavaScript / jQuery',
                    },
                ],
            },
            {
                mainTitle: '3. 서비스별 담당 업무와 구현 범위',
                subProjects: [
                    {
                        period: '2024.06. - 현재',
                        subTitle: '아이알리미 웹 서비스 프론트엔드·백엔드 개발',
                        tasks: [
                            {
                                heading: '프론트엔드에서 백엔드까지 역할 확장',
                                detail: '2024년 6월 프론트엔드 담당으로 시작해 요구사항 분석과 화면 구현을 맡았고, 점진적으로 DB·API와 비즈니스 로직 개발까지 범위를 넓혔습니다.',
                            },
                            {
                                heading: '운영 데이터와 기능의 CMS화',
                                detail: '하드코딩된 약관·FAQ·공지 영역을 운영팀이 직접 관리하도록 전환하고, 서비스 간 DB 구조와 API 호출 기준을 정리했습니다.',
                            },
                            {
                                heading: '레거시와 신규 UI를 함께 개선',
                                detail: 'Spring Boot·MyBatis·JSP·jQuery 기반 레거시 기능과 Vue 기반 화면을 함께 다루며 백엔드 변경을 사용자 화면까지 완결했습니다.',
                            },
                        ],
                        achievements: [
                            {
                                heading: '서비스 이해를 바탕으로 구현 범위 확장',
                                detail: '화면과 사용자 흐름에 대한 이해를 기반으로 백엔드 변경이 실제 화면에 미치는 영향까지 확인하며 기능을 개발하고 있습니다.',
                            },
                        ],
                        skills: 'Java / Spring Boot / MyBatis / MySQL / Vue.js / JSP / JavaScript / jQuery / AWS',
                    },
                    {
                        period: '2026.07. - 현재',
                        subTitle: '누리알리미 웹 서비스 AI 활용 1인 개발',
                        tasks: [
                            {
                                heading: '기획부터 구현까지 단독 수행',
                                detail: 'AI를 보조 도구로 활용해 서비스 구조와 화면을 기획하고 디자인, 프론트엔드, 백엔드 구현을 혼자 진행하고 있습니다.',
                            },
                            {
                                heading: '독립 서비스 구조 설계',
                                detail: '기존 긴급 확장 버전의 로고·URL·유지보수 문제를 해결하기 위해 별도 프로젝트와 도메인을 사용하는 리뉴얼을 제안하고 추진했습니다.',
                            },
                            {
                                heading: '공유 DB 기반 연동',
                                detail: '아이알리미 웹 서비스와 같은 DB를 사용하면서 서비스별 정책과 화면은 분리되도록 로그인·인증과 주요 기능을 구현하고 있습니다.',
                            },
                        ],
                        achievements: [
                            {
                                heading: '작은 팀에서의 실행 범위 확장',
                                detail: '기획·디자인·프론트·백엔드 의사결정을 한 흐름으로 연결하며 독립 서비스 구축을 진행하고 있습니다.',
                            },
                        ],
                        skills: 'Java / Spring Boot / MyBatis / MySQL / Vue.js / JavaScript / Docker / AI-assisted Development',
                    },
                    {
                        period: '2026.07.',
                        subTitle: '사용자정보 4자리 문자 본인인증 및 접근 제어',
                        tasks: [
                            {
                                heading: '모든 진입 경로에 동일한 인증 적용',
                                detail: '메뉴, 직접 URL, 발신번호 관리 버튼으로 접근하는 모든 경로에서 인증 여부를 확인하고 미인증 사용자는 인증 화면으로 이동시켰습니다.',
                            },
                            {
                                heading: '세션과 환경별 정책 분리',
                                detail: '로그아웃 전까지 인증 상태를 유지하고 로그아웃 시 초기화했으며, 팀서버와 운영 환경의 인증 정책을 분리했습니다.',
                            },
                            {
                                heading: '휴대폰번호 변경 인증 강화',
                                detail: '휴대폰번호 변경 시 별도 본인인증을 거치고 변경 완료 후 세션을 종료해 변경된 인증 정보가 즉시 반영되도록 했습니다.',
                            },
                        ],
                        achievements: [
                            {
                                heading: '공용 계정의 민감 설정 변경 보호',
                                detail: '대표 휴대폰번호 소유자의 확인 없이 발신번호 설정이 변경될 수 있던 접근 경로를 보완했습니다.',
                            },
                        ],
                        skills: 'Java / Spring Boot / MyBatis / JSP / JavaScript / jQuery / Session',
                    },
                ],
            },
            {
                mainTitle: '4. 프론트엔드에서 백엔드로 확장한 실무 경험',
                subProjects: [
                    {
                        period: '2023.11. - 2024.02.',
                        subTitle: '아이알리미 공식 홈페이지 리뉴얼',
                        tasks: [
                            {
                                heading: '프론트엔드로 시작한 첫 실무',
                                detail: 'Vue 기반 화면 구조와 사용자 경험을 전면 개편하고 Webpack·SVG 로딩 환경을 정비했습니다.',
                            },
                            {
                                heading: '백엔드 역할로 확장',
                                detail: '런칭 이후 API와 DB까지 함께 유지보수하며 화면 문제를 데이터 흐름까지 추적하는 경험을 쌓았습니다.',
                            },
                        ],
                        achievements: [
                            {
                                heading: '서비스 구조를 이해하는 기반 확보',
                                detail: '화면 구현에서 시작해 API와 DB 흐름까지 추적하며 웹 서비스 전반을 이해하는 경험을 쌓았습니다.',
                            },
                        ],
                        skills: 'Vue.js / JavaScript / HTML / CSS / Webpack / Java / Spring Boot / SQL',
                    },
                    {
                        period: '2024.02. - 2024.06.',
                        subTitle: '교육 플랫폼 Helpdesk·운영 UI 구축',
                        tasks: [
                            {
                                heading: '사용자·관리자 화면 구현',
                                detail: '문의 접수와 처리 현황, 운영자용 조회·관리 화면과 데이터 바인딩을 구현했습니다.',
                            },
                            {
                                heading: '서비스 연속성과 개인정보 보호',
                                detail: '새로고침에도 작업 흐름이 유지되도록 세션 처리를 적용하고 개인정보 보호를 위한 암호화 처리를 구현했습니다.',
                            },
                        ],
                        achievements: [
                            {
                                heading: '운영 관점의 화면 개발 경험',
                                detail: '화면 구현을 넘어 실제 상담 업무 흐름과 데이터 보호 요구사항을 반영했습니다.',
                            },
                        ],
                        skills: 'Vue.js / JavaScript / HTML / CSS / Session / Encryption',
                    },
                    {
                        period: '2024.07. - 현재',
                        subTitle: '운영·CS 시스템의 백엔드 중심 고도화',
                        tasks: [
                            {
                                heading: '역할 전환과 확장',
                                detail: 'CS 통합 관리, 문서 발급, CMS, 재발급, 메시지 발송, 계약관리 등 운영 핵심 기능의 데이터와 비즈니스 로직을 설계했습니다.',
                            },
                            {
                                heading: '프론트엔드 역량 유지',
                                detail: '관리자와 기관 사용자가 실제로 사용하는 JSP·Vue 화면까지 구현해 백엔드 변경의 사용성을 직접 검증했습니다.',
                            },
                        ],
                        achievements: [
                            {
                                heading: '백엔드 중심 역할로 확장',
                                detail: '프론트엔드 실무 경험을 바탕으로 데이터 모델, SQL, 트랜잭션과 비즈니스 로직을 다루는 업무 비중을 점차 높여왔습니다.',
                            },
                        ],
                        skills: 'Java / Spring Boot / MyBatis / MySQL / AWS / JSP / Vue.js / JavaScript',
                    },
                ],
            },
        ],
    },
]
