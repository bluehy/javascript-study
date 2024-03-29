const quotes = [
   {
      quote: "물방울이 바위를 뚫을 수 있음은 그 힘이 아니라 꾸준함이다.",
      author: ""
   },
   {
      quote: "먼저 핀 꽃이 먼저 진다. 남보다 먼저 공을 세우려고 조급히 서둘 것이 아니다.",
      author: "애드가 A. 게스트"
   },
   {
      quote: "삶이 소중한 이유는 언젠가 끝나기 때문이다.",
      author: "프란츠 카프카"
   },
   {
      quote: "행하지 않으면 생각은 이루어지지 않는다.",
      author: ""
   },
   {
      quote: "가장 어두운 시간은 해뜨기 바로 직전의 시간이다.",
      author: "파울로 코엘뇨"
   },
   {
      quote: "하지 않는 것보다 늦게라도 하는 것이 낫다.",
      author: ""
   },
   {
      quote: "가장 오래 산 사람은 나이가 많은 사람이 아니고 많은 경험을 한 사람이다.",
      author: "찰스 다윈"
   },
   {
      quote: "한번 찍어 넘어가는 나무는 없다. 욕심이 난다면 넘어갈 때까지 찍어라.",
      author: ""
   },
   {
      quote: "길을 아는 것과 그 길을 걷는 것은 분명히 다르다.",
      author: "모피어스"
   },
   {
      quote: "영원히 살 것처럼 꿈을 꾸고, 오늘 죽을 것처럼 살아라.",
      author: "제임스 딘"
   },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// console.log(quotes[quotes.length - 1]);
// Math module
// Math.random() : 0~1 사이의 random한 수치 
// Math.round(number) : number를 반올림
// Math.ceil(number) : number를 올림
// Math.floor(number) : number를 내림
const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];
// -----------------------------------------------------------

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
