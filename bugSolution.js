```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: This effect runs only once after the initial render
    // because of the empty dependency array [].
    console.log('Effect ran!'); 
  }, []);

  return <div>Count: {count}</div>;
}
```