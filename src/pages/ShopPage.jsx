import Banner from "../components/UI/Banner";
import Main from "../components/shoppage-components/Main";
import SideBar from "../components/shoppage-components/SideBar";

export default function ShopPage() {
  return (
    <>
      <Banner page="Shop" />
      <main className="container mx-auto flex flex-col gap-6 lg:flex-row">
        <SideBar />
        <Main />
      </main>
    </>
  );
}
