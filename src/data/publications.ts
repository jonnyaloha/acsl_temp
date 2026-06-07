export type PublicationKind = "journal" | "international" | "domestic";

export type Publication = {
  title: string;
  authors: string; // Display string for author list (formatted as you want it printed)
  authorIds: string[]; // Linked professor / student ids — used for filtering & cross-linking
  venue: string;
  year: number;
  kind: PublicationKind;
  doi?: string;
  link?: string;
};

// Single source of truth. `authors` controls the displayed byline; `authorIds`
// controls which professor / student profile pages this publication appears on.
export const publications: Publication[] = [
  // Journal papers
  // 2026

  // 2025
  // International conferences
  { title: "Powered Descent Guidance via First-Order Optimization With Expansive Projection", authors: "Jiwoo Choi, Jong-Han Kim", authorIds: ["최지우", "김종한"], venue: "IEEE Access", year: 2024, kind: "international", doi:"https://doi.org/10.48550/arXiv.2310.00397"},

  // Domestic conferences{domestic}
  { title: "장거리 유도탄 추력비행 단계 피치프로그램 연구", authors: "김민섭, 김정민, 유창경", authorIds: ["김민섭", "김정민", "유창경"], venue: "한국군사기술학회 추계학술대회", year: 2025, kind: "domestic"},
  { title: "대함 유도탄 및 함정 간 다대다 교전 시나리오 생존성 분석", authors: "국제연, 김효중, 유창경", authorIds: ["국제연", "김효중", "유창경"], venue: "항공우주학회 추계학술대회", year: 2025, kind: "domestic"},
  { title: "고체 추진제 연소시간 산정을 위한 달 착륙선 동력 하강 궤적 최적화", authors: "서지민, 김효중, 유창경", authorIds: ["서지민", "김효중", "유창경"], venue: "	항공우주학회 추계학술대회", year: 2025, kind: "domestic" },
  { title: "실내 환경에서의 드론을 이용한 유도탄 모사 및 PNG 알고리즘 구현", authors: "박정호, 이도훈, 정다인, 정명식, 김종한", authorIds: ["박정호", "이도훈", "정다인", "정명식", "김종한"], venue: "한국항공우주학회 춘계학술대회", year: 2024, kind: "domestic", link:"https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11814236"},
  { title: "Consensus ADMM 기반 동력 하강 유도 기법", authors: "최지우, 김종한", authorIds: ["최지우", "김종한"], venue: "한국항공우주학회 춘계학술대회", year: 2024, kind: "domestic", link:"https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11813885"},
  { title: "신경망 기반 정사영 연산을 활용한 동력하강 단계 유도", authors: "최지우, 김종한", authorIds: ["최지우", "김종한"], venue: "한국항공우주학회 추계학술대회", year: 2024, kind: "domestic", link:"https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12061201"},


  { title: "실내 환경에서의 드론을 이용한 유도탄 모사 및 PNG 알고리즘 구현", authors: "박정호, 이도훈, 정다인, 정명식, 김종한", authorIds: ["박정호", "이도훈", "정다인", "정명식", "김종한"], venue: "한국항공우주학회 춘계학술대회", year: 2024, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11814236" },

  { title: "터보팬 엔진 모델 기반 내결함성 모델 예측 제어기 설계", authors: "김정민, 이승엽, 김채연, 김종한, 유창경, 나규진, 김중회", authorIds: ["김정민", "이승엽", "김채연", "김종한", "유창경", "나규진", "김중회"], venue: "한국항공우주학회지", year: 2026, kind: "journal", link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003300077" },
  { title: "우주 발사 실패에 따른 발생 가능한 인명 피해 및 손실 산정", authors: "김나영, 김효중, 김종한, 조항주, 유창경", authorIds: ["김나영", "김효중", "김종한", "조항주", "유창경"], venue: "한국항공우주학회지", year: 2025, kind: "journal", doi: "10.5139/JKSAS.2025.53.7.695" },
  { title: "회전 표적에 대한 모델 예측 제어 기반 랑데부 및 도킹", authors: "김창오, 목성훈", authorIds: ["김창오", "목성훈"], venue: "한국항공우주학회지", year: 2025, kind: "journal", link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003228737" },
  { title: "저비용 큐브위성의 태양 탐색 및 지향 기법 연구", authors: "유혜은, 목성훈", authorIds: ["유혜은", "목성훈"], venue: "한국항공우주학회지", year: 2025, kind: "journal", doi: "10.5139/JKSAS.2025.53.2.207" },
  { title: "NASA cFS 개발 도구를 이용한 모델 기반 비행제어소프트웨어 개발", authors: "목성훈, 조동현, 김창오, 양예지, 유혜은, 김동호, 최기영, 강석주, 박상섭, 유성재", authorIds: ["목성훈", "조동현", "김창오", "양예지", "유혜은", "김동호", "최기영", "강석주", "박상섭", "유성재"], venue: "한국항공우주학회지", year: 2025, kind: "journal", link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003211441" },

  { title: "ADS-B, 기상, 지형 데이터의 통합을 통한 대기속도 추정", authors: "김효중, 박배선, 유창경, 이학태", authorIds: ["김효중", "박배선", "유창경", "이학태"], venue: "한국항공우주학회지", year: 2022, kind: "journal", doi: "10.5139/JKSAS.2022.50.1.67" },
  { title: "다수 드론의 충돌 회피를 위한 경로점 구간 속도 프로파일 최적화", authors: "김태형, 강태영, 이진규, 김종한, 유창경", authorIds: ["김태형", "강태영", "이진규", "김종한", "유창경"], venue: "한국항공우주학회지", year: 2022, kind: "journal", doi: "10.5139/JKSAS.2022.50.11.763" },
  { title: "GA급 항공기를 위한 다중센서와 딥러닝 기반 충돌 회피 조종사 보조 시스템 개발 PartⅠ알고리즘 개발 및 검증", authors: "라히미 모하마드, 김세준, 김종한, 최기영", authorIds: ["라히미 모하마드", "김세준", "김종한", "최기영"], venue: "한국항공우주학회지", year: 2024, kind: "journal", doi: "10.5139/JKSAS.2024.52.4.323" },
  { title: "GA급 항공기를 위한 다중센서와 딥러닝 기반 충돌 회피 조종사 보조 시스템 개발 PartⅡ 시스템 구성과 비행시험", authors: "라히미 모하마드, 김세준, 김다혜, 김종한, 최기영", authorIds: ["라히미 모하마드", "김세준", "김다혜", "김종한", "최기영"], venue: "한국항공우주학회지", year: 2024, kind: "journal", doi: "10.5139/JKSAS.2024.52.4.333" },

  { title: "적외선 영상탐색기를 탑재한 대함유도탄-함정방어체계 교전모의 프로그램 개발", authors: "박상섭, 김도완, 최기영, 김정호, 유창경", authorIds: ["박상섭", "김도완", "최기영", "김정호", "유창경"], venue: "한국항공우주학회지", year: 2013, kind: "journal", link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001767946" },
  { title: "무인항공기용 서보형 받음각센서 개발", authors: "박미현, 김성수, 최기영, 박춘배, 유창경", authorIds: ["박미현", "김성수", "최기영", "박춘배", "유창경"], venue: "한국항공우주학회지", year: 2009, kind: "journal", link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001339765" },
  { title: "복수 무인항공기의 운용을 위한 지상통제 소프트웨어 개발", authors: "신윤호, 조상욱, 조성범, 김성환, 유창경, 최기영", authorIds: ["신윤호", "조상욱", "조성범", "김성환", "유창경", "최기영"], venue: "한국항공우주학회지", year: 2012, kind: "journal", link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001665896" },
  { title: "유무인기 협업 기반의 SEAD 임무 수행절차 분석", authors: "김정훈, 서원익, 최기영, 유창경", authorIds: ["김정훈", "서원익", "최기영", "유창경"], venue: "한국항공우주학회지", year: 2019, kind: "journal", link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002499885" },
  { title: "복수 무인기 네트워크 통합 운영 시스템 개발", authors: "김성환, 최기영, 조상욱, 김성수, 유창경", authorIds: ["김성환", "최기영", "조상욱", "김성수", "유창경"], venue: "한국항공우주학회지", year: 2011, kind: "journal", link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001600162" },
  { title: "위성 시스템 개념설계 소프트웨어 개발", authors: "박우성, 윤중섭, 최기영, 김희섭, 유창경", authorIds: ["박우성", "윤중섭", "최기영", "김희섭", "유창경"], venue: "한국항공우주학회지", year: 2009, kind: "journal", link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001372402" },
  { title: "모델기반 자동코드 생성과 실시간 운영체제 기반 무인기용 비행제어시스템 탑재 프로그램 개발", authors: "김성환, 최기영, 조상욱, 김성수, 유창경", authorIds: ["김성환", "최기영", "조상욱", "김성수", "유창경"], venue: "한국항공우주학회지", year: 2011, kind: "journal", link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001594129" },
  { title: "유무인항공기 통합 시뮬레이션 연구", authors: "오혜주, 박배선, 최기영, 이학태, 정현태, 문우춘", authorIds: ["오혜주", "박배선", "최기영", "이학태", "정현태", "문우춘"], venue: "한국항행학회논문지", year: 2015, kind: "journal", link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002067945" },

  { title: "전동 하이브리드 무인 드론의 동력 계통 최적화", authors: "박정환, 류희경, 이학태", authorIds: ["박정환", "류희경", "이학태"], venue: "한국항공우주학회지", year: 2019, kind: "journal", doi: "10.5139/JKSAS.2019.47.4.300" },
  { title: "인천국제공항과 김포국제공항의 비행 절차 위험도 분석", authors: "이현웅, 이학태", authorIds: ["이현웅", "이학태"], venue: "한국항행학회논문지", year: 2020, kind: "journal", doi: "10.12673/jant.2020.24.6.500" },
  { title: "Analysis and Prediction of Aircraft Counts in Korean National Airspace Using Gaussian Mixture Model", authors: "Jin Hyeok Kang, Jae-young Ryu, Hak-Tae Lee", authorIds: ["Jin Hyeok Kang", "Jae-young Ryu", "Hak-Tae Lee"], venue: "한국항공우주학회지", year: 2024, kind: "journal", doi: "10.5139/JKSAS.2024.52.1.77" },
  { title: "항공기 지상 이동 Fast-Time 시뮬레이터 개발", authors: "김태영, 박배선, 이현웅, 이학태", authorIds: ["김태영", "박배선", "이현웅", "이학태"], venue: "한국항행학회논문지", year: 2019, kind: "journal", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE10103858" },
  { title: "군집분석과 Isolation Forest를 이용한 접근 이상 항적 탐지", authors: "고영호, 김승환, 이학태, 박지훈, 박헌진", authorIds: ["고영호", "김승환", "이학태", "박지훈", "박헌진"], venue: "한국지능시스템학회 논문지", year: 2024, kind: "journal", doi: "10.5391/JKIIS.2024.34.1.25" },
  { title: "ADS-B out을 사용하기 위한 행정 절차 분석과 이를 이용한 비행시험 결과", authors: "박정환, 류재영, 김태영, 이석환, 박민균, 이학태", authorIds: ["박정환", "류재영", "김태영", "이석환", "박민균", "이학태"], venue: "한국항행학회논문지", year: 2024, kind: "journal", doi: "10.12673/jant.2024.28.6.844" },
  { title: "항공기 지상 이동 선입 선처리 스케줄링", authors: "강선영, 박배선, 이학태", authorIds: ["강선영", "박배선", "이학태"], venue: "한국항행학회논문지", year: 2017, kind: "journal", doi: "10.12673/jant.2017.21.1.37" },
  { title: "2019년도 인천 FIR 공중 충돌 위험도 분석", authors: "류재영, 이현웅, 박배선, 이학태", authorIds: ["류재영", "이현웅", "박배선", "이학태"], venue: "한국항행학회논문지", year: 2021, kind: "journal", doi: "10.12673/jant.2021.25.6.476" },
  { title: "LSTM Auto Encoder 이용한 접근 이상 항적 탐지 모형", authors: "박지훈, 김승환, 이학태, 고영호, 박헌진", authorIds: ["박지훈", "김승환", "이학태", "고영호", "박헌진"], venue: "한국자료분석학회논문지", year: 2024, kind: "journal", doi: "10.37727/jkdas.2024.26.1.35" },

  { title: "연료 균형을 고려한 인공위성 편대비행유지 최적 임펄스 제어", authors: "목성훈, 최윤혁, 조동현, 방효충", authorIds: ["목성훈", "최윤혁", "조동현", "방효충"], venue: "한국항공우주학회지", year: 2010, kind: "journal", link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001416429" },
  { title: "자동 비행 소형 무인 회전익항공기의 영상정보를 이용한 지상 이동물체 추적 연구", authors: "강태화, 백광열, 목성훈, 이원석, 이동진, 임승한, 방효충", authorIds: ["강태화", "백광열", "목성훈", "이원석", "이동진", "임승한", "방효충"], venue: "한국항공우주학회지", year: 2010, kind: "journal", link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001441193" },
  { title: "Terrain Slope Estimation Methods Using the Least Squares Approach for Terrain Referenced Navigation", authors: "Sung-Hoon Mok, Hyochoong Bang", authorIds: ["Sung-Hoon Mok", "Hyochoong Bang"], venue: "International Journal of Aeronautical and Space Sciences", year: 2013, kind: "journal", link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART001758921" },
  { title: "Performance Analysis of Spinning and Non-Spinning Solar Sailcraft Configurations: A Novel OctaSail Sailcraft Concept", authors: "Umar Shafiq, Sung-Hoon Mok, Hyochoong Bang", authorIds: ["Umar Shafiq", "Sung-Hoon Mok", "Hyochoong Bang"], venue: "International Journal of Aeronautical and Space Sciences", year: 2018, kind: "journal", link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002389001" },
  { title: "Heuristic-Based Mission Planning for an Agile Earth Observation Satellite", authors: "Sung-Hoon Mok, Sujang Jo, Hyochoong Bang, Hyunjae Lee", authorIds: ["Sung-Hoon Mok", "Sujang Jo", "Hyochoong Bang", "Hyunjae Lee"], venue: "International Journal of Aeronautical and Space Sciences", year: 2019, kind: "journal", doi: "10.1007/s42405-018-0105-4" },
  { title: "리액션휠 기반 고기동 위성 자세제어 기법 연구", authors: "김태호, 목성훈, 방효충, 송태성, 송덕기, 서중보", authorIds: ["김태호", "목성훈", "방효충", "송태성", "송덕기", "서중보"], venue: "한국항공우주학회지", year: 2018, kind: "journal", link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002402178" },
  { title: "고기동 인공위성의 해석적 자세명령생성 기법 연구", authors: "목성훈, 방효충, 김희섭", authorIds: ["목성훈", "방효충", "김희섭"], venue: "한국항공우주학회지", year: 2018, kind: "journal", link: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002372731" },

  { title: "국외 국방우주분야 개발사례 및 동향", authors: "목성훈, 한상설", authorIds: ["목성훈", "한상설"], venue: "한국항공우주학회 추계학술대회", year: 2020, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE10526127" },
  { title: "INHA ROSAT 큐브위성 초기 자세 안정화 연구", authors: "유혜은, 목성훈, 최기영", authorIds: ["유혜은", "목성훈", "최기영"], venue: "한국항공우주학회 추계학술대회", year: 2022, kind: "domestic", link: "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE11181276" },
  { title: "INHA RoSAT 큐브위성 자세 제어 시스템 개발", authors: "유혜은, 김창오, 목성훈, 유지수, 최기영", authorIds: ["유혜은", "김창오", "목성훈", "유지수", "최기영"], venue: "한국항공우주학회 추계학술대회", year: 2025, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12589390" },
  { title: "NASA cFS 기반 다중화 구조의 INHA RoSAT 명령 및 데이터 처리계 개발", authors: "이주영, 유혜은, 백준임, 유지수, 조용하, 목성훈, 최기영", authorIds: ["이주영", "유혜은", "백준임", "유지수", "조용하", "목성훈", "최기영"], venue: "한국항공우주학회 춘계학술대회", year: 2023, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11439138" },
  { title: "INHA RoSAT 큐브위성 체계의 전력 버짓 분석", authors: "백준임, 김동호, 목성훈, 최기영", authorIds: ["백준임", "김동호", "목성훈", "최기영"], venue: "한국항공우주학회 우주학술대회", year: 2023, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11622973" },
  { title: "제어모멘트자이로 기반 인공위성 자세제어기 설계", authors: "목성훈, 윤효상", authorIds: ["목성훈", "윤효상"], venue: "한국항공우주학회 추계학술대회", year: 2022, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11180471" },
  { title: "인공위성 근접운용에서의 궤도제어 성능분석", authors: "목성훈, 최윤혁, 방효충", authorIds: ["목성훈", "최윤혁", "방효충"], venue: "한국항공우주학회 추계학술대회", year: 2022, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11180867" },
  { title: "모델 예측 제어 기반 회전 표적 랑데부 및 도킹", authors: "김창오, 목성훈", authorIds: ["김창오", "목성훈"], venue: "한국항공우주학회 추계학술대회", year: 2024, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12061117" },
  { title: "오픈소스 기반 SGP4 구현 및 궤도 전파 성능 분석", authors: "박범수, 목성훈", authorIds: ["박범수", "목성훈"], venue: "한국항공우주학회 추계학술대회", year: 2025, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12589205" },

  { title: "중형항공기 시장 및 기술 발전 동향", authors: "최기영, 고동현", authorIds: ["최기영", "고동현"], venue: "한국항공우주학회 추계학술대회", year: 2019, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE09317837" },
  { title: "생존성을 고려한 다수 이종 무인기 임무영역 할당", authors: "송진안, 조준현, 김세준, 김종한, 최기영", authorIds: ["송진안", "조준현", "김세준", "김종한", "최기영"], venue: "한국항공우주학회 춘계학술대회", year: 2022, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11076884" },
  { title: "MBD기반 유도무기 설계 소프트웨어 개발 방안", authors: "유보미, 홍주현, 고동현, 박주성, 박국권, 최기영, 유창경, 한상설", authorIds: ["유보미", "홍주현", "고동현", "박주성", "박국권", "최기영", "유창경", "한상설"], venue: "한국항공우주학회 추계학술대회", year: 2015, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE06768258" },
  { title: "복수 무인기 임무할당을 위한 운용시스템 구성", authors: "김성균, 조상욱, 유창경, 최기영", authorIds: ["김성균", "조상욱", "유창경", "최기영"], venue: "한국항공우주학회 춘계학술대회", year: 2013, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE02278369" },
  { title: "도로의 기하정보를 이용한 영상기반 항법", authors: "정재현, 윤중섭, 최기영, 유창경, 황호성, 권승복", authorIds: ["정재현", "윤중섭", "최기영", "유창경", "황호성", "권승복"], venue: "한국항공우주학회 춘계학술대회", year: 2011, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE01690434" },
  { title: "INHA ROSAT 검증을 위한 링크 버짓 시뮬레이션 분석", authors: "이주영, 김동호, 최기영", authorIds: ["이주영", "김동호", "최기영"], venue: "한국항공우주학회 추계학술대회", year: 2022, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11181278" },
  { title: "큐브 위성 INHASAT의 전력계 분석", authors: "김승훈, 김세준, 김정훈, 박경인, 유창경, 최기영", authorIds: ["김승훈", "김세준", "김정훈", "박경인", "유창경", "최기영"], venue: "한국항공우주학회 춘계학술대회", year: 2020, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE10442012" },
  { title: "자율조종헬리콥터 개발 사례 연구 및 인하대학교의 개발 계획", authors: "최기영", authorIds: ["최기영"], venue: "한국항공우주학회 학술발표회 초록집", year: 2001, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE01107783" },

  { title: "탄도탄 가속도 프로파일 데이터베이스를 이용한 발사원점 추정", authors: "김나영, 전하민, 김종한, 유창경", authorIds: ["김나영", "전하민", "김종한", "유창경"], venue: "한국항공우주학회 추계학술대회", year: 2024, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12061108" },
  { title: "역문제와 자동미분을 이용한 탄도탄 발사원점 추정", authors: "최형도, 전하민, 유창경, 김종한", authorIds: ["최형도", "전하민", "유창경", "김종한"], venue: "한국항공우주학회 춘계학술대회", year: 2024, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11813874" },
  { title: "Consensus ADMM 기반 동력 하강 유도 기법", authors: "최지우, 김종한", authorIds: ["최지우", "김종한"], venue: "한국항공우주학회 춘계학술대회", year: 2024, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11813885" },
  { title: "우주비행체의 재진입을 위한 천이 궤적 최적화", authors: "김윤중, 조준현, 김종한", authorIds: ["김윤중", "조준현", "김종한"], venue: "한국항공우주학회 우주학술대회", year: 2023, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11622732" },
  { title: "First-Order 기법을 적용한 최적 천이 궤적 설계", authors: "김윤중, 최지우, 김종한", authorIds: ["김윤중", "최지우", "김종한"], venue: "한국항공우주학회 춘계학술대회", year: 2024, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11813895" },
  { title: "재사용발사체 항법 필터를 위한 학습 기반 최적 설계 기법", authors: "황현수, 송승한, 김효중, 전하민, 김종한", authorIds: ["황현수", "송승한", "김효중", "전하민", "김종한"], venue: "한국항공우주학회 우주학술대회", year: 2023, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11622993" },
  { title: "신경망 기반 정사영 연산을 활용한 동력하강 단계 유도", authors: "최지우, 김종한", authorIds: ["최지우", "김종한"], venue: "한국항공우주학회 추계학술대회", year: 2024, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12061201" },
  { title: "트랜스포머를 활용한 시계열 비행 데이터 예측", authors: "전호영, 최진, 조준현, 김종한", authorIds: ["전호영", "최진", "조준현", "김종한"], venue: "한국항공우주학회 춘계학술대회", year: 2023, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11439588" },
  { title: "재사용 발사체의 종말 착륙구간 최적제어", authors: "이재진, 전하민, 최지우, 김종한", authorIds: ["이재진", "전하민", "최지우", "김종한"], venue: "한국항공우주학회 우주학술대회", year: 2024, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12062359" },
  { title: "다수 무인기 협업 임무를 위한 최적 속도 프로파일 산출", authors: "이승엽, 박규빈, 김나영, 김종한, 유혁", authorIds: ["이승엽", "박규빈", "김나영", "김종한", "유혁"], venue: "한국항공우주학회 춘계학술대회", year: 2023, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11439074" },
  { title: "시계열 데이터 예측을 위한 트랜스포머 경량화 설계", authors: "최진, 김종한", authorIds: ["최진", "김종한"], venue: "한국항공우주학회 춘계학술대회", year: 2024, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11813750" },
  { title: "재사용 발사체의 ADMM 기반 최적 유도 설계 및 비행테스트", authors: "최지우, 이도훈, 이승엽, 김윤중, 김나영, 김종한", authorIds: ["최지우", "이도훈", "이승엽", "김윤중", "김나영", "김종한"], venue: "한국항공우주학회 춘계학술대회", year: 2023, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11439082" },
  { title: "편대 비행 궤적 최적화를 위한 분산 최적화 기법", authors: "김동욱, 박규빈, 김종한", authorIds: ["김동욱", "박규빈", "김종한"], venue: "한국항공우주학회 춘계학술대회", year: 2024, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11813607" },
  { title: "재사용 발사체 통합 시험을 위한 항전 시스템 및 HILS 설계", authors: "이주영, 김다혜, 전하민, 김종한, 최기영, 이인택", authorIds: ["이주영", "김다혜", "전하민", "김종한", "최기영", "이인택"], venue: "한국항공우주학회 춘계학술대회", year: 2023, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11439364" },

  { title: "도래각 기반 계층적 다중 표적 위치 추정 기법", authors: "최형도, 김종한", authorIds: ["최형도", "김종한"], venue: "한국항공우주학회 추계학술대회", year: 2025, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12589791" },
  { title: "재사용 발사체 젓가락 회수 유도제어 설계", authors: "이재진, 김종한", authorIds: ["이재진", "김종한"], venue: "한국항공우주학회 춘계학술대회", year: 2025, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12340695" },
  { title: "가변 위협도 대응을 위한 의사결정 유보 궤적 최적화", authors: "정예훈, 김지본, 김종한", authorIds: ["정예훈", "김지본", "김종한"], venue: "한국항공우주학회 추계학술대회", year: 2025, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12589167" },
  { title: "PINN과 IPM을 활용한 Indirect Method 기반 최적 제어 기법", authors: "조은별, 최지우, 김종한", authorIds: ["조은별", "최지우", "김종한"], venue: "한국항공우주학회 추계학술대회", year: 2025, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12589202" },
  { title: "발사체의 TVC-RCS 혼용 제어력 최적 분배 기법", authors: "이재진, 김종한", authorIds: ["이재진", "김종한"], venue: "한국항공우주학회 추계학술대회", year: 2025, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12589160" },
  { title: "재사용 발사체 MIR-LV 비행제어 시스템 개발", authors: "정명식, 이도훈, 이승엽, 정다인, 전하민, 김동호, 모하마드 라히미, 김종한, 최기영", authorIds: ["정명식", "이도훈", "이승엽", "정다인", "전하민", "김동호", "모하마드 라히미", "김종한", "최기영"], venue: "한국항공우주학회 춘계학술대회", year: 2025, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12341222" },
  { title: "비행체 고장에 따른 인명 피해 분석", authors: "이선호, 양웅렬, 김효중, 김종한, 조항주, 박상현, 김종현, 유창경", authorIds: ["이선호", "양웅렬", "김효중", "김종한", "조항주", "박상현", "김종현", "유창경"], venue: "한국항공우주학회 추계학술대회", year: 2025, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12589351" },

  { title: "미래 우주 안보 자산 개발에 대한 연구 접근방안", authors: "김요섭, 이장연, 홍현의, 최정열, 최기영", authorIds: ["김요섭", "이장연", "홍현의", "최정열", "최기영"], venue: "한국항공우주학회 춘계학술대회", year: 2023, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11439345" },
  { title: "NASA cFS를 활용한 라즈베리파이 성능 벤치마크 테스트", authors: "양예지, 최기영", authorIds: ["양예지", "최기영"], venue: "한국항공우주학회 추계학술대회", year: 2023, kind: "domestic", link: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11658471" },

  { title: "An Efficient Design-to-Verification Framework for CubeSat ADCS: Application to INHA RoSAT", authors: "Hye-Eun Yoo, Chang-Oh Kim, Sung-Hoon Mok, Jisoo Yu, Keeyoung Choi", authorIds: ["유혜은", "김창오", "목성훈", "유지수", "최기영"], venue: "Aerospace", year: 2026, kind: "journal", doi: "10.3390/aerospace13020189" },
  { title: "Semi-Closed-Form Solution of Near-Minimum-Time Spin-to-Spin Attitude Maneuvers", authors: "Seong-Hyeon Jo, Sung-Hoon Mok", authorIds: ["조성현", "목성훈"], venue: "Aerospace", year: 2026, kind: "journal", doi: "10.3390/aerospace13030244" },
  { title: "Momentum Envelope Design for Roof-Array Control Moment Gyroscope Arrays", authors: "Sung-Hoon Mok", authorIds: ["목성훈"], venue: "Aerospace", year: 2026, kind: "journal", doi: "10.3390/aerospace13040323" },

  { title: "A First-Order Approach for Nonlinear Optimal Control Under Nonconvex Constraints", authors: "Yun-Jung Kim, Jin Choi, Jiwoo Choi, Jong-Han Kim", authorIds: ["김윤중", "최진", "최지우", "김종한"], venue: "Optimization and Engineering", year: 2026, kind: "journal", doi: "10.1007/s11081-025-10072-3" },
  { title: "Neural Projection Operators for Real-Time 6-DoF Powered Descent Guidance", authors: "Jiwoo Choi, Donghun Lee, Jong-Han Kim", authorIds: ["최지우", "이도훈", "김종한"], venue: "AIAA SciTech Forum", year: 2026, kind: "international", doi: "10.2514/6.2026-1169" },

  { title: "Huber-Based Asynchronous Fusion Filter for Robust Multi-Rate Sensor Processing", authors: "Jang-Seong Park, Gyeong-Hun Kim, Hyuck-Hoon Kwon, Jong-Han Kim", authorIds: ["박장성", "김경훈", "권혁훈", "김종한"], venue: "International Journal of Control, Automation and Systems", year: 2025, kind: "journal", doi: "10.1007/s12555-025-0069-7" },
  { title: "LiftProj: Physics-Informed Koopman Lifting and Projection for Nonlinear Optimal Control via First-Order Optimization", authors: "Jiwoo Choi, Jong-Han Kim", authorIds: ["최지우", "김종한"], venue: "IEEE Control Systems Letters", year: 2025, kind: "journal", doi: "10.1109/LCSYS.2025.3578571" },
  { title: "Velocity Profile Optimization for Multiple UAVs Collision-Free Mission Planning", authors: "Seungyeop Lee, Gyubin Park, Jae-Jin Lee, Hyeok Ryu, Jong-Han Kim", authorIds: ["이승엽", "박규빈", "이재진", "유혁", "김종한"], venue: "International Journal of Aeronautical and Space Sciences", year: 2025, kind: "journal", doi: "10.1007/s42405-025-00911-z" },
  { title: "Spacecraft Attitude Control with On-Off Thrusters via Convex Optimization Based Control Allocation", authors: "Jibon Kim, Jong-Han Kim", authorIds: ["김지본", "김종한"], venue: "International Journal of Aeronautical and Space Sciences", year: 2025, kind: "journal", doi: "10.1007/s42405-025-00904-y" },
  { title: "A Distributed Method for First-Order Optimization With Expansive Projection for Powered Descent Guidance", authors: "Jiwoo Choi, Jong-Han Kim", authorIds: ["최지우", "김종한"], venue: "AIAA SciTech Forum", year: 2025, kind: "international", doi: "10.2514/6.2025-1507" },
  { title: "Launch Point and Impact Point Estimation Using Automatic Differentiation on Inverse Problems", authors: "Hyoung Do Choi, Ha-Min Jeon, Chang-Kyung Ryoo, Jong-Han Kim", authorIds: ["최형도", "전하민", "유창경", "김종한"], venue: "AIAA SciTech Forum", year: 2025, kind: "international", doi: "10.2514/6.2025-2435" },
  { title: "Multi-agent Estimated Time of Arrival Prediction and Dynamic Arrival Sequencing by Emulating Air Traffic Controllers", authors: "Hong-Cheol Choi, Chuhao Deng, Hyunsang Park, Jaeyoung Ryu, Hak-Tae Lee, Inseok Hwang", authorIds: ["최홍철", "덩추하오", "박현상", "류재영", "이학태", "황인석"], venue: "Journal of Air Transport Management", year: 2025, kind: "journal", doi: "10.1016/j.jairtraman.2025.102828" },

  { title: "Optimal Impact Angle Guidance via First-Order Optimization Under Nonconvex Constraints", authors: "Gyubin Park, Jiwoo Choi, Da Hoon Jeong, Jong-Han Kim", authorIds: ["박규빈", "최지우", "정다훈", "김종한"], venue: "American Control Conference", year: 2024, kind: "international", doi: "10.23919/ACC60939.2024.10644186" },
  { title: "Powered Descent Guidance via First-Order Optimization with Expansive Projection", authors: "Jiwoo Choi, Jong-Han Kim", authorIds: ["최지우", "김종한"], venue: "IEEE Access", year: 2024, kind: "journal", doi: "10.1109/ACCESS.2024.3381620" },
  { title: "A First-Order Approach for Optimal Control of Nonlinear Dynamical Systems", authors: "Yun-Jung Kim, Jin Choi, Jiwoo Choi, Jong-Han Kim", authorIds: ["김윤중", "최진", "최지우", "김종한"], venue: "International Conference on Control, Decision and Information Technologies", year: 2024, kind: "international", doi: "10.1109/CoDIT62066.2024.10708294" },
  { title: "Electric Propulsion System Analysis and Optimization for Multi-Rotor Drones", authors: "Hong Su Nam, Seokhwan Lee, Hak-Tae Lee, Hyeon Gyu Lee, Kyu Jin Lee", authorIds: ["남홍수", "이석환", "이학태", "이현규", "이규진"], venue: "IEEE Aerospace Conference", year: 2024, kind: "international", doi: "10.1109/AERO58975.2024.10521403" },
  { title: "Analysis of Terrain Collision Risk Using Flown Trajectory Data", authors: "Jaeyoung Ryu, Hak-Tae Lee", authorIds: ["류재영", "이학태"], venue: "AIAA Aviation Forum", year: 2024, kind: "international", doi: "10.2514/6.2024-4632" },

  { title: "Extracting Flight Plans from Recorded ADS-B Trajectories", authors: "Hyeonwoong Lee, Hak-Tae Lee", authorIds: ["이현웅", "이학태"], venue: "International Journal of Aeronautical and Space Sciences", year: 2023, kind: "journal", doi: "10.1007/s42405-022-00539-3" },
  { title: "Detection and Analysis of Aviation Safety Events using Historic Flight Data", authors: "Bae Seon Park, Seong Min Han, Hak-Tae Lee, Hyun Lim, Hyuk Byeon, Hyo Jung Jung", authorIds: ["박배선", "한성민", "이학태", "임현", "변혁", "정효정"], venue: "IEEE/AIAA Digital Avionics Systems Conference", year: 2023, kind: "international", doi: "10.1109/DASC58513.2023.10311190" },
  { title: "Closed-form Solution of Attitude Command Generation for Spin-to-Spin Maneuver", authors: "Sung-Hoon Mok, Hyochoong Bang, Donghun Lee", authorIds: ["목성훈", "방효충", "이도훈"], venue: "Advances in Space Research", year: 2023, kind: "journal", doi: "10.1016/j.asr.2022.07.053" },

  { title: "Emergency Soft Landing Trajectory Design for Multirotor Vehicles Under Rotor Failures", authors: "Yun-Jung Hwang, Ha-Min Jeon, Yong-Duk Jung, Jong-Han Kim", authorIds: ["황윤정", "전하민", "정용덕", "김종한"], venue: "Asia-Pacific International Symposium on Aerospace Technology", year: 2022, kind: "international", link: "https://jonghank.github.io/publications.html" },
  { title: "An ADMM-based Approach for Traveling Salesman Problems", authors: "Jae-Hwan Cho, Hyeok Ryu, Jong-Han Kim", authorIds: ["조재환", "유혁", "김종한"], venue: "Asia-Pacific International Symposium on Aerospace Technology", year: 2022, kind: "international", link: "https://jonghank.github.io/publications.html" },
  { title: "Large Divert Computational Guidance for Exoatmospheric Vehicles", authors: "Gyubin Park, Jae-Hwan Cho, Jong-Han Kim", authorIds: ["박규빈", "조재환", "김종한"], venue: "Asian Control Conference", year: 2022, kind: "international", link: "https://jonghank.github.io/publications.html" },
  { title: "Multiclass Classification Fault Diagnosis of Multirotor UAVs Utilizing a Deep Neural Network", authors: "Jang-Ho Park, Jong-Han Kim, Yong-Duk Jung", authorIds: ["박장호", "김종한", "정용덕"], venue: "International Journal of Control, Automation and Systems", year: 2022, kind: "journal", doi: "10.1007/s12555-021-0666-z" },

  { title: "Optimal Multi-Target Overflight Using Ground-Track Adjustment", authors: "Sung-Hoon Mok, Hyochoong Bang", authorIds: ["목성훈", "방효충"], venue: "Journal of the Astronautical Sciences", year: 2021, kind: "journal", doi: "10.1007/s40295-020-00240-1" },
  { title: "Binary Classification Fault Diagnosis for Octocopter Using Deep Neural Network", authors: "Jang-Ho Park, Jong-Han Kim, Yong-Duk Jung", authorIds: ["박장호", "김종한", "정용덕"], venue: "Mediterranean Conference on Control and Automation", year: 2021, kind: "international", doi: "10.1109/MED51440.2021.9480303" },

  { title: "One-step Rendezvous Guidance for Improving Observability in Bearings-only Navigation", authors: "Sung-Hoon Mok, Jaehwan Pi, Hyochoong Bang", authorIds: ["목성훈", "피재환", "방효충"], venue: "Advances in Space Research", year: 2020, kind: "journal", doi: "10.1016/j.asr.2020.07.035" },
  { title: "Optimal Cooperative Guidance Laws for Two UAVs Under Sensor Information Deficiency Constraints", authors: "Daniel Lee, Han-Lim Choi, Jong-Han Kim", authorIds: ["대니얼 리", "최한림", "김종한"], venue: "Sensors", year: 2020, kind: "journal", doi: "10.3390/s20174790" },
  { title: "Computational Issues in Sparse and Dense Formulations of Integrated Guidance and Control with Constraints", authors: "Tae-Hyoung Kim, Jang-Ho Park, Jong-Han Kim", authorIds: ["김태형", "박장호", "김종한"], venue: "International Journal of Aeronautical and Space Sciences", year: 2020, kind: "journal", doi: "10.1007/s42405-020-00262-7" },
  { title: "Integrated Guidance and Control Using Model Predictive Control with Flight Path Angle Prediction Against Pull-up Maneuvering Target", authors: "Jang-Ho Park, Yoon Kim, Jong-Han Kim", authorIds: ["박장호", "김윤", "김종한"], venue: "Sensors", year: 2020, kind: "journal", doi: "10.3390/s20113143" },
  { title: "Korea Human Powered Aircraft Competition Lessons Learned", authors: "Ki Ju Kwon, Hak-Tae Lee", authorIds: ["권기주", "이학태"], venue: "AIAA SciTech Forum", year: 2020, kind: "international", doi: "10.2514/6.2020-0979" },

  { title: "Safety and Workload Assessment of Lost C2 Link on Seoul-Jeju Route", authors: "Jisoo Kang, Hyeonwoong Lee, Hyeju Oh, Keeyoung Choi, Hak-Tae Lee, Hyejung Hong, Sang Hyun Kim", authorIds: ["강지수", "이현웅", "오혜주", "최기영", "이학태", "홍혜정", "김상현"], venue: "Journal of Aerospace Information Systems", year: 2019, kind: "journal", doi: "10.2514/1.I010670" },
  { title: "Heuristic-Based Mission Planning for an Agile Earth Observation Satellite", authors: "Sung-Hoon Mok, Sujang Jo, Hyochoong Bang, Hyunjae Lee", authorIds: ["목성훈", "조수장", "방효충", "이현재"], venue: "International Journal of Aeronautical and Space Sciences", year: 2019, kind: "journal", doi: "10.1007/s42405-018-0105-4" },

  { title: "Analysis of ADS-B Trajectories in the Republic of Korea with DAA Well Clear Metrics", authors: "Hyeonwoong Lee, Bae-Seon Park, Hak-Tae Lee", authorIds: ["이현웅", "박배선", "이학태"], venue: "IEEE/AIAA Digital Avionics Systems Conference", year: 2018, kind: "international", doi: "10.1109/DASC.2018.8569702" },
  { title: "Performance Comparison of Gyro-Based and Gyroless Attitude Estimation for CubeSats", authors: "Sung-Hoon Mok, Soo Yung Byeon, Hyochoong Bang, Yoonhyuk Choi", authorIds: ["목성훈", "변수영", "방효충", "최윤혁"], venue: "International Journal of Control, Automation and Systems", year: 2018, kind: "journal", doi: "10.1007/s12555-018-0878-z" },
  { title: "Vision-based Terrain Referenced Navigation of Aerial Vehicles Using an Adaptive Extended Kalman Filter", authors: "Sung-Hoon Mok, Youngjoo Kim, Hyochoong Bang", authorIds: ["목성훈", "김영주", "방효충"], venue: "Proceedings of the Institution of Mechanical Engineers, Part G: Journal of Aerospace Engineering", year: 2018, kind: "journal", doi: "10.1177/0954410017699431" },
  { title: "Augmented Three-loop Autopilot Structure Based on Mixed Sensitivity H-infinity Optimization", authors: "Jong-Han Kim, In-Hee Whang", authorIds: ["김종한", "황인희"], venue: "Journal of Guidance, Control, and Dynamics", year: 2018, kind: "journal", doi: "10.2514/1.G002698" },

  { title: "Human-in-the-Loop Simulation of Trajectory Based Operation Concept for Remotely Piloted Aircraft System Integration", authors: "Jisoo Kang, Seonyoung Kang, Hyeju Oh, Keeyoung Choi, Hak-Tae Lee, Hyuntae Jung, Woo-Choon Moon", authorIds: ["강지수", "강선영", "오혜주", "최기영", "이학태", "정현태", "문우춘"], venue: "AIAA Modeling and Simulation Technologies Conference", year: 2017, kind: "international", doi: "10.2514/6.2017-0806" },

  { title: "Closed-form Cooperative Guidance Law for Two Missiles with Coupled Terminal Velocity Constraints", authors: "Daniel Lee, Jong-Han Kim, Han-Lim Choi", authorIds: ["대니얼 리", "김종한", "최한림"], venue: "Congress of the International Council of the Aeronautical Sciences", year: 2016, kind: "international", link: "https://jonghank.github.io/publications.html" },
  { title: "Finite Horizon Integrated Guidance and Control for Terminal Homing in Vertical Plane", authors: "Jong-Han Kim, In-Hee Whang, Byung-Moon Kim", authorIds: ["김종한", "황인희", "김병문"], venue: "Journal of Guidance, Control, and Dynamics", year: 2016, kind: "journal", doi: "10.2514/1.G000793" },
  { title: "Usage of a Model Following Small Scale UAV for Evaluation of ACMI Ground System", authors: "Sungbeom Jo, Jungsung Kim, Keeyoung Choi", authorIds: ["조성범", "김정성", "최기영"], venue: "AIAA Modeling and Simulation Technologies Conference", year: 2016, kind: "international", doi: "10.2514/6.2016-1670" },
  { title: "Human-in-the-Loop Simulation Analysis of Conflict Resolution for RPAS Integration in Terminal Airspace", authors: "Jisoo Kang, Hyeju Oh, Hak-Tae Lee", authorIds: ["강지수", "오혜주", "이학태"], venue: "AIAA Modeling and Simulation Technologies Conference", year: 2016, kind: "international", doi: "10.2514/6.2016-0169" },

  { title: "Explicit Solutions to Separable Problems in Optimal Cooperative Control", authors: "Jong-Han Kim, Sanjay Lall", authorIds: ["김종한", "산제이 랄"], venue: "IEEE Transactions on Automatic Control", year: 2015, kind: "journal", doi: "10.1109/TAC.2014.2378931" },

  { title: "Reconstruction of Taxiing Path on the Airport", authors: "Seung-Ho Han, Ju-Hyeon Hong, Chang-Kyung Ryoo, Keeyoung Choi", authorIds: ["한승호", "홍주현", "유창경", "최기영"], venue: "SICE Annual Conference", year: 2014, kind: "international", link: "https://sites.google.com/site/ckryoo/publications" },

  { title: "Terrain Slope Estimation Methods Using the Least Squares Approach for Terrain Referenced Navigation", authors: "Sung-Hoon Mok, Hyochoong Bang", authorIds: ["목성훈", "방효충"], venue: "International Journal of Aeronautical and Space Sciences", year: 2013, kind: "journal", doi: "10.5139/IJASS.2013.14.1.85" },

  { title: "Optimal Cooperative Control of Dynamically Decoupled Systems", authors: "Jong-Han Kim, Sanjay Lall, Chang-Kyung Ryoo", authorIds: ["김종한", "산제이 랄", "유창경"], venue: "IEEE Conference on Decision and Control", year: 2012, kind: "international", link: "https://sites.google.com/site/ckryoo/publications" },
  { title: "Autopilot Design for a Target Drone Using Rate Gyros and GPS", authors: "Ihnseok Rhee, Sangook Cho, Sanghyuk Park, Keeyoung Choi", authorIds: ["이인석", "조상욱", "박상혁", "최기영"], venue: "International Journal of Aeronautical and Space Sciences", year: 2012, kind: "journal", doi: "10.5139/IJASS.2012.13.4.468" },
  { title: "Experimental Performance Analysis of Multi-axis MEMS Sensor for the Attitude Reference System", authors: "Ju-Hyun Hong, Sung-Su Kim, Sangook Cho, Chang-Kyung Ryoo, Keeyoung Choi", authorIds: ["홍주현", "김성수", "조상욱", "유창경", "최기영"], venue: "Asia-Pacific International Symposium on Aerospace Technology", year: 2012, kind: "international", link: "https://sites.google.com/site/ckryoo/publications" },

  { title: "Radar Data Tracking Using Minimum Spanning Tree-Based Clustering Algorithm", authors: "Chunki Park, Hak-Tae Lee, Bassam Musaffar", authorIds: ["박춘기", "이학태", "바삼 무사파르"], venue: "AIAA Aviation Technology, Integration, and Operations Conference", year: 2011, kind: "international", doi: "10.2514/6.2011-6825" },
  { title: "A Path Planning Algorithm for Surveillance UAVs with Timing Constraints", authors: "Chanwook Lim, Jae-Hwa Shin, Chang-Kyung Ryoo, Keeyoung Choi, Jinbok Kim, Kyoungsik Yang", authorIds: ["임찬욱", "신재화", "유창경", "최기영", "김진복", "양경식"], venue: "International Conference on Control, Automation and Systems", year: 2010, kind: "international", link: "https://sites.google.com/site/ckryoo/publications" },
  { title: "Anti-Ship Missile's Guidance Law Estimation Filter using IMM Estimator", authors: "Joongsup Yun, Chang-Kyung Ryoo, Keeyoung Choi", authorIds: ["윤중섭", "유창경", "최기영"], venue: "AIAA Guidance, Navigation, and Control Conference", year: 2010, kind: "international", doi: "10.2514/6.2010-8186" },

  { title: "Determination of Optimal Mounting Direction of Two Star Trackers for LEO Satellites", authors: "Woosung Park, Joongsup Yun, Chang-Kyung Ryoo, Keeyoung Choi", authorIds: ["박우성", "윤중섭", "유창경", "최기영"], venue: "Asia-Pacific International Symposium on Aerospace Technology", year: 2009, kind: "international", link: "https://sites.google.com/site/ckryoo/publications" },
  { title: "Terrain Data Aided Passive Ground Target Tracking", authors: "Chang-Hwan Kim, Keeyoung Choi, Chang-Kyung Ryoo, Kyeong-Dae Park, Jin-Bok Kim, Jong-Lae Jo", authorIds: ["김창환", "최기영", "유창경", "박경대", "김진복", "조종래"], venue: "ICROS-SICE International Joint Conference", year: 2009, kind: "international", link: "https://sites.google.com/site/ckryoo/publications" },

  { title: "Guidance Algorithms for Tactical Missiles with Strapdown Seeker", authors: "Se-Ah Jang, Chang-Kyung Ryoo, Keeyoung Choi, Min-Jea Tahk", authorIds: ["장세아", "유창경", "최기영", "탁민제"], venue: "SICE Annual Conference", year: 2008, kind: "international", doi: "10.1109/SICE.2008.4655108" },
  { title: "Development of Alpha Sensor for Unmanned Aerial Systems", authors: "Mi-Hyun Park, Sung-Su Kim, Chang-Kyung Ryoo, Keeyoung Choi, Choonbae Park", authorIds: ["박미현", "김성수", "유창경", "최기영", "박춘배"], venue: "SICE Annual Conference", year: 2008, kind: "international", link: "https://sites.google.com/site/ckryoo/publications" },

  { title: "Multi-Vehicle Formation Using Range-Only Measurement", authors: "Sunghwan Kim, Chang-Kyung Ryoo, Keeyoung Choi, Choonbae Park", authorIds: ["김성환", "유창경", "최기영", "박춘배"], venue: "International Conference on Control, Automation and Systems", year: 2007, kind: "international", link: "https://sites.google.com/site/ckryoo/publications" },
  { title: "A Guidance Law with Sinusoidal Evasive Maneuver for Enhancing Survivability for Anti-Ship Missiles", authors: "Jin-Ik Lee, Chang-Kyung Ryoo, Keeyoung Choi", authorIds: ["이진익", "유창경", "최기영"], venue: "IFAC Symposium on Automatic Control in Aerospace", year: 2007, kind: "international", link: "https://sites.google.com/site/ckryoo/publications" },

  { title: "Optimal Path Planning for UAVs under Multiple Ground Threats", authors: "Boo-Sung Kim, Chang-Kyung Ryoo, Hyochoong Bang", authorIds: ["김부성", "유창경", "방효충"], venue: "JSASS-KSASS Joint Symposium on Aerospace Engineering", year: 2005, kind: "international", link: "https://sites.google.com/site/ckryoo/publications" },
  { title: "Optimal Formation Guidance Law for Multiple Unmanned Aerial Vehicles", authors: "Chang-Kyung Ryoo, Yoon-Hwan Kim, Min-Jea Tahk", authorIds: ["유창경", "김윤환", "탁민제"], venue: "IASTED International Conference on Modelling, Identification, and Control", year: 2005, kind: "international", link: "https://sites.google.com/site/ckryoo/publications" },

  { title: "Capturability Analysis of PN Laws Using Lyapunov Stability Theory", authors: "Chang-Kyung Ryoo, Yoon-Hwan Kim, Min-Jea Tahk", authorIds: ["유창경", "김윤환", "탁민제"], venue: "AIAA Guidance, Navigation, and Control Conference and Exhibit", year: 2004, kind: "international", doi: "10.2514/6.2004-4883" },
  { title: "Sensor Alignment Calibration for Precision Attitude Determination of Spacecrafts", authors: "Il-Hyung Lee, Chang-Kyung Ryoo, Hyochoong Bang, Min-Jea Tahk, Sang-Ryool Lee", authorIds: ["이일형", "유창경", "방효충", "탁민제", "이상률"], venue: "KSAS International Journal", year: 2004, kind: "journal", link: "https://sites.google.com/site/ckryoo/publications" },

  { title: "Optimal Guidance with Constraints on Impact Angle and Terminal Acceleration", authors: "Yong-In Lee, Chang-Kyung Ryoo, Eulgon Kim", authorIds: ["이용인", "유창경", "김을곤"], venue: "AIAA Guidance, Navigation, and Control Conference and Exhibit", year: 2003, kind: "international", doi: "10.2514/6.2003-5795" },
  { title: "3-D Evasive Maneuver Policy for Anti-Ship Missiles Against Close-In Weapon Systems", authors: "Chang-Kyung Ryoo, Ick-Ho Whang, Min-Jea Tahk", authorIds: ["유창경", "황익호", "탁민제"], venue: "AIAA Guidance, Navigation, and Control Conference and Exhibit", year: 2003, kind: "international", doi: "10.2514/6.2003-5653" },

  { title: "Accelerated Co-evolutionary Algorithms", authors: "Jong-Han Kim, Min-Jea Tahk", authorIds: ["김종한", "탁민제"], venue: "International Journal of Aeronautical and Space Sciences", year: 2002, kind: "journal", link: "https://jonghank.github.io/publications.html" }
]

import { professors } from "./professors";
import { students } from "./students";

export function getAuthorNames(ids: string[]): string {
  return ids
    .map((id) => {
      const prof = professors.find((p) => p.id === id);
      if (prof) return prof.name.ko;
      const student = students.find((s) => s.id === id);
      if (student) return student.name.ko;
      return id;
    })
    .join(", ");
}

export function publicationsByProfessor(profId: string): Publication[] {
  return publications.filter((p) => p.authorIds.includes(profId));
}

export function publicationsByAuthorId(id: string): Publication[] {
  return publications.filter((p) => p.authorIds.includes(id));
}

export const PUBLICATION_KIND_ORDER: PublicationKind[] = ["journal", "international", "domestic"];

export const PUBLICATION_KIND_LABEL: Record<PublicationKind, string> = {
  journal: "Journal Papers",
  international: "International Conferences",
  domestic: "Domestic Conferences",
};

export function groupByKindThenYear(list: Publication[]): Record<PublicationKind, Record<number, Publication[]>> {
  const out = { journal: {}, international: {}, domestic: {} } as Record<PublicationKind, Record<number, Publication[]>>;
  for (const p of list) {
    (out[p.kind][p.year] ??= []).push(p);
  }
  return out;
}
