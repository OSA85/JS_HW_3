// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")
const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

  function addDepartment(idEnterpris, newDepartment){
    let maxId = 0;
    enterprises.forEach(enterpris => {
        if (enterpris.id>maxId) maxId = enterpris.id;
        enterpris.departments.forEach(department => {
            if (department.id>maxId) maxId = department.id;
            }
            )
        return maxId;
        }
    )

    let addInEnterpris = enterprises.find(enterpris => enterpris.id === idEnterpris);
    if (addInEnterpris){
    addInEnterpris.departments.push ({id: maxId + 1, name: newDepartment, employees_count: 10})
    console.log(addInEnterpris)}
    else {console.log(`Нет предприятия с id == ${idEnterpris}`)}
    
  }

  addDepartment(3, "Управление по управлению управлениями")