import React, { useEffect, useState } from 'react';
import Table from '../../components/home-components/Table/Index';
import Form from '../../components/home-components/Form/Index';

const Index = () => {
  const [tableData, setTableData] = useState([]);
  const [totalGrossGain, setTotalGrossGain] = useState(0);
  const [totalLiquidGain, setTotalLiquidGain] = useState(0);
  const [totalSpent, setTotalSpent] = useState(0);
  const [costPerKm, setCostPerKm] = useState(0.20);


  const [salaryGoal, setSalaryGoal] = useState(0);
  const [secondGoal, setSecondGoal] = useState(0);
  const [thirdGoal, setThirdGoal] = useState(0);
  const [remaining, setRemaining] = useState(0);

  const goals = {
    salario: {
      segunda: 75.60,
      terca: 75.60,
      quarta: 75.60,
      quinta: 75.60,
      sexta: 75.60,
      sabado: 75.60,
      domingo: 100.80
    },
    restante: 0,
    meta_1: 9.83,
    meta_2: 5.52,
  };

  const calculateExpense = (kmTraveled) => {
    return costPerKm * kmTraveled;
  }

  // Add input button
  function addInput(date, initialKm, finalKm, grossGain) {
    const [day, month, year] = date.split('/');
    const weekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const weekDay = weekDays[new Date(`${year}/${month}/${day}`).getDay()];

    const kmTraveled = finalKm - initialKm;
    const spent = calculateExpense(kmTraveled).toFixed(2);
    const liquidGain = (grossGain - spent).toFixed(2);
    const percentageExpense = parseFloat((spent / grossGain).toFixed(4));
    const newInput = {
      weekDay,
      date,
      initialKm,
      finalKm,
      kmTraveled,
      grossGain: parseFloat(grossGain),
      liquidGain: parseFloat(liquidGain),
      spent: parseFloat(spent),
      percentageExpense,
      costPerKm
    };

    setTableData([...tableData, newInput]);

    let grossSalary;
    let grossSecondGoal;
    let grossThirdGoal;

    if (weekDay === "Domingo") {
      grossSalary = parseFloat((goals.salario.domingo / (1 - percentageExpense)).toFixed(2));
    } else {
      grossSalary = parseFloat((goals.salario.segunda / (1 - percentageExpense)).toFixed(2));
      grossSecondGoal = parseFloat((goals.meta_1 / (1 - percentageExpense)).toFixed(2));
      grossThirdGoal = parseFloat((goals.meta_2 / (1 - percentageExpense)).toFixed(2));
    }

    // Separate goals
    if (parseFloat(grossGain) >= grossSalary) {
      const remainingAfterSalary = parseFloat(grossGain) - grossSalary;
      setSalaryGoal(prev => prev + grossSalary - (grossSalary * percentageExpense));

      if (remainingAfterSalary > grossSecondGoal) {
        const remainingAfterSecondGoal = remainingAfterSalary - grossSecondGoal;
        setSecondGoal(prev => prev + grossSecondGoal - (grossSecondGoal * percentageExpense));

        if (remainingAfterSecondGoal > grossThirdGoal) {
          const remainingAfterThirdGoal = remainingAfterSecondGoal - grossThirdGoal;
          setThirdGoal(prev => prev + grossThirdGoal - (grossThirdGoal * percentageExpense));

          setRemaining(prev => prev + remainingAfterThirdGoal - (remainingAfterThirdGoal * percentageExpense));
        } else {
          setThirdGoal(prev => prev + remainingAfterSecondGoal - (remainingAfterSecondGoal * percentageExpense));
        }

      } else {
        setSecondGoal(prev => prev + remainingAfterSalary - (remainingAfterSalary * percentageExpense));
      }
    } else {
      setSalaryGoal(prev => prev + parseFloat(grossGain) - (parseFloat(grossGain) * percentageExpense));
    }
  }

  useEffect(() => {
    function calculateTotal() {
      const newTotalGross = tableData.reduce((total, item) => total + parseFloat(item.grossGain), 0);
      const newTotalLiquid = tableData.reduce((total, item) => total + parseFloat(item.liquidGain), 0);
      const newTotalSpent = tableData.reduce((total, item) => total + parseFloat(item.spent), 0);

      setTotalGrossGain(newTotalGross);
      setTotalLiquidGain(newTotalLiquid);
      setTotalSpent(newTotalSpent);
    }
    calculateTotal();
  }, [tableData]);

  return (
    <div>
      <h1>Salário: R$ {parseFloat(salaryGoal).toFixed(2).replace('.', ',')}</h1>
      <h1>Meta 1: R$ {parseFloat(secondGoal).toFixed(2).replace('.', ',')}</h1>
      <h1>Meta 2: R$ {parseFloat(thirdGoal).toFixed(2).replace('.', ',')}</h1>
      <h1>Restante: R$ {parseFloat(remaining).toFixed(2).replace('.', ',')}</h1>
      <Form addInput={addInput} />
      <Table tableData={tableData} totalGrossGain={totalGrossGain} totalLiquidGain={totalLiquidGain} totalSpent={totalSpent} />
    </div>
  )
}

export default Index