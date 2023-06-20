import { TrashIcon } from '@heroicons/react/24/outline';
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

  const handleDelete = (index) => {
    const confirmDelete = window.confirm('YO YO! Are you sure you want to delete this training day?');
    if (confirmDelete) {
      const updatedPlan = [...plan];
      updatedPlan.splice(index, 1);
      setPlan(updatedPlan);
    }
  };

  const handlePlanUpdate = () => {
    // Check if the selectedDay already exists in the plan
    const isDayAlreadyAdded = plan.some((item) => item.day === selectedDay);

    if (isDayAlreadyAdded) {
      // Handle the case where the day is already in the plan
      alert('This day is already added to the plan.');
    } else {
      // Add the training item to the plan
      const updatedPlan = [...plan, { day: selectedDay, training: '' }];
      setPlan(updatedPlan);
      setSelectedDay('');
    }
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
          <option value="">Select your training day('s')</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <button className="add-button" onClick={handlePlanUpdate} disabled={!selectedDay}>
          Add Training day
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
            <span className="delete-button" onClick={() => handleDelete(index)}>
              <TrashIcon height={15} />
            </span>
          </div>
        ))}
      </form>
    </div>
  );
};

export default TrainingPlan;
