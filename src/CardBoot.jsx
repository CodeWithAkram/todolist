import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const CardBoot = () => {
    return (
        <>
            <h1 className='text-center text-uppercase text-danger my-5'> Welcome to Boostrap Card in 2 min   </h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height="200px" />
                            <div className ="card-body">
                            <h5 className ="card-title">Card title</h5>
                            <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className ="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" >
                            <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height="200px" />
                            <div className ="card-body">
                            <h5 className ="card-title">Card title</h5>
                            <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className ="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" >
                            <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height="200px" />
                            <div className ="card-body">
                            <h5 className ="card-title">Card title</h5>
                            <p className ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className ="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardBoot;