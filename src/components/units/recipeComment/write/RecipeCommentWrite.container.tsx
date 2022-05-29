import RecipeCommentWriteUI from "./RecipeCommentWrite.presenter";
import {
  CREATE_REPLY,
  FETCH_REPLIES,
  FETCH_RECIPE,
} from "./RecipeCommentWrite.queries";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function RecipeCommentWrite(props) {
  const router = useRouter();
  const [createReply] = useMutation(CREATE_REPLY);
  const { register, handleSubmit, setValue } = useForm({
    mode: "onChange",
  });

  // 댓글 작성하기
  const onClickSubmit = async (data) => {
    if (!data.contents) return alert("댓글을 입력해주세요.");
    try {
      await createReply({
        variables: {
          contents: data.contents,
          id: String(router.query.recipeId),
        },
        refetchQueries: [
          {
            query: FETCH_REPLIES,
            variables: { id: String(router.query.recipeId) },
          },
          {
            query: FETCH_RECIPE,
            variables: { recipes_id: String(router.query.recipeId) },
          },
        ],
      });
      setValue("contents", "");
      alert("댓글작성 성공");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <RecipeCommentWriteUI
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
    />
  );
}
