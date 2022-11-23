import { useState } from 'react';
import { TabPane } from './TabPane';

function Port() {
	const [tab, setTab] = useState(1); // 1, 2, 3, 4

	return (
		<div className="wrap-margin">
			<h1>Trouble Shooting</h1>

			<ul className="tabnav">
				<li>
					<button onClick={() => setTab(1)}>No.1</button>
				</li>
				<li>
					<button onClick={() => setTab(2)}>No.2</button>
				</li>
				<li>
					<button onClick={() => setTab(3)}>No.3</button>
				</li>
				<li>
					<button onClick={() => setTab(4)}>No.4</button>
				</li>
			</ul>

			<div>
				{tab === 1 && (
					<TabPane>
						<h3>Django 로그인 시 next url이동</h3>
						<div>
							<h4>로그인이 필요한 페이지 접근 시 로그인 후 해당 페이지 바로 이동</h4>
							<p>
								로그인을 하면 원래 접속하려던 페이지로 렌더링 하는 기능
								<br />
								해당 기능은 대표적인 예로 쇼핑몰에서 주문하기 직전 로그인을 하면
								해당 주문 페이지로 다시 렌더링해주는 기능이다.
							</p>
						</div>
						<hr />
						<div>
							<img className="tabimg" src="/images/1-1.png" />
							<p>
								위의 사진의 주소창을 확인하면 userlogin/ 뒤에 ‘?next=/blast/’ 가
								추가되어있다.
								<br />
								저 next url의 정보를 이용하여 로그인 후에 저 페이지로 접속 되도록
								하겠다.
								<br />
								<br />
								우선 위의 사진의 next 이후의 값이 필요하다. (/blast/ 값) 그렇기
								때문에 저 값을 views.py로 넘겨주어야 한다.
								<br />
								<br />
								해당 기능은 userlogin 페이지에서 다루기 때문에 next url 값을
								userlogin.html 에서 값을 넘겨준다.
								<br />
								<br />
								form 태그에서 사용자가 ID와 Password를 입력하면 입력 값이 views.py로
								넘어가는데 그 때 next 값을 request.GET.next를 이용하여 넘겨준다.
							</p>
							<img className="tabimg" src="/images/1-2.png" />
							<p>
								해당 next url을 받는 input 창은 사용자가 확인할 필요가 없기 때문에
								type을 hidden으로 했다.
								<br />
								views.py에서 사용될 이름은 next 로 지정했다. (name = “next”)
								<br />
								<br />
								<br />
							</p>
							<p>views.py의 userlogin 함수에 다음과 같이 추가했다.</p>
							<div className="codecss">
								<p>
									{`if 'next' in request.POST:   # html에서 넘겨준 input 태그의 name = "next"
                                    url = request.POST['next']    # request.GET.next 값을 url이라는 변수에 저장
                                    res = {"rv": True, "url": url} # 해당 값을 res 사전에 담아서 전달
                                    return JsonResponse(res)
                                else:
                                    url = '/'                 # 만약 next 값이 없다면 루트페이지('/')로 이동
                                    res = {"rv": True, "url": url}
                                    return JsonResponse(res)`}
								</p>
							</div>
							<img className="tabimg" src="/images/1-3.png" />
						</div>
					</TabPane>
				)}
				{tab === 2 && (
					<TabPane>
						<h3>Django 비로그인 시 페이지 이동</h3>
						<div>
							<h4>로그인을 해야만 접근 가능한 페이지를 눌렀을 때</h4>
							<p>
								웹 개발을 진행하다가 보면 보안이 필요한 페이지를 제작하기도 한다.
								<br />
								다른 사이트들로 예를 들면 메일을 확인할 수 있는 페이지는 사용자가
								로그인을 해야만 접속이 가능하다.
								<br />
								그럴 때 로그인이 되어있지 않은 상태로 해당 페이지에 접근을 하려면
								로그인 페이지로 연결해야 한다.
							</p>
						</div>
						<hr />
						<div>
							<img className="tabimg" src="/images/2-1.png" />
							<p>
								위의 사진은 로그인이 필요한 ‘검색 및 분석 도구’ 페이지에 접속할 때
								생기는 페이지이다.
								<br />
								로그인이 현재 되어있지 않기 때문에 위와 같은 userlogin페이지로
								연결이 된다.
								<br />
								<br />
								Django 템플릿에서는 아주 간단하게 위의 기능을 추가할 수 있다.
								<br />
								views.py에서 내가 원하는 페이지로 렌더링 해주는 함수 위에
								@login_required(login_url=’원하는url’) 과 같이 적어주면 된다.
								<br />
								<br />
								userlogin 이라는 url에 로그인 페이지를 만들었기 때문에 ‘원하는url’
								자리에 ‘/userlogin/’ 을 기입했다.
							</p>
							<img className="tabimg" src="/images/2-2.png" />
						</div>
					</TabPane>
				)}
				{tab === 3 && (
					<TabPane>
						<h3>Git을 사용할 때 실수</h3>
						<div>
							<h4>git add *를 했을 때 대처</h4>
							<p>
								형상관리를 위해 Git을 많이 사용한다.
								<br />
								하지만 별도의 툴을 사용하지 않고 CLI를 이용하여 git을 사용할 때가
								있다. <br />
								그땐 특정 파일만 따로 add하는 것도 귀찮고 번거로워서 “git add *”를
								입력하여 했었다.
								<br />
								혼자서만 같은 환경에서 작업을 한다면 문제가 되지 않지만
								<br />
								대부분의 프로젝트는 팀 단위로 진행되며 아니라 개개인마다 환경이
								다르기 때문에
								<br />
								세부설정 파일을 포함한 모든 파일을 추가한다면 충돌 에러가 쉽게
								발생한다. <br />
								<br />
								실제로 개인 PC에서 작업을 하다가 아무생각 없이 모든 파일을 add 했고
								다른 환경에서 pull을 할때 문제가 발생했다.
							</p>
						</div>
						<hr />
						<div>
							<ul>
								<li>1번 PC에서 작업 후 최신 버전으로 push</li>
								<li>
									2번 PC에서 pull 하기 전 특정 파일(예시로 a.txt라고 하겠다.)을
									임의 수정
								</li>
								<li>2번 PC로 pull 하면 a.txt 파일에 충돌 발생</li>
							</ul>
						</div>
						<hr />
						<div>
							<p>위의 상황을 해결하기 여러 방법중 간단하게 해결한 방법이 있다.</p>
							<ul>
								<li>임의로 수정된 a.txt 파일을 원상태로 롤백 후 pull 수행</li>
								<li>
									a.txt파일을 삭제한 후 pull (수정된 항목이 많을 때 유용하게
									사용했다.)
								</li>
							</ul>
						</div>
					</TabPane>
				)}
				{tab === 4 && (
					<TabPane>
						<h3>Ajax를 이용한 통신</h3>
						<div>
							<h4>웹 테이블에서 서버로 데이터 비동기 방식으로 전송</h4>
							<img className="tabimg" src="/images/4-1.png" />
							<p>
								위의 사진의 표는 DB에 등록된 데이터를 파싱하여 출력한 데이터이다.
								<br />
								Details 단추(”clickBtn”이라는 클래스 값 추가)를 누르게 되면 데이터의
								이름값을 서버로 전송해준다.
								<br />
								이때 Ajax를 사용하여 새로 페이지를 로드할 필요 없이 다음 동작을
								하도록 하였다.
							</p>
						</div>
						<hr />
						<div>
							<div className="codecss">
								<p>
									{`$(".clickBtn").click(function(){         // Link 버튼 눌렀을때 (현재 <td>)
                                    var tr = $(this).parent();         // <td>의 부모태그인 <tr>태그
                                    var td = tr.children().eq(0).text(); // 부모 첫째 자식의(eq(0) 으로 인덱싱) 값 추출(No. 컬럼의 값)
                                    var td_dic = new Object();         // 사전형태의 값 선언
                                    td_dic.tbl_nm = td;                   // 해당 사전의 key를 tbl_nm으로 그에 맞는 value를 td로 선언
                                    console.log(td_dic)                   // 사전에 잘 들어갔는지 확인  
                                    $.ajax({
                                        url : '/result2/',               // 서버로 전달할 데이터가 가는 url 주소
                                        type : 'GET',  //view로 전달하는 형태
                                        data : td_dic,   //data가 views.py로 넘어감 그 중 result2 함수로 넘어감
                                        success: function(data){ // data 입력 파라미터는 서버에서 처리 후 가공된 값
                                            console.log("success");
                                        },
                                        error: function(){
                                            console.log("error");
                                        }
                                    });
                                });`}
								</p>
							</div>
							<hr />
							<div>
								<img src="/images/4-2.png" />
								<p>
									Data 전송이 잘 이루어졌고 서버에서도 작업 후 통신이 잘 되었기
									때문에 success 부분의 함수 실행
								</p>
							</div>
						</div>
					</TabPane>
				)}
			</div>
		</div>
	);
}

export default Port;
