// Keep these lines; they're important!
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

let role;
let name;
let id;
let github;
let email;
let officeNumber;
let school;

const managers = [];
const engineers = [];
const interns = [];

// try a switch case 

// create arrays for each employee type

// push object to array for each type, or return for thats all

const menu = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'Employee Role',
            message: "What is the person's role in the company? Select 'No more employees' if there are no more people to add.",
            choices: ['Engineer', 'Intern', 'Manager', 'No more employees']
        },
    ]).then(workers => {

        console.log(workers);

        role = workers['Employee Role'];
        console.log(role);

        subMenu();
    })
}

const subMenu = () => {

    switch(role) {

        case 'Engineer':
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'GitHub Username',
                    message: "What is the engineer's GitHub username?"
                }
            ]).then(handle => {

                console.log(handle);
                github = handle["GitHub Username"];
                console.log(github);
                subMenu2();
            })

            break;

        case 'Manager':
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'Office Number',
                    message: "What is the manager's office number?"
                }
            ]).then(office => {

                console.log(office);
                officeNumber = office["Office Number"];
                console.log(officeNumber);
                subMenu2();
            })

            break;

        case 'Intern':
            inquirer.prompt([
                {
                    type: 'input',
                    name: "Sponsoring School",
                    message: "Which school is the intern attending?"
                }
            ]).then(sponsor => {

                console.log(sponsor);
                school = sponsor["Sponsoring School"];
                console.log(school);
                subMenu2();
            })

            break;

        case 'No more employees':
          
            return;
    }
}



const subMenu2 = () => {
    
    inquirer.prompt([
        {
            type: 'input',
            name: 'Employee Name',
            message: "What is the employee's name?"
        },
        {
            type: 'input',
            name: 'Employee ID',
            message: "What is the employee ID number?",
            validate: function(val) {
                var valid = !isNaN(parseFloat(val));
                return valid || 'Please enter a number'
            }
        },
        {
            type: 'email',
            name: 'Employee Email',
            message: "What is the employee's email address?"
        },
    ]).then(answers => {

        name = answers['Employee Name'];
        console.log(name);
        id = answers['Employee ID'];
        console.log(id);
        email = answers['Employee Email'];
        console.log(email);

        subMenu3();

    })
    
}

const subMenu3 = () => {

    switch(role) {

        case 'Engineer':

            const newEngineer = new Engineer(name, id, email, github);

            engineers.push(newEngineer);
        
            console.log(engineers);
        
            menu();
            break;

        case 'Intern':

            const newIntern = new Intern(name, id, email, school);

            interns.push(newIntern);

            console.log(interns);

            menu();
            break;

        case 'Manager':

            const newManager = new Manager(name, id, email, officeNumber);

            managers.push(newManager);

            console.log(managers);

            menu();
            break;

    }
}

menu();

// inquirer.prompt([
    //     {
        //         type: 'list',
        //         name: 'Employee Role',
        //         message: "What is the person's role in the company?",
//         choices: ['Engineer', 'Intern', 'Manager', 'No more employees']
//     },
// ]).then(answers => {

//     const role = answers["Employee Role"];
//     console.log(role);

//     if (role === 'No more employees') {
//         return;
//     }

//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'Employee Name',
//             message: "What is the employee's name?"
//         },
//         {
//             type: 'input',
//             name: 'Employee ID',
//             message: 'What is the employee ID number?',
//             validate: function(val) {
//                 var valid = !isNaN(parseFloat(val));
//                 return valid || 'Please enter a number'
//             }
//         }
//     ]).then(answers => {

//         const name = answers['Employee Name'];
//         console.log(name);
//         const ID = answers['Employee ID'];
//         console.log(ID);
        
//         switch (role) {
            
//             case 'Engineer':

//                 inquirer.prompt([
//                     {
//                         type: 'input',
//                         name: 'GitHub Username',
//                         message: "What is the employee's GitHub username?"
//                     }
//                 ]).then(answers => {

//                     const github = answers['GitHub Username'];
//                     console.log(github);
//                 })
                
//                 break;
//                 case 'Intern':
//                     console.log("oh yeah!");
//                     break;
//                     case 'Manager':
//                         console.log("shabooyakah!!");
//                         break;
//                         case 'No more employees':
//                             console.log("thats all folks!");
//                             break;
//                             default:
//                                 console.log("nothing found");
//                             }
                            
//                         })
                            
                            
//                         });
                        
                        //     if (answers['Employee Role'] === 'Engineer') {
                            
                            //         inquirer.prompt([
                                //             {
                                    //                 type: 'input',
//                 name: 'GitHub Username',
//                 message: "What is their GitHub username?"
//             }
//         ]).then(answers => {
    
    //             const github = answers["GitHub Username"];
    //             console.log(github);
    //         })
    //     }
    //     if (answers["Employee Role"] === 'Intern') {
        
        //         inquirer.prompt([
            //             {
                //                 type: 'input',
//                 name: "School",
//                 message: "What school is the internship through?"
//             }
//         ]).then(answers => {
            
//             const school = answers['School'];
//             console.log(school);
//         })
//     }
//     if (answers["Employee Role"] === 'Manager') {
        
//         inquirer.prompt([
//             {
//                 type: 'input',
//                 name: "Office Number",
//                 message: "What is the manager's office number?",
//                 validate: function(val) {
//                     var valid = !isNaN(parseFloat(val));
//                     return valid || 'Please enter a number';
//                 },
//                 filter: Number
//             }
//         ]).then(answers => {
            
//             const officeNumber = answers["Office Number"];
//             console.log(officeNumber);
//             console.log(role);
//         })
//     }
    
    
// })



// {
//     type: 'input',
//     name: 'Employee Name',
//     message: "What is the employee's name?",
// },
// {
//     type: 'input',
//     name: 'Employee ID',
//     message: "What is their company ID number?",
//     validate: function(val) {
//         var valid = !isNaN(parseFloat(val));
//         return valid || 'Please enter a number';
//     },
//     filter: Number
// }


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!

