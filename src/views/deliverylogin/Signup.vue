<template>
  <div class="signup-container">
    <h2>회원가입</h2>
    <p class="subtitle">회원정보를 입력해주세요</p>
    <form>
      <input type="text" placeholder="이름을 입력하세요" class="bb_needMore"/>

      <div class="input-group">
        <input type="email" placeholder="이메일을 입력하세요" />
        <button type="button" class="btn-small">인증하기</button>
      </div>

      <input type="password" placeholder="비밀번호를 입력하세요" />
      <p class="hint">8자 이상, 영문, 숫자, 특수문자 포함</p>

      <input type="password" placeholder="비밀번호를 다시 입력하세요" class="bb_needMore"/>

      <div class="input-group">
        <input type="text" placeholder="휴대폰 번호를 입력하세요" />
        <button type="button" class="btn-small">인증하기</button>
      </div>

      <div class="input-group">
        <input type="text" placeholder="비밀번호를 입력하세요" />
        <button type="button" class="btn-small">주소검색</button>
      </div>

      <input type="text" placeholder="상세주소를 입력하세요" />

      <div class="agree">
        <input type="checkbox" id="agree" />
        <label for="agree"
          >이용약관 및 <span>개인정보처리방침</span>에 동의합니다.</label
        >
      </div>

      <button type="submit" class="btn-main">회원가입</button>
    </form>

    <div class="social-login">
      <div class="bb_sns-login">
        <div class="bb_grayline"></div>
        <p>간편 로그인</p>
        <div class="bb_grayline"></div>
      </div>
      <div class="icons">
        <img src="/public/images/yr/loginpage/loginKT.png" alt="카카오톡" />
        <img src="/public/images/yr/loginpage/loginN.png" alt="네이버" />
        <img src="/public/images/yr/loginpage/loginG.png" alt="구글" />
      </div>
      <div class="bb_alreadyLogin">
      <p class="login-link">이미 회원이신가요?</p><router-link to="/login"> 로그인</router-link>
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "/src/assets/_Variables.scss" as *;
body {
  font-family: "Arial", sans-serif;
  background: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.signup-container {
  margin-top: 100px !important;
  margin-bottom: 100px !important;
  margin: 0 auto;
  width: 360px;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  text-align: center;

  h2 {
    font-size: 25px;
    font-weight: bold;
    color: $main-color;
    margin-bottom: 15px;
  }

  .subtitle {
    font-size: 14px;
    color: $sub-color;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    .bb_needMore{
      margin-bottom: 22px !important;
    }
    input[type="text"],
    input[type="email"],
    input[type="password"] {
      padding: 10px;
      margin-bottom: 12px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }


    .hint {
      font-size: 12px;
      color: #888;
      margin-top: -8px;
      margin-bottom: 10px;
      text-align: left;
    }

    .input-group {
      display: flex;
      gap: 8px;
      margin-bottom: 12px;

      input {
        flex: 1;
      }

      .btn-small {
        padding: 5px 10px;
        background: $main-color;
        color: #fff;
        border: none;
        border-radius: 5px;
        white-space: nowrap;
        cursor: pointer;
        margin-bottom: 12px !important;
      }
    }

    .agree {
      font-size: 13px;
      margin: 12px 0;
      text-align: left;

      span {
        color: $main-color;
      }
    }

    .btn-main {
      padding: 5px 10px !important;
      background: $main-color;
      color: white;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      margin-top: 10px;
      cursor: pointer;
    }
  }

  .social-login {
    margin-top: 25px;
    .bb_sns-login {
    display: flex;
    align-items: center;
    gap: 10px; // 선과 텍스트 사이 간격
    margin: 8% 0;

    .bb_grayline {
      flex: 1;
      height: 1px;
      background-color: #ccc; // 연한 회색
    }
  }
    
    p {
      margin-bottom: 10px;
      font-size: 14px;
      color: #333;
    }
    .bb_grayline {
      flex: 1;
      height: 1px;
      background-color: #ccc; // 연한 회색
    }

    .icons {
      display: flex;
      justify-content: center;
      gap: 40px;
      margin-top: 20px;
      margin-bottom: 20px;

      img {
        width: 40px;
        height: 40px;
        cursor: pointer;
      }
    }

    .login-link {
      font-size: 13px;

      a {
        color: $main-color;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
  .bb_alreadyLogin{
    display: flex;
    padding-left: 75px;
    p{
      padding-right: 5px;
    }
  }
}
</style>
