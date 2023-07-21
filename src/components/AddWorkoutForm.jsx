import { useState } from 'react';

export default function AddWorkoutForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [info, setInfo] = useState('');
  const [load, setLoad] = useState('');
  const [rating, setRating] = useState('');
  const [timeSpent, setTimeSpent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const workout = {
      title,
      info,
      load,
      rating,
      timeSpent,
      createdAt: Date.now(),
    };
    onAdd(workout);
    saveWorkout(workout); // Save the new workout to local storage
    setTitle('');
    setInfo('');
    setRating('');
    setLoad(0);
    setTimeSpent(0);
  };

  const saveWorkout = (workout) => {
    const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <label>
        Title:
        <select type="text" value={title} onChange={(event) => setTitle(event.target.value)}>
          <option value="">Choose phase or training:</option>
          <option value="Base">Base (4-6 weeks)</option>
          <option value="Strength">Strength (4-6 weeks)</option>
          <option value="Power">Power (4 weeks)</option>
          <option value="Endurance">Endurance (optional)</option>
          <option value="Power-Endurance">Power-Endurance (4 weeks)</option>
          <option value="Projecting">Projecting (4-6 weeks)</option>
          <option value="Antagonist">Antagonist (Forebyggende)</option>
          <option value="Agonist">Agonist (Styrketrening)</option>
          <option value="Active Resting Day">Aktiv hviledag</option>
        </select>
      </label>
      <label>
        More info:
        <textarea value={info} onChange={(event) => setInfo(event.target.value)} />
      </label>
      <label>
        How was the workout?
        <select type="text" value={rating} onChange={(event) => setRating(event.target.value)}>
          <option value="">Choose from 1-6:</option>
          <option value="Horrible/Sick">Horrible 1.</option>
          <option value="Shite">Shite 2.</option>
          <option value="Mellow">Medium 3.</option>
          <option value="Pretty Good">Pretty Good 4.</option>
          <option value="Strong and Explosive">Strong and explosive 5.</option>
          <option value="Hot Chili, Best Feelgood!">Wow, I Feel Good 6.</option>
        </select>
      </label>
      <label>
        Time spent (min) or reps:
        <input type="number" value={timeSpent} onChange={(event) => setTimeSpent(event.target.value)} />
      </label>
      <label>
        Load (kg), bodyweight = 0:
        <input type="number" value={load} onChange={(event) => setLoad(event.target.value)} />
      </label>
      <button type="submit">Add workout</button>
    </form>
  );
}
