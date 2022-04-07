import { Actions, useAppDispatch } from '../../context/context';

export const useKeypadViewModel = () => {
  const dispatch = useAppDispatch();
  function calculate() {
    console.log('Calculate');
    dispatch({ type: Actions.CALCULATE });
  }
  return {
    calculate,
  };
};
