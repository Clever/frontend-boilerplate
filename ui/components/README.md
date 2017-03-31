# Components

Each component in this directory contains two parts:
* Components that define **visual display**. React `Component`s that are generally
    **presentational** in nature—that is, they do not specify how to manage state, but merely
    describe what HTML should be outputted given their input properties.
    * See the README in `components/` for more detail on handling individual (not
        application-wide) component state.
* Containers that **transfer application state to components**. Containers are wrappers
    around presentational components that pass them state and functions that
    modify state, so that the `components` don't need to know anything about how application
    state is managed. That way, the components can focus entirely on presentation.

## A note on state management

All application state should be stored in the Redux store; but in certain cases, it may be easier to
store state within a component itself. You may do so if the state is specific to that instance of
the component alone (no coordination between different, distant components in
the hierarchy), and is not predicated on any
external data (e.g. data from a database or an API).

For an example, many of the components in [the components
library](https://github.com/clever/components) follow this pattern because the state they manage
pertain only to those components alone, not some greater application data—like whether or not a
`ModalButton` should show its modal or not.
