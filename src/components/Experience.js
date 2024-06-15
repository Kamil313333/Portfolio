import React from 'react';

const Experience = () => {
    const experiences = [
        {
            title: 'Student',
            company: 'Warsaw University of Technology',
            duration: 'October 2018 - May 2023',
            description: 'Developed and maintained web applications using React and Node.js.'
        },
        {
            title: 'Web Developer',
            company: 'WebSolutions',
            duration: 'Jun 2018 - Dec 2019',
            description: 'Built responsive websites and web applications using HTML, CSS, and JavaScript.'
        },
        // Dodaj więcej doświadczeń według potrzeb
    ];

    return (
        <div className="experience-container">
            <h1>My Journey</h1>
            {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                    <h2>{exp.title}</h2>
                    <h3>{exp.company}</h3>
                    <p><strong>{exp.duration}</strong></p>
                    <p>{exp.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Experience;