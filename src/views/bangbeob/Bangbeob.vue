<script setup>
import Tab from "../../components/Tab.vue";
</script>

<template>
  <!-- 전체 -->
  <div class="bb_wrap">
    <!-- 전체 이너 -->
    <div class="bb_inner">
      <!-- 이용절차 -->
      <div class="bb_container1">
        <!-- 타이틀 1-->
        <div class="bb_title1">
          <!-- 제목 스타일 -->
          <div class="bb_titleLine"></div>
          <!-- 제목 -->
          <div class="title_txt1">
            <h1>짐보관 이용절차</h1>
          </div>
        </div>
        <!-- 아이콘설명 -->
        <div class="bb_orderProcess">
          <!-- 아이콘1 -->
          <div class="bb_processIcon1">
            <!-- 아이콘1_이미지 -->
            <div class="bb_processIcon1_img">
              <img src="/public/images/yr/page2/2p_icon1.png" alt="icon1" />
            </div>
            <!-- 아이콘1_글 -->
            <span class="bb_span">무인보관함 방문</span>
          </div>
          <!-- 화살표 -->
          <div class="arrow">
            <img src="/public/images/yr/page1/arrow.png" alt="arrow1" />
          </div>
          <!-- 아이콘2 -->
          <div class="bb_processIcon1">
            <!-- 아이콘2_이미지 -->
            <div class="bb_processIcon1_img">
              <img src="/public/images/yr/page2/2p_icon2.png" alt="icon2" />
            </div>
            <!-- 아이콘2_글 -->
            <span class="bb_span">보관함 선택 </span>
          </div>
          <!-- 화살표 -->
          <div class="arrow">
            <img src="/public/images/yr/page1/arrow.png" alt="arrow1" />
          </div>
          <!-- 아이콘3 -->
          <div class="bb_processIcon1">
            <!-- 아이콘3_이미지 -->
            <div class="bb_processIcon1_img">
              <img src="/public/images/yr/page2/2p_icon3.png" alt="icon3" />
            </div>
            <!-- 아이콘3_글 -->
            <span class="bb_span">비밀번호 설정</span>
          </div>
          <!-- 화살표 -->
          <div class="arrow">
            <img src="/public/images/yr/page1/arrow.png" alt="arrow1" />
          </div>
          <!-- 아이콘4 -->
          <div class="bb_processIcon1">
            <!-- 아이콘4_이미지 -->
            <div class="bb_processIcon1_img">
              <img src="/public/images/yr/page2/2p_icon4.png" alt="icon4" />
            </div>
            <!-- 아이콘4_글 -->
            <span class="bb_span">물품보관</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 짐보관 이용안내 -->
    <div class="bb_container2">
      <div class="bb_inner">
        <!-- 타이틀 2 -->
        <div class="bb_title2">
          <!-- 제목 스타일 -->
          <!-- 제목 -->
          <div class="bb_title_txt2">
            <h1>짐보관 이용안내</h1>
            <p>사이즈별 가격책정</p>
          </div>
        </div>
        <!-- 이용안내 전체 -->
        <div class="bb_luggageNotice">
          <!-- 이용안내_수화물규격 -->
          <div class="bb_luggageImgNotice">
            <!-- 수화물 S -->
            <div class="bb_luggage">
              <!-- 큰글씨 -->
              <div class="bb_luggageTitleM">
                <p>소형</p>
              </div>
              <!-- 소제목 -->
              <div class="bb_luggageTitle">
                <p>기내용 캐리어, 소형 배낭등</p>
              </div>
              <!-- 그림 -->
              <div class="bb_luggageimg">
                <img
                  src="/public/images/yr/page2/2p_icon5.png"
                  class="bb_smaller"
                  alt="sSize" />
              </div>
              <!-- 디테일 -->
              <div class="bb_luggagedetail">
                <p>좌우 45cm X 깊이 56cm X 높이 30cm</p>
              </div>
            </div>
            <!-- 수화물 M -->
            <div class="bb_luggage">
              <!-- 큰글씨 -->
              <div class="bb_luggageTitleM">
                <p>중형</p>
              </div>
              <!-- 소제목 -->
              <div class="bb_luggageTitle">
                <p>화물용 캐리어, 등산가방 등</p>
              </div>
              <!-- 그림 -->
              <div class="bb_luggageimg">
                <img
                  src="/public/images/yr/page2/2p_icon6.png"
                  alt="sSize"
                  class="bb_smaller" />
              </div>
              <!-- 디테일 -->
              <div class="bb_luggagedetail">
                <p>좌우 45cm X 깊이 56cm X 높이 45cm</p>
              </div>
            </div>
            <!-- 수화물 L -->
            <div class="bb_luggage">
              <!-- 큰글씨 -->
              <div class="bb_luggageTitleM">
                <p>대형</p>
              </div>
              <!-- 소제목 -->
              <div class="bb_luggageTitle">
                <p>대형 캐리어, 골프백, 대형배낭 등</p>
              </div>
              <!-- 그림 -->
              <div class="bb_luggageimg">
                <img
                  src="/public/images/yr/page2/2p_icon7.png"
                  alt="sSize"
                  class="bb_smaller" />
              </div>
              <!-- 디테일 -->
              <div class="bb_luggagedetail">
                <p>좌우 45cm X 깊이 56cm X 높이 60cm</p>
              </div>
            </div>
            <!-- 수화물 XL -->
            <div class="bb_luggage">
              <!-- 큰글씨 -->
              <div class="bb_luggageTitleM">
                <p>특대형</p>
              </div>
              <!-- 소제목 -->
              <div class="bb_luggageTitle">
                <p>기타 물품 및 표시 외 사이즈</p>
              </div>
              <!-- 그림 -->
              <div class="bb_luggageimg">
                <img
                  src="/public/images/yr/page2/2p_icon8.png"
                  alt="sSize"
                  class="bb_smaller" />
              </div>
              <!-- 디테일 -->
              <div class="bb_luggagedetail">
                <p>좌우 45cm X 깊이 56cm X 높이 90cm</p>
              </div>
            </div>
          </div>
          <!-- 이용안내_요금안내 -->
          <div class="bb_luggagepriceInfo">
            <!-- 요금안내_위 -->
            <div class="bb_priceInfoTop">
              <!-- 운영시간 -->
              <div class="bb_priceInfoTime">
                <p>운영시간 05시 - 00시</p>
              </div>
              <!-- 세부사항 -->
              <div class="bb_priceInfoDetail">
                <ul>
                  <li>*역마다 차이는 있을 수 있음</li>
                  <li>*기차역의 경우 11시마감</li>
                </ul>
              </div>
            </div>
            <!-- 요금안내_아래 -->
            <div class="bb_priceInfoBottom">
              <!-- 파란배경글씨 -->
              <div class="bb_priceInfoMenu">
                <ul>
                  <li class="bb_leftTum">구분</li>
                  <li>요금(시작 - 4시간이내)</li>
                  <li class="bb_rightTum0">요금(4시간이후 12시간마다)</li>
                </ul>
              </div>
              <!-- 세부글씨 -->
              <div class="bb_priceInfoMenuDetail">
                <ul>
                  <li class="bb_leftTum">소형</li>
                  <li class="bb_middleTum">2,000</li>
                  <li class="bb_rightTum">2,000</li>
                </ul>
                <ul>
                  <li class="bb_leftTum">중형</li>
                  <li class="bb_middleTum">3,000</li>
                  <li class="bb_rightTum">3,000</li>
                </ul>
                <ul>
                  <li class="bb_leftTum">대형</li>
                  <li class="bb_middleTum">4,000</li>
                  <li class="bb_rightTum">4,000</li>
                </ul>
                <ul>
                  <li class="bb_leftTumMore1">특대형</li>
                  <li class="bb_middleTum bb_middleTumMore">5,000</li>
                  <li class="bb_rightTum">5,000</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 무인보관함 위치안내 -->
    <div class="bb_container3">
      <div class="bb_inner">
        <!-- 타이틀 3 -->
        <div class="bb_title3">
          <!-- 제목 스타일 -->
          <!-- <div class="bb_titleLine"></div> -->
          <!-- 제목 -->
          <div class="bb_title_txt3">
            <h1>짐보관 이용안내</h1>
          </div>
        </div>
        <!-- 탭버튼 지하철, 기차, 공항 -->
        <Tab />
      </div>
    </div>
    <div class="bb_container4">
      <div class="bb_container3">
        <div class="bb_inner">
          <!-- 공지 왼쪽 -->
          <div class="bb_contain3Left">
            <!-- 용달씨 그림 -->
            <div class="bb_yongdal">
              <img src="/public/images/yr/page2/2p_character.png" alt="" />
            </div>
            <p>확인해주세요!</p>
          </div>

          <!-- 공지 오른쪽 -->
          <div class="bb_contain3Right">
            <!-- 유의사항_위 -->
            <div class="bb_noteTop">
              <ul class="bb_notice1">
                <li>
                  • 보관 후 7일이 지난 물품은 관리자의 요청에 따라 이동될 수
                  있습니다.
                </li>
                <li>
                  • 보관함 이용 시 문이 잘 닫혔는지 꼭 확인해 주십시오. 문을
                  닫지 않아 발생하는 사고에 대한 책임을 지지 않습니다.
                </li>
                <li>
                  • 보관함보다 큰 물품, 귀중훔, 위험물, 동식물 등 부패할 수 있는
                  음식물은 보관할 수 없습니다.
                </li>
                <li>
                  • 천재지변, 전쟁, 사용자 과실, 기타 불가항력적인 이유로
                  발생하는 손해에 대해서는 책임을 지지 않습니다.
                  <span class="indent"
                    >단, 보관함 자체에 결함으로 발생한 과실에 대해서는 검증 후
                    보상해 드립니다.</span
                  >
                </li>
                <li>
                  • 유사시 보관함 관리를 위해 보관함을 임시로 열어 점검할 수
                  있습니다.
                </li>
                <li>
                  • 보관함 이용중 발생한 문제는 고객센터 또는 현장 관리자에게
                  신고해 주십시오.
                </li>
              </ul>
              <!-- 이용약관 상세보기 버튼 -->
              <div class="bb_noticeButton">
                <button>이용약관 상세보기</button>
              </div>
            </div>
            <!-- 유의사항_아래 -->
            <div class="bb_noteDown1">
              <h2 class="bb_noticeSubtitle">보관금지 물품</h2>
              <ul class="bb_notice2">
                <li>
                  <p class="bb_stron1">현금보관금지 :</p>
                  공공기관에서는 보관함에 현금을 넣어두라고 요구하지 않습니다.
                </li>
                <li>
                  <p class="bb_stron1">음식물보관금지 :</p>
                  음식물 보관 시 부패나 악취로 인해 사전에 경고 없이 폐기처분될
                  수 있습니다.
                </li>
              </ul>
            </div>
            <div class="bb_noteDown2" style="list-style: none; padding-left: 0">
              <h2 class="bb_noticeSubtitle">보관함 이용 협조 안내</h2>
              <ul class="bb_notice2">
                <li>
                  • 다른 사용자를 위해 보관된 물품은 꼭 찾아가 주세요.
                  <p class="bb_Strong2">30일 이후로는 폐기 예정</p>
                  입니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 유의사항2 -->
    <div class="bb_container5">
      <div class="bb_innerBottom">
        <div class="bb_title3">
          <!-- 제목 스타일 -->
          <!-- <div class="bb_titleLine"></div> -->
          <!-- 제목 -->
          <div class="bb_title_txt3">
            <h1>가방분실 / 파손시 유의사항</h1>
          </div>
        </div>
      </div>
      <div class="bb_container4Bg">
        <div class="bb_inner">
          <!-- 타이틀3 -->

          <!-- 유의사항 긴글 -->
          <div class="bb_notice">
            <h3>기본 보상 제공</h3>
            <p>
              서비스 이용 중 가방이 분실되거나 심각한 손상이 발생한 경우, 최대
              30만 원까지 보상됩니다.
            </p>
            <h3>추가 보장 옵션 (선택 사항)</h3>
            <p>
              고객이 추가 보험 옵션을 선택할 경우, 기본 보상 외 추가 금액 보장
              가능 (상세 조건은 보험 상품에 따라 다름).
            </p>
            <h3>보험 적용 제외 사항</h3>
            <ul>
              <li>• 고객의 부주의로 인해 발생한 분실 또는 손상</li>
              <li>
                • 가방 내부 물품의 파손, 분실 (가방 자체가 아닌 내용물 손상은
                보상 불가)
              </li>
            </ul>

            <h3 class="_bbTum">안전한 운송 시스템</h3>
            <p>
              모든 가방은 철저하게 관리되며, 실시간 추적을 통해 더욱 안전하게
              보관 및 배송됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "/src/assets/_Variables.scss" as *;
.bb_wrap {
  position: relative;
  padding-top: 100px;
  .bb_inner {
    position: relative;
    max-width: 1300px;
    margin: 0 auto;
    // 컨테이너1
    .bb_container1 {
      position: relative;
      width: 100%;
      // background-color: bisque;
      text-align: center;
      padding-bottom: 10%;
      // 타이틀
      .bb_title1 {
        display: flex;
        gap: 10px;
        line-height: 40px;
        flex-wrap: wrap; /* 넘치면 자동 줄바꿈 */
        align-items: center; /* 세로 중앙 정렬 */
        justify-content: center; /* 가로 중앙 정렬 */
        padding-bottom: 10px;
        .bb_titleLine {
          width: 3px;
          height: 35px;
          background-color: $main-color;
        }
        .title_txt1 h1 {
          font-size: 30px;
        }
      }
      // 이용절차
      .bb_orderProcess {
        position: relative;
        // background-color: aqua;
        width: 100%;
        display: flex;
        padding-right: 4%;
        padding-left: 4%;
        justify-content: space-between;

        .bb_processIcon1 {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          position: relative;

          flex-direction: column;

          .bb_processIcon1_img {
            display: flex; // ★ 추가 필수
            justify-content: center; // 수평 가운데
            align-items: center; // 수직 가운데
            flex-direction: column;
            width: 70%;
            height: 70%; // 필요 시 명확히 지정
            text-align: center;

            img {
              width: 100%;
              height: auto; // 비율 유지
            }
          }
          span {
            font-size: 20px;
          }
        }

        .arrow {
          position: relative;
          padding: 90px 0 120px 0;
        }

        .bb_kakao {
          display: flex;
          background-color: #f4f4f4;
          border-radius: 80px;
          width: 45%;
          position: relative;
          margin-top: 20px;
          cursor: pointer;
          .bb_kakaoIcon {
            padding: 3px;

            img {
              border-radius: 50px;
              width: 30px;
              height: 30px;
            }
          }
        }
      }
    }
  }
  // 짐보관 이용안내
  .bb_container2 {
    background-color: $background-maincolor;
    width: 100%;
    padding-bottom: 6%;
    padding-top: 2%;
    .bb_title2 {
      padding-top: 6%;
      display: flex;
      gap: 10px;
      line-height: 40px;
      padding-bottom: 3%;
      .bb_titleLine {
        width: 3px;
        height: 35px;
        background-color: $main-color;
      }
      .bb_title_txt2 h1 {
        font-size: 30px;
        font-weight: bold;
      }
      .bb_title_txt2 p {
        font-size: 20px;
      }
    }
    // 이용안내_수화물규격
    .bb_luggageNotice {
      .bb_luggageImgNotice {
        display: flex;
        flex-wrap: wrap; /* 요소가 넘치면 자동 줄바꿈 */

        gap: 2%;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 3%;

        .bb_luggage {
          padding: 1.5%;
          width: calc((100% - 6%) / 4);

          background-color: #fff;
          border-radius: 20px;
          border: $main-color 1px solid;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .bb_luggageTitleM {
            font-size: 25px;
            font-weight: bold;
            padding-bottom: 3%;
          }
          .bb_luggageTitle {
            font-size: 17px;
            font-weight: bold;
            color: #264884;
          }
          .bb_luggageimg {
            width: 50%;
            height: 50%;
            .bb_smaller {
              padding: 40%;
              margin-top: 10%;
              margin-bottom: 10%;
            }
            img {
              width: 100%;
              height: 100%;
              padding: 5%;
            }
            .bb_smaller {
              padding: 10%;
            }
          }
          .bb_luggagedetail {
            font-size: 14px;
            color: #8f8f8f;
            font-weight: bold;
          }
        }
      }
      .bb_luggagepriceInfo {
        width: 100%;
        background-color: #fff;
        border-radius: 20px;
        // border: $main-color solid 1px;
        padding: 2%;
        .bb_priceInfoTop {
          .bb_priceInfoTime {
            width: 18%;
            padding: 6px 10px 6px 10px;
            background-color: #d7d7d7;
            border-radius: 20px;
            text-align: center;
            p {
              font-size: 22px;
            }
          }
          .bb_priceInfoDetail {
            ul {
              padding-top: 12px;
              padding-bottom: 18px;
              li {
                font-size: 15px;
                padding-top: 6px;
                padding-left: 10px;
              }
            }
          }
        }
        .bb_priceInfoBottom {
          .bb_priceInfoMenu {
            background-color: $main-color;
            width: 100%;
            padding: 6px;
            border-radius: 20px;
            ul {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              .bb_leftTum {
                padding-left: 8%;
              }
              .bb_rightTum0 {
                padding-right: 8%;
              }
              li {
                font-size: 22px;
                color: #fff;
              }
            }
          }
          .bb_priceInfoMenuDetail {
            width: 100%;
            padding: 6px;
            border-radius: 20px;
            padding-top: 1%;
            padding-bottom: 2%;
            ul {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              padding-top: 2.5%;
              // padding-right: 8%;
              .bb_leftTum {
                padding-left: 8%;
              }

              .bb_leftTumMore1 {
                padding-left: 7.2%;
              }
              .bb_leftTumMore2 {
                padding-right: 8.8%;
              }

              .bb_middleTum {
                padding-right: 7%;
              }
              .bb_middleTumMore {
                padding-right: 7.8%;
              }
              .bb_rightTum {
                padding-right: 15%;
              }
              li {
                font-size: 22px;
              }
            }
          }
        }
      }
    }
  }
  // 무인보관함 위치안내
  .bb_container3 {
    // position: relative;
    // width: 100%;
    // height: 110vh;
    padding: 6% 0 1% 0;
    .bb_inner {
      // width: 100%;
      // height: 100%;
      // 타이틀
      .bb_title3 {
        padding-bottom: 3%;
        display: flex;
        gap: 10px;
        line-height: 40px;
        font-weight: bold;
        .bb_titleLine {
          width: 3px;
          height: 35px;
          background-color: $main-color;
        }
        .bb_title_txt3 h1 {
          font-size: 30px;
        }
      }
    }
  }
  .bb_container4 {
    padding-bottom: 70px;
    padding-left: 15%;
    position: relative;
    width: 100%;
    background-color: #fff;
    .bb_inner {
      position: relative;
      max-width: 1300px;
      margin: 0 auto;
      display: flex;
      // 유의사항 왼쪽
      .bb_contain3Left {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 70px;
        .bb_yongdal {
          width: 80%;
          img {
            width: 100%;
          }
        }
        p {
          font-size: 20px;
          font-weight: bold;
        }
      }
      // 유의사항 오른쪽
      .bb_contain3Right {
        .bb_noteTop {
          .bb_notice1 {
            .indent {
              display: inline-block;
              padding-left: 1em; /* 또는 margin-left: 1em; */
            }
            li {
              line-height: 22px;
              font-size: 15px;
            }
          }
        }
        .bb_noteDown1 {
          width: 70%;
          margin-top: 1%;
          background-color: #ffcccc;
          border-radius: 10px;
          border: #f60000 1px solid;
          padding: 2% 2% 2% 2%;
          .bb_noticeSubtitle {
            font-size: 17px;
            font-weight: bold;
            padding-bottom: 5px;
          }

          .bb_notice2 {
            li {
              line-height: 22px;
              font-size: 15px;
              .bb_stron1 {
                display: inline;
                font-weight: bold;
              }
            }
          }
        }
        .bb_noticeButton button {
          background-color: #c0c0c0;
          border: none;
          border-radius: 50px;
          padding: 7px 12px 7px 12px;
          color: #fff;
          font-size: 15px;
          margin-top: 10px;
          cursor: pointer;
          font-weight: bold;
        }
        .bb_noteDown2 {
          width: 70%;
          margin-top: 1%;
          background-color: #fff3cd;
          border-radius: 10px;
          border: #f4ff71 1px solid;
          padding: 2% 2% 2% 2%;

          .bb_noticeSubtitle {
            font-size: 17px;
            font-weight: bold;
            padding-bottom: 10px;
            padding-left: 3%;
          }

          .bb_notice2 {
            li {
              line-height: 22px;
              font-size: 15px;
              padding-left: 3%;
              .bb_Strong2 {
                font-weight: bold;
                display: inline-block;
                color: #f60000;
              }
            }
          }
        }
      }
    }
  }
  // 유의사항2
  .bb_container5 {
    background-color: #fff;
    padding-bottom: 60px;
    .bb_innerBottom {
      max-width: 1300px;
      margin: 0 auto;
      .bb_title3 {
        display: flex;
        gap: 10px;
        line-height: 40px;
        padding-bottom: 20px;
        .bb_titleLine {
          width: 3px;
          height: 35px;
          background-color: $main-color;
        }
        .bb_title_txt3 {
          font-size: 30px;
          font-weight: bold;
        }
      }
    }
    .bb_container4Bg {
      background-color: #e9e9e9;
      .bb_inner {
        .bb_notice {
          padding-top: 2%;
          padding-bottom: 2%;
          h3 {
            font-size: 22px;
            padding-bottom: 5px;
          }
          p {
            padding-bottom: 20px;
          }
          li {
            padding-bottom: 5px;
          }
          ._bbTum {
            padding-top: 10px;
          }
        }
      }
    }
  }
}

// 태블릿 : 768px
@media screen and (max-width: 768px) {
  // .bb_inner {
  //   width: 80% !important;
  // }
  // 컨테이너1
  .bb_titleLine {
    height: 25px !important;
  }
  .title_txt1 h1 {
    font-size: 25px !important;
  }
  .bb_span {
    font-size: 15px !important;
  }

  // 컨테이너2
  .bb_container2,
  .bb_container3,
  .bb_title2 {
    margin: auto;
    width: 90%;
  }
  .bb_luggageImgNotice {
    margin: auto;
    width: 60%;
  }
  // 타이틀
  .bb_title_txt2 h1 {
    font-size: 25px !important;
    font-weight: bold;
  }
  .bb_title_txt2 p {
    font-size: 18px !important;
  }
  .bb_luggage {
    width: calc((100% - 2%) / 2) !important;
    padding: 5.5% !important;
    margin-bottom: 2%;
  }
  .bb_luggageTitleM{
    font-size: 20px !important;
  }
  .bb_luggageTitle {
    font-size: 12px !important;
  }
  .bb_luggagedetail{
    font-size: 9px !important;
  }
  .bb_luggagepriceInfo{
    margin: auto;
    width: 90% !important;
  }
}

// 모바일 : 390px
@media screen and (maxwidth: 390px) {
}
</style>