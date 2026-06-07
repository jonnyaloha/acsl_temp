export type Project = {
  period: string;
  title: string;
  funder: string;
  pis: string[];
  done: boolean;
};

export const projects: Project[] = [
  {
    period: "2025 – 2029",
    title: "화성 탐사 착륙 유도 및 제어",
    funder: "한국우주항공청",
    pis: ["김종한"],
    done: false,
  },
  {
    period: "2025 – 2027",
    title: "덕티드 램제트 로켓 비행동역학 시뮬레이션",
    funder: "국방과학연구소",
    pis: ["김종한"],
    done: false,
  },
  {
    period: "2025 – 2027",
    title: "인간 교정 기반 안전 강화학습",
    funder: "Airbus Institute for Engineering Research",
    pis: ["김종한"],
    done: false,
  },
  {
    period: "2025 – 2026",
    title: "심우주 착륙 실시간 유도 딥러닝",
    funder: "한국항공우주연구원",
    pis: ["김종한"],
    done: false,
  },
  {
    period: "2023 – 2029",
    title: "생존성 향상 수직이착륙기 임무 효과성 분석",
    funder: "방위사업청",
    pis: ["유창경", "김종한"],
    done: false,
  },
  {
    period: "2023 – 2027",
    title: "재사용 발사체 실시간 동력 하강 유도제어",
    funder: "한국항공우주연구원",
    pis: ["김종한"],
    done: false,
  },
  {
    period: "2023 – 2027",
    title: "차세대 친환경 항공기 엔진 정비 기반 구축",
    funder: "국토교통부",
    pis: ["유창경"],
    done: false,
  },
  {
    period: "2023 – 2026",
    title: "레이더 기반 항공 표적 딥러닝 분류",
    funder: "LIG Nex1",
    pis: ["유창경", "김종한"],
    done: false,
  },
  {
    period: "2022 – 2028",
    title: "재사용 무인우주비행체 재진입 유도제어",
    funder: "방위사업청",
    pis: ["김종한"],
    done: false,
  },
  {
    period: "2022 – 2026",
    title: "다중 이동로봇 최적 임무할당 최적화",
    funder: "방위사업청",
    pis: ["김종한"],
    done: false,
  },
  {
    period: "2022 – 2026",
    title: "미래 우주탐사 및 현지자원활용 연구센터",
    funder: "한국연구재단",
    pis: ["유창경", "김종한"],
    done: false,
  },
  {
    period: "2020 – 2027",
    title: "무인이동체 자율 유도제어 기술",
    funder: "방위사업청",
    pis: ["유창경"],
    done: false,
  },
  {
    period: "2020 – 2026",
    title: "이중펄스 추력 장거리 공대공 유도탄 연구",
    funder: "광역방어 특화연구센터",
    pis: ["유창경"],
    done: false,
  },
  {
    period: "2020 – 2026",
    title: "극장급 미사일방어 협력 유도",
    funder: "국방과학연구소",
    pis: ["김종한"],
    done: false,
  },
  {
    period: "2023 – 2025",
    title: "LEO 위성 저추력 궤도전이 유도",
    funder: "SATREC Initiative",
    pis: ["김종한"],
    done: true,
  },
  {
    period: "2022 – 2024",
    title: "터보팬 엔진 결함허용 모델예측제어",
    funder: "국방과학연구소",
    pis: ["김종한", "유창경"],
    done: true,
  },
  {
    period: "2022 – 2024",
    title: "근접방어무기체계 교전 시뮬레이션",
    funder: "LIG Nex1",
    pis: ["김종한"],
    done: true,
  },
  {
    period: "2022 – 2024",
    title: "교전 시뮬레이션 알고리즘 개발",
    funder: "LIG넥스원",
    pis: ["유창경"],
    done: true,
  },
  {
    period: "2022 – 2023",
    title: "재사용발사체 대각도 연착륙 유도",
    funder: "한국연구재단",
    pis: ["김종한"],
    done: true,
  },
  {
    period: "2021 – 2025",
    title: "다중 차량 최적 충돌회피 경로계획",
    funder: "한국항공우주연구원",
    pis: ["김종한"],
    done: true,
  },
  {
    period: "2021 – 2024",
    title: "스마트드론 충돌회피 AI",
    funder: "모아소프트",
    pis: ["김종한"],
    done: true,
  },
  {
    period: "2019 – 2022",
    title: "대규모 병렬 볼록최적화 가속",
    funder: "한국연구재단",
    pis: ["김종한"],
    done: true,
  },
  {
    period: "2019 – 2021",
    title: "재사용발사체 재진입 및 착륙 유도",
    funder: "한국항공우주연구원",
    pis: ["김종한"],
    done: true,
  },
  {
    period: "2019 – 2021",
    title: "여객기 결함허용 제어배분",
    funder: "한국항공우주연구원",
    pis: ["김종한"],
    done: true,
  },
  {
    period: "2018 – 2023",
    title: "딥강화학습 기반 충돌회피 조종사 보조",
    funder: "한국산업기술평가관리원",
    pis: ["김종한"],
    done: true,
  },
  {
    period: "2017 – 2021",
    title: "무인기 자율-지능 편대 유도제어 기술",
    funder: "방위사업청",
    pis: ["유창경"],
    done: true,
  },
  {
    period: "2013 – 2016",
    title: "행성 탐사위성 자율항법시스템",
    funder: "한국항공우주연구원",
    pis: ["유창경"],
    done: true,
  },
];

export function projectsByProfessor(profId: string): { ongoing: Project[]; completed: Project[] } {
  const profProjects = projects.filter((p) => p.pis.includes(profId));
  return {
    ongoing: profProjects.filter((p) => !p.done),
    completed: profProjects.filter((p) => p.done),
  };
}
