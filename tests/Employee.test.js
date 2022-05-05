const Employee = require("../lib/Employee");

describe("Initialization", () => {
  it("Should create an object with name, id and email if provided", () => {
    const employee = new Employee(
      "Peter",
      "pvrutneski",
      "pvrutneski@gmail.com"
    );

    expect(employee.name).toEqual("Peter");
    expect(employee.id).toEqual("pvrutneski");
    expect(employee.email).toEqual("pvrutneski@gmail.com");
  });

  it("Functions should return constructor inputs", () => {
    const employee = new Employee(
      "Peter",
      "pvrutneski",
      "pvrutneski@gmail.com"
    );

    expect(employee.getName()).toEqual(employee.name);
    expect(employee.getId()).toEqual(employee.id);
    expect(employee.getEmail()).toEqual(employee.email);
  });

  it("getRole should return 'Employee'", () => {
    const employee = new Employee(
      "Peter",
      "pvrutneski",
      "pvrutneski@gmail.com"
    );

    expect(employee.getRole()).toEqual("Employee");
  });
});
