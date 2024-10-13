const App = () => {
  const handleAuthClick = async () => {
    try {
      const response = await fetch("/api/users/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log("Auth Error: ", error);
    }
  };
  return (
    <>
      <h1>Hello, World!</h1>
      <button onClick={handleAuthClick}>Auth</button>
    </>
  );
};

export default App;
