
function saldoVitorias(vitorias, derrotas){
    const saldo = vitorias - derrotas
    let nivel = ''
    
    if (saldo <= 10) {
        nivel = 'Ferro'
    
    } else if (saldo >= 11 && saldo <= 20 ) {
        nivel = 'Bronze'
    
    } else if (saldo >= 21 && saldo <= 50 ) {
        nivel = 'Prata'
    
    } else if (saldo >= 51 && saldo <= 80 ) {
        nivel = 'Ouro'
        
    } else if (saldo >= 81 && saldo <= 90) {
        nivel = 'Platina'
        
    } else if (saldo >= 91 && saldo <= 100 ) {
        nivel = 'Ascendente'
        
    } else if (saldo >= 101 ) {
        nivel = 'Imortal'
        
    }
    
    return { saldo, nivel }
    
}

const { saldo, nivel } = saldoVitorias( 10, 2 )

console.log(`O Heroi tem saldo de **${saldo}** esta no nivel de **${nivel}**`)