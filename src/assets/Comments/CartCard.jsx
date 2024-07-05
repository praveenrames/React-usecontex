
import React, { useContext, useState } from 'react'
import Context1 from './MyContext/Context'


const CartCard = () => {
    let {product, setProduct} = useContext(Context1)
  return (
    <>
     <div className='container'>
        {product.map((e, i) => {
            const discounPrice = Math.round(
                e.price * (e.discountPercentage / 100)
            );
         
            // add & remove product quantity

        const [quantity, setQuantity] = useState(0);

        const addQuantity = () => {
            setQuantity(quantity + 1),
            setQuantity(quantity < 6 ? quantity + 1 : 6);
        }
        const removeQuantity = () => {
            setQuantity(quantity - 1),
            setQuantity(quantity > 0 ? quantity - 1 : 0);
        };
    return(
        <>
         <div 
             key={i}
             className='card mb-5 border border-secondary'
             style={{minWidth: "100%", maxWidth:"540%"}}
             >
            <div className='row g-0'>
                <div className='col-md-3'>
                    <img src={e.images} className='m-2 img-fluid rounded-start cardImage' alt=".."/>
                </div>
                <div className='col-md-9'>
                    <div className='card-body'>
                        <div className='top-header p-1 d-flex justify-content-between align-items-center'>
                            <h5 className='card-title'><h3>{e.title}</h3></h5>
                            <h4 className='card-title'><b>Price :</b> ${e.price}</h4>
                        </div>
                        <div className='p-1 d-flex justify-content-between align-items-center'>
                            <p className='card-text'>Brand : {e.brand}</p>
                            <p className='card-text text-success'>
                               Discount offer : {e.discountPercentage}%
                            </p>
                        </div>
                        <p className='card-text p-1'>{e.description}</p>
                        <p className='card-text p-1'>Rating : {e.rating}/5</p>
                        <div className='p-1 d-flex justify-content-between align-items-center'>
                            <p className='card-muted'>
                                <small className='text-muted'>
                                Last updated 3 mins ago
                                </small>
                            </p>
                           <div className='p-1 d-flex flex-row justify-content-between align-items-center'>
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                              style={{ marginRight: "8px" }}
                              onClick={() => {
                                removeQuantity();
                              }}
                            >
                              {" "}
                              -{" "}
                            </button>
                            <div className="py-1 quantityText">{quantity}</div>
                            <button
                              type="button"
                              className="btn btn-outline-success"
                              style={{ marginLeft: "8px" }}
                              onClick={() => {
                                addQuantity();
                              }}
                            >
                              {" "}
                              +{" "}
                                 </button>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className='bottom'>
                     <div className='m-3 d-flex justify-content-between align-items-center'>
                        Original Price (1 item) : 
                        <h5 className='card-title'>${e.price}</h5>
                     </div>
                     <div className='m-3 d-flex justify-content-between align-items-center'>
                        Discount Amount :
                    <h5 className='card-title text-success'>
                      {" "}
                      -${discounPrice}
                    </h5>
                     </div>
                     <div className='m-3 d-flex justify-content-between align-items-center'>
                        Final Price :
                    <h5 className='card-title'>
                        ${e.price - discounPrice}
                    </h5>
                </div>
                <div className='m-3 d-flex justify-content-between align-items-center'>
                 Total Amount : 
                   <h5 className='card-title'>${e.price * quantity}</h5>
                </div>
               <div className='m-3 d-flex justify-content-end'>
                <button  
                  type='button'
                  className='p-2 d-flex btn btn-primary float-end my-3'>
                    Buy Now
                  </button>
                </div>
            </div>
         </div>
      </div>
    </div>
    </>
     );
 })};
     </div>
    </>
  );
}

export default CartCard;