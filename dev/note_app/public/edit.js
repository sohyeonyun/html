/**
 * 1. 삭제하기
 * 2. 수정하기
 * 3. 내용 불러오기
 */

// 내용 불러오기
function getMemo() {
    // 어떤 메모를 불러올지
    const query = window.location.search;
    const memo_id = query.slice(4);

    const storage = window.localStorage;
    const memo_data = storage.getItem(memo_id);

    if (!memo_data) {
        alert('없는 메모다');
        window.location.replace('./main.html');
    }

    const input_element = document.getElementById('input');
    input_element.value = memo_data;
}

// 수정하기
function editMemo() {
    if (!confirm('진짜 수정?')){
        return;
    }
    const storage = window.localStorage;

    const input_text = document.getElementById('input').value;
    const query = window.location.search;
    const memo_id = query.slice(4);

    storage.setItem(memo_id, input_text);

    alert('수정되었다');

    window.location.href = './main.html';   // history 남김
}

// 삭제하기
function deleteMemo() {
    if (!confirm('진짜 삭제?')) {
        return;
    }

    const query = window.location.search;
    const memo_id = query.slice(4);

    const storage = window.localStorage;
    storage.removeItem(memo_id);

    alert('삭제 완료');
    window.location.replace('./main.html');      // history X
}

getMemo();