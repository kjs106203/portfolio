import './App.css';

function App() {
  const body_st = {
    margin: '5% 5%'
  }
  return (
    <div style={body_st}>
      <div classNameName="flexbtw">
        <div>
          <h1>
            안녕하세요 <br />
            김지성입니다
          </h1>
        </div>
        <div classNameName='contact'>
          <a href='mailto:kjs106203@gmail.com'>kjs106203@gmail</a>
          <br /><br />
          <a href='tel:+821071724896'>+82-10-7172-4896</a>
        </div>
      </div>
      <div>
        <h3>Introduce</h3>
        <p>
          Java Spring Boot 프레임워크와 Python Django 프레임워크를 이용한 웹 개발
          경험이 있습니다.<br />
          Django와 JavaScript를 주로 사용하여 SaaS 서비스를 개발했습니다. 사용자의
          요구사항에 맞게 DB 테이블을 설계 하였으며 제공된 데이터를 삽입하여 웹에
          시각화 하는 작업을 했습니다.<br />
          서버에서 데이터를 다루며 좀 더 효율적인
          결과 산출을 위해 고민하고 있습니다. 여러 개발자들과 함께 다른 환경에서
          일하며 형상관리와 커뮤니케이션의 중요성을 이해하게 되었습니다. Git,
          SVN을 이용한 협업 도구에 익숙하고 문서화를 중요하게 여깁니다. 위와 같은
          경험을 바탕으로 항상 더 좋은 개발자가 되기 위해 노력하고 있습니다.
        </p>
      </div>
      <hr />
      <h3>Work Experience</h3>
      <div>
        <h4>FPD-NGS</h4>
        <ul>
          <li>
            유전체 분석 결과를 표, 그래프 등으로 시각화해주는
            SaaS(Software-as-a-Service) 서비스
          </li>
          <li>Django 프레임워크를 사용하여 서버 구축</li>
          <li>Django Template을 활용한 프론트엔드 애플리케이션 개발</li>
          <li>Apache ECharts를 사용한 데이터 시각화</li>
          <li>
            유전체 정보를 포함하는 .fast 파일의 내용을 파싱하여 MySQL DB에
            저장하기 위한 스키마 설계 및 구현, 파서 작성
          </li>
          <li>Django ORM을 통한 MySQL DB 액세스</li>
        </ul>
        <h4>EgnomeIMS</h4>
        <ul>
          <li>장내 미생물 분석 서비스</li>
          <li>Django 프레임워크를 사용하여 서버 구축</li>
          <li>
            Django Authentication 라이브러리를 사용하여 세션 기반 로그인 기능 구현
          </li>
          <li>CSRF, CORS 보안 공격에 대한 이해와 대응</li>
        </ul>
        <h4>식약처 ISP</h4>
        <ul>
          <li>식중독 균 데이터 관리를 위한 SaaS 서비스</li>
          <li>Spring Boot 프레임워크를 사용하여 서버 구축</li>
          <li>
            주기적으로 유전체 데이터베이스에 쿼리하여 데이터 변동을 확인하는 Java
            기반 애플리케이션 기능 개선, 변동 발생 시 모든 데이터를 다시 불러오는
            방식에서 변동된 데이터만 불러오도록 수정하여 효율성 개선
          </li>
          <li>SQL을 통한 Oracle DB 액세스</li>
        </ul>
        <h4>BI 교육</h4>
        <ul>
          <li>생물학 전공자 대상 기초 프로그래밍 교육 강사</li>
          <li>Python기초문법및파일처리에관한교육진행</li>
        </ul>
      </div>
      <hr />
      <div>
        <h3>Skills</h3>
        <div className="flexbtw">
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
        <div className="flexbtw">
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
              학사<br />
              GPA : 3.34 / 4.5
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h3>Portfolio</h3>
        <a href="./port.html">Click here!</a>
      </div>
    </div>
  );
}

export default App;
