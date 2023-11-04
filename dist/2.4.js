"use strict";
{
    // create a object with generic types
    const poorDeveloper = {
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
    const richDeveloper = {
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
            heartbeatTrack: true,
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
