# ui

Want to create a React/Redux app? Start here! Follow this README and the associated code comments
to gain a better understanding of the mindset that drives React/Redux frontend programming, and how
all these tools tie together.

For an overview of React and Redux, as well as other tools we use for frontend development at
Clever, see [our frontend
overview](https://clever.atlassian.net/wiki/display/ENG/Working+with+React).

## Application structure

This project has 4 subdirectories:

* `store/`: **Application state management**. Contains the single Redux store, which stores and
    organizes all application state. You can think of the redux store as a
    state machine: `action`s define the state transitions that can occur.
    When an `action` occurs, Redux `reducers` respond to the `action` by
    computing the changes necessary to complete a state transition. Thus, the
    store determines how state is stored within it, and how the state can
    change as different actions occur.
* `components/`: **Application's visual display**. React `Component`s define
    how the application ought to be displayed. This directory also contains
    code to pull data from the Redux store, and provide them to the `Component`s
    as props.

Enter each subdirectory and read their documentation for more information on how they work.
