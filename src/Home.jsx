import React from 'react'
import Carousel from './Carousel'
import { Babyproduct } from './Baby';
import { Manpro } from './Man';



function Home(props) {

  let homedata = Manpro.concat(Babyproduct);
  console.log('homepage datais ', homedata);

  return (
    <>



      

        <div className="card expand-sm">
          <img src={props?.data1.image} className="card-img-top" alt="..." />
          <div className="card-body ">
            <h5 className="card-title">{props?.data1.title}</h5>
            <p className="card-text">{props?.data1.desc}</p>
            <p className="card-own text-success"><span className='oldpr'><del>{props?.data1.pre}</del></span>{props?.data1.mrp}</p>
            <p className="card-own text-success">{props?.data1.ratting}</p>
            <p className="card-text text text-primary"><small className="text-muted"></small></p>
            <button className="btn btn-outline-success" type="submit">Add to Wishlist</button>

          </div>
        
      </div>
    </>
  )
}

export default Home