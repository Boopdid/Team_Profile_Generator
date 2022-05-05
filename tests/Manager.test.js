const Manager = require("../lib/Manager");

describe("Initialization", () => {
  it("Should create object with name, id and email if provided", () => {
    const manager = new Manager(
      "Peter",
      "pvrutneski",
      "pvrutneski@gmail.com",
      42
    );

    expect(manager.name).toEqual("Peter");
    expect(manager.id).toEqual("pvrutneski");
    expect(manager.email).toEqual("pvrutneski@gmail.com");
  });

  it("Should create object with office number if provided", () => {
    const manager = new Manager(
      "Peter",
      "pvrutneski",
      "pvrutneski@gmail.com",
      42
    );

    expect(manager.officeNumber).toEqual(42);
  });

  it("getRole function should now return 'Manager' instead of 'Employee'", () => {
    const manager = new Manager(
      "Peter",
      "pvrutneski",
      "pvrutneski@gmail.com",
      42
    );

    expect(manager.getRole()).toEqual("Manager");
  });
});
