
import Header from "./Header";
import Describe from "./Describe";
import Action from "./Action";
import WriteDoc from "./WriteDoc";
import DocUse from "./DocUse";
import WhyDoc from "./WhyDoc";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="bg-red">
     <Header/>
     <Describe/>
     <Action/>
     <WriteDoc/>
     <DocUse/>
     <WhyDoc/>
     <Footer/>
    </main>
  );
}
