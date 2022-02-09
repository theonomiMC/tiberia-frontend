import React from 'react';
import useFetch from '../../hooks/useFetch';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useStyles } from './Slide.styles';
import parse from 'html-react-parser';

let settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
}
const VideoSlide = () => {
    const { data: { response }, error, isLoading } = useFetch('https://www.scorebat.com/video-api/v3/')
    const classes = useStyles()
    return (
        <div

            style={{
                margin: '0 auto',
                width: '100%',
                maxWidth: '900px',
            }}>
            {isLoading && <div>please wait ...</div>}
            {error && <div>Videos are temporery anavailable</div>}
            <Slider {...settings}>
                {response && response.slice(-7).map(p => (
                    <div key={p.title}>
                        <div style={{
                            padding: '.2em'
                        }}>   
                            {parse(p?.videos[0]?.embed)}
                            <p style={{
                                margin:'.3em auto .2em auto',
                                color:'black',
                                fontSize:'0.9rem',
                            }}>{p.title}</p>
                            <p style={{
                                padding:'.5em 0',                              color:'black',
                                fontSize:'0.88rem',
                                color:'gray',
                                margin:0,
                            }}>{new Date(p.date).toDateString()}</p>
                        </div>

                    </div>
                ))
                }

            </Slider >
        </div>

    )
};

export default VideoSlide;
