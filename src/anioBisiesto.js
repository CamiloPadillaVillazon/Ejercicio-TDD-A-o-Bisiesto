function isAnioBisiesto(anio) {
    if(anio%400 === 0)
        return "Anio Bisiesto"

    return anio+"";
}

export default isAnioBisiesto;