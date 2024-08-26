import isAnioBisiesto from "./anioBisiesto.js";

describe("Anio Bisiesto", () => {
    it("Anio dividido por 400", () => {
    expect(isAnioBisiesto(2000)).toEqual(true);
});

it("Anio dividido por 100", () => {
    expect(isAnioBisiesto(1700)).toEqual(false);
});

it("Anio dividido por 4", () => {
    expect(isAnioBisiesto(2012)).toEqual(true);
});

it("Anio no divisible por 4", () => {
    expect(isAnioBisiesto(2018)).toEqual(false);
});

});