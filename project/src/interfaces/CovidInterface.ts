/**
 * @param gobunEn 시도명(영문)
 * @param deathCnt 사망자수
 * @param defCnt 누적확진자수
 * @param isolClearCnt 누적격리해제수
 * @param stdDay 기준일자
 * @param localOccCnt 지역발생수
 * @param qurRate 10만명당발생율
 * @param overFlowCnt 해외유입수
 * @param gubunCn 시도명(중문)
 * @param incDec 전일대비확진자증감수
 * @param isolIngCnt 격리중환자수
 * @param gubun 시도명
 */
export  interface ICovidItem {
  gubunEn: string;
  deathCnt: string;
  defCnt: string;
  isolClearCnt: string;
  stdDay: string;
  localOccCnt: string;
  qurRate: string;
  overFlowCnt: string;
  gubunCn: string;
  incDec: string;
  isolIngCnt: string;
  gubun: string;
}

export interface ICovidData {
  items: ICovidItem[];
  numOfRows : string;
  pageNo : string;
  resultCode : string;
  resultMsg : string;
  totalCount : number;
}