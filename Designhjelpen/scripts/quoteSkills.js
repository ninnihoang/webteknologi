let verb = ['planlegge', 'iterere', 'visualisere', 'analysere', 'bearbeide', 'gjennomføre', 'klassifisere', 'designe', 'undersøke', 'hjelpe', 'utvikle', 'fremsnakke', 'gjennomgå', 'researche']
let adjektiv = ['ikke-linjære', 'fremtidsrettede', 'ikke-visualiserbare', 'postmoderne', 'komplekse', 'alternative', 'grensesprengende', 'disruptive', 'nyutviklede', 'selvreplikerende', 'nyskapende', 'iterative', 'levedyktige']
let substantiv = ['brukeropplevelser', 'workshops', 'produkter', 'gjennombrudd', 'problemstillinger', 'utstillinger', 'systemer', 'UIs', 'start-ups', 'AI', 'konsepter', 'design thinkers', 'boot camps', 'iterasjoner']



document.getElementById("skill").innerHTML = ('Vi kan ' + verb[Math.floor(Math.random() * verb.length)] + ' ' + adjektiv[Math.floor(Math.random() * adjektiv.length)] + ' ' + substantiv[Math.floor(Math.random() * substantiv.length)]);