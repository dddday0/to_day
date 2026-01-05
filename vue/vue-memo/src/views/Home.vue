<script setup>
  import { reactive, onMounted } from 'vue';
  import storageService from '@/services/StorageService';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const state = reactive({
    memos: {}
  });

  onMounted( () => state.memos = storageService.getItems() );
  const remove = id => {
    console.log('id:', id)
    if(!confirm('삭제하시겠습니까?')) { // 데이터를 리턴하기 때문에 컨펌은 리턴함수. if는 불린
      return;
    }
    storageService.delItem(id);
    state.memos = storageService.getItems(); // 1개 이상은 배열로 넘어가고, 1개는 객체 primitive 타입 // 페이징 처리?
    router.push('/');
  }

</script>

<template>
<div class="memo-list">
  <router-link class="item" v-for="item in state.memos" :to="`/memos/${item.id}`" :key="item.id">
    <div class="d-flex pt-3"> <!--flex 자식 관리하기 위해 -->
      <div class="pb-3 mb-0 w-100">
        <div class="d-flex justify-content-between">
          <b>{{ item.title }}</b>
          <div>
            <!-- click.prevent는  기본 동작(라우터 이동)을 취소한다. //클릭 이벤트 버블링을 막는 것-->
            <span role="button" @click.prevent="remove(item.id)">삭제</span> 
          </div>
        </div>
        <div class="mt-2">{{ item.content }}</div>
      </div>
    </div>
  </router-link>
  <router-link to="/memos/add" class="add btn btn-primary">+ 추가하기</router-link>
</div>
</template>
