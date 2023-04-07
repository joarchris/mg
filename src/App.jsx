import { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AddWorkoutForm from './components/AddWorkoutForm';
import Navbar from './components/Navbar';
import WorkoutList from './components/WorkoutList';

export default function App() {
  const [workouts, setWorkouts] = useState(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    return savedWorkouts.map((workout) => ({
      ...workout,
      createdAt: new Date(workout.createdAt),
    }));
  });

  const handleAddWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const handleDeleteWorkout = (workout) => {
    setWorkouts(workouts.filter((w) => w !== workout));
  };

  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  const sortedWorkouts = [...workouts].sort((a, b) => b.createdAt - a.createdAt);

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<WorkoutList workouts={sortedWorkouts} onDelete={handleDeleteWorkout} />} />
            <Route path="/adding-new" element={<AddWorkoutForm onAdd={handleAddWorkout} />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/* <h1>My Workout Tracker</h1>
      <AddWorkoutForm onAdd={handleAddWorkout} />
      <WorkoutList workouts={sortedWorkouts} onDelete={handleDeleteWorkout} /> */}
      <footer>
        <p>
          Muscle Gold {new Date().getFullYear()} {'\u00b0'} and All That Sweat
        </p>
      </footer>
    </div>
  );
}
