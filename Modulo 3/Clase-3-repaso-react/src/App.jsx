import CardEdit from "./components/card/CardEdit";
import NavbarDefault from "./components/navbar/NavbarDefault";


function App() {
  const personas = [
    {
      name: 'Ale',
      desc: 'loremmmmmmmmmmmmmmmmmmmmmmmm',
      img: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
      name: 'Juan',
      desc: 'loremmmmmmmmmmmmmmmmmmmmmmmm',
      img: 'https://www.w3schools.com/howto/img_avatar.png'
    },
    {
      name: 'Maxi',
      desc: 'loremmmmmmmmmmmmmmmmmmmmmmmm',
      img: 'https://www.w3schools.com/howto/img_avatar.png'
    },
  ];

  return (
    <>
      <NavbarDefault />
      {personas.map((persona, index) => <CardEdit key={index} data={persona} />)}
      
    </>
  )
}

export default App
