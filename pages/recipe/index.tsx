import { useRouter } from "next/router";
import RecipeList from "../../src/components/units/recipe/list/RecipeList.container";

export default function RecipeListPage() {
  const router = useRouter();

  return (
    <>
      <RecipeList />
      <button onClick={() => router.push("/recipe/new")}>
        레시피 등록하기
      </button>
      <button onClick={() => router.push("/recipe/detail")}>
        레시피 상세보기페이지
      </button>
    </>
  );
}
