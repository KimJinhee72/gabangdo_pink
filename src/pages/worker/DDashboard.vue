<template>
  <div class="space-y-4 p-4 md:p-6 md:space-y-6">
    <!-- 페이지 헤더 -->
    <div
      class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h1 class="text-xl md:text-2xl font-bold text-gray-800">
          기사 대시보드
        </h1>
        <p class="text-sm text-gray-500 mt-1">
          작업 현황과 일정을 확인할 수 있습니다.
        </p>
      </div>
      
    </div>
    <!-- 통계카드 -->
    <!-- lg:1024px 이상 / md:768px이상 /sm:640px 이상 -->
    <div class="grid grid-cols-3 gap-4 md:gap-6">
      <div
        class="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 md:p-6">
        <div class="flex items-center w-30">
          <div class="p-3 rounded-full bg-blue-100 text-blue-600">
            <i class="fas fa-tasks text-xl md:text-2xl"></i>
          </div>
          <div class="ml-4">
            <h3 class="text-sm font-medium text-gray-500">총 작업 수</h3>
            <p class="text-xl md:text-2xl font-semibold text-gray-800">3</p>
            <span class="text-sm flex items-center text-green-600">
              <i class="fas mr-1 fa-arrow-up"></i>
              5%
            </span>
          </div>
        </div>
      </div>

      <div
        class="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 md:p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-green-100 text-green-600">
            <i class="fas fa-check-circle text-xl md:text-2xl"></i>
          </div>
          <div class="ml-4">
            <h3 class="text-sm font-medium text-gray-500">완료율</h3>
            <!-- md:text-2xl 스크린 사이즈가 768px 이상일 때 적용 -->
            <p class="text-xl md:text-2xl font-semibold text-gray-800">33%</p>
            <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                class="bg-green-600 h-2 rounded-full transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div
        class="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 md:p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-yellow-100 text-yellow-600">
            <i class="fas fa-clock text-xl md:text-2xl"></i>
          </div>
          <div class="ml-4">
            <h3 class="text-sm font-medium text-gray-500">평균 작업 시간</h3>
            <p class="text-xl md:text-2xl font-semibold text-gray-800">45분</p>
            <span class="text-sm flex items-center text-red-600">
              <i class="fas mr-1 fa-arrow-down"></i>
              10%
            </span>
          </div>
        </div>
      </div> -->

      <div
        class="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-4 md:p-6">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-purple-100 text-purple-600">
            <i class="fas fa-star text-xl md:text-2xl"></i>
          </div>
          <div class="ml-4">
            <h3 class="text-sm font-medium text-gray-500">평균 평가</h3>
            <p class="text-xl md:text-2xl font-semibold text-gray-800">
              {{ averageRating }}
            </p>
            <!-- n번째 별이 averageRating보다 작으면 꽉 찬 별
                 n-0.5보다 averageRating이 크고 n보다 작으면 반쪽 별
                 그 외는 빈 별 -->
            <div class="flex mt-2">
              <template v-for="n in 5" :key="n">
                <i
                  v-if="n <= Math.floor(averageRating)"
                  class="fas fa-star text-sm md:text-base text-yellow-400"></i>
                <i
                  v-else-if="n - 0.5 <= averageRating"
                  class="fas fa-star-half-alt text-sm md:text-base text-yellow-400"></i>
                <i
                  v-else
                  class="fas fa-star text-sm md:text-base text-gray-300"></i>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 작업목록 -->
    <div class="bg-white rounded-lg shadow-sm">
      <!-- 오늘의 작업 top-->
      <div class="p-4 border-b border-gray-200">
        <div
          class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 class="text-lg font-semibold text-gray-800">오늘의 작업</h2>
          <div
            class="flex gap-2 w-full md:w-auto overflow-x-auto md:overflow-visible">
            <button
              v-for="view in viewOptions"
              :key="view.value"
              :class="[
                'px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors duration-200',
                currentView === view.value
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50',
              ]"
              @click="currentView = view.value">
              {{ view.label }}
            </button>
          </div>
        </div>
      </div>
      <!-- 오늘의 작업 bt-->
      <div class="p-4">
        <!-- 작업이 없을 경우 -->
        <div
          v-if="filteredJobs.length === 0"
          class="text-center py-8 text-gray-500">
          오늘 예정된 작업이 없습니다.
        </div>
        <!-- 작업내용 -->
        <div class="space-y-4">
          <div
            v-for="job in filteredJobs"
            :key="job.id"
            :class="[
              'p-4 border rounded-lg transition-all duration-200',
              job.priority === 'high'
                ? 'border-red-200 bg-red-50 hover:bg-red-100'
                : 'border-gray-200 hover:bg-gray-50',
            ]">
            <div
              class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <!-- 왼쪽 -->
              <div
                class="flex flex-col md:flex-row items-start md:items-center gap-4">
                <!--whitespace-nowrap 텍스트 줄바꿈을 하지 않고 한 줄로 유지 -->
                <div class="text-gray-500 whitespace-nowrap">
                  <i class="fas fa-clock mr-2"></i>
                  {{ job.time }}
                </div>
                <div>
                  <h3 class="font-medium text-gray-900">{{ job.customer }}</h3>
                  <p class="text-sm text-gray-500">
                    <i class="fas fa-map-marker-alt mr-2"></i>
                    {{ job.address }}
                  </p>
                </div>
              </div>
              <!-- 오른쪽 -->
              <div
                class="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
                <div class="flex items-center gap-2">
                  <span
                    class="px-2 py-1 rounded-full text-xs font-medium"
                    :class="getStatusClass(job.status)">
                    {{ getStatusText(job.status) }}
                  </span>
                  <span class="text-sm text-gray-500">
                    <i class="fas fa-users mr-1"></i>
                    {{ job.partySize }}명
                  </span>
                </div>
                <div class="flex gap-2 w-full md:w-auto">
                  <button
                    v-if="job.status === 'pending'"
                    @click="startJob(job)"
                    class="flex-1 md:flex-none px-3 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200">
                    <i class="fas fa-play mr-1"></i>시작
                  </button>
                  <button
                    v-if="job.status === 'in_progress'"
                    @click="completedJob(job)"
                    class="flex-1 md:flex-none px-3 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200">
                    <i class="fas fa-check mr-1"></i>완료
                  </button>
                  <button
                    @click="showJobDetails(job)"
                    class="flex-1 md:flex-none px-3 py-1.5 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-200">
                    <i class="fas fa-info-circle mr-1"></i>상세
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 알림 -->
    <div class="bg-white rounded-lg shadow-sm">
      <div class="p-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold text-gray-800">알림</h2>
      </div>
      <div class="p-4">
        <div
          v-if="notifications.length === 0"
          class="text-center py-8 text-gray-500">
          새로운 알림이 없습니다.
        </div>
        <div class="space-y-4">
          <div
            v-for="notification in notifications"
            :key="notification.id"
            class="flex items-center gap-4 p-4 border rounded-lg transition-all duration-200"
            :class="
              notification.read
                ? 'border-gray-200 hover:bg-gray-50'
                : 'border-indigo-200 bg-indigo-50 hover:bg-indigo-100'
            ">
            <div
              :class="[
                'w-10 h-10 rounded-full flex items-center justify-center text-white',
                getNotificationIconClass(notification.type),
              ]">
              <i :class="getNotificationIcon(notification.type)"></i>
            </div>
            <div class="flex-1">
              <p class="text-sm text-gray-900">{{ notification.message }}</p>
              <p class="text-xs text-gray-500 mt-1">
                {{ formatTime(notification.time) }}
              </p>
            </div>
            <button
              class="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200">
              <i class="fas fa-check"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 작업 상세 정보 모달 -->
    <div
      v-if="showJobModal"
      class="modal fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full">
        <div class="p-6 border-b border-gray-200">
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-medium text-gray-900">작업 상세 정보</h3>
            <button
              @click="closeJobModal"
              class="text-gray-400 hover:text-gray-500 transition-colors duration-200">
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div class="p-6 space-y-4">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">고객명</span>
            <!-- JavaScript의 optional chaining(옵셔널 체이닝) 문법 -->
            <!-- selectedJob이 null 또는 undefined가 아니면,
                   → selectedJob.customer 값으로 반환 -->
            <span class="text-sm font-medium text-gray-900">{{
              selectedJob?.customer
            }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">주소</span>
            <span class="text-sm font-medium text-gray-900">{{
              selectedJob?.address
            }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">시간</span>
            <span class="text-sm font-medium text-gray-900">{{
              selectedJob?.time
            }}</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">인원</span>
            <span class="text-sm font-medium text-gray-900"
              >{{ selectedJob?.partySize }}명</span
            >
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">상태</span>
            <span
              :class="[
                'text-sm font-medium px-2 py-1 rounded-full',
                getStatusClass(selectedJob?.status),
              ]">
              {{ getStatusText(selectedJob?.status) }}
            </span>
          </div>
          <div class="flex justify-between items-center">
            <span
              :class="[
                'text-sm font-medium',
                selectedJob?.priority === 'high'
                  ? 'text-red-600'
                  : 'text-gray-900',
              ]"
              >우선순위</span
            >
            <span :class="['text-sm font-medium']">
              {{ selectedJob?.priority === "high" ? "긴급" : "일반" }}
            </span>
          </div>
        </div>
        <div class="px-6 py-4 bg-gray-50 flex justify-end space-x-3">
          <button
            v-if="selectedJob?.status === 'pending'"
            @click="startJob(selectedJob)"
            class="px-3 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200">
            <i class="fas fa-play mr-1"></i>시작
          </button>
          <button
            v-if="selectedJob?.status === 'in_progress'"
            @click="completedJob(selectedJob)"
            class="px-3 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200">
            <i class="fas fa-check mr-1"></i>완료
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- 페이지업 지도 -->
  <div>
    <!-- 화면 아래 고정 버튼 -->
    <button
      @click="openSlide"
      class="open-btn fixed bottom-0 right-0 px-3 py-1 bg-white text-black shadow-lg z-50"
      style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2)">
      지도 열기🔼
    </button>
    <!-- 페이지업 지도페이지 -->
    <div v-if="isVisible" :class="['slide-up-page', { active: isVisible }]">
      <KakaoMap/>
      <button @click="closeSlide"
      class="fixed right-8 bottom-3">닫기</button>
    </div>
  </div>
</template>
<script setup>
import KakaoMap from "../../components/KakaoMap.vue";
import { ref, computed } from "vue";
//페이지업
const isVisible = ref(false);
function openSlide() {
  isVisible.value = true;
}

function closeSlide() {
  isVisible.value = false;
}
const averageRating = ref(4.5);
// 작업목록
const viewOptions = [
  { label: "전체", value: "all" },
  { label: "대기중", value: "pending" },
  { label: "진행중", value: "in_progress" },
  { label: "완료", value: "completed" },
];
const currentView = ref("all");
// 작업내용
const jobs = ref([
  {
    id: 1,
    customer: "김철수",
    address: "서울 강남구 테헤란로 123",
    time: "14:00",
    partySize: 4,
    status: "pending",
    priority: "normal",
  },
  {
    id: 2,
    customer: "이영희",
    address: "서울 마포구 서강로 456",
    time: "16:30",
    partySize: 2,
    status: "in_progress",
    priority: "high",
  },
  {
    id: 3,
    customer: "박민수",
    address: "서울 송파구 올림픽로 789",
    time: "11:00",
    partySize: 6, //참석 인원 수
    status: "completed",
    priority: "normal",
  },
]);
// 작업내용 필터링
const filteredJobs = computed(() => {
  // 만약 currentView가 "all" 이면
  if (currentView.value === "all") return jobs.value;
  // 그렇지 않으면
  return jobs.value.filter((job) => {
    return job.status === currentView.value;
  });
});
// 작업상태 글자변환
const getStatusText = (staus) => {
  const statusMap = {
    pending: "대기중",
    in_progress: "진행중",
    completed: "완료",
  };
  return statusMap[staus] || staus;
};
// 작업상태 글자 css적용
const getStatusClass = (staus) => {
  const statusClasses = {
    pending: "bg-yellow-100 text-yellow-800",
    in_progress: "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
  };
  return statusClasses[staus] || "bg-gray-100 text-gray-800";
};
// 시작버튼 클릭시
const startJob = (job) => {
  const index = jobs.value.findIndex((j) => j.id === job.id);
  if (index !== -1) {
    jobs.value[index].status = "in_progress";
  }
};
// 완료버튼 클릭시
const completedJob = (job) => {
  const index = jobs.value.findIndex((j) => j.id === job.id);
  if (index !== -1) {
    jobs.value[index].status = "completed";
  }
};
// 상세보기
const showJobModal = ref(false);
const selectedJob = ref(null);
const showJobDetails = (job) => {
  selectedJob.value = job;
  showJobModal.value = true;
};
// 모달닫기
const closeJobModal = () => {
  showJobModal.value = false;
};
// 알림
const notifications = ref([
  {
    id: 1,
    // 긴급한" 이라는 의미의 영어 단어
    type: "urgent",
    message: "새로운 긴급 작업이 배정되었습니다.",
    time: "2024-03-20T10:30:00",
    read: false,
  },
  {
    id: 2,
    type: "info",
    message: "오늘의 작업 일정이 업데이트되었습니다.",
    time: "2024-03-20T09:00:00",
    read: true,
  },
  {
    id: 3,
    type: "warning",
    message: "예정된 작업이 30분 남았습니다.",
    time: "2024-03-20T09:30:00",
    read: false,
  },
]);
// 알림아이콘 css적용
const getNotificationIconClass = (type) => {
  const classes = {
    urgent: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  };
  return classes[type] || "bg-gray-500";
};
// 알림아이콘
const getNotificationIcon = (type) => {
  const iconMap = {
    urgent: "fas fa-exclamation-circle",
    warning: "fas fa-exclamation-triangle",
    info: "fas fa-info-circle",
  };
  return iconMap[type] || "fas fa-bell";
};
// 시간변경
const formatTime = (time) => {
  return new Date(time).toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
</script>
<style scoped>
.slide-up-page {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 43vh;
  background: white;
  transform: translateY(100%);
  transition: transform 0.5s ease-out;
  z-index: 1000;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.slide-up-page.active {
  transform: translateY(0);
}

.open-btn {
  font-size: 16px;
}
</style>
