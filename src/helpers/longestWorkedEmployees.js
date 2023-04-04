import { allEmployeePairsInProject } from "./allEmployeePairsInProject";
import { calculateOverlapingDays } from "./calculateOverlapingDays";
import { calculateTotalTimeWorkingTogether } from "./calculateTotalTimeWorkingTogether";
import { employeesForEachProjectArray } from "./employeesForEachProjectArray";

export const longestWorkedEmployees = (inputData) => {
  //return array of arrays that contain all employees as objects, that worked in a particular project
  const employeesInProject = employeesForEachProjectArray(inputData);
  //return array or arrays with all possible pairs of employees that worked in the same project
  const allEmployeePairs = employeesInProject.flatMap(
    allEmployeePairsInProject
  );

  const overlappingTimeInPairs = allEmployeePairs.map(
    ([employee1, employee2]) => ({
      id: Math.random().toString(16),
      projectId: employee1.projectId,
      employee1Id: employee1.employeeId,
      employee2Id: employee2.employeeId,
      overlappingDays: calculateOverlapingDays(
        new Date(employee1.dateFrom),
        new Date(employee1.dateTo),
        new Date(employee2.dateFrom),
        new Date(employee2.dateTo)
      ),
    })
  );

  //filter out pairs that don't have any overlaps
  const onlyPairsThatWorkedTogether = overlappingTimeInPairs.filter(
    (pair) => pair.overlappingDays > 0
  );

  //calculate total time worked together by each pair on all common projects
  const totalPairTimeWorking = calculateTotalTimeWorkingTogether(
    onlyPairsThatWorkedTogether
  );

  const longestWorkingPair = Object.values(totalPairTimeWorking).reduce(
    (a, b) => (a.totalOverlap > b.totalOverlap ? a : b),
    { projects: [], totalOverlap: 0 }
  );

  return longestWorkingPair;
};
