import styled from "styled-components";

import { Field } from "formik";

export const FormWrap = styled.div`
  min-width: 320px;
  display: flex;
  gap: 28px;
  flex-direction: column;
  padding: 36px 12px;
  margin-top: 36px;
  margin-left: auto;
  margin-right: auto;

  text-align: justify;
  letter-spacing: -0.64px;

  background: ${(props) => props.theme.colors.second_bg};

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: 0;
    min-width: 344px;
  }
`;

export const InputField = styled(Field)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  font-family: Fira Sans;
  font-size: 18px;
  line-height: normal;
  letter-spacing: -0.72px;

  border: none;
  background-color: transparent;
  border-bottom: 1px solid
    ${(props) =>
      props.border ? props.theme.colors.error_text : props.theme.colors.accent};
`;

export const ErrorElement = styled.div`
  margin-top: 8px;
  color: ${(props) => props.theme.colors.error_text};
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: end;
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 39px;
  padding: 4px 4px 4px 16px;
  gap: 12px;
  border-radius: 500px;
  border: 1px solid ${(props) => props.theme.colors.accent};

  &:hover {
    border-color: ${(props) => props.theme.colors.main_text};
    background: ${(props) => props.theme.colors.main_text};
    color: ${(props) => props.theme.colors.accent};
  }
`;
