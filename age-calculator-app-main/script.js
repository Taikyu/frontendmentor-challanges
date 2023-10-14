const submitBtn = document.getElementById("submit");
const dayInput = document.getElementById("dayInput");
const dayOutput = document.getElementById("dayOutput");
const dayLabel = document.getElementById("dayLabel");
const warningD = document.getElementById("warningD");
const monthInput = document.getElementById("monthInput");
const monthOutput = document.getElementById("monthOutput");
const monthLabel = document.getElementById("monthLabel");
const warningM = document.getElementById("warningM");
const yearInput = document.getElementById("yearInput");
const yearOutput = document.getElementById("yearOutput");
const yearLabel = document.getElementById("yearLabel");
const warningY = document.getElementById("warningY");

let day = "";
let month = "";
let year = "";

const checkDate = new Date();

let checkYear = checkDate.getFullYear();

//
// dayLabel.classList.add("text-lightRed");

submitBtn.addEventListener("click", submitHandler);

dayInput.addEventListener("keyup", (e) => {
  day = e.target.value.toString();
});
monthInput.addEventListener("keyup", (e) => {
  month = e.target.value.toString();
});
yearInput.addEventListener("keyup", (e) => {
  year = e.target.value.toString();
});

function submitHandler(e) {
  e.preventDefault();
  const date = year + "-" + month + "-" + day;
  // empty input check
  if (day.trim() === "") {
    dayLabel.classList.add("text-lightRed");
    warningD.innerHTML = `This field is required`;
    dayInput.classList.add("border-lightRed");
  }
  if (month.trim() === "") {
    monthLabel.classList.add("text-lightRed");
    monthInput.classList.add("border-lightRed");
    warningM.innerHTML = `This field is required`;
  }
  if (year.trim() === "") {
    yearInput.classList.add("border-lightRed");
    yearLabel.classList.add("text-lightRed");
    warningY.innerHTML = `This field is required`;
  }
  // invalid input check
  if (+day > 31) {
    dayLabel.classList.add("text-lightRed");
    warningD.innerHTML = `Must be a valid day`;
    dayInput.classList.add("border-lightRed");
  }
  if (+month > 12) {
    monthLabel.classList.add("text-lightRed");
    monthInput.classList.add("border-lightRed");
    warningM.innerHTML = `Must be a valid day`;
  }
  if (+year > +checkYear) {
    yearInput.classList.add("border-lightRed");
    yearLabel.classList.add("text-lightRed");
    warningY.innerHTML = `Must be a valid year`;
  }

  //   error catcher
  if (
    day.trim() === "" ||
    month.trim() === "" ||
    year.trim() === "" ||
    +day > 31 ||
    +month > 12 ||
    +year > +checkYear
  ) {
    return;
  }
  if (
    ((+month === 4 || +month === 6 || +month === 9 || +month === 11) &&
      +day > 30) ||
    (+month === 2 && +day > 29)
  ) {
    dayLabel.classList.add("text-lightRed");
    warningD.innerHTML = `Must be a valid date`;
    dayInput.classList.add("border-lightRed");
    yearInput.classList.add("border-lightRed");
    yearLabel.classList.add("text-lightRed");
    monthLabel.classList.add("text-lightRed");
    monthInput.classList.add("border-lightRed");
    return;
  }

  const age = calculateAge(date);
  dayInput.classList.remove("border-lightRed");
  dayLabel.classList.remove("text-lightRed");
  warningD.innerHTML = ``;
  monthInput.classList.remove("border-lightRed");
  monthLabel.classList.remove("text-lightRed");
  warningM.innerHTML = ``;
  yearInput.classList.remove("border-lightRed");
  yearLabel.classList.remove("text-lightRed");
  warningY.innerHTML = ``;
  yearOutput.innerHTML = age.years;
  monthOutput.innerHTML = age.months;
  dayOutput.innerHTML = age.days;
}

function calculateAge(birthdate) {
  const birthDate = new Date(birthdate);
  const currentDate = new Date();

  let years = currentDate.getFullYear() - birthDate.getFullYear();
  let months = currentDate.getMonth() - birthDate.getMonth();
  let days = currentDate.getDate() - birthDate.getDate();

  if (days < 0) {
    const prevMonthLastDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    ).getDate();
    days += prevMonthLastDay;
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const birthYearIsLeap = isLeapYear(birthDate.getFullYear());
  const currentYearIsLeap = isLeapYear(currentDate.getFullYear());

  // Adjust for February in leap years
  if (birthDate.getMonth() === 1 && currentDate.getMonth() === 1) {
    if (birthYearIsLeap && !currentYearIsLeap) {
      days -= 1; // Remove the extra day in the birth year
    } else if (!birthYearIsLeap && currentYearIsLeap) {
      days += 1; // Add an extra day in the current year
    }
  }

  const ageInSeconds = (currentDate - birthDate) / 1000;
  const ageMinutes = ageInSeconds / 60;
  const ageHours = ageMinutes / 60;
  const ageDays = ageHours / 24;

  return {
    years,
    months,
    days,
  };
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
