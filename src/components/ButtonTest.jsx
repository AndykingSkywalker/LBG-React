function ButtonTest() {
  function thirdButton() {
    console.log("Number Three");
  }

  return (
    <div>
      <button onClick={() => console.log("Number One")}>Button Uno</button>
        <br />
      <button
        onClick={function () {
          console.log("Number Two");
        }}
      >
        Button Dos
      </button>
      <br />
      <button onClick={thirdButton}>Button Tres</button>
    </div>
  );
}

export default ButtonTest;
