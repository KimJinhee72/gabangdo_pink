<template>
  <div id="map" style="width: 100%; height: 350px;"></div>
</template>

<script setup>
import { onMounted } from 'vue'

const positions = [
  {
    content: '<div>카카오</div>',
    lat: 33.450705,
    lng: 126.570677,
  },
  {
    content: '<div>생태연못</div>',
    lat: 33.450936,
    lng: 126.569477,
  },
  {
    content: '<div>텃밭</div>',
    lat: 33.450879,
    lng: 126.56994,
  },
  {
    content: '<div>근린공원</div>',
    lat: 33.451393,
    lng: 126.570738,
  },
]

function loadKakaoMapScript() {
  return new Promise((resolve) => {
    if (window.kakao && window.kakao.maps) {
      resolve()
    } else {
      const script = document.createElement('script')
      script.src =
        `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_KEY}&autoload=false`
      script.onload = () => window.kakao.maps.load(resolve)
      document.head.appendChild(script)
    }
  })
}

onMounted(async () => {
  await loadKakaoMapScript()

  const kakao = window.kakao
  const container = document.getElementById('map')
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  }

  const map = new kakao.maps.Map(container, options)

  positions.forEach((pos) => {
    const marker = new kakao.maps.Marker({
      map,
      position: new kakao.maps.LatLng(pos.lat, pos.lng),
    })

    const infowindow = new kakao.maps.InfoWindow({
      content: pos.content,
    })

    kakao.maps.event.addListener(marker, 'mouseover', () => {
      infowindow.open(map, marker)
    })

    kakao.maps.event.addListener(marker, 'mouseout', () => {
      infowindow.close()
    })
  })
})
</script>
