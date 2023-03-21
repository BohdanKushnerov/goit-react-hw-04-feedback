export const FeedbackOptions = props => {
  return (
    <div>
      {props.options.map(option => {
        return (
          <button key={option} onClick={() => props.onLeaveFeedback(option)}>
            {option}
          </button>
        );
      })}
    </div>
  );
};
