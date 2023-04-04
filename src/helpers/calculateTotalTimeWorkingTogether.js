export const calculateTotalTimeWorkingTogether = (
  onlyPairsThatWorkedTogether
) => {
  let totalTimes = {};
  onlyPairsThatWorkedTogether.forEach((pair) => {
    const pairKey = pair.employee1Id + pair.employee2Id;
    if (totalTimes.hasOwnProperty([pairKey])) {
      totalTimes[pairKey].totalOverlap += pair.overlappingDays;
      totalTimes[pairKey].projects.push(pair);
      return;
    }

    totalTimes[pairKey] = {
      projects: [pair],
      totalOverlap: pair.overlappingDays,
    };
  });

  return totalTimes;
};
