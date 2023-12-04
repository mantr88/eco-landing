import styled from "styled-components";

import { Field } from "formik";

export const FormWrap = styled.div`
  display: flex;
  gap: 28px;
  flex-direction: column;
  padding: 36px 12px;
  margin-top: 36px;

  text-align: justify;
  letter-spacing: -0.64px;

  background: ${(props) => props.theme.colors.second_bg};
`;

export const Label = styled.label`
  /* margin-bottom: 8px; */
`;

export const InputField = styled(Field)`
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
  border-bottom: 1px solid ${(props) => props.theme.colors.accent};
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
