import { State } from "../../models";

type ActionBarProps = {
  itemLeft: number;
  state: State;
  onStateChanged: (state: State) => void;
  onClearCompleted: () => void;
};

export function ActionBar({
  itemLeft,
  state,
  onStateChanged,
  onClearCompleted,
}: ActionBarProps) {
  return (
    <div className="action-bar">
      <label className="item-left-panel">{itemLeft} item(s) left</label>
      <button
        onClick={() => onStateChanged("All")}
        className={state === "All" ? "btn btn-active" : "btn"}
      >
        All
      </button>
      <button
        onClick={() => onStateChanged("Active")}
        className={state === "Active" ? "btn btn-active" : "btn"}
      >
        Active
      </button>
      <button
        onClick={() => onStateChanged("Completed")}
        className={state === "Completed" ? "btn btn-active" : "btn"}
      >
        Completed
      </button>
      {state !== "Active" && (
        <button onClick={onClearCompleted} className="btn">
          Clear completed
        </button>
      )}
    </div>
  );
}
