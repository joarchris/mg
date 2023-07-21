import { formatDistance } from 'date-fns';
import { TrashIcon } from '@heroicons/react/24/outline';

function WorkoutList({ workouts, onDelete }) {
  if (workouts.length === 0) {
    return null; // Return null if the array is empty
  }
  return (
    <>
      <span> Recent Workouts:</span>
      {workouts.map((workout) => (
        <Workout key={workout.createdAt} workout={workout} onDelete={() => onDelete(workout)} />
      ))}
    </>
  );
}
function Workout({ workout, onDelete }) {
  const time = formatDistance(new Date(), new Date(workout.createdAt));

  const handleDelete = () => {
    // Display an alert before deleting the workout
    if (window.confirm('YO YO! Are you sure you want to delete this workout?')) {
      onDelete();
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <div className="rating">Felt {workout.rating}</div>
      <div className="workout-info">{workout.info}</div>
      <p>
        <strong>Load (kg): </strong>
        {workout.load == 0 ? <>Bodyweight</> : <>{workout.load}</>}
      </p>
      <p>
        <strong>Time spent (min) or reps:</strong> {workout.timeSpent}{' '}
      </p>
      <p>{time} ago</p>
      <span onClick={handleDelete}>
        <TrashIcon height={15} />
      </span>
    </div>
  );
}
export default WorkoutList;
