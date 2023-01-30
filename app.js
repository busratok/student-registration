let cohort10StudentList = [
  "C1234 - John Doe, London, Full-Stack",
  "C2345 - Jane Doe, London, Data-Science",
  "C2346 - Mary Ann, Paris, AWS-Devops",
  "C2347 - Adam Smith, Texas, AWS-Devops",
  "C2444 - Michael Great, Arizona, Full-Stack",
  "C2555 - William Cash, Manchester, Data-Science",
  "C2455 - Patrick Jane, Madrid, Full-Stack",
];
let cohort11StudentList = [
  "D1234 - Melissa Doe, Rome, Front-End",
  "D2345 - Linda Denver, London, Data-Science",
  "D2346 - Mary Thomson, Marseille, AWS-Devops",
  "D2347 - Adam Hamilton, Texas, AWS-Devops",
  "D2444 - Bryan Great, Leicester, Full-Stack",
  "D2555 - Hary Cash, Manchester, Data-Science",
  "D2455 - Jane Austine, Barcelona, Data-Science",
];

let cohort12StudentList = [
  "E1234 - Leslie Bing, Kent, Full-Stack",
  "E2345 - Monica Smith, Milano, Data-Science",
  "E2346 - Mary Rock, Paris, AWS-Devops",
  "E2347 - Hunter Smith, Barcelona, Full-Stack",
  "E2444 - Ayse Mert, Ankara, Full-Stack",
  "E2555 - William Hyde, Madrid, Data-Science",
  "E2455 - Patrick Mansol, Lyon, AWS-Devops",
];

const printBtn = document.getElementById("print");
const table = document.querySelector("table");

const organizeData = (list) => {
  let organizedList = list
    .map((el) => el.split(","))
    .map((el, i) => el[0].split(" - "))
    .map((el, i) => [el[0]].concat(el[1].split(" ")));
  let rest = list.map((el) => el.split(",")).map((el) => el.slice(1));
  organizedList = organizedList.map((el, i) => el.concat(rest[i]));
  return organizedList;
};

const createStudent = (student) => {
  const tr = document.createElement("tr");
  tr.setAttribute("class", "student-rows");
  const numberCell = document.createElement("td");
  numberCell.innerText = student[0];
  tr.appendChild(numberCell);
  const firstNameCell = document.createElement("td");
  firstNameCell.innerText = student[1];
  tr.appendChild(firstNameCell);
  const lastNameCell = document.createElement("td");
  lastNameCell.innerText = student[2];
  tr.appendChild(lastNameCell);
  const locationCell = document.createElement("td");
  locationCell.innerText = student[3];
  tr.appendChild(locationCell);
  const pathCell = document.createElement("td");
  pathCell.innerText = student[4];
  tr.appendChild(pathCell);

  table.appendChild(tr);
};
const printTable = (list) => {
  organizeData(list).map((el) => createStudent(el));
};

printBtn.addEventListener("click", () => {
  let studentRows = document.querySelectorAll(".student-rows");
  console.log(studentRows);
  studentRows.forEach((x) => x.remove());
  const chosenClass = document.getElementById("cohorts").value;
  switch (chosenClass) {
    case "10":
      console.log("10");
      printTable(cohort10StudentList);
      break;
    case "11":
      printTable(cohort11StudentList);
      break;
    case "12":
      printTable(cohort12StudentList);
      break;
    default:
      break;
  }
});
