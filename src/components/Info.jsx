import React from 'react';

const Info = () => {
  return (
    <div className="container">
      <p>
        <p>
          <h2>First, set your goal for this training period</h2>
          <strong>Each training period is broken into 5 different phases:</strong>
        </p>
        <span className="phase-heading">BASE</span>
        <p>
          If you have had a smallish hiatus from climbing, you would benefit from starting with a base training phase. The
          base fitness phase lasts 4-6 weeks and is focused on low intensity and long duration climbing. The purpose of each
          session is to achieve a maximum steady state of forearm pump. The phase provides opportunities to learn and work on
          climbing techniques via specific climbing drills.
        </p>
        <span className="phase-heading">STRENGTH</span>
        <p>
          The strength phase lasts 4-6 weeks and is focused on increasing finger strength and improving overall body strength
          to improve climbing performance. Each strength training session includes hangboard exercises and a circuit routine.
        </p>
        <span className="phase-heading">POWER</span>
        <p>
          The power phase lasts 4 weeks and is focused on increasing the ability to perform dynamic powerful moves. This will
          be achieved by incorporating campus board and limit bouldering routines. Limit bouldering is climbing short boulder
          problems that have a couple hard moves.
        </p>
        <span className="phase-heading">POWER ENDURANCE</span>
        <p>
          The power endurance phase lasts 4 weeks and is focused on increasing the ability to sustain a series of difficult
          climbing moves. Various training exercises such as 4x4s and linked bouldering circuits will be performed. The
          intervals will be focused on moves that will be used in the succeeding performance phase.
        </p>
        <span className="phase-heading">PROJECTING</span>
        <p>
          The performance/projecting phase lasts 4-ish weeks and will consist of continuing routines in the power endurance
          phase as well as climbing outside to reach the goals that were established in the beginning of the season.
        </p>
        <p>
          <span className="phase-heading">SET A NEW GOAL</span>
          <p>
            Then it's time to start all over again, building on top of this period. If you feel fatiqued you would benefit
            with 2-3 weeks of deload/base training period before starting strength training again.
          </p>
        </p>
      </p>
    </div>
  );
};

export default Info;
