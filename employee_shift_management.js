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
            {day: "Monday", hours: 4},
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

//Will List employee and shifts below

    employee.shifts.forEach(shift => {
        console.log(`${shift.day}: ${shift.hours} hours`);
    });
};

// Will display the employee name and the shift details


// Task 3: Create a Function to Assign a New Shift

function assignShift(employeeName, day, hours){
    const employee = employees.find(employee => employee.name === employeeName);
    const filledShift = employee.shifts.find(shift => shift.day === day);
    if (filledShift){
        console.log(`${employeeName} already has a shift on ${day}`);
    } else {employee.shifts.push({day, hours});
    console.log(`${employeeName} has a shift scheduled on ${day} for ${hours} hours.`);
}};

// Will display shift assigned to employee


// Task 4: Create a Function to Calculate Total Hours Worked

function calculateTotalHours(employeeName){
    const employee = employees.find(employee => employee.name ===employeeName);
    const totalHours = employee.shifts.reduce((sum, shift) => sum + shift.hours, 0);
    console.log(`${employeeName} has worked a total of ${totalHours} hours.`);        
};

// Will display total hours worked by specific employee


// Task 5: Create a Function to List Employees with Free Days

function listAvailableEmployees(day){
    const availableEmployees= employees.filter(employee =>
   !employee.shifts.some(shift => shift.day === day));
    if (availableEmployees.length > 0) {
    console.log(`Employees available on ${day}:`);
    availableEmployees.forEach(employee => {
    console.log(`${employee.name}`); });} 
    else {
  console.log(`None available on ${day}`); }
};

//Calls for all the tasks
       console.log(displayEmployeeShifts(employees[0]));
       console.log(assignShift("Ricky", "Friday", 4));
       console.log(calculateTotalHours("Steven"));
       console.log(listAvailableEmployees("Wednesday"));