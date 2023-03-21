export const FeedbackOptions = props => {
  // static propTypes = {

  // }
  //

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
