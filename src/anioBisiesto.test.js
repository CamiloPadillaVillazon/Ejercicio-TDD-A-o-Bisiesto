import isAnioBisiesto from "./anioBisiesto.js";

describe("Anio Bisiesto", () => {
    it("Anio dividido por 400", () => {
    expect(isAnioBisiesto(2000)).toEqual("Anio Bisiesto");
});

it("Anio dividido por 100", () => {
    expect(isAnioBisiesto(1700)).toEqual("Anio NO Bisiesto");
});

it("Anio dividido por 4", () => {
    expect(isAnioBisiesto(2012)).toEqual("Anio Bisiesto");
});

it("Anio no divisible por 4", () => {
    expect(isAnioBisiesto(2018)).toEqual("Anio NO Bisiesto");
});

});