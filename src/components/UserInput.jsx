import React from "react";

function UserInput( { onChangeInput, userInputProp } ) {
  

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInputProp.initialInvestment}
            onChange={(event) =>
                onChangeInput("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInputProp.annualInvestment}
            onChange={(event) =>
                onChangeInput("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInputProp.expectedReturn}
            onChange={(event) =>
                onChangeInput("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInputProp.duration}
            onChange={(event) => 
                onChangeInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
