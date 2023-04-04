export const calculateOverlapingDays = (
  employee1StartDate,
  employee1EndDate,
  employee2StartDate,
  employee2EndDate
) => {
  const start =
    employee1StartDate >= employee2StartDate
      ? employee1StartDate
      : employee2StartDate;
  const end =
    employee1EndDate <= employee2EndDate ? employee1EndDate : employee2EndDate;

  const overlapingTime = end - start;
  const overlapingDays = Math.round(overlapingTime / (1000 * 3600 * 24));

  return overlapingDays < 0 ? 0 : overlapingDays;
};
