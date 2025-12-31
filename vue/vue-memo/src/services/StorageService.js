/*
    클래스는 설계도(문서) 같은 것. 실체가 아니다. 

    클래스 vs 객체 
    붕어빵틀 vs 붕어빵
*/

export class StorageService {
    #storageName; // 전역변수(속성), #이 붙으면 private(비공개) 외부에서 접근할 수 없는 속성
    
    //생성자, 객체를 생성하려면 꼭 생성자를 호출해야 합니다.
    //메소드지만 특별하다. 객체 생성(객체화)할 때만 호출할 수 있다. (값 하나 넣을 수 있는 객체?)
    constructor(storageName) { // 파라미터, 객체 생성 때 외부에서 값이 들어온다. 
        if(!storageName) {
            throw new Error('스토리지 네임을 입력해 주세요.');
        }
        this.#storageName = storageName;
    }
    // 특정 항목 조회
    getItem(id) {
        const json = localStorage.getItem(this.#storageName);
        if(json) {
            const jsonData = JSON.parse(json);
            return jsonData.items.find(item => item.id === id);
        }
        return undefined;
    }
}