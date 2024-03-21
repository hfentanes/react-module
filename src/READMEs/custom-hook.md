## Ejercicio 1

Create a custom hook useCounter that keeps track of the state of a counter, and returns the current value of the counter as well as three functions to increment, decrement and reset the counter.

## Ejercicio 2

Create a custom hook that keeps track of the state of a controlled form with the username and password inputs, and returns the current value of the inputs as well as an event handler to update either input.

## Ejercicio 3

Extract the logic to fetch a Github user's data from the GithubUser component from the third exercise of Context into a custom hook called useGithubUser.

## Ejercicio 4

Modify the useGithubUser hook to return the function to fetch the data of a Github user, along with the data of the user and the error and loading states.

## Ejercicio 5

Write the useCurrentLocation custom hook, that uses the browser's navigator.geolocation API to get the current location of the user through the getCurrentPosition builtin method.
The hook should return the current location as well as a function to get the current location, and the error and loading states.
