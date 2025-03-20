import { AppetizerSection } from "./_components/AppetizerSection";
import { Banner } from "./_components/Banner";
import { CategoriesSection } from "./_components/CategoriesSection";
import { HomeFoods } from "./_components/HomeFoods";

export default function Home() {
  return (
    <div className="max-w-[1440px] m-auto flex flex-col gap-12">
      <Banner />
      <HomeFoods />
      {/* <CategoriesSection /> */}
      {/* <AppetizerSection /> */}
    </div>
  );
}
