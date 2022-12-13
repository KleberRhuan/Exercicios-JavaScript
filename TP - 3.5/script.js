const salario = +prompt("Salário:");
if (salario > 0) {
    const novoSalario = salario * 1.1;
    console.log("R$\t", novoSalario.toFixed(2));
}
