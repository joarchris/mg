import { useState, useEffect, useContext } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AddWorkoutForm from './components/AddWorkoutForm';
import Navbar from './components/Navbar';
import TodayTraining from './components/TodayTraining';
import TrainingPlan from './components/TrainingPlan';
import WorkoutList from './components/WorkoutList';
import Info from './components/Info';
import Error from './components/Error';
import { AuthContextProvider } from './stores/authContext';
import AuthContext from './stores/authContext';
import AddGoal from './components/AddGoal';

export default function App() {
  const [workouts, setWorkouts] = useState(() => {
    const savedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    return savedWorkouts.map((workout) => ({
      ...workout,
      createdAt: new Date(workout.createdAt),
    }));
  });

  const [goals, setGoals] = useState(() => {
    const savedGoals = JSON.parse(localStorage.getItem('goals')) || [];
    return savedGoals.map((goal) => ({
      ...goal,
      createdAt: new Date(goal.createdAt),
    }));
  });

  const { user } = useContext(AuthContext);

  const handleAddWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const handleAddGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  const handleDeleteGoal = (goal) => {
    setGoals(goals.filter((g) => g !== goal));
  };

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

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
            <div className="goal-details">
              {goals.length > 0 && (
                <h4>
                  <span>Goal:</span> {goals[goals.length - 1].newGoal}
                </h4>
              )}
            </div>
            <TodayTraining />
            <Routes>
              <Route path="/" element={<WorkoutList workouts={sortedWorkouts} onDelete={handleDeleteWorkout} />} />
              <Route path="/training-plan" element={<TrainingPlan />} />
              <Route path="/adding-new" element={<AddWorkoutForm onAdd={handleAddWorkout} />} />
              <Route path="/info" element={<Info />} />
              <Route
                path="/goal"
                element={<AddGoal onAddGoal={handleAddGoal} goals={goals} onDeleteGoal={handleDeleteGoal} />}
              />
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
