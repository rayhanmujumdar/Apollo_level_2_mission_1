{
    // conditional typescript
    type a1 = null
    type b1 = undefined

    // javascript conditional expressions syntax
    type c1 = a1 extends string ? true : false
    type d1 = a1 extends number ? b1 extends string ? string : number : null // nested check condition


    type RichMan  = {
        bike: string,
        car: string,
        ship: string,
        plane: string
    }

    // keyof RichMan "bike" | "car" | "ship"
    // car ase kina / bike ace kina / ship ace kina / plane ace kina
    type CheckVehicle<T> = T extends keyof RichMan ? true : false

    type HasPlane = CheckVehicle<"track"> // HasPlan = false

    //
}