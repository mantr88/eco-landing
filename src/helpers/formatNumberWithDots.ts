export function formatNumberWithDots(number: number): string {
  // Convert the number to a string
  const numberString = String(number);

  // Split the string into groups of three digits
  const groups = [];
  let currentGroup = "";
  for (let i = numberString.length - 1; i >= 0; i--) {
    currentGroup = numberString[i] + currentGroup;
    if (currentGroup.length === 3 || i === 0) {
      groups.unshift(currentGroup);
      currentGroup = "";
    }
  }

  // Join the groups with dots
  const formattedNumber = groups.join(".");

  return formattedNumber;
}
