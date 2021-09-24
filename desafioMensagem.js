const mensagemSecreta = [
    'Aprender', 'não', 'é', 'o', 'sobre','que', 'você',
    'consegue', 'facilmente', 'na', 'primeira', 'vez, ',
    'mas', 'sobre', 'o', 'que', 'você', 'pode', 'descobrir. ',
    '- 2015,', 'Chris', 'Pine,', 'Aprenda', 'JavaScript',
];

mensagemSecreta.pop();
mensagemSecreta.push('a', 'programar.');
mensagemSecreta.splice(8, 1, "certo");
mensagemSecreta.shift();
mensagemSecreta.unshift('Programação');
mensagemSecreta.splice(7, 5);
mensagemSecreta.splice(3, 0, mensagemSecreta.splice(4, 1));
mensagemSecreta.unshift('sabe,');
mensagemSecreta.splice(7, 0, mensagemSecreta.splice(0, 1));
console.log(mensagemSecreta)
console.log(mensagemSecreta.join(' '));