const onSubmitCodeTs = `
import { createEffect } from "effector";
import { createForm } from "effector-react-form";

const initialValues = {
  name: '',
  lastName: '',
};

type Values = {
  name: string;
  lastName: string;
};

const postData = createEffect(async ({ values }) => /*your fetch code*/);

const form = createForm<Values>({
  initialValues,
  onSubmit: postData,
});
`;

const onSubmitCodeJs = `
import { createEffect } from "effector";
import { createForm } from "effector-react-form";

const initialValues = {
  name: '',
  lastName: '',
};

const postData = createEffect(async ({ values }) => /*your fetch code*/);

const form = createForm({
  initialValues,
  onSubmit: postData,
});
`;

export const onSubmitCode = {
  jsx: onSubmitCodeJs,
  tsx: onSubmitCodeTs,
};
