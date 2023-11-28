export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
