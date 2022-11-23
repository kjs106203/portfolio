import { workExperienceData } from "./data/data";
import TitleList from "./TitleList";

function Resume({ setPage }) {
  const body_st = {
    margin: "5%",
  };

  return (
    <div style={body_st}>
      <div className='flexbtw'>
        <div>
          <h1>
            안녕하세요 <br />
            김지성입니다
          </h1>
        </div>
        <div className='contact'>
          <a href='mailto:kjs106203@gmail.com'>kjs106203@gmail.com</a>
          <br />
          <br />
          <a href='tel:+821071724896'>+82-10-7172-4896</a>
        </div>
      </div>
      <div>
        <h3>Introduce</h3>
        <p>
          Java Spring Boot 프레임워크와 Python Django 프레임워크를 이용한 웹
          개발 경험이 있습니다.
          <br />
          Django와 JavaScript를 주로 사용하여 SaaS 서비스를 개발했습니다.
          사용자의 요구사항에 맞게 DB 테이블을 설계 하였으며 제공된 데이터를
          삽입하여 웹에 시각화 하는 작업을 했습니다.
          <br />
          서버에서 데이터를 다루며 좀 더 효율적인 결과 산출을 위해 고민하고
          있습니다. 여러 개발자들과 함께 다른 환경에서 일하며 형상관리와
          커뮤니케이션의 중요성을 이해하게 되었습니다. Git, SVN을 이용한 협업
          도구에 익숙하고 문서화를 중요하게 여깁니다. 위와 같은 경험을 바탕으로
          항상 더 좋은 개발자가 되기 위해 노력하고 있습니다.
        </p>
      </div>
      <hr />
      <h3>Work Experience</h3>
      <div>
        {Object.entries(workExperienceData).map(([key, item]) => {
          return <TitleList title={key} list={item} />;
        })}
      </div>
      <hr />
      <div>
        <h3>Skills</h3>
        <div className='flexbtw'>
          <div>
            <h4>Back-end</h4>
            <ul>
              <li>Spring Boot</li>
              <li>Python Django</li>
            </ul>
          </div>
          <div>
            <h4>Front-end</h4>
            <ul>
              <li>JavaScript</li>
              <li>HTML / CSS</li>
            </ul>
          </div>
          <div>
            <h4>Database</h4>
            <ul>
              <li>MySQL</li>
              <li>Oracle</li>
            </ul>
          </div>
          <div>
            <h4>Co-op</h4>
            <ul>
              <li>Git</li>
              <li>SVN</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h3>Education</h3>
        <div className='flexbtw'>
          <div>
            <p>
              2014. 03 ~ <br />
              2021.02
            </p>
          </div>
          <div>
            <p>
              <b>한경대학교</b> <br />
              컴퓨터공학과
            </p>
          </div>
          <div>
            <p>
              학사
              <br />
              GPA : 3.34 / 4.5
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h3>Portfolio</h3>
        <a
          style={{ cursor: "pointer" }}
          onClick={() => {
            setPage("port");
          }}
        >
          Click here!
        </a>
      </div>
    </div>
  );
}

export default Resume;
