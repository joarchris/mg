import React, { useState, useEffect } from 'react';

const TrainingPlan = () => {
  const [plan, setPlan] = useState(() => {
    const storedPlan = localStorage.getItem('trainingPlan');
    return storedPlan ? JSON.parse(storedPlan) : [];
  });
  const [selectedDay, setSelectedDay] = useState('');

  useEffect(() => {
    localStorage.setItem('trainingPlan', JSON.stringify(plan));
  }, [plan]);

  const handleChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const handlePlanUpdate = () => {
    const updatedPlan = [...plan, { day: selectedDay, training: '' }];
    setPlan(updatedPlan);
    setSelectedDay('');
  };

  const handleTrainingChange = (e, index) => {
    const { value } = e.target;
    const updatedPlan = [...plan];
    updatedPlan[index].training = value;
    setPlan(updatedPlan);
  };

  return (
    <div className="training-plan">
      <h2>Training Plan</h2>
      <div className="add-training">
        <select className="select-day" value={selectedDay} onChange={handleChange}>
          <option value="">Select a day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <button className="add-button" onClick={handlePlanUpdate} disabled={!selectedDay}>
          Add Training
        </button>
      </div>
      <form>
        {plan.map((item, index) => (
          <div key={index} className="training-item">
            <label className="training-label">
              {item.day}:
              <input
                className="training-input"
                type="text"
                value={item.training}
                onChange={(e) => handleTrainingChange(e, index)}
              />
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default TrainingPlan;
