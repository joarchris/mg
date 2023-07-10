import { TrashIcon } from '@heroicons/react/24/outline';
import React from 'react';

export default function AddGoal({ onAddGoal, goals }) {
  const [newGoal, setNewGoal] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const goal = {
      newGoal,
      createdAt: Date.now(),
    };
    onAddGoal(goal);
    saveGoal(goal); // Save the new goal to local storage
    setNewGoal('');
  };
  const saveGoal = (goal) => {
    const goals = JSON.parse(localStorage.getItem('goals') || '[]');
    goals.push(goal);
    localStorage.setItem('goals', JSON.stringify(goals));
  };

  return (
    <div>
      <form className="goalForm" onSubmit={handleSubmit}>
        <p>Set Main Goal</p>

        <label>
          <textarea value={newGoal} onChange={(event) => setNewGoal(event.target.value)} />
        </label>

        <button type="submit">Add New Goal</button>
      </form>

      <div className="goalList">
        <p>Main Goal:</p>
        <ul>{goals.length > 0 && <li>{goals[goals.length - 1].newGoal}</li>}</ul>
      </div>
      <div className="goalList">
        <p>Achived Goals:</p>
        <ul>
          {goals
            .toReversed()
            .slice(0, -1)
            .map((goal, index) => (
              <li key={index}>{goal.newGoal}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}
