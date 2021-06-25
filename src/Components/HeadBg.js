import React from 'react';
import HomeBg from '../Assets/Images/homeBg.svg'

const HeadBg = () => {
    return (
        <section className="head-background">
            <div className="back-text">
                <h1 className="head-text">با مووی چک هیچ فیلمی رو ازدست نده !</h1>
                <h2 className="head-subtitle">همین الان چک لیست خودتو بساز</h2>
                <p className="head-desc">مووی چک یک وب اپ واسه فیلمبازای حرفه ای که هیج فیلم جدید و خفنی رو از دست نمیده و برای فیلم دیدنش برنامه ریزی میکنه اگه تو هم هستی پس با ما همراه شو تا هیچ فیلمی رو از دست ندی.</p>
                <button className="head-btn">
                    <a href="#serach-bar">شروع کن</a>
                </button>
            </div>
            <div className="back-img">
                <img src={HomeBg} className="head-img" />
            </div>
        </section>
    )
}

export default HeadBg
