import useNasaData from "./utils/useNasaData";
import Card from "./componenets/Card";
import Loading from "./componenets/Loading";


function App() {
  const nasaData = useNasaData()

  return (
    <>
    {nasaData.length === 0 ? <Loading/> :
    <div className="my-16  flex flex-col gap-16">
    {nasaData.map((data ) =>{
      if(!data.hasOwnProperty("hdurl")){
        return null
      }
 
      return ( <div key={data.date}>

      <Card  heading={data.title}  content={data.explanation } date={data.date} image={data.url} copyright={data.copyright}  />
     
      </div>
      )


     } )}

</div>}
    </>
  );
}

export default App;
