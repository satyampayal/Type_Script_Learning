// num is used to restrict the choice of person/user
// example order of transition,
//  Aeroplane seat only 3 window,cruse and one more 

// easy way to restrict the choise
const AISLE=0;
const MIDDEL=1;
const WINDOW=2

// enum
const enum SeatChoice{// for  eay to understand js file use const before enum
    AISLE=10,// default to strat 0  subSequent memebr increment by 1
    MIDDLE="middle",
    WINDOW=1
}
const hcSeat=SeatChoice.MIDDLE;

export {}
