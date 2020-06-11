import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  i = 0;

  cars = [
    {
      marque: "Mercedes 190D",
      n_matricule: "AZ355",
      n_sieges: "678",
      couleur: "black",
      image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dyer-june2020-hell-of-the-sell-1591140423.jpg?crop=1.00xw:0.889xh;0,0.111xh&resize=768:*",
    },
    {
      marque: "BMW",
      n_matricule: "DZ345",
      n_sieges: "45",
      couleur: "blue",
      image: "https://www.automobile-magazine.fr/asset/cms/840x394/172946/config/121721/bmw-x1-new-copy.webp?webp=1",
    },
   
    {
      marque: "Jaguar",
      n_matricule: "DE456",
      n_sieges: "23",
      couleur: "white",
      image: "https://i.pinimg.com/236x/36/fd/25/36fd255ec4d71a4270b40c16215280a7---jaguar-jaguar-xk.jpg",
    },
    {
      marque: "ferrari 458",
      n_matricule: "645MsA",
      n_sieges: "27",
      couleur: "red",
      image: "https://i.pinimg.com/236x/fa/f9/ab/faf9ab16550cbd12022051a9a21462af--swiss-ferrari-.jpg",
    },
    
  ];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goToCarsDetail(car){

    let carr = 
    {
      marque: "",
      n_matricule: "",
      n_sieges: "",
      couleur: "",
      image: ""
    };

    carr = car; 

    let i:number = 0;
    let check:Boolean = true;
  
    
    do{

      if(this.cars[i].n_matricule === car.n_matricule){
        carr = this.cars[i];
        check = false;
      }

        
      i++;
    }while(check && i <= this.cars.length)
    
    this.router.navigate(["CarDetails", JSON.stringify(carr)]);

  }


}
