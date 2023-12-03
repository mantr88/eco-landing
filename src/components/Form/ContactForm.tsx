import { Formik, Form, FormikHelpers } from "formik";
import * as yup from "yup";
import {
  BtnWrap,
  FormWrap,
  InputField,
  Label,
  SubmitBtn,
} from "./ContactForm.styled";
import { ArrowWrap } from "../Banner/Banner.styled";
import { ArrowRight } from "../../ui/svgElements/ArrowRight";

const schema = yup.object().shape({
  name: yup
    .string()
    .min(4, "Wrong Fullname. Too short")
    .max(20, "Wrong Fullname. Too long")
    .matches(/^[a-zA-Z0-9_]*$/, "Wrong Fullname. Only letters")
    .required("Fullname is required"),
  email: yup.string().email("Wrong Email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, "Wrong Phone")
    .required("Phone is required"),
  message: yup.string(),
});

const initialValues = { name: "", email: "", phone: "", message: "" };

export function ContactForm() {
  const handleSubmit = (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <FormWrap>
          <Label htmlFor="name">
            * Full name:
            <InputField
              type="text"
              name="name"
              id="name"
              placeholder="John Rosie"
            />
          </Label>
          <Label htmlFor="email">
            * Email:
            <InputField
              type="text"
              name="email"
              id="email"
              placeholder="johnrosie@gmail.com"
            />
          </Label>

          <Label htmlFor="phone">
            * Phone:
            <InputField
              type="text"
              name="phone"
              id="phone"
              placeholder="380961234567"
            />
          </Label>

          <Label htmlFor="message">
            Message:
            <InputField
              as={"textarea"}
              type="text"
              name="message"
              id="message"
              placeholder="Your message"
              style={{ height: "124px" }}
            />
          </Label>
          <BtnWrap>
            <SubmitBtn type="submit">
              Send
              <ArrowWrap>
                <ArrowRight />
              </ArrowWrap>
            </SubmitBtn>
          </BtnWrap>
        </FormWrap>
      </Form>
    </Formik>
  );
}
