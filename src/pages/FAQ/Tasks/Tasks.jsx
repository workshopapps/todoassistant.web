import { QandA_tasks } from "../static";
import minus from "../../../assets/minus.svg";
import plus from "../../../assets/add.svg";
import "../FAQ-sub.scss";
import { useState } from "react";

const Task = () => {
  const [active, setActive] = useState(-1);
  const Toggle = (index) => {
    if (index === active) {
      setActive(-1);
      return;
    }
    setActive(index);
  };

  return (
    <div>
      <div className="Top container">
        {QandA_tasks.map((QA, key) => {
          return (
            <div
              key={key}
              className="QA-container  "
              onClick={() => Toggle(key)}
            >
              <div className="QA">
                <p className={`question ${active === key ? "active" : ""}`}>
                  {QA.question}
                </p>
                {active === key ? (
                  <img src={minus} alt="" className="icon" />
                ) : (
                  <img src={plus} alt="" className="icon" />
                )}
              </div>
              <span
                className={`sub  ${active === key ? "active" : "inactive"}`}
              >
                {QA.answer}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Task;
