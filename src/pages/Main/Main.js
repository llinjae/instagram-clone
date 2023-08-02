import React from "react";
import "./Main.css";
import logo from "../../instagram.png";
import compass from "../../compass.png";
import heart from "../../heart.png";
import profile from "../../user.png";
import searchIcon from "../../search.png";

const Main = () => {
  return (
    <div className="main">
      <nav className="header">
        <div className="headerContent">
          <div className="logoBox">
            <div className="instagramLogo">
              <img src={logo} alt="로고" />
            </div>
            <div className="divider"></div>
            <div className="title">westagram</div>
          </div>
          <div className="searchForm">
            <input className="searchInput" type="text" />
            <div className="searchContent">
              <img src={searchIcon} alt="검색" />
              <p>검색</p>
            </div>
          </div>
          <div className="userMenu">
            <img src={compass} alt="나침반" />
            <img src={heart} alt="하트" />
            <img src={profile} alt="프로필" />
          </div>
        </div>
      </nav>

      <main>
        <div className="mainContentBox">
          <div className="feeds">
            <article>
              <div className="writer">
                <p>cannon_mj</p>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3018/3018442.png"
                  alt=""
                />
              </div>
              <div className="feedImageBox">
                <img
                  src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  alt=""
                />
              </div>

              <div className="feedContent">
                <div className="feedTextBox">
                  <div className="feedContentImageBox">
                    <div className="img-left">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/589/589671.png"
                        alt=""
                      />
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/3580/3580382.png"
                        alt=""
                      />
                    </div>
                    <div className="img-right">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/25/25667.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div>aineworld님 외 10명이 좋아합니다</div>
                  <div>
                    cannon_mj 위워크에서 진행한 베이킹 클래스..<i>더 보기</i>
                    <br />
                    neceosecius 거봐 좋았잖아~~~~
                    <br />
                    42분 전
                  </div>
                </div>
              </div>

              <div className="comment">
                <p>댓글 달기...</p>
                <button>게시</button>
              </div>
            </article>
          </div>

          <div className="main-right">
            <div className="myProfile"></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
