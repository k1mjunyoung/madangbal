var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(request.url, true).query;
    var title = queryData.id;
    console.log(queryData.id);
    if(_url == '/'){
        title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    var template = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>온라인 명함</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
        <link href="user.css" rel="stylesheet">
    </head>
    <body>
      <div id="main" class="container text-light justify-content-center">
        <div style="height: 100vh;">
            <div class="text-center h-100 pt-5 pb-5">
                <div class="margin-st2">
                    <img src="images/user2-img.PNG" alt="user2-img.PNG" class="padding-st1" style="width: 300px; height: auto;">
                    <div class="border border-1 rounded-4 bg-secondary margin-st2 p-3" style="--bs-bg-opacity: .2;">
                        <h3 class="user2-h3"><strong>김승우</strong></h3>
                        <div class="lead">순천향대학교 총장</div>
                    </div>
                    <p class="margin-st2 mt-3 text-align-st1">우리 대학의 건학이념인 ‘인간사랑’을 마음에 새기며 여러분 모두와 한마음 한뜻으로 새로운 도전을 시작하려 합니다.
                        지속가능성을 확보한 순천향의 ‘좋은 대학’ 이미지를 기반으로 새로운 대학 혁신을 추구해 탁월한 성과를 만들고,
                        사회 전반에 지속적인 영향력(Impact)을 발휘할 수 있는 ‘위대한 대학’을 향해 나아가겠습니다.
                    </p>
                </div>
                <div class="accordion accordion-flush margin-st2 text-start" id="accordionFlushExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          학력
                        </button>
                      </h2>
                      <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <ul>
                                <li>(1987) 연세대학교 전자공학 학사</li>
                                <li>(1989) 연세대학교 대학원 제어공학 석사</li>
                                <li>(1994) 연세대학교 대학원 로봇공학 박사</li>
                                <li>(1997-1998) 미국 Case Western Reserve Univ. 박사 후 과정</li>
                            </ul>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          경력
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <ul>
                                <li>(1989~1990) 삼성 종합기술원 선임연구원</li>
                                <li>(2003) 일본 나고야대학 로봇연구소 초빙교수</li>
                                <li>(2007~2008) 캐나다 Univ. of British Columbia 초빙교수</li>
                            </ul>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          언론보도
                        </button>
                      </h2>
                      <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <ul>
                                <li>(2021.11.01) [디트NEWS24]   김승우 순천향대 총장 “학생 안전 최우선”</li>
                                <li>(2021.03.01) [중앙일보]   순천향대 9대 총장에 김승우 교수 취임</li>
                                <li>(2021.10.25) [한국대학신문]   '뉴노멀 블렌디드 교육시스템'으로 혁신 선도할 인재 양성</li>
                                <li>(2021.04.15) [동아일보]   '첨단강의실 구축'.... 혁신인재양성에 앞장설 것</li>
                                <li>(2021.04.08.) [동아일보]   "코로나 이전의 학습방식 고집하는 대학은 생존할 수 없다.</li>
                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                <div class="border border-1 rounded-4 bg-secondary mt-3 mb-3" style="--bs-bg-opacity: .2;">
                    <address>
                      <div class="p-3">
                        <ol>
                          <li><strong>대학본부 총장실</strong> <i class="bi bi-geo-alt"></i><br>충남 아산시 순천향로 22</li>
                          <li><i class="bi bi-telephone"></i> <strong>Tel</strong> 041-***-****</li>
                          <li><i class="bi bi-printer"></i> <strong>Fax</strong> 041-***-****</li>
                          <li><i class="bi bi-phone"></i> <strong>Mobile</strong> 010-***-****</li>
                          <li><i class="bi bi-envelope"></i> <strong>E-mail</strong> <a href="mailto:***@sch.co.kr">sch@sch.co.kr</a></li>
                        </ol>
                      </div>
                    </address>
                </div>
                <div class="ratio ratio-16x9">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/DhXO4d6m6f4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                <div style="padding-top: 20px;">
                    <small>COPYRIGHT(C)2022 Infect lib. ALL RIGHTS RESERVED.</small>
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js" integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossorigin="anonymous"></script>
      </div>
    </body>
    </html>
    `;
    response.end(template);
 
});
app.listen(3030);