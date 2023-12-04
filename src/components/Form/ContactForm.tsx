import { ErrorMessage, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import {
  BtnWrap,
  ErrorElement,
  FormWrap,
  InputField,
  Label,
  SubmitBtn,
} from "./ContactForm.styled";
import { ArrowWrap } from "../Banner/Banner.styled";
import { ArrowRight } from "../../ui/svgElements/ArrowRight";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const schema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Wrong Fullname. Too short")
    .max(20, "Wrong Fullname. Too long")
    .matches(/^[a-zA-Z0-9_]*$/, "Wrong Fullname. Only letters")
    .required("Fullname is required"),
  email: Yup.string().email("Wrong Email").required("Email is required"),
  phone: Yup.string()
    .matches(/^380\d{9}$/, "Wrong Phone")
    .required("Phone is required"),
  message: Yup.string(),
});

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
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={schema}
    >
      <Form>
        <FormWrap>
          <Label htmlFor="name">
            * Full name:
            <InputField
              type="text"
              name="name"
              id="name"
              placeholder="John Rosie"
            />
            <ErrorElement>
              <ErrorMessage name="name" />
            </ErrorElement>
          </Label>
          <Label htmlFor="email">
            * E-mail:
            <InputField
              type="text"
              name="email"
              id="email"
              placeholder="johnrosie@gmail.com"
            />
            <ErrorElement>
              <ErrorMessage name="email" />
            </ErrorElement>
          </Label>
          <Label htmlFor="phone">
            * Phone:
            <InputField
              type="text"
              name="phone"
              id="phone"
              placeholder="380961234567"
            />
            <ErrorElement>
              <ErrorMessage name="phone" />
            </ErrorElement>
          </Label>
          <Label htmlFor="message">
            Message:
            <InputField
              as={"textarea"}
              type="text"
              name="message"
              id="message"
              style={{ height: "124px" }}
              placeholder="Your message...."
            />
            <ErrorElement>
              <ErrorMessage name="message" />
            </ErrorElement>
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
