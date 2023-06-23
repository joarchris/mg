import React, { useState, useEffect } from 'react';
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';

const TodayTraining = () => {
  const [today, setToday] = useState('');
  const [trainingPlan, setTrainingPlan] = useState([]);

  useEffect(() => {
    const date = new Date();
    const dayIndex = date.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const todayDay = daysOfWeek[dayIndex];
    setToday(todayDay);

    const storedTrainingPlan = JSON.parse(localStorage.getItem('trainingPlan'));
    if (Array.isArray(storedTrainingPlan)) {
      setTrainingPlan(storedTrainingPlan);
    } else {
      setTrainingPlan([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('trainingPlan', JSON.stringify(trainingPlan));
  }, [trainingPlan]);

  const handleCopyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = getTrainingForToday();
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  function getTrainingForToday() {
    const todayTraining = trainingPlan.find((item) => item.day === today);
    return todayTraining ? todayTraining.training : 'WHAT? No training set for today. Enjoy your day off 😴';
  }

  return (
    <div className="today-details">
      <h4>{today}'s training</h4>
      <p>{getTrainingForToday()}</p>
      <span onClick={handleCopyToClipboard}>
        <DocumentDuplicateIcon height={15} />
      </span>
    </div>
  );
};

export default TodayTraining;
