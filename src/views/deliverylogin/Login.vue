<template>
  <!-- 로그인 페이지 틀 -->
  <div class="bb_login-container">
    <h2 class="bb_login-title">로그인</h2>
    <p class="bb_login-sub">여행의 시작은 가방도와 함께</p>

    <form class="bb_login-form">
      <input type="text" placeholder="아이디를 입력해주세요" />

      <div class="password-input">
        <input
          id="password"
          :type="showPassword ? 'text' : 'password'"
          v-model="formData.password"
          placeholder="비밀번호를 입력하세요"
          required />
        <button @click="togglePassword" type="button" class="toggle-password">
          {{ showPassword ? "숨기기" : "보기" }}
        </button>
      </div>
      <button>로그인</button>
    </form>

    <div class="bb_login-links">
      <router-link to="signups">아이디 찾기</router-link> | <router-link to="/findpassword">비밀번호 찾기</router-link> |
      <router-link to="/signup">회원가입</router-link>
    </div>

    <div class="bb_sns-login">
      <div class="bb_grayline"></div>
      <p>간편 로그인</p>
      <div class="bb_grayline"></div>
    </div>
    <div class="bb_sns-icons">
      <a href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Faccounts.kakao.com%2Fweblogin%2Faccount#login"
        ><img src="/public/images/yr/loginpage/loginKT.png" alt="깨톡"
      /></a>
      <a href="https://nid.naver.com/nidlogin.login?mode=form&url=https://www.naver.com/"
        ><img src="/public/images/yr/loginpage/loginN.png" alt="네이버"
      /></a>


      <a href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Ftakeout.google.com%2F%3Fhl%3Dko&followup=https%3A%2F%2Ftakeout.google.com%2F%3Fhl%3Dko&hl=ko&osid=1&passive=1209600&ifkv=AXH0vVudToPB1oXfNyrRstCJ2S8_6MGsxrjKMEimiqpbXowYURSOX1dz9tFsLIFhTsRW8skj6ngVQw&ddm=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
        ><img src="/public/images/yr/loginpage/loginG.png" alt="구글"
      /></a>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "../../stores/auth";
import { ref } from "vue";
import { useRouter } from "vue-router";
const authStore = useAuthStore();
const router = useRouter();
const showPassword = ref(false);
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
const formData = ref({
  email: "",
  password: "",
  rememberMe: false,
});
const handleLogin = () => {o
  
  // 1.로컬스토리지레서 사용자 데이터 가져오기
  const users = JSON.parse(localStorage.getItem("users") || []);
  // 2.입력된 이메일과 비밀번호로 사용자 찾기
  // find메서드를 이용하여 일치하는 사용자 검색
  // 이메일과 비밀번호가 모두 일치해야 함
  const user = users.find(
    (u) =>
      u.email === formData.value.email && u.password === formData.value.password
  );
  // 3.로그인 성공 // 실패 처리
  if (user) {
    // 3-1.로그인 성공시
    authStore.login({
      email: user.email, // 사용자 이메일
      name: user.name, // 사용자 이름
      phone: user.phone, // 사용자 전화번호
      address: user.address, //사용자주소
      detailAddress: user.detailAddress, //사용자 상세주소
      createdAt: user.createdAt, //사용자가입날짜
    });
    router.push("/");
  } else {
    alert("이메일 또는 비밀번호가 일치하기 않습니다.");
  }
};
</script>

<style lang="scss" scoped>
@use "/src/assets/_Variables.scss" as *;
.bb_login-container {
  width: 320px;
  margin: 100px auto;
  text-align: center;
  padding-bottom: 2.3%;

  .bb_login-title {
    font-size: 24px;
    font-weight: bold;
    color: #005bac; // 파란색
    padding-bottom: 20px;
  }

  .bb_login-sub {
    font-size: 14px;
    color: #2aaae2;
    margin-bottom: 30px;
    font-weight: bold;
  }

  .bb_login-form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    button {
      background-color: #005bac;
      color: #fff;
      border: none;
      padding: 12px;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
    }
    .password-input {
  position: relative;
  width: 100%;
}

.password-input input {
  width: 100%;
  padding-right: 80px; /* 버튼이 겹치지 않도록 오른쪽 여유 */
  height: 40px;
  box-sizing: border-box;
}

.password-input .toggle-password {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #aeaeae;
  font-size: 14px;
  padding: 4px 8px;
}

  }

  .bb_login-links {
    margin-top: 5%;
    font-size: 13px;
    color: #333;

    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        text-decoration: underline;
      }
    }
  }

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

    p {
      white-space: nowrap; // 텍스트 줄바꿈 방지
      color: $main-color;
      font-size: 14px;
      font-weight: bold;
    }
  }
  .bb_sns-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20%;

    a {
      width: 13%;
      height: 13%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
