function isAnioBisiesto(anio) {
    if(anio%400 === 0)
        return "Anio Bisiesto"

    if(anio%100 === 0)
        return "Anio NO Bisiesto"

    if(anio%4 === 0)
        return "Anio Bisiesto"

    return anio+"";
}

export default isAnioBisiesto;