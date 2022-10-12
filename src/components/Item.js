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
                    <img src={background} alt=""/>
                    <div>
                        <Link to={rightItem.link} className={'link-accent'}>
                            <h1 className="fs-primary-heading">
                                {rightItem.name}
                            </h1>

                        </Link>
                        <p>
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

                   {/* <p>
                        <a href="#" className="link-accent">FUJIFILM X-T4</a>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi, ea ex expedita
                        itaque placeat
                        vitae! Consectetur deserunt dolorum officia quisquam soluta.

                    </p>
                    <img src={background} alt=""/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur cum
                        exercitationem id
                        ipsum maiores perspiciatis reprehenderit sed ullam vero.

                    </p>

                    <p>Lorem ipsum <a href="#" className="link-accent">dolor sit</a> amet, consectetur
                        adipisicing elit. Doloribus
                        esse eveniet ipsam iusto qui sed
                        suscipit! Asperiores aut dolore ducimus eveniet labore natus neque recusandae sed
                        soluta veniam? A
                        commodi dolor eos facere fugiat quisquam recusandae reiciendis vero. Aperiam.
                    </p>*/}


                </div>
            </section>


        </main>
    )
}