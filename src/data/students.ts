import type { Bilingual } from "./professors";

export type Degree = "phd_s" | "ms_s" | "ug" | "alumni";

export type Student = {
  id: string;
  name: Bilingual;
  degree: Degree;
  keywords: string[];
  email: string;
  advisorId: string; // professor id
  enrollmentDate?: string; // "YYYY-MM" format

  // For alumni
  graduationDate?: string; // "YYYY-MM" format
  currentPosition?: string;
  alumniDegree?: "phd" | "master" |  "phd_s" |  "ms_s" | "ug";
};

export const students: Student[] = [

//최기영 교수님{kychoi}
  { id: "김동호", name: { en: "Dongho Kim", ko: "김동호" },  degree: "phd_s", keywords: ["공백"], email: "merlin@inha.edu", advisorId: "최기영" , enrollmentDate: "09-2022"},
  { id: "조용하", name: { en: "Yongha Jo", ko: "조용하" }, degree: "phd_s", keywords: ["공백"], email: "jociiiii@inha.edu", advisorId: "최기영", enrollmentDate: "03-2026" },

//유창경 교수님{ckyroo}
  { id: "김효중", name: { en: "Hyo-Jung Kim", ko: "김효중" },   degree: "phd_s", keywords: ["공백"], email: "qnlzsbgaz@naver.com", advisorId: "유창경" , enrollmentDate: "09-2022"},
  { id: "정현기", name: { en: "Hyeon Ki Jeong", ko: "정현기" }, degree: "phd_s", keywords: ["공백"], email: "hkjeong@inha.edu", advisorId: "유창경", enrollmentDate: "" },
  { id: "김정민", name: { en: "Jung-Min Kim", ko: "김정민" },   degree: "phd_s", keywords: ["공백"], email: "daddi146@gmail.com", advisorId: "유창경", enrollmentDate: "" },
  { id: "정명현", name: { en: "Jeong Myeong Hyeon ", ko: "정명현" }, degree: "phd_s", keywords: ["공백"], email: "audgus1123@inha.edu", advisorId: "유창경", enrollmentDate: "" },
  { id: "주형인", name: { en: "Hyeong-In Joo", ko: "주형인" }, degree: "ms_s", keywords: ["공백"], email: "hyeongin@inha.edu", advisorId: "유창경", enrollmentDate: "" },

  //이학태 교수님{htlee}
  { id: "박정환", name: { en: "Jung-Hwan Park", ko: "박정환" }, degree: "phd_s", keywords: ["공백"], email: "nfpark01@naver.com", advisorId: "이학태" },
  { id: "김태영", name: { en: "Tae Young Kim", ko: "김태영" }, degree: "phd_s", keywords: ["공백"], email: "tae0719@gmail.com", advisorId: "이학태" },
  { id: "류재영", name: { en: "Jae-Young Ryu", ko: "류재영" }, degree: "phd_s", keywords: ["공백"], email: "22202159@inha.edu", advisorId: "이학태" },
  { id: "남홍수", name: { en: "", ko: "남홍수" }, degree: "phd_s", keywords: ["공백"], email: "namhs501@naver.com", advisorId: "이학태", enrollmentDate: "" },

  //김종한 교수님{jhkim}
  { id: "박규빈", name: { en: "", ko: "박규빈" }, degree: "phd_s", keywords: ["공백"], email: "gyubin@inha.edu", advisorId: "김종한", enrollmentDate: "" },
  { id: "이재진", name: { en: "", ko: "이재진" }, degree: "phd_s", keywords: ["공백"], email: "jaejin2@inha.edu", advisorId: "김종한", enrollmentDate: "" },
  { id: "신재형", name: { en: "", ko: "신재형" }, degree: "phd_s", keywords: ["공백"], email: "jhshin@inha.edu", advisorId: "김종한", enrollmentDate: "" },
  { id: "김지본", name: { en: "", ko: "김지본" }, degree: "phd_s", keywords: ["공백"], email: "jibonkim@inha.edu", advisorId: "김종한", enrollmentDate: "" },
  { id: "이승엽", name: { en: "", ko: "이승엽" }, degree: "phd_s", keywords: ["공백"], email: "seungyeoplee@inha.edu", advisorId: "김종한", enrollmentDate: "" },
  { id: "이동욱", name: { en: "", ko: "이동욱" }, degree: "ms_s", keywords: ["공백"], email: "DongukL@Inha.edu", advisorId: "김종한", enrollmentDate: "" },
  { id: "임진우", name: { en: "", ko: "임진우" }, degree: "ms_s", keywords: ["공백"], email: "jinwooim@inha.edu", advisorId: "김종한", enrollmentDate: "" },
  { id: "박준식", name: { en: "", ko: "박준식" }, degree: "ms_s", keywords: ["공백"], email: "junshikpark@inha.edu", advisorId: "김종한", enrollmentDate: "" },
  { id: "차재혁", name: { en: "", ko: "차재혁" }, degree: "ms_s", keywords: ["공백"], email: "jaehyeokc@inha.edu", advisorId: "김종한", enrollmentDate: "" },
  { id: "이도훈", name: { en: "", ko: "이도훈" }, degree: "ms_s", keywords: ["공백"], email: "DohoonLee@inha.edu", advisorId: "김종한", enrollmentDate: "" },
  { id: "정명식", name: { en: "", ko: "정명식" }, degree: "ms_s", keywords: ["공백"], email: "myeongsikJeong@inha.edu", advisorId: "김종한", enrollmentDate: "" },

  //목성훈 교수니{shmok}

  // Alumni
  { id: "ppfateqq", name: { en: "", ko: "권기주" }, degree: "phd_s", keywords: ["공백"], email: "ppfateqq@naver.com", advisorId: "", enrollmentDate: "" },
  { id: "busterd", name: { en: "", ko: "박정환" }, degree: "phd_s", keywords: ["공백"], email: "nfpark01@naver.com", advisorId: "", enrollmentDate: "" },
  { id: "moonjung42", name: { en: "", ko: "김문정" }, degree: "phd_s", keywords: ["공백"], email: "moonjung42@naver.com", advisorId: "", enrollmentDate: "" },
  { id: "sjm22124", name: { en: "", ko: "서지민" }, degree: "phd_s", keywords: ["공백"], email: "sjm22124@inha.edu", advisorId: "", enrollmentDate: "" },
  { id: "haminjeon", name: { en: "", ko: "전하민" }, degree: "phd_s", keywords: ["공백"], email: "haminjeon@naver.com", advisorId: "", enrollmentDate: "" },
  { id: "raysbaseball", name: { en: "", ko: "조준현" }, degree: "phd_s", keywords: ["공백"], email: "junhyoncho@inha.edu", advisorId: "", enrollmentDate: "" },

];
