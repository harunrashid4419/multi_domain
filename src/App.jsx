import ProfilePage from "./profilePage";

function App() {
  const url = window.location.href;
  // const [tenantName, setTanentName] = useState(
  //   url.split("."[0].split("//")[1])
  // );
  const tanentName = url.split(".")[0].split("//")[1];
  return (
    <>
      <ProfilePage tanentName={tanentName} />
    </>
  );
}

export default App;
