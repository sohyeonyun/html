// https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript

// function solution(s){
//     var answer = true;
//     var p = 0;
//     var y = 0;
//     s = s.toLowerCase();
    
//     for(let i = 0 ; i < s.length ; i++) {
//         if (s[i] == 'p') {
//             p++;
//         } else if (s[i] == 'y') {
//             y++;
//         }
//     }
//     p === y ? answer = true : answer = false;

//     return answer;
// }


// console.log(solution("PpYY"));

// https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript
function solution(s) {
    var answer = '';
    
    if (s.length % 2 === 0) {
        answer = s.slice(s.length / 2 - (true), s.length / 2 + 1);
    } else {
        answer = s.slice(s.length / 2, s.length / 2 + 1);
    }
    
    return answer;
}

// answer = s.slice(s.length / 2 - (s.length % 2 === 0), s.length / 2 + 1);
console.log(solution("abcde"));
console.log(solution("qwerty"));