import { CpuCharge } from "../../ui/svgElements/CpuCharge";
import { GlobalEdit } from "../../ui/svgElements/GlobalEdit";
import { MaximizeCircle } from "../../ui/svgElements/MaximizeCircle";
import { Ranking } from "../../ui/svgElements/Ranking";
import {
  TitleWrap,
  Values1,
  Values2,
  Values3,
  Values4,
  Values5,
  Values6,
  ValuesContainer,
  ValuesDesc,
  ValuesTitle,
} from "./Values.styled";

export function Values() {
  return (
    <ValuesContainer>
      <Values1>
        <TitleWrap>
          <MaximizeCircle />
          <ValuesTitle>Openness</ValuesTitle>
        </TitleWrap>
        <ValuesDesc>to the world, people, new ideas and projects</ValuesDesc>
      </Values1>
      <Values2>
        <TitleWrap>
          <GlobalEdit />
          <ValuesTitle>Responsibility</ValuesTitle>
        </TitleWrap>
        <ValuesDesc>
          twe are aware that the results of our work have an impact on our lives
          and the lives of future generations
        </ValuesDesc>
      </Values2>
      <Values3>
        <img
          srcSet="./assets/image/wind-farms-fields-342.jpg 342w, ./assets/image/wind-farms-fields-684.jpg 684w, ./assets/image/wind-farms-fields-1026.jpg 1026w"
          src="./assets/image/wind-farms-fields-342.jpg"
          alt="wind farms workers"
        />
      </Values3>
      <Values4>
        <img
          srcSet="./assets/image/man-worker-firld-by-solar-panels-342.jpg 342w, ./assets/image/man-worker-firld-by-solar-panels-684.jpg 684w, ./assets/image/man-worker-firld-by-solar-panels-1026.jpg 1026w"
          src="./assets/image/man-worker-firld-by-solar-panels-342.jpg"
          alt="solar farms workers"
        />
      </Values4>
      <Values5>
        <TitleWrap>
          <CpuCharge />
          <ValuesTitle>Innovation</ValuesTitle>
        </TitleWrap>
        <ValuesDesc>
          we use the latest technology to implement non-standard solutions
        </ValuesDesc>
      </Values5>
      <Values6>
        <TitleWrap>
          <Ranking />
          <ValuesTitle>Quality</ValuesTitle>
        </TitleWrap>
        <ValuesDesc>
          we do not strive to be the first among others, but we want to be the
          best in our business
        </ValuesDesc>
      </Values6>
    </ValuesContainer>
  );
}
