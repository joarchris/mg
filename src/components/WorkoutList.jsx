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
      {workout.rating && <div className="rating">Felt {workout.rating}</div>}
      <div className="workout-info">{workout.info}</div>
      <p>
        <strong>Load: </strong>
        {workout.load == 0 ? <>Bodyweight, no ekstra load</> : <>{workout.load} kg</>}
      </p>
      <p>
        <strong>Time spent:</strong> {workout.timeSpent} minutes
      </p>
      {workout.reps && (
        <p>
          <strong>Repetitions:</strong> {workout.reps} times
        </p>
      )}
      <p>{time} ago</p>
      <span onClick={handleDelete}>
        <TrashIcon height={15} />
      </span>
    </div>
  );
}
export default WorkoutList;
