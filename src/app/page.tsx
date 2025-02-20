import { Banner } from "./_components/Banner";
import { CategoriesSection } from "./_components/CategoriesSection";

export default function Home() {
  return (
    <div className="max-w-[1440px] m-auto">
      <Banner />
      <CategoriesSection />
    </div>
  );
}
