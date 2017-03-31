import { actions } from './reducer';

export function incrementCounter(dispatch) {
  dispatch(actions.incrementCounter());
}
