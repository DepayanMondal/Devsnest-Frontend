import './App.css';
import Item from './item';
function app()
{
  const val ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
  var styles ={

    border:"1px solid black",
    width:"400px",
    height:"550px",
    overflow:"scroll",
  }
  return (
     
    <div className='container'>
      <div style={styles}>
        <Item item="C++" explain={val} />
        <Item item="C" explain={val} />
        <Item item="Javascript" explain={val} />
        <Item item="DSA" explain={val} />
        <Item item="Algorithms" explain={val} />
       
    




        <Item i/>
      </div>
    </div>
  )
}

export default app;

