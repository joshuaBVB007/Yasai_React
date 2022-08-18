import React from 'react';
import './about.css'


export class About extends React.Component {
    render() {
        return(
            <div className="about">
                <div className="about_section">
                    <img className="about_img" src="/manzana_banana.png" alt="about_one"/>
                    <p>Las frutas y verduras son importantes para la salud porque aportan vitaminas, minerales y fibra.
                    Inculcar el hábito de tomarlas es fundamental para cubrir los requerimientos nutricionales.</p>
                </div>

                <div className="galery">
                    <img className="about_img" src="/1.jpg" alt="about_one"/>
                    <img className="about_img" src="/2.jpg" alt="about_one"/>
                    <img className="about_img" src="/3.jpg" alt="about_one"/>
                    <img className="about_img" src="/1.jpg" alt="about_one"/>
                    <img className="about_img" src="/5.jpg" alt="about_one"/>
                </div>

                <div className="about_section_two">
                    <div className="card">             
                        <img className="about_img" src="/cereal.png" alt="about_one"/>
                        <p>Las frutas y verduras son importantes para la salud porque aportan vitaminas, minerales y fibra.
                        Inculcar el hábito de tomarlas es fundamental para cubrir los requerimientos nutricionales.</p>
                    </div>
                    <div className="card">             
                        <img className="about_img" src="/combine-harvester.png" alt="about_one"/>
                        <p>Las frutas y verduras son importantes para la salud porque aportan vitaminas, minerales y fibra.
                        Inculcar el hábito de tomarlas es fundamental para cubrir los requerimientos nutricionales.</p>
                    </div>
                    <div className="card">             
                        <img className="about_img" src="/vegetables.png" alt="about_one"/>
                        <p>Las frutas y verduras son importantes para la salud porque aportan vitaminas, minerales y fibra.
                        Inculcar el hábito de tomarlas es fundamental para cubrir los requerimientos nutricionales.</p>
                    </div>
                </div>
            </div>
        )
    }
}