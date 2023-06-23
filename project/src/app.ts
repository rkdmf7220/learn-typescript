// library loading
// import variable from 'library name';

// variable, function import
// import {} from 'file relative path'
import {API_KEY} from "./contants";
import axios, {AxiosResponse} from "axios";
import {Chart} from "chart.js/auto";
// type module
import {ICovidData, ICovidItem} from "./interfaces/CovidInterface"

// utils
function $(selector: string) {
  return document.querySelector(selector);
}

function getUnixTimestamp(date: Date | string) {
  return new Date(date).getTime();
}

// DOM
const confirmedTotal = $(".confirmed-total") as HTMLSpanElement;
const deathsTotal = $(".deaths") as HTMLParagraphElement;
const recoveredTotal = $(".recovered") as HTMLParagraphElement;
const lastUpdatedTime = $(".last-updated-time") as HTMLParagraphElement;
const rankList = $(".rank-list") as HTMLOListElement;
const deathsList = $(".deaths-list") as HTMLOListElement;
const recoveredList = $(".recovered-list") as HTMLOListElement;
const deathSpinner = createSpinnerElement("deaths-spinner");
const recoveredSpinner = createSpinnerElement("recovered-spinner");

function createSpinnerElement(id: string) {
  const wrapperDiv = document.createElement("div");
  wrapperDiv.setAttribute("id", id);
  wrapperDiv.setAttribute(
    "class",
    "spinner-wrapper flex justify-center align-center"
  );
  const spinnerDiv = document.createElement("div");
  spinnerDiv.setAttribute("class", "ripple-spinner");
  spinnerDiv.appendChild(document.createElement("div"));
  spinnerDiv.appendChild(document.createElement("div"));
  wrapperDiv.appendChild(spinnerDiv);
  return wrapperDiv;
}

// state
let isDeathLoading = false;

// api
function getCovidData(): Promise<AxiosResponse<ICovidData>> {
  const url = `https://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=${API_KEY}&pageNo=1&numOfRows=500&apiType=JSON&std_day=2023-06-19`;
  return axios.get(url);
}

function fetchCountryInfo(locationName: string): Promise<AxiosResponse<ICovidData>> {
  const url = `https://apis.data.go.kr/1352000/ODMS_COVID_04/callCovid04Api?serviceKey=${API_KEY}&pageNo=1&numOfRows=10&apiType=JSON&gubun=${locationName}`;
  return axios.get(url);
}

// methods
function startApp() {
  setupData();
  initEvents();
}

// events
function initEvents() {
  rankList.addEventListener("click", handleListClick);
}

async function handleListClick(event: MouseEvent) {
  let selectedId = '경기';
  if (
    event.target instanceof HTMLParagraphElement ||
    event.target instanceof HTMLSpanElement
  ) {
    selectedId = event.target.parentElement.id;
  }
  if (event.target instanceof HTMLLIElement) {
    selectedId = event.target.id;
  }
  if (isDeathLoading) {
    return;
  }
  clearDeathList();
  clearRecoveredList();
  startLoadingAnimation();
  isDeathLoading = true;
  // const {data: deathResponse} = await fetchCountryInfo(
  //   selectedId,
  //   CovidStatus.Deaths
  // );
  // const {data: recoveredResponse} = await fetchCountryInfo(
  //   selectedId,
  //   CovidStatus.Recovered
  // );
  // const {data: confirmedResponse} = await fetchCountryInfo(
  //   selectedId,
  //   CovidStatus.Recovered
  // );
  // const {data: covidResponse} = await getCovidData();
  const {data: locationCovidResponse} = await fetchCountryInfo(selectedId);
  // console.log("covidResponse >>", covidResponse);
  console.log('locationCovidResponse >>', locationCovidResponse)
  endLoadingAnimation();
  setDeathsList(locationCovidResponse);
  setTotalDeathsByCountry(locationCovidResponse);
  setRecoveredList(locationCovidResponse);
  setTotalRecoveredByCountry(locationCovidResponse);
  setChartData(locationCovidResponse);
  isDeathLoading = false;
}

function setDeathsList(data: ICovidData) {
  const sorted = data.items.sort(
    (a: ICovidItem, b: ICovidItem) => getUnixTimestamp(b.stdDay) - getUnixTimestamp(a.stdDay)
  );
  sorted.forEach((value: ICovidItem) => {
    const li = document.createElement("li");
    li.setAttribute("class", "list-item-b flex align-center");
    const span = document.createElement("span");
    span.textContent = value.deathCnt;
    span.setAttribute("class", "deaths");
    const p = document.createElement("p");
    p.textContent = new Date(value.stdDay).toLocaleDateString().slice(0, -1);
    li.appendChild(span);
    li.appendChild(p);
    deathsList.appendChild(li);
  });
}

function clearDeathList() {
  deathsList.innerHTML = null;
}

function setTotalDeathsByCountry(data: ICovidData) {
  deathsTotal.innerText = data.items[0].deathCnt;
}

function setRecoveredList(data: ICovidData) {
  const sorted = data.items.sort(
    (a: ICovidItem, b: ICovidItem) => getUnixTimestamp(b.stdDay) - getUnixTimestamp(a.stdDay)
  );
  sorted.forEach((value: ICovidItem) => {
    const li = document.createElement("li");
    li.setAttribute("class", "list-item-b flex align-center");
    const span = document.createElement("span");
    span.textContent = value.isolClearCnt;
    span.setAttribute("class", "recovered");
    const p = document.createElement("p");
    p.textContent = new Date(value.stdDay).toLocaleDateString().slice(0, -1);
    li.appendChild(span);
    li.appendChild(p);
    recoveredList.appendChild(li);
  });
}

function clearRecoveredList() {
  recoveredList.innerHTML = null;
}

function setTotalRecoveredByCountry(data: ICovidData) {
  recoveredTotal.innerText = data.items[0].isolClearCnt;
}

function startLoadingAnimation() {
  deathsList.appendChild(deathSpinner);
  recoveredList.appendChild(recoveredSpinner);
}

function endLoadingAnimation() {
  deathsList.removeChild(deathSpinner);
  recoveredList.removeChild(recoveredSpinner);
}

async function setupData() {
  const { data } = await getCovidData();
  setTotalConfirmedNumber(data);
  setTotalDeathsByWorld(data);
  setTotalRecoveredByWorld(data);
  setCountryRanksByConfirmedCases(data);
  setLastUpdatedTimestamp(data.items[0]);
}

function renderChart(data: string[], labels: string[]) {
  // const lineChart = $("#lineChart") as HTMLCanvasElement
  // const ctx = lineChart.getContext("2d");
  const ctx = ($("#lineChart") as HTMLCanvasElement).getContext("2d");
  Chart.defaults.color = "#f5eaea";
  Chart.defaults.font.family = "Exo 2";
  new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Confirmed for the last two weeks",
          backgroundColor: "#feb72b",
          borderColor: "#feb72b",
          data,
        },
      ],
    },
    options: {},
  });
}

function setChartData(data: ICovidData) {
  const chartData = data.items.slice(-14).map((value: ICovidItem) => value.localOccCnt);
  const chartLabel = data.items
    .slice(-14)
    .map((value: any) =>
      new Date(value.stdDay).toLocaleDateString().slice(5, -1)
    );
  console.log('chartData >>', chartData)
  renderChart(chartData, chartLabel);
}

function setTotalConfirmedNumber(data: ICovidData) {
  confirmedTotal.innerText = data.items.reduce(
    (total: number, current: ICovidItem) => (total += Number(current.defCnt)),
    0
  ).toString();
}

function setTotalDeathsByWorld(data: ICovidData) {
  deathsTotal.innerText = data.items.reduce(
    (total: number, current: ICovidItem) => (total += Number(current.deathCnt)),
    0
  ).toString();
}

function setTotalRecoveredByWorld(data: ICovidData) {
  recoveredTotal.innerText = data.items.reduce(
    (total: number, current: ICovidItem) => (total += Number(current.isolClearCnt)),
    0
  ).toString();
}

function setCountryRanksByConfirmedCases(data: ICovidData) {
  const sorted = data.items.sort(
    (a: ICovidItem, b: ICovidItem) => Number(b.defCnt) - Number(a.defCnt)
  );
  sorted.forEach((value: ICovidItem) => {
    const li = document.createElement("li");
    li.setAttribute("class", "list-item flex align-center");
    li.setAttribute("id", value.gubun);
    const span = document.createElement("span");
    span.textContent = value.defCnt;
    span.setAttribute("class", "cases");
    const p = document.createElement("p");
    p.setAttribute("class", "country");
    p.textContent = value.gubun;
    li.appendChild(span);
    li.appendChild(p);
    rankList.appendChild(li);
  });
}

function setLastUpdatedTimestamp(data: ICovidItem) {
  lastUpdatedTime.innerText = new Date(data.stdDay).toLocaleString();
  console.log('stdDay >>', data.stdDay)
}

startApp();
