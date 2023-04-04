export const allEmployeePairsInProject = ([employee, ...restOfEmployees]) =>
  employee === undefined
    ? []
    : restOfEmployees
        .map((nextEmployee) => [employee, nextEmployee])
        .concat(allEmployeePairsInProject(restOfEmployees));
