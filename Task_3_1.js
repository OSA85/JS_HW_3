
// // Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

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

  // через forEach
  
enterprises.forEach((enterpris)=>{
  let sum_employees = 0;
  for (let i =0; i<enterpris.departments.length; i++){
     var employees = enterpris.departments[i].employees_count;  
     sum_employees = sum_employees + employees;
   }
   console.log(enterpris.name + "( " + sum_employees +  " сотрудников)" )

   for (let i =0; i<enterpris.departments.length; i++){
      console.log(" - " + enterpris.departments[i].name + "( " + enterpris.departments[i].employees_count + " сотрудников)")  
   }
})

// c reduce и forEach вместо нуля слово нет

  enterprises.forEach((enterpris)=>{
    let sum_employees = enterpris.departments.reduce((accum, enterpris) => accum + enterpris.employees_count, 0);
     
    if (sum_employees === 0){
      console.log(enterpris.name + "(нет сотрудников)")
   }  else {
    console.log(enterpris.name + "(" + sum_employees +  " сотрудников)" )
   }
  
     enterpris.departments.forEach ((department) => {
     if (department.employees_count === 0){
        console.log(" - " + department.name + "(" + "нет сотрудников)")
     }  else {
      console.log(" - " + department.name + "(" + department.employees_count + " сотрудников)")
     }
    }
     )
  })
  