let productName = "laptop";
let price = 50000;
let discount = 10 ;

let StartDate = new Date("2026-07-03");
let endDate = new Date("2026-08-03");

let today = new Date();

if(today >= StartDate && today <= endDate){

    let offer = price* discount /100;
    let sellingPrice = price - offer;

    console.log("productName:", productName);
    console.log("price:", price);
    console.log("discount:", discount +"%");
    console.log("sellingPrice:", sellingPrice);

}
else{

    console.log ("offer is not available")
     console.log("productName:", productName);
       console.log("sellingPrice:", price);
}