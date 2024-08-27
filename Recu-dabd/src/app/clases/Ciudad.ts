export class Ciudad {
    id:string = "";
    name:string = "";
}
export class Trip {
    id: string = "";
    originId: string = "";
    destinationId: string= "";;
    departureDate: string= "";;
    departureTime: string= "";;
    price: number = 0;
    stops: Stop[] = [];
  }
  
  export class Stop {
    location: string = "";;
    time: string = "";
    stopTime: number = 0;
  }
  
