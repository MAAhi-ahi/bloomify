export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "BDT",
  }).format(value);
}

export function formatDate(dateStr) {
  const date = new Date(dateStr);

  if (isNaN(date.getTime())) {
    console.error("Invalid date received:", dateStr);
    return "Invalid Date";
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function calcMinutesLeft(dateStr) {
  console.log("Raw dateStr:", dateStr);
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();

  console.log("Current Time:", d1);
  console.log("Delivery Time:", d2);
  console.log("Minutes Left:", (d2 - d1) / 60000);

  
  if (isNaN(d2)) {
    console.error("Invalid date received in calcMinutesLeft:", dateStr);
    return NaN;
  }

  return Math.round((d2 - d1) / 60000);
}
