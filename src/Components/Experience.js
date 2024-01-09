import React, { useState, useEffect } from 'react';

export const Experience = () => {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../Data/timeline.json');
        const data = await response.json();
        setTimelineData(data);
      } catch (error) {
        console.error('Error fetching timeline data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="container py-5">
        <div className="main-timeline">
          {timelineData.map((item, index) => (
            <div key={index} className={`timeline ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="card">
                <div className="card-body p-4">
                  <h3>{item.year}</h3>
                  <p className="mb-0">{item.paragraph}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
