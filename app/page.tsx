
import Header from "./Header";
import Describe from "./Describe";
import Action from "./Action";
import WriteDoc from "./WriteDoc";
import DocUse from "./DocUse";
import WhyDoc from "./WhyDoc";
import Footer from "./Footer";
import DocDescription from "./DocDescription";


export default function Home() {
  return (
    <main className="grid w-full">
     <Header/>
     <Describe/>
     <Action/>
     <WriteDoc/>
     <DocUse/>
     <DocDescription/>
     <WhyDoc/>
   
     <Footer/>
    </main>
  );
}
