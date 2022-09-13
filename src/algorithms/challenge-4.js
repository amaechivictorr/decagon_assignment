import sumMix from "./challenge-3";
function calculateGrade(marks) {
  const sum = sumMix(marks);
  const avrg = Math.round(sum / marks.length);
  if (avrg >= 1 && avrg <= 49) return "F";
  if (avrg >= 50 && avrg <= 59) return "E";
  if (avrg >= 60 && avrg <= 69) return "D";
  if (avrg >= 70 && avrg <= 79) return "C";
  if (avrg >= 80 && avrg <= 89) return "B";
  if (avrg >= 90 && avrg <= 100) return "A";
}
console.log(calculateGrade([80, 80, 70]));
console.log(calculateGrade([19, 5, 42, 2, 77]));
console.log(calculateGrade([59, 80, 40, 2, 77]));
console.log(calculateGrade([89, 50, 40, 90, 77]));
