{
    // Static in OOP
    class Counter {
        static count : number = 0
        static increment(value:number = 1) {
            Counter.count += value
        }
        static decrement(value: number = 1){
            Counter.count -= value
            if(Counter.count < 0) {
                Counter.count = 0
                throw new Error(`Count value less then ${Counter.count}. no more decrement`)
            }
        }
    } 

    // store different memory size
    // const count1 = new Counter()
    // count1.increment(6)
    // console.log(count1.count);

    // store different memory size
    // const count2 = new Counter()
    // count2.increment(10)
    // console.log(count2.count);

    // create static Counter
    Counter.increment(5) // count = 5
    Counter.increment(10) // count = 15
    Counter.decrement(4) // count = 11
    Counter.decrement(11) // count = 11
    console.log(Counter.count); // there are count value access static.no calling Counter class
    //
}