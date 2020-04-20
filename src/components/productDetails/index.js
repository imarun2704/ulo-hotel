import React from 'react';
import axios from 'axios';

class ProductDetail extends React.Component {

    constructor(){
        super();
        this.state ={
           images:null,
           details:null
        };
    }
    componentDidMount(){
     axios
      .get(
        "https://ulotel.ulohotels.com/api/hotels/images?locationUrl=hotels-in-chennai"
      )
      .then((response) => {
         this.setState({images:response.data});
      })

      axios
      .get(
        "https://ulotel.ulohotels.com/api/hotels?locationUrl=hotels-in-chennai"
      )
      .then((response) => {
         this.setState({details:response.data});
      })
    }
  render(){
      const details = this.state.details && this.state.details.data;
    return (
      <div className="d-flex " >
          {
              this.state.images && this.state.images.data.map(el =>    
               {
                let picture =  details && details.filter(data => data.propertyId === el.propertyId);     
          return (
             <div className="d-flex justify-content-center align-items-center" key={el.propertyId}>
                    <span>
                    <img src={`${ el.propertyImage}`} alt="productImage" width="100" height="100" />
                    </span>
                 
                   <span style={{marginLeft:'50px' }}>
                   { !picture ? "Loading Property Name.........." : picture[0].propertyName }
                   </span>
                    
             </div>);
               })
             
          }
      </div>
      
    );
  }

}

export default ProductDetail;