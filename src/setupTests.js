jest.mock("react-ga");

expect.extend({
  toHavePathDefinition: (pathElement, expectedPathDefinition) => {
    const removeWhitespaces = s => {
      return s.replace(/\s/g, "");
    };

    const pathDefinition = removeWhitespaces(pathElement.getAttribute("d"));
    const expected = removeWhitespaces(expectedPathDefinition);
    const pass = pathDefinition === expected;
    if (pass) {
      return {
        message: () => `${pathDefinition} matches ${expected}`,
        pass: true
      };
    } else {
      return {
        message: () => `expected ${pathDefinition} to match ${expected}`,
        pass: false
      };
    }
  }
});
