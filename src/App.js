import {Data, MyImage, ActionAlert} from './profile/profile';

function App() {
  const myStyle = {color:'#006064', fontSize: 15, fontWeight: 400,
 backgroundColor: "#F9FBE7", textAlign: "center", border:"solid 6px #827717"};
const handleName = e => {
  e.preventDefault();
  alert("Shalewa Tiamiyu");
};
  return (
    <>
    <header style = {myStyle}>
      < Data fullName = "Shalewa Tiamiyu" bio ="A female in the Game!" profession = "Software Engineer"></Data>
      <MyImage>Picture</MyImage>
      <br></br>
      <ActionAlert handleName={handleName}></ActionAlert>
    </header>
    </>
  );
}

export default App;
