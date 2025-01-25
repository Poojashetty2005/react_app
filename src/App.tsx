import ListGroup from "./assets/components/ListGroup";

function App() {
  let items =[
    'Panchami V Shetty',
    'Samhitha Adiga',
    'Riya pai',
    'Pooja'
];
const handleSelectItem =(item:string)=>{
  console.log(item);
}
  return <div><ListGroup items={items} heading={"Team Members"} onSelectItem={handleSelectItem}/></div>

}

export default App;