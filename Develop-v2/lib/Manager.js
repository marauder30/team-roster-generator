class Manager {
    constructor(officeNumber) {

        super(name, id, email);
        this.officeNumber = officeNumber;
    };

    getRole() {
        return "Manager";
    };
}



// The Manager class `extends` from Employee, and should have these additional properties/behaviors:

// officeNumber
// getRole() (Overridden to return 'Manager')