## Ejercicio 1

Modify the useCounter custom hook from the of Data Fetching - 1 exercise with fetch and useEffect to use the useCallback to memoize the functions used to increment, decrement and reset the counter.

## Ejercicio 2

Create a FilteredList component that receives a list of objects each containing a name, an id and a age prop.
The FilteredList component should render only the items of the list whose age is greater than 18, and the filtering should only happen when the list changes.
Use useMemo to memoize the filtered list.