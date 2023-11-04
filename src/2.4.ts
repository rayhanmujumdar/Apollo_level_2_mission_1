{
  // Generic with interface
  // main interface
  // T,X = params
  interface Developer<T, X = null>  { // default value set is null
    name: string;
    email: string;
    devices: Device[];
    smartWatch: T; // dynamic type set
    bike?: X; // dynamic type set
  }
  interface Device {
    category: string;
    brand: string;
    model: string;
    releaseYear: number;
  }

  // generic smartwatch type create
  interface NormalSmartWatch {
    brand: string;
    model: string;
    display: string;
    releaseYear: number;
  }

  // create a object with generic types
  const poorDeveloper: Developer<NormalSmartWatch> = {
    name: "Rayhan",
    email: "rayhanmujumdar@gmail.com",
    devices: [
      {
        category: "Laptop",
        brand: "LG",
        model: "Y-9563",
        releaseYear: 2015,
      },
    ],
    smartWatch: {
      brand: "appleClone",
      model: "Z-9998",
      display: "LCD",
      releaseYear: 2020,
    },
  };
  console.log(poorDeveloper);
  
// generic smartwatch type create
  interface AppleWatch {
    brand: string;
    model: string;
    display: string;
    sleepTrack: boolean;
    heartbeatTrack: boolean;
  }
  // generic bike type create
  interface YamahaBike {
    brand: string;
    model: string;
    power: string;
    dickBreakPad: boolean;
  }

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Shariar",
    email: "shariar@gmail.com",
    devices: [
      {
        category: "Phone",
        brand: "Apple",
        model: "I phone 15",
        releaseYear: 2023,
      },
    ],
    smartWatch: {
        brand: 'apple',
        model: '15 series',
        display: 'OLED',
        heartbeatTrack:true,
        sleepTrack: true
    },
    bike: {
        brand: 'YAMAHA',
        model: 'V3',
        power: '21 HP',
        dickBreakPad: true
    }
  };
  console.log(richDeveloper);

}

