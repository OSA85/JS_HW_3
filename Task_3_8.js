// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

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

function deleteDepartment(idDepartment){
    enterprises.forEach (enterprise => {
      let deleteDepartment =  enterprise.departments.find( department => department.id === idDepartment && department.employees_count !=0)
      if(deleteDepartment){enterprise.departments.splice(deleteDepartment, 1)
        console.log(enterprises);
      }
      else {console.log(`нет такого департамента на предпрятии "${enterprise.name}" или нет работников в оделе с id == ${idDepartment}`)}
    })
}
deleteDepartment(2)
deleteDepartment(10)
deleteDepartment(1)

function deleteDepartment1(idDepartment){
        enterprises.forEach (enterprise => {
          let deleteDepartment =  enterprise.departments.find( department => department.id === idDepartment)
          if(deleteDepartment){
            if (deleteDepartment.employees_count == 0){
                console.log(`Есть работники в этом отделе`)
            }
            else{enterprise.departments.splice(deleteDepartment, 1)
            console.log(enterprises);}
          }
        })
    }
    deleteDepartment1(2)
    deleteDepartment1(10)
    deleteDepartment1(1)