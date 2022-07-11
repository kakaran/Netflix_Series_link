import Header from "./Header";
import detail from "./detail"
import Card from "./Card"
import "./Style.css";

function App() {
  return (
    <>
    <Header />
    <div className="AllCardsHolder">
    <div className="threeCards">
    <Card 
    imglink = {detail[0].imglink}
    title = {detail[0].title}
    Name = {detail[0].Name}
    links = {detail[0].links}
    />
    <Card 
    imglink = {detail[1].imglink}
    title = {detail[1].title}
    Name = {detail[1].Name}
    links = {detail[1].links}
    />
    <Card 
    imglink = {detail[2].imglink}
    title = {detail[2].title}
    Name = {detail[2].Name}
    links = {detail[2].links}
    />
    </div>
    <div className="threeCards">
    <Card 
    imglink = {detail[3].imglink}
    title = {detail[3].title}
    Name = {detail[3].Name}
    links = {detail[3].links}
    />
    <Card 
    imglink = {detail[4].imglink}
    title = {detail[4].title}
    Name = {detail[4].Name}
    links = {detail[4].links}
    />
    <Card 
    imglink = {detail[5].imglink}
    title = {detail[5].title}
    Name = {detail[5].Name}
    links = {detail[5].links}
    />
    </div>
    </div>
    </>
  );
}

export default App;
