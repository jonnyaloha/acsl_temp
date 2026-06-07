import { personPhoto } from "./personPhotos";

export type Bilingual = { en: string; ko: string };

export type Professor = {
  id: string;
  name: Bilingual;
  photo: string; // public/images/people/{id}.jpg
  keywords: string[];
  title: string;
  email: string;
  office: string;
  bio: string;
};

// Replace photos by dropping files at public/images/people/{id}.jpg
export const professors: Professor[] = [
  {
    id: "최기영",
    name: { en: "Prof. Kee Young Choi", ko: "최기영 교수님" },
    photo: personPhoto("최기영"),
    title: "항공우주공학과 교수",
    email: "kchoi@inha.ac.kr",
    office: "00동 101호",
    keywords: [
      "헬리콥터 역학",
      "제어",
      "무인기",
    ],
    bio: "자율 비행체를 위한 강인·적응 유도·항법·제어와 비선형 제어 이론, 비행 동역학 연구를 수행합니다.",
  },
  {
    id: "유창경",
    name: { en: "Prof. Chang-Kyung Ryoo", ko: "유창경 교수님" },
    photo: personPhoto("유창경"),
    title: "항공우주공학과 교수",
    email: "ckryoo@inha.ac.kr",
    office: "00동 102호",
    keywords: [
      "유도 무기",
      "무인기 유도제어",
    ],
    bio: "고정밀 동역학 모델링, HIL 시뮬레이션, 디지털 트윈 플랫폼을 활용한 항공우주 시스템 검증 및 평가 연구를 수행합니다.",
  },
  {
    id: "이학태",
    name: { en: "Prof. Haktae Lee", ko: "이학태 교수님" },
    photo: personPhoto("이학태"),
    title: "항공우주공학과 교수",
    email: "haktae.lee@inha.ac.kr",
    office: "00동 103호",
    keywords: [
      "항공교통관제",
      "무인 항공기",
      "공탄성",
      "전산유체역학",
    ],
    bio: "차세대 항공교통관리, UAS 교통관리(UTM), 궤적 기반 운용, 충돌 탐지·해결 연구를 수행합니다.",
  },
  {
    id: "김종한",
    name: { en: "Prof. Jonghan Kim", ko: "김종한 교수님" },
    photo: personPhoto("김종한"),
    title: "항공우주공학과 교수",
    email: "jonghank@inha.ac.kr",
    office: "00동 104호",
    keywords: [
      "최적화",
      "재사용 발사체",
    ],
    bio: "고정익·회전익·VTOL 비행체의 개념 설계, 성능 해석, 안정성 평가를 포함한 시스템 수준 설계를 수행합니다.",
  },
  {
    id: "목성훈",
    name: { en: "Prof. Sung-Hoon Mok", ko: "목성훈 교수님" },
    photo: personPhoto("목성훈"),
    title: "항공우주공학과 교수",
    email: "shmok@inha.ac.kr",
    office: "00동 105호",
    keywords: [
      "인공위성 제어 및 시스템",
      "위성편대비행",
    ],
    bio: "불확실한 환경에서 작동하는 자율 항공우주 시스템을 위한 최적 제어, 학습 기반 제어, 강화학습 연구를 수행합니다.",
  },
  {
    id: "조정우",
    name: { en: "Prof. Jungwoo Cho", ko: "조정우 교수님" },
    photo: personPhoto("조정우"),
    title: "항공우주공학과 교수",
    email: "jungwoo.cho@inha.ac.kr",
    office: "항공 506호",
    keywords: [
      "도심항공교통(UAM)",
      "항공안전",
      "항공교통",
    ],
    bio: "불확실한 환경에서 작동하는 자율 항공우주 시스템을 위한 최적 제어, 학습 기반 제어, 강화학습 연구를 수행합니다.",
  },
];

export function getProfessor(id: string): Professor | undefined {
  return professors.find((p) => p.id === id);
}
