import { transactions } from "../data";

/**
 * Find which customer has the highest total amount spent
 * refunds are subctracted from the customers total
 *
 * iterate through array
 * Variable to hold top customer
 *
 *
 */

function TopCustomer() {
  let spendingTotals = {};
  let topCustomer: string;
  let maxValue = 0;

  transactions.forEach((item) => {
    if (!spendingTotals[item.customer]) {
      spendingTotals[item.customer] = item.amount;
    } else {
      spendingTotals[item.customer] =
        spendingTotals[item.customer] + item.amount;
    }
  });

  console.log(spendingTotals);

  const customers = Object.keys(spendingTotals);
  customers.map((customerName) => {
    const currentTotal = spendingTotals[customerName];
    maxValue = Math.max(maxValue, currentTotal);
  });

  topCustomer = customers.find((customerName) => {
    return spendingTotals[customerName] === maxValue;
  });

  return topCustomer;
}

export function Dashboard() {
  const topCustomer = TopCustomer();
  return (
    <div className=" p-4 border-solid border-2 rounded-lg">
      <ul>
        {transactions.map((item) => {
          const isTopCustomer = item.customer === topCustomer;
          return (
            <li key={item.id}>
              <span className={`${isTopCustomer ? "bg-yellow-200" : ""} `}>
                {item.customer}
              </span>
              : {item.amount}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
