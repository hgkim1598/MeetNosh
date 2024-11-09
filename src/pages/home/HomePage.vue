<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import {useRouter} from 'vue-router'

const router = useRouter()

const scrollY = ref(0);

const handleScroll = () => {
    scrollY.value = window.scrollY;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

/** try 버튼 */
// meet 페이지로 이동
const goToMeet = () => {
    router.push('/meet');
}
</script>

<template>
    <div class="parallax-container center">
        <div class="parallax-background center" :style="{transform: `translateY(${scrollY * 0.7}px)`}">
            <h1 class="center">MEET NOSH</h1><br />
            <p class="center">모임 장소와 식사 장소 고민을 한번에 해결!</p>
        </div>
        <div class="parallax-foreground" :style="{transform: `translateY(${scrollY * 0.3}px)`}">
            <div class="home-img center">
                <div class="explain-div center">
                MEET NOSH는 '만나다'의 MEET와 '음식, 식사'라는 의미의 NOSH가 합쳐진 이름입니다.<br>
                여러분이 모든 멤버들을 고려한 중간 장소를 찾을 때,<br>
                그리고 그 장소에서 맛집을 찾을 때<br>
                MeetNosh를 통해 손쉽게 약속 장소를 정해보세요!
            </div>
                <button class="try-meetnosh" @click="goToMeet()">Try MeetNosh</button>
            </div>
        </div>
    </div>
</template>

