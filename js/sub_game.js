$(function(){
        class GameInfo{
          constructor(){
            this.undeOj = { 
                // bg_img: "./img/sub_game_unde2.jpg",
                title: "UNDECEMBER",
                ex1 : "변하지 않는 RPG 본연의 가치를 추구하며 만들어낸 재미와 감동", 
                ex2: "열세 번째 존재, 악의 신 서펜스<br>모든 것을 무로 돌리기 위한 열두 존재 희생 후<br>다시 되찾은 불안정한 평화",
                ex3: "시간이 되어 불안정한 평화 속 어둠이 피어나다.",
                video: "./img/viedeo/unde_video.mp4",
                video_youtube: "https://youtu.be/vL3X5kHbPAQ",
                info_developer : "Pixelcruise",
                info_platform : "모바일/PC",
                info_genre : "PVP 타워 디펜스",
                info_release : "2021.03.25",
                link : "https://ud-kr.floor.line.games/"
            };
            this.smasOj = { 
                // bg_img: "./img/sub_game_sma.png",
                title: "스매시 레전드",
                ex1 : "예측불가! 상상초월! 실시간 멀티 대전 액션, 스매시 레전드", 
                ex2: "당신의 3분을 뺏겠습니다!<br>스매시 레전드에서 펼쳐지는 긴장감 터지는 3분 실시간 난투!<br>개성 넘치는 레전드와 함께 전 세계 플레이어를 날려버리세요!<br>",
                ex3: "SMASH는 계속되어야 한다!",
                video: "./img/viedeo/sams_video.mp4",
                video_youtube: "https://youtu.be/IfUvDBVATcg",
                info_developer : "Pixelcruise",
                info_platform : "모바일/PC",
                info_genre : "RPG",
                info_release : "2022.02(예정)",
                link : "https://sl-kr.floor.line.games/"
            };
            this.guadOj = { 
                // bg_img: "./img/sub_game_gadi.png",
                title: "가디언크로니클",
                ex1 : "가디언을 이용하여 당신의 전략을 보여주세요!", 
                ex2: "마스터와 가디언은 다양한 스킬을 가지고 있어<br>조합에 따라 나만의 전술과 전략을 구사할 수 있습니다.<br>",
                ex3: "개성있는 가디언들을 활용하여 상대방보다 먼저 적을 무찌르고 승리를 거머쥐세요.",
                video: "./img/viedeo/gadi_video.mp4",
                video_youtube: "https://youtu.be/wsTjNzM_IOE",
                info_developer : "Pixelcruise",
                info_platform : "모바일/PC",
                info_genre : "PVP 타워 디펜스",
                info_release : "2021.03.25",
                link : "https://www.guardian-chronicle.com/kr"
            };
            this.buriOj = { 
                // bg_img: "./img/sub_game_buri.png",
                title: "베리드 스타즈",
                ex1 : "본격 서바이벌 x 커뮤니케이션 어드벤처 게임 '베리드 스타즈'", 
                ex2: "서바이벌 오디션 도중 벌어진 갑작스러운 붕괴사고.<br>외부와 단절된 장소에서의 오해와 갈등 속에 상상치도 못한 사건 사고가 발생한다.<br>당신은 구조대가 올 때까지 살아남아 사건의 진상을 밝힐 수 있을 것인가.<br>",
                ex3: "'검은방', '회색도시'를 만든 진승호PD의 최신작!",
                video: "./img/viedeo/buri_video.mp4",
                video_youtube: "https://youtu.be/IC19J43_m74",
                info_developer : "Pixelcruise",
                info_platform : "모바일/PC",
                info_genre : "커뮤니케이션 x 서바이벌",
                info_release : "2020.07.30",
                link : "https://buried-stars.com/"
            };
          }
          gameinfoForm(title, ex1, ex2, ex3) {
              let game_info_container_form = `
                    <h4>${title}</h4>
                    <div>
                        <p class="p_title">
                            ${ex1}
                        </p>
                        <p>
                            ${ex2}
                        </p>
                        <p class="last_p">
                            ${ex3}
                        </p>
                    </div>
                `;
                return game_info_container_form;
            }
            gameVideoForm(src, youtube_url){
                let video_form = `
                    <video muted="muted" preload="none" loop="loop" data-resize="true" autoplay="" onclick="window.open('${youtube_url}')" >
                        <source src="${src}" type="video/mp4">
                    </video>
                `
                return video_form;
            }
            gameinfoUlForm(info_d, info_p, info_g, info_r){
                let game_info_ul_form = `
                    <li>개발사</li>
                    <li>${info_d}</li>
                    <li>플랫폼</li>
                    <li>${info_p}</li>
                    <li>장르</li>
                    <li>${info_g}</li>
                    <li>출시일</li>
                    <li>${info_r}</li>
                `;
                return game_info_ul_form;
            }

            gameProcess(objName){
                switch(objName){
                    case 'unde':
                        $('.game_info_container').html( this.gameinfoForm(this.undeOj.title, this.undeOj.ex1,this.undeOj.ex2, this.undeOj.ex3) );
                        $('.game_info > ul').html( this.gameinfoUlForm(this.undeOj.info_developer, this.undeOj.info_platform ,this.undeOj.info_genre, this.undeOj.info_release));
                        $('.game_video_wrap').html( this.gameVideoForm(this.undeOj.video, this.undeOj.video_youtube));

                        $('.game_bgimg').addClass('unde');
                        $('.game_info > span a').attr('href',this.undeOj.link);
                    break;
                    case 'smas':
                        $('.game_info_container').html( this.gameinfoForm(this.smasOj.title, this.smasOj.ex1,this.smasOj.ex2, this.smasOj.ex3) );
                        $('.game_info > ul').html( this.gameinfoUlForm(this.smasOj.info_developer, this.smasOj.info_platform ,this.smasOj.info_genre, this.smasOj.info_release));
                        $('.game_video_wrap').html( this.gameVideoForm(this.smasOj.video, this.smasOj.video_youtube));

                        $('.game_bgimg').addClass('smas');
                        $('game_info > span a').attr('href',this.smasOj.link);
                    break;
                    case 'guad':
                        $('.game_info_container').html( this.gameinfoForm(this.guadOj.title, this.guadOj.ex1,this.guadOj.ex2, this.guadOj.ex3) );
                        $('.game_info > ul').html( this.gameinfoUlForm(this.guadOj.info_developer, this.guadOj.info_platform ,this.guadOj.info_genre, this.guadOj.info_release));
                        $('.game_video_wrap').html( this.gameVideoForm(this.guadOj.video, this.guadOj.video_youtube));

                        $('.game_bgimg').addClass('guad');
                        $('game_info > span a').attr('href', this.guadOj.link);
                    break;
                    case 'buri':
                        $('.game_info_container').html( this.gameinfoForm(this.buriOj.title, this.buriOj.ex1,this.buriOj.ex2, this.buriOj.ex3) );
                        $('.game_info > ul').html( this.gameinfoUlForm(this.buriOj.info_developer, this.buriOj.info_platform ,this.buriOj.info_genre, this.buriOj.info_release));
                        $('.game_video_wrap').html( this.gameVideoForm(this.buriOj.video, this.buriOj.video_youtube));

                        $('.game_bgimg').addClass('buri');
                        $('game_info > span a').attr('href',this.buriOj.link);
                    break;
                }
          }
        }
        // let objName = String(location.search).substring(6) + "Oj";
        // console.log(objName);
        switch(String(location.search) ){
            case '?game=unde' :
                const formUnde = new GameInfo();
                formUnde.gameProcess("unde");
            break;
            case '?game=smas':
                const formSmas = new GameInfo();
                formSmas.gameProcess("smas");
            break;
            case '?game=guad' :
                const formGuad = new GameInfo();
                formGuad.gameProcess("guad");
            break;
            case '?game=buri' :
                const formBuri = new GameInfo();
                formBuri.gameProcess("buri");
            break;
        }
});