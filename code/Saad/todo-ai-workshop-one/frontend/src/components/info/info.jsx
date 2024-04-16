import React from "react";
import "./info.css";
import { FaBolt } from "react-icons/fa6";

function Info() {
    return (
        <section className='info'>
            <div className='punchline'>
                boost your productivity with actionable steps
                <span>
                    <FaBolt color='#2cb67d' />
                </span>
                by ai.
            </div>
            <div className='tagline'>
                no more hassle of brainstorming what needs to be done next;
                let our AI assistant analyze your tasks, prioritize them,
                and provide you with clear, personalized action steps. From
                simple to-do items to complex projects, our AI tool will
                streamline your workflow and help you achieve your goals faster
                and efficiently.
            </div>
        </section>
    )
};

export default Info;



