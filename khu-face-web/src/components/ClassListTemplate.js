import React from 'react';
import './ClassListTemplate.css'

const ClassListTemplate = ({form, palette, children}) => {
    return (
        <main className="class-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="palette-wrapper">
                {palette}
            </section>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="class-wrapper">
                { children }
            </section>
        </main>
    );
};

export default ClassListTemplate;