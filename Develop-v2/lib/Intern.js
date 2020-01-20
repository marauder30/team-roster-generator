class Intern {
    constructor(school) {

        super(name, id, email);
        this.school = school;
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return "Intern";
    };


}



// The Intern class `extends` from Employee, and should have these additional properties/behaviors:

// school
// getSchool()
// getRole() (Overridden to return 'Intern')