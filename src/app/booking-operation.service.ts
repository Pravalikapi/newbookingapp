import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingDTO } from './booking-dto';
import { AddDetails } from './add-details';




@Injectable({
  providedIn: 'root'
})
export class BookingOperationService {

 

  baseURL:string= 'http://localhost:2001';
  
  allBookingEndpoint = this.baseURL+'/booking/bookings';
  submitBookingDetailsEndPoint:string=this.baseURL+'/booking/add';
  //orderArr:OrderDTO[] = [];
  constructor(private http:HttpClient) { }

  bookingArr: AddDetails[] =[];

  getAllBookingsFromSpring():Observable<BookingDTO[]>
  {
    console.log("inside service : "+this.allBookingEndpoint);
      return this.http.get<BookingDTO[]>(`${this.allBookingEndpoint}`);
  }


submitBookingDetails(addDetails:AddDetails ):Observable<AddDetails>
 {

  console.log("inside method 1 : Booking added" +addDetails);
  
  return this.http.post<AddDetails>(`${this.submitBookingDetailsEndPoint}`,addDetails);
  
}

getBookingArr():AddDetails[]
{
  return this.bookingArr;

}

// getFilterByDate(filterDate:number):AddDetails[]
// {
//   let outputArr:AddDetails[]=[];
 
//   this.bookingArr.forEach(b=>{
//     if(b.bookedFrom==filterDate)
//     {
//       this.bookingArr.push(b);
//     }
//   });

//   return this.bookingArr;
// }

// }


getFilterByDate(filterDate: number): AddDetails[] {
  let outputArr: AddDetails[] = [];
  this.bookingArr.forEach(booking => {
    if (booking.bookedFrom === filterDate) {
      outputArr.push(booking);
    }
  });
  return outputArr;
}
}

