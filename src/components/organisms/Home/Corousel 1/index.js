import React from 'react'
import './style.css'
import Carousel from 'react-elastic-carousel';

function Index() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 2.2 },
        { width: 1200, itemsToShow:3 },
      ];
      const categoryBreakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 250, itemsToShow: 2 },
        { width: 650, itemsToShow: 3 },
        { width: 768, itemsToShow: 5 },
        { width: 1200, itemsToShow: 6 },
      ];
    
    return (
        <div>
            <div className='homeCorouselOne'>
                <Carousel breakPoints={breakPoints}>
                    <div>
                        <div className="homeCarouselOneText">
                            <p>Trends in 2020</p>
                        </div>
                        <div className="homeCarouselOneImg">
                            <img src="./asset/ian-dooley-10ca-K3e6Ko-unsplash 1.png" alt=""/>
                        </div>
                    </div>
                    <div>
                        <div className="homeCarouselOneText">
                            <p>Trends in 2020</p>
                        </div>
                        <div className="homeCarouselOneImg">
                            <img src="./asset/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt=""/>
                        </div>
                    </div>
                    <div>
                        <div className="homeCarouselOneText">
                            <p>Trends in 2020</p>
                        </div>
                        <div className="homeCarouselOneImg">
                            <img src="./asset/ian-dooley-10ca-K3e6Ko-unsplash 1.png" alt=""/>
                        </div>
                    </div>
                    <div>
                        <div className="homeCarouselOneText">
                            <p>Trends in 2020</p>
                        </div>
                        <div className="homeCarouselOneImg">
                            <img src="./asset/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt=""/>
                        </div>
                    </div>
                    <div>
                        <div className="homeCarouselOneText">
                            <p>Trends in 2020</p>
                        </div>
                        <div className="homeCarouselOneImg">
                            <img src="./asset/ian-dooley-10ca-K3e6Ko-unsplash 1.png" alt=""/>
                        </div>
                    </div>
                    <div>
                        <div className="homeCarouselOneText">
                            <p>Trends in 2020</p>
                        </div>
                        <div className="homeCarouselOneImg">
                            <img src="./asset/benjamin-voros-TnNo84AJJ5A-unsplash 1.png" alt=""/>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className="homeCarouselTwoCategory">
                <div className="homeCarouselTwoTag">
                    <div className="homeCarouselTwoTitle">
                        <div className="hctTitle">
                            <p>Category</p>
                        </div>
                        <span>What are you currently looking for</span>
                    </div>
                </div>
                <div className="CarouselTwoCategoryItem">
                    <Carousel breakPoints={categoryBreakPoints}>
                        <div className="CarouselTwoCategoryObjek">
                            <div className="CarouselTwoCategoryText">
                                <p></p>
                            </div>
                            <div className="CarouselTwoCategoryImg">
                                <img src="./asset/Group 1229.png" alt=""/>
                            </div>
                        </div>
                        <div className="CarouselTwoCategoryObjek">
                            <div className="CarouselTwoCategoryText">
                                <p></p>
                            </div>
                            <div className="CarouselTwoCategoryImg">
                                <img src="./asset/Group 1230.png" alt=""/>
                            </div>
                        </div>
                        <div className="CarouselTwoCategoryObjek">
                            <div className="CarouselTwoCategoryText">
                                <p></p>
                            </div>
                            <div className="CarouselTwoCategoryImg">
                                <img src="./asset/Group 1231.png" alt=""/>
                            </div>
                        </div>
                        <div className="CarouselTwoCategoryObjek">
                            <div className="CarouselTwoCategoryText">
                                <p></p>
                            </div>
                            <div className="CarouselTwoCategoryImg">
                                <img src="./asset/Group 1232.png" alt=""/>
                            </div>
                        </div>
                        <div className="CarouselTwoCategoryObjek">
                            <div className="CarouselTwoCategoryText">
                                <p></p>
                            </div>
                            <div className="CarouselTwoCategoryImg">
                                <img src="./asset/Group 1233 (1).png" alt=""/>
                            </div>
                        </div>
                        <div className="CarouselTwoCategoryObjek">
                            <div className="CarouselTwoCategoryText">
                                <p></p>
                            </div>
                            <div className="CarouselTwoCategoryImg">
                                <img src="./asset/Group 1232.png" alt=""/>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
  )
}

export default Index;
