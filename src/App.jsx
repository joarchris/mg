import { useState, useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AddWorkoutForm from './components/AddWorkoutForm';
import Navbar from './components/Navbar';
import TodayTraining from './components/TodayTraining';
import TrainingPlan from './components/TrainingPlan';
import WorkoutList from './components/WorkoutList';
import Info from './components/Info';
import Error from './components/Error';
import { AuthContextProvider } from './stores/AuthContext';

export default function App() {
  const [workouts, setWorkouts] = useState(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    return savedWorkouts.map((workout) => ({
      ...workout,
      createdAt: new Date(workout.createdAt),
    }));
  });

  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />

          <div className="pages">
            {isLoggedIn && <TodayTraining />} {/* Render TodayTraining only if logged in */}
            <Routes>
              {isLoggedIn && (
                <Route path="/" element={<WorkoutList workouts={sortedWorkouts} onDelete={handleDeleteWorkout} />} />
              )}
              {isLoggedIn && <Route path="/training-plan" element={<TrainingPlan />} />}
              {isLoggedIn && <Route path="/adding-new" element={<AddWorkoutForm onAdd={handleAddWorkout} />} />}
              {isLoggedIn && <Route path="/info" element={<Info />} />}
              {!isLoggedIn && <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)} />} />}{' '}
              {/* Render Login component when not logged in */}
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthContextProvider>

      <footer>
        <p>
          Muscle Gold {new Date().getFullYear()} {'\u00b0'} and All That Sweat
        </p>
      </footer>
    </div>
  );
}
