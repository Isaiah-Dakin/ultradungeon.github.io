import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import {motion, useScroll, useTransform } from "framer-motion";
import NewsItem from "./NewsItem";

import '../style/horizontal-scroll.css';

const HorizontalScroll = () => {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll( {target: targetRef} );

    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-55%']);

    return <div className="carousel" ref={targetRef} id='news'>
        <div className="content-container">
            <h1 className="hs-title">ULTRA NEWS NETWORK</h1>
            <div className="news-item-container">
                <motion.div className="news-items" style={{x}}>
                    <NewsItem
                        videoSrc={"https://www.youtube.com/embed/yXwB72p8kw0?si=47yHxzs-8RfPup0K"}
                        header={"DEMO-1: THE ULTRA JOURNEY BEGINS."}
                    />
                    <NewsItem
                        videoSrc={"https://www.youtube.com/embed/voxOd5NQf10?si=7hjVHNq14-L-Y0fh"}
                        header={"DEMO-2: LOOT, STORE, REPEAT."}
                    />
                    <NewsItem
                        videoSrc={"https://www.youtube.com/embed/4N2-n_2dRuM?si=PHXTmzlkGyjdXtMw"}
                        header={"DEMO-3: SHOPPING SPREE!"}
                    />
                    <NewsItem
                        videoSrc={"https://www.youtube.com/embed/lodh63dXlEY?si=g-Y92Xlux4rLOz9Q"}
                        header={"DEMO-4: CURSES, BULLETS, AND MAGIC."}
                    />
                </motion.div>
            </div>
        </div>
    </div>
}

export default HorizontalScroll;