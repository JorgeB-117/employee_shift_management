// Task 1: Create an Employees Array of Employee Objects

const employees = [
    {name: 'Hazel',
        shifts: [
            {day: "Monday", hours: 8},
            {day: "Tuesday", hours: 6},
            {day: "Wednesday", hours: 4},
            {day: "Thursday", hours: 8},
            {day: "Friday", hours: 4},
        ]
    },
    {name: 'Steven',
        shifts: [
            {day: "Tuesday", hours: 6},
            {day:"Thursday", hours: 8},
            {day: "Friday", hours: 10},
        ]
    },
    {name: 'Ricky',
        shifts: [
            {day: "Monday", hours: 9},
            {day:"Tuesday", hours: 10},
            {day: "Wednesday", hours: 6},
            {day: "Thursday", hours: 8},
        ] 
    },
    {name: 'Alan',
        shifts: [
            {day:"Thursday", hours: 8},
            {day:"Friday", hours: 6},
            {day:"Saturday", hours: 8},
            {day:"Sunday", hours: 4},
        ]
    },
];

// Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts(employee){
    console.log(`Employee: ${employee.name}`);
    console.log("Shifts:");

    employee.shifts.forEach(shift => {
        console.log(`${shift.day}: ${shift.hours} hours`);
    });
};
