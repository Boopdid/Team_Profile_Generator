const Engineer = require("../lib/Engineer");

describe("Initialization", () => {
  it("Should create object with name, id, email & github username if provided", () => {
    const engineer = new Engineer(
      "Peter",
      "pvrutneski",
      "pvrutneski@gmail.com",
      "Boopdid"
    );

    expect(engineer.name).toEqual("Peter");
    expect(engineer.id).toEqual("pvrutneski");
    expect(engineer.email).toEqual("pvrutneski@gmail.com");
    expect(engineer.github).toEqual("Boopdid");
  });

  it("Should return Github username", () => {
    const engineer = new Engineer(
      "Peter",
      "pvrutneski",
      "pvrutneski@gmail.com",
      "Boopdid"
    );

    expect(engineer.getGithub()).toEqual("Boopdid");
  });

  it("getRole function should now return 'Engineer' instead of 'Employee'", () => {
    const engineer = new Engineer(
      "Peter",
      "pvrutneski",
      "pvrutneski@gmail.com",
      "Boopdid"
    );

    expect(engineer.getRole()).toEqual("Engineer");
  });
});
