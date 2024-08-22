
import Card from "./Card";

const Cards = () => {
  return (
    <div className="w-full bg-[#111111]" >
      <div className="max-w-screen-xl mx-auto py-20 flex gap-2">
        <Card width={"basis-1/3"} start={false} para={true} heading={["Up Next: News","Insights and behind the scenes"]}/>
        <Card width={"basis-2/3"} start={true} para={false} hover={true} heading={["Get In Touch","Let's get to it, together."]}/>
      </div>
    </div>
  );
};

export default Cards;
