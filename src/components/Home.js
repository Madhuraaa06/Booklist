import { useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import homes from '../styling/home.css'
import Explore from './Explore';

function Home() {
    const [exploreroute, setexploreroute] = useState(false);

  const navigate = useNavigate();

  const gotoExplore = () => {
    setexploreroute(true);
    // Navigate to /explore only if needed
    if (!exploreroute) {
      navigate('/explore');
    }
  };
    const books = [
        {
            title: 'Listing',
            description: ' users to create custom book lists based on themes, genres, or any criteria they prefer..',
        },
        {
            title: 'Filtering',
            description: 'can filter books based on genres like mystery, romance, science fiction, etc.',
        },
        {
            title: 'Exploring',
            description: ' dedicated page for each book with detailed information as synopsis, author details, and user reviews..',
        },
    ];
    const aboutus = "Welcome to BooKlist, where literature comes to life! We're more than just a platform; we're a community dedicated to the transformative power of books. Sign up, create your account, and join us in celebrating the written word. Your journey doesn't stop there; use our platform to curate your personal library, storing and revisiting the tales that have touched your soul. It's not just a website—it's your haven for literary exploration and a keeper of your unique book lists."
    const explore = "Navigate through virtual aisles where stories come alive through vibrant book covers. With a click, embark on a journey of literary exploration, discovering narratives that transport you to different worlds. From gripping thrillers to heartwarming tales, the online book universe awaits, offering a personalized and immersive experience tailored to your reading preferences."
    return (
        <div>
           


            <main className='allbody'>
                
                <div className='container firstpage'>
                    <img src=''></img>
                </div>


                <div className="container marketing ">

                    <div className="row">
                        {books.map((book, index) => (
                            <div key={index} className="col-lg-3 m-3 p-4 box">
                                <h2>{book.title}</h2>
                                <p>{book.description}</p>
                                <p>
                                    <a className="btn btn-secondary homebtn" href="#">
                                        Get started »
                                    </a>
                                </p>
                            </div>
                        ))}
                    </div>




                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">ABOUT US</h2>
                            <p className="lead">{aboutus}</p>
                        </div>
                        <div className="col-md-5">

                            <svg
                                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                                width="500"
                                height="500"
                                role="img"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <image href="/images/aboutusimg.png" width="100%" height="100%" />
                               
                            </svg>

                        </div>
                    </div>

                    <hr className="featurette-divider" />
                    
                    <div className="row featurette">
                        <div className="col-md-7 order-md-2">
                            <h2 className="featurette-heading">Explore books here! <span className="text-muted">See for yourself.</span></h2>
                            <p className="lead">{explore}</p>
                            <button className='btn-3d' onClick={gotoExplore}>Explore!</button>
                        </div>
                        <div className="col-md-5 order-md-1">
                        <svg
                                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                                width="500"
                                height="500"
                                role="img"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <image href="/images/exploreimg.png" width="100%" height="100%" />
                               
                            </svg>
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                            <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                        </div>
                        <div className="col-md-5">
                            <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

                        </div>
                    </div>

                    <hr className="featurette-divider" />



                </div>




            </main>






        </div>
    )
}

export default Home
