import React from 'react';

const Experience = () => {
    const experiences = [
        {
            title: 'Student',
            company: 'Warsaw University of Technology',
            duration: 'October 2018 - May 2023',
            description: 'learning IT skills and training to become a Polish army officer'
        },
        {
            title: 'Administrator',
            company: 'Ministerstwo Obrony Narodowej',
            duration: 'May 2023 - Current',
            description: 'Admnistration of military systems'
        },
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