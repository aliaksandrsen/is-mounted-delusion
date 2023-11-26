In react 18 - no such error:
`Can't perform a React state update on an unmounted component`

github.com/reactwg/react-18/discussions/82

However, this fix does not actually solve any "memory leaks". It just suppresses the warning.As mentioned earlier, there's also no actual leak here anyway. Waiting for a Promise is temporary, and there's nothing holding onto the component indefinitely.
