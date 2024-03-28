
import Header from "./Header";
import Describe from "./Describe";
import Action from "./Action";
import WriteDoc from "./WriteDoc";
import DocUse from "./DocUse";

export default function Home() {
  return (
    <main className="bg-red">
     <Header/>
     <Describe/>
     <Action/>
     <WriteDoc/>
     <DocUse/>
    </main>
  );
}
