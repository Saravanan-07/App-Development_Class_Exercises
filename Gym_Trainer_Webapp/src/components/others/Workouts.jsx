import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import '../../assets/css/others/Workouts.css';
import { Link } from 'react-router-dom';

const Workouts = () => {
  const { user } = useAuth();
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newWorkout, setNewWorkout] = useState({
    name: '',
    description: '',
    exercises: [{ id: '', name: '', reps: '' }]
  });

  useEffect(() => {
    const fetchWorkouts = async () => {
      if (user) {
        try {
          const response = await axios.get(`http://localhost:5000/workouts`, {
            params: { userId: user.id }
          });
          setWorkouts(response.data);
        } catch (error) {
          console.error('Error fetching workouts:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchWorkouts();
  }, [user]);

  const handleWorkoutChange = (e) => {
    const { name, value } = e.target;
    setNewWorkout(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleExerciseChange = (index, e) => {
    const { name, value } = e.target;
    const exercises = [...newWorkout.exercises];
    exercises[index] = { ...exercises[index], [name]: value };
    setNewWorkout({ ...newWorkout, exercises });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/workouts', newWorkout, {
        headers: { 'Content-Type': 'application/json' }
      });
      setWorkouts(prevState => [...prevState, response.data]);
      setNewWorkout({
        name: '',
        description: '',
        exercises: [{ id: '', name: '', reps: '' }]
      });
    } catch (error) {
      console.error('Error adding workout:', error);
    }
  };

  if (loading) {
    return <div className='loading'>Sign in to view workouts</div>;
  }

  return (
    <>
      <div className="header-main">
        <div className="header-list demo-navbar">
          <ul>
            <li><Link to='/home' id="Link">Back</Link></li>
          </ul>
        </div>
      </div>
      <div className="personalized-workouts">
        <h2>Personalized Workouts for {user.username}</h2>
        {workouts.length > 0 ? (
          <div className="workouts-list">
            {workouts.map((workout) => (
              <div key={workout.id} className="workout-item">
                <h3>{workout.name}</h3>
                <p>{workout.description}</p>
                <ul>
                  {workout.exercises.map((exercise) => (
                    <li key={exercise.id || exercise.name}>
                      {exercise.name} - {exercise.reps} reps
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p>No personalized workouts available. Please complete your profile to receive recommendations.</p>
        )}
          <div className="addworkoutformouter">
        <div className="add-workout-form">
          <h3>Add a New Workout</h3>
          <form onSubmit={handleSubmit}>
            <div>
            <input
              type="text"
              name="name"
              placeholder="Workout Name"
              value={newWorkout.name}
              onChange={handleWorkoutChange}
              required
            />
            </div>
            <div>
            <textarea
              name="description"
              placeholder="Workout Description"
              value={newWorkout.description}
              onChange={handleWorkoutChange}
              required
            ></textarea>
            </div>
            {newWorkout.exercises.map((exercise, index) => (
              <div key={index} className="exercise-item">
                <input
                  type="text"
                  name="name"
                  placeholder="Exercise Name"
                  value={exercise.name}
                  onChange={(e) => handleExerciseChange(index, e)}
                  required
                />
                <input
                  type="number"
                  name="reps"
                  placeholder="Reps"
                  value={exercise.reps}
                  onChange={(e) => handleExerciseChange(index, e)}
                  required
                />
              </div>
            ))}
            <button type="submit">Add Workout</button>
          </form>
        </div>
      </div>
      </div>
      <div className="contentbox footer workoutfooter">
        <ul>
          <li><h1>VEST ARMOUR</h1></li>
          <li>© 2024 Vest Armour®, Inc. All rights reserved</li>
          <li>Privacy Policy  /</li>
          <li>Terms of use  /</li>
          <li>Cookie Policy  /</li>
          <li>Manage Your Content /</li>
          <li>AdChoices</li>
        </ul>
      </div>
    </>
  );
};

export default Workouts;
