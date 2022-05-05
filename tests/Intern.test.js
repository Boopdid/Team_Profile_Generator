const Intern = require("../lib/intern");

describe("Initialization", () => {
  it("Should create object with name, id, email & school if provided", () => {
    const intern = new Intern(
      "Peter",
      "pvrutneski",
      "pvrutneski@gmail.com",
      "Denver"
    );

    expect(intern.name).toEqual("Peter");
    expect(intern.id).toEqual("pvrutneski");
    expect(intern.email).toEqual("pvrutneski@gmail.com");
    expect(intern.school).toEqual("Denver");
  });

  it("Should return name of school", () => {
    const intern = new Intern(
      "Peter",
      "pvrutneski",
      "pvrutneski@gmail.com",
      "Denver"
    );

    expect(intern.getSchool()).toEqual("Denver");
  });

  it("getRole function should now return 'intern' instead of 'Employee'", () => {
    const intern = new Intern(
      "Peter",
      "pvrutneski",
      "pvrutneski@gmail.com",
      "Denver"
    );

    expect(intern.getRole()).toEqual("Intern");
  });
});
