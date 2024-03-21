## Ejercicio 1

Create an InteractiveWelcome component that renders an input tag and the Welcome component.
Pass the current content of the input tag to the name prop of the Welcome component. The input tag should be a controlled component.

## Ejercicio 2

Create a Login component containing three inputs: a username input, a password input and a remember checkbox. All three inputs should be controlled components.

## Ejercicio 3

Add a "login" button to the Login component. This button should be disabled as long as the username and password inputs are empty.
When clicked, the event handler attached to the button should call an onLogin function passed as a prop to the Login component, passing it the state, that will print the state value.

## Ejercicio 4

Add a "reset" button to the Login component that clears the content of all three inputs when clicked.

## Ejercicio 5

Use the form element to handle the form's submission, and attach the handleLogin event handler to the onSubmit event of the form element. How do you prevent the default behavior of the form element?
