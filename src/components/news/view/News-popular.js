import React from 'react';
import Mini1 from '../../../images/posts/post-mini-1.png';
import Mini2 from '../../../images/posts/post-mini-2.png';
import Mini3 from '../../../images/posts/post-mini-3.png';

const Popular = () => (

                    <div className="ds-post-widget">
                        <h4 className="text-uppercase ds-post-widget-header">Archiwum</h4>
                        <div className="w-75 ds-hr"></div>
                        <div className="ds-post-widget-popular">
                            <div className="media ds-post-widget-popular-item">
                                <img className="ds-post-widget-popular-img" src={Mini1} alt="Popularny wpis"/>
                                <div className="media-body">
                                    <a href="/" className="mt-1 d-inline-block ds-post-widget-link">
                                    Lorem ipsum dolor sit amet consectetur</a>
                                </div>
                            </div>
                            <div className="media ds-post-widget-popular-item">
                                <img className="ds-post-widget-popular-img" src={Mini2} alt="Popularny wpis"/>
                                <div className="media-body">
                                    <a href="/" className="mt-1 d-inline-block ds-post-widget-link">
                                    Lorem ipsum dolor sit amet consectetur</a>
                                </div>
                            </div>
                            <div className="media mb-2 ds-post-widget-popular-item">
                                <img className="ds-post-widget-popular-img" src={Mini3} alt="Popularny wpis"/>
                                <div className="media-body">
                                    <a href="/" className="mt-1 d-inline-block ds-post-widget-link">
                                    Lorem ipsum dolor sit amet consectetur</a>
                                </div>
                            </div>
                        </div>
                    </div>

    );
    export default Popular;