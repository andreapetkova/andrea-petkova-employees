export const employeesForEachProjectArray = (inputData) => {
  const projects = {};

  inputData.forEach((em) => {
    if (projects.hasOwnProperty(em.projectId)) {
      projects[em.projectId].push(em);
    } else {
      projects[em.projectId] = [em];
    }
  });

  return Object.values(projects);
};
