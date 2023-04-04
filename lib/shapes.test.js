const { generateShape } = require("./shapes.js");

describe("generateShape", () => {
    it("should generate a circle SVG element", () => {
        const shape = "Circle";
        const shapeColor = "purple";
        const expectedOutput = '<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="purple" />'
        expect(generateShape(shape, shapeColor)).toEqual(expectedOutput);
    });

    it("should generate a triangle SVG element", () => {
        const shape = "Triangle";
        const shapeColor = "purple";
        const expectedOutput = '<polygon points="0,200 300,200 150,0" fill="purple" />'
        expect(generateShape(shape, shapeColor)).toEqual(expectedOutput);
    });

    it("should generate a square SVG element", () => {
        const shape = "Square";
        const shapeColor = "purple";
        const expectedOutput = '<rect height="200" width="200" fill="purple" />'
        expect(generateShape(shape, shapeColor)).toEqual(expectedOutput);
    });
});


