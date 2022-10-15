import React from "react";
import background from '../images/Background.png'
import {useParams, useOutletContext, useLocation, Link} from "react-router-dom";
import data from "../data";
import flattArray from "../tools/flatten";

export default function Item() {
    const {name} = useParams()
    const item = data.map(category => {
        return category.items.filter(item => item.path === name)
    })
        .filter(item => item.length > 0)

    // const obj = useOutletContext()
    // console.log(obj)
    //
    // let nameEdited = name
    //     .split('-')
    //     .map(item =>{
    //     return item.charAt(0).toUpperCase() + item.slice(1)
    //     })
    //     .join(' ')
    // console.log(nameEdited)
    const [rightItem] = flattArray(item)
    console.log(rightItem)

    return (
        <main>
            <section className="item-description theme-border-img">
                <div className="container flow" style={{"--flow-spacer": 1.5 + "rem"}}>
                    <img src={rightItem.background} alt=""/>
                    <div className={'item-description__title'}>
                        <a href={rightItem.link} className={'link-accent'}>
                            <h1 className="fs-primary-heading">
                                {rightItem.name}
                            </h1>

                        </a>
                        <p className={'fs-400 fw-light'}>
                            Camera
                        </p>
                    </div>

                    <hr className={'divider'}/>

                    {
                        rightItem.img.map((image, index) => {


                            return (<>


                                <p>{rightItem.desc[index]}</p>
                                <img src={image} alt=""/>

                            </>)
                        })
                    }



                    {/*{*/}
                    {/*    Object.keys(rightItem.posts).map(template_name => {*/}
                    {/*        return (*/}
                    {/*            <div>*/}
                    {/*                <div>{template_name}</div>*/}
                    {/*                {*/}
                    {/*                    rightItem.posts[template_name].items.map(item => {*/}
                    {/*                        return(<div>{item}</div>)*/}
                    {/*                    })*/}
                    {/*                }*/}
                    {/*            </div>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}


                </div>
            </section>


        </main>
    )
}