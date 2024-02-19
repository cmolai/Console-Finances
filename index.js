

  const data = [
    { Date: 'Jan-2010', ProfitLoss: 867884 },
    { Date: 'Feb-2010', ProfitLoss: 984655 },
    { Date: 'Mar-2010', ProfitLoss: 322013 },
    { Date: 'Apr-2010', ProfitLoss: -69417 },
    { Date: 'May-2010', ProfitLoss: 310503 },
    { Date: 'Jun-2010', ProfitLoss: 522857 },
    { Date: 'Jul-2010', ProfitLoss: 1033096 },
    { Date: 'Aug-2010', ProfitLoss: 604885 },
    { Date: 'Sep-2010', ProfitLoss: -216386 },
    { Date: 'Oct-2010', ProfitLoss: 477532 },
    { Date: 'Nov-2010', ProfitLoss: 893810 },
    { Date: 'Dec-2010', ProfitLoss: -80353 },
    { Date: 'Jan-2011', ProfitLoss: 779806 },
    { Date: 'Feb-2011', ProfitLoss: -335203 },
    { Date: 'Mar-2011', ProfitLoss: 697845 },
    { Date: 'Apr-2011', ProfitLoss: 793163 },
    { Date: 'May-2011', ProfitLoss: 485070 },
    { Date: 'Jun-2011', ProfitLoss: 584122 },
    { Date: 'Jul-2011', ProfitLoss: 62729 },
    { Date: 'Aug-2011', ProfitLoss: 668179 },
    { Date: 'Sep-2011', ProfitLoss: 899906 },
    { Date: 'Oct-2011', ProfitLoss: 834719 },
    { Date: 'Nov-2011', ProfitLoss: 132003 },
    { Date: 'Dec-2011', ProfitLoss: 309978 },
    { Date: 'Jan-2012', ProfitLoss: -755566 },
    { Date: 'Feb-2012', ProfitLoss: 1170593 },
    { Date: 'Mar-2012', ProfitLoss: 252788 },
    { Date: 'Apr-2012', ProfitLoss: 1151518 },
    { Date: 'May-2012', ProfitLoss: 817256 },
    { Date: 'Jun-2012', ProfitLoss: 570757 },
    { Date: 'Jul-2012', ProfitLoss: 506702 },
    { Date: 'Aug-2012', ProfitLoss: -1022534 },
    { Date: 'Sep-2012', ProfitLoss: 475062 },
    { Date: 'Oct-2012', ProfitLoss: 779976 },
    { Date: 'Nov-2012', ProfitLoss: 144175 },
    { Date: 'Dec-2012', ProfitLoss: 542494 },
    { Date: 'Jan-2013', ProfitLoss: 359333 },
    { Date: 'Feb-2013', ProfitLoss: 321469 },
    { Date: 'Mar-2013', ProfitLoss: 67780 },
    { Date: 'Apr-2013', ProfitLoss: 471435 },
    { Date: 'May-2013', ProfitLoss: 565603 },
    { Date: 'Jun-2013', ProfitLoss: 872480 },
    { Date: 'Jul-2013', ProfitLoss: 789480 },
    { Date: 'Aug-2013', ProfitLoss: 999942 },
    { Date: 'Sep-2013', ProfitLoss: -1196225 },
    { Date: 'Oct-2013', ProfitLoss: 268997 },
    { Date: 'Nov-2013', ProfitLoss: -687986 },
    { Date: 'Dec-2013', ProfitLoss: 1150461 },
    { Date: 'Jan-2014', ProfitLoss: 682458 },
    { Date: 'Feb-2014', ProfitLoss: 617856 },
    { Date: 'Mar-2014', ProfitLoss: 824098 },
    { Date: 'Apr-2014', ProfitLoss: 581943 },
    { Date: 'May-2014', ProfitLoss: 132864 },
    { Date: 'Jun-2014', ProfitLoss: 448062 },
    { Date: 'Jul-2014', ProfitLoss: 689161 },
    { Date: 'Aug-2014', ProfitLoss: 800701 },
    { Date: 'Sep-2014', ProfitLoss: 1166643 },
    { Date: 'Oct-2014', ProfitLoss: 947333 },
    { Date: 'Nov-2014', ProfitLoss: 578668 },
    { Date: 'Dec-2014', ProfitLoss: 988505 },
    { Date: 'Jan-2015', ProfitLoss: 1139715 },
    { Date: 'Feb-2015', ProfitLoss: 1029471 },
    { Date: 'Mar-2015', ProfitLoss: 687533 },
    { Date: 'Apr-2015', ProfitLoss: -524626 },
    { Date: 'May-2015', ProfitLoss: 158620 },
    { Date: 'Jun-2015', ProfitLoss: 87795 },
    { Date: 'Jul-2015', ProfitLoss: 423389 },
    { Date: 'Aug-2015', ProfitLoss: 840723 },
    { Date: 'Sep-2015', ProfitLoss: 568529 },
    { Date: 'Oct-2015', ProfitLoss: 332067 },
    { Date: 'Nov-2015', ProfitLoss: 989499 },
    { Date: 'Dec-2015', ProfitLoss: 778237 },
    { Date: 'Jan-2016', ProfitLoss: 650000 },
    { Date: 'Feb-2016', ProfitLoss: -1100387 },
    { Date: 'Mar-2016', ProfitLoss: -174946 },
    { Date: 'Apr-2016', ProfitLoss: 757143 },
    { Date: 'May-2016', ProfitLoss: 445709 },
    { Date: 'Jun-2016', ProfitLoss: 712961 },
    { Date: 'Jul-2016', ProfitLoss: -1163797 },
    { Date: 'Aug-2016', ProfitLoss: 569899 },
    { Date: 'Sep-2016', ProfitLoss: 768450 },
    { Date: 'Oct-2016', ProfitLoss: 102685 },
    { Date: 'Nov-2016', ProfitLoss: 795914 },
    { Date: 'Dec-2016', ProfitLoss: 60988 },
    { Date: 'Jan-2017', ProfitLoss: 138230 },
    { Date: 'Feb-2017', ProfitLoss: 671099 }
  ];
  

// Function to calculate financial analysis
function calculateFinancialAnalysis(data) {
  // Initialize variables for analysis
  let totalMonths = 0;
  let totalProfitLoss = 0;
  let totalChange = 0;
  let greatestIncrease = { date: '', amount: 0 };
  let greatestDecrease = { date: '', amount: Infinity };

  // Loop through the data
  for (let i = 1; i < data.length; i++) {
    // Extract date and profit/loss for current and previous months
    const currentDate = data[i].Date;
    const currentProfitLoss = data[i].ProfitLoss;
    const prevDate = data[i - 1].Date;
    const prevProfitLoss = data[i - 1].ProfitLoss;

    // Calculate total profit/loss
    totalProfitLoss += currentProfitLoss;

    // Calculate change in profit/loss
    const change = currentProfitLoss - prevProfitLoss;
    totalChange += change;

    // Update greatest increase and decrease
    if (change > greatestIncrease.amount) {
      greatestIncrease.date = currentDate;
      greatestIncrease.amount = change;
    }

    if (change < greatestDecrease.amount) {
      greatestDecrease.date = currentDate;
      greatestDecrease.amount = change;
    }

    // Increment total months
    totalMonths++;
  }

  // Calculate average change
  const averageChange = totalChange / (totalMonths - 1);

  // Display the financial analysis
  console.log('Financial Analysis');
  console.log('------------------');
  console.log(`Total Months: ${totalMonths}`);
  console.log(`Total Profit/Loss: ${totalProfitLoss}`);
  console.log(`Average Change: ${averageChange.toFixed(2)}`);
  console.log(`Greatest Increase: ${greatestIncrease.date} (${greatestIncrease.amount})`);
  console.log(`Greatest Decrease: ${greatestDecrease.date} (${greatestDecrease.amount})`);
}

// Call the function with your dataset
calculateFinancialAnalysis(data);

