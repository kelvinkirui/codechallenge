// Define constants for tax rates, NHIF deductions, and NSSF deductions
let TAX_RATE = 0;
if(grossSalary <= 24000){
TAX_RATE =(grossSalary) * 0.1;
}else if (grossSalary <= 3233){
  TAX_RATE =(grossSalary - 2488) *0.25;
}else{
  TAX_RATE =(grossSalary - 3233) *0.30
}
const NHIF_DEDUCTION = 500;
const NSSS_DEDUCTION = 200;

function calculateNetSalary() {
  // Get input values from the user
  const basicSalary = parseFloat(document.getElementById("basic-salary").value);
  const benefits = parseFloat(document.getElementById("benefits").value);

  // Calculate gross salary and taxable income
  const grossSalary = basicSalary + benefits;
  const taxableIncome = grossSalary - NHIF_DEDUCTION - NSSS_DEDUCTION;

  // Calculate payee (tax) based on taxable income
  const payee = taxableIncome * TAX_RATE;

  // Calculate net salary
  const netSalary = grossSalary - payee - NHIF_DEDUCTION - NSSS_DEDUCTION;

  // Display the results to the user
  document.getElementById("gross-salary").innerHTML = `KES ${grossSalary.toFixed(2)}`;
  document.getElementById("nhif-deductions").innerHTML = `KES ${NHIF_DEDUCTION.toFixed(2)}`;
  document.getElementById("nssf-deductions").innerHTML = `KES ${NSSS_DEDUCTION.toFixed(2)}`;
  document.getElementById("payee").innerHTML = `KES ${payee.toFixed(2)}`;
  document.getElementById("net-salary").innerHTML = `KES ${netSalary.toFixed(2)}`;
}
