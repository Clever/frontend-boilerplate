# Store

The store is split up into a bunch of smaller subsections, that each define two
things:

* `index.ts`: The public interface for how to retrieve and change the data in
    the store
* `reducer.ts`: The private portions of the store, including:
    * The `actions` that can cause state transitions
    * The `reducer` itself, which defines how those actions affect the contents
        of the store.

## Actions

An action is literally an object that contains two things:

* **Required**: The `type` of the action. This is generally a unique string, like
    `"FETCHING_QUOTE"`, for example.
* Optional: The `payload` of the action. Any data necessary to figure out what
    the next version of the state should be. For instance, if we get the
    `RECEIVED_QUOTE` action, in order to transition the state to contain the
    quote itself, we need the text of the quote and its author in the action;
    otherwise we wouldn't know what we're supposed to display!

So, for example, the `RECEIVED_QUOTE` action looks like this:

```
{
    type: "RECEIVED_QUOTE",
    payload: {
        text: "The quick brown fox jumped over the lazy dog",
        author: "The Boston Journal"
    }
}
```

An **action creator** is a function that returns an action in the above format.
We use the `redux-actions` library to enforce that the actions we create are
always in this format; the first argument you call action creators with is the
payload of the resulting action.

Finally, actions are `dispatch`ed by the store—when that occurs, all the reducers
are called to respond to the incoming action.

(This is actually describing Flux Standard Actions—really, the action doesn't have to
have anything, but adopting this format makes it easier to understand how
the application works.)

## Reducers

Reducers are functions that take in an action and the current version of the
state, and output the new version of the state. They must be pure functions
that don't update their original arguments—they just create a new object that
contains the new data.

Traditionally, they are written as big switch statements on the action's type,
like so:

```
function reducer(state, action) => {
    switch(action.type) {
    case "FETCHING_QUOTE":
        return {...state, fetching: true};
    case "RECEIVED_QUOTE": {
        const {text, author} = action.payload;
        return {...state, fetching: false, text, author};
    case "FETCH_ERROR":
        return {...state, fetching: false, err: action.payload};
    default:
        return state;
    }
}
```

Note that in the default case, i.e. if we don't know how to respond to an action,
we just return the previous state. This is important in part because erroneous
actions shouldn't affect the state's ability to function, but in part because
if you have many different reducers in your application, they all get called
on every action—so if a reducer doesn't care about a particular dispatched action,
then it shouldn't update anything in response to it.

Our code looks a little different since we're using the `redux-actions` library
to handle dispatched actions, which provides a `handleActions` function that
makes our reducers a little more robust to errors; but it works in effectively
the same way as the example switch statement above. See `/store/quote/reducer.ts`
for the equivalent `redux-actions`-style code.

## Multiple reducers

Redux's `combineReducers` function allows us to split up our store into a number
of smaller namespaces. For instance, in this app, we have two sub-reducers:
`counter` and `quote`. They can operate independently of one another, and
their data are stored separately from one another as `store.quote` and
`store.counter`. This just allows us to split up a large and complex reducer into
a number of independent, easier to understand, smaller pieces.

To see its use, look at `/store/index.ts`.