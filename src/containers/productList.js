import React,{ Component } from 'react';
import { connect }  from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import Slider from 'react-slick';

function onClickCartButton(e){
     
        let sku = e.target.getAttribute("data-sku");
        addItemToCart(sku);
        getCartTotal();
        console.log(sku);   

    
}	

function  getCartTotal (){
        if (sessionStorage.getItem('quantity') !== "undefined") {
            // $("#cartQty").show();
            // $('.cartText').hide();

            let currentVal = sessionStorage.getItem('quantity');
            // $("#cartQty").val(currentVal);
            console.log(currentVal)

            if (sessionStorage.getItem('quantity') == undefined ){
                // $("#cartQty").hide();
                // $('.cartText').show();
            }
           } 
        }
function addItemToCart(sku){
        //session storage//
         if (typeof(Storage) !== "undefined") {
            if (sessionStorage.getItem(sku.toString()) !== null){  
                let currentValue = sessionStorage.getItem(sku);
                console.log(currentValue);
                currentValue = parseInt(currentValue);
                currentValue = currentValue + 1;
                currentValue = currentValue.toString();
                sessionStorage.setItem(sku, currentValue);     
            }
            else{
                console.log("This is a new sku");
               sessionStorage.setItem(sku.toString(),"1");
                // total = total + total;
            }
        } else {
            console.error("Error! SessionStorage not supported in your browser!");
        }           
                    if( sessionStorage.getItem("quantity") == undefined){
            sessionStorage.setItem("quantity",1);     
        }
        else{
            let newQuantity = sessionStorage.getItem("quantity");
            newQuantity = parseInt(newQuantity);
            newQuantity +=1;
            sessionStorage.setItem("quantity",newQuantity);
        }
                 //    this.getCartTotal();
                 //    $("#cartQty").show();
                              
                  }

class ProductList extends Component {


	
	renderProducts(productData){

		var result = productData.products.map(function(products){
			return (
				
             	<div className="col-md-4"  key={products.sku}>
             	<h3 style={{textAlign: 'center'}}>{products.manufacturer}</h3>
					<div style={{backgroundImage: `url(${products.largeImage})`, backgroundSize: "contain ",backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "200px"}}>
					</div>
					<div>{products.shortDescription}
					</div>
					<p style={{textAlign: 'center'}}>${products.regularPrice}</p>
					<button onClick={onClickCartButton}  data-sku={products.sku}>Add to Cart</button>
					<button data-sku={products.sku}>Quick View</button>

				</div> 
			)
		},this);		
        return result;
    }
    
    
		
	render(){
		var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
		return(
			<Slider {...settings}>
				{this.props.products.map(this.renderProducts)}
			</Slider>
			)
	}
}

function mapStateToProps({products}){
	return { products };// { products } === { products: products }
}

export default connect(mapStateToProps)(ProductList);