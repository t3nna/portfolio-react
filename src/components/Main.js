import React from "react";
import {useMatch} from "react-router-dom";

import background from '../images/Background.png'
import videoMp4 from '../images/Church.mp4'
import videoWebm from '../images/Church.webm'
import data from "../data";
import ListItem from "./ListItem";
import withCategoriesContent from "./withCategoriesContent";
import PathNavigation from "./PathNavigation";

const Main = ({filter}) => {

    let path
    if (!filter) {
        path = 'index'
    } else {
        path = filter
    }


    const [rightCategory] = data.filter(item => {

        return item.type === path
    })
    console.log(path)


    return (
        <main className="flow">
            <section className="section-introduction">
                <div className="container">
                    <div className="introduction-wrapper">
                        <video autoPlay muted loop playsInline>
                            <source src={videoWebm} type="video/webm; codecs=vp9"/>
                            <source src={videoMp4} type="video/mp4; codecs=hvc1"/>
                        </video>
                        <div className="introduction-desc">

                            <h2>Welcome To</h2>
                            <h1 className="introduction-heading | fs-primary-heading fw-medium">
                                A curated list of the tech I
                                <span>
                        use
                        </span>
                            </h1>
                        </div>

                    </div>

                </div>
            </section>
            {
                path !== 'index' ? (

                    <section>
                        <div className="container">
                            <PathNavigation path={filter}/>
                        </div>
                    </section>) : (

                    <section className="about">
                        <div className="container">
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto ducimus
                                eos error
                                molestiae natus nemo obcaecati odit quisquam reprehenderit. Ab adipisci alias at
                                deserunt eos
                                exercitationem expedita harum iste laboriosam libero magni modi nihil nisi non nostrum,
                                numquam
                                obcaecati odio perspiciatis praesentium quam, quas qui quidem quis reprehenderit saepe
                                suscipit
                                tempora
                                ullam unde voluptates.
                            </p>
                        </div>
                    </section>

                )
            }
            <section>
                <div className="container">

                    <ul className="items-list theme-border-img">
                        {
                            rightCategory.items.map(item => (<ListItem itemData={item} key={item.name}/>))
                        }

                        <li><a href="#">
                            <img src={background} alt=""/>
                            <div className="item-names">

                                <h3 className="fs-third-heading">Keychron K2.02</h3>
                                <p>Mechanical keyboard</p>
                            </div>

                        </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={background} alt=""/>
                                <div className="item-names">

                                    <h3 className="fs-third-heading">Keychron K2.02</h3>
                                    <p>Mechanical keyboard</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={background} alt=""/>
                                <div className="item-names">

                                    <h3 className="fs-third-heading">Keychron K2.02</h3>
                                    <p>Mechanical keyboard</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={background} alt=""/>
                                <div className="item-names">

                                    <h3 className="fs-third-heading">Keychron K2.02</h3>
                                    <p>Mechanical keyboard</p>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={background} alt=""/>
                                <div className="item-names">

                                    <h3 className="fs-third-heading">Keychron K2.02</h3>
                                    <p>Mechanical keyboard</p>
                                </div>
                            </a>
                        </li>

                    </ul>

                </div>
            </section>


        </main>
    )
}

export default Main

export const MainWithCategories = withCategoriesContent(Main)

