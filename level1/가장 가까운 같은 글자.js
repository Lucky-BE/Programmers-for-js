function solution(s) {
    function findAllIndexes(str, targetChar, index) {
        const indexes = [];
        str.split('').forEach((char, idx) => {
            if (char === targetChar && idx < index) {
                indexes.push(idx);
            }
        });
        return indexes;
    }
    
    const answer = [];
    const strings = s.split('');
    strings.map((e,i)=> {
        const lastIndex = findAllIndexes(s, e, i).at(-1) ?? null
        answer.push(lastIndex === null ? -1 : i - lastIndex  );
    })
    
    return answer;
}