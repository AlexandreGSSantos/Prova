let total = 0;

function atualizarTotal() {
    const tabelaBody = document.getElementById('tabelaGastos');
    const totalGastosElement = document.getElementById('totalGastos');
    
    for (let i = 0; i < tabelaBody.rows.length; i++) {
      const linha = tabelaBody.rows[i];
      const custoCelula = linha.cells[1];
      if (custoCelula) {
        const custoTexto = custoCelula.textContent.trim();
        const custoNumerico = parseFloat(custoTexto.replace(',', '.'));
        if (!isNaN(custoNumerico)) {
          total += custoNumerico;
        }
      }
    }
    totalGastosElement.textContent = `Total: R$ ${total.toFixed(2)}`;
  }

function Adicionar() {
    const itemInput = document.getElementById('item');
    const custoInput = document.getElementById('custo');
    const categoriaInput = document.getElementById('categoria');
    const tabelaBody = document.querySelector('#gastos tbody');
  
    const item = itemInput.value.trim();
    const custo = custoInput.value.trim();
    const categoria = categoriaInput.value.trim();
  
    if (item !== '' && custo !== '' && categoria !== '') {
      const novaLinha = document.createElement('tr');
  
      const itemCelula = document.createElement('td');
      itemCelula.textContent = item;
  
      const custoCelula = document.createElement('td');
      custoCelula.textContent = custo;
  
      const categoriaCelula = document.createElement('td');
      categoriaCelula.textContent = categoria;
  
      novaLinha.appendChild(itemCelula);
      novaLinha.appendChild(custoCelula);
      novaLinha.appendChild(categoriaCelula);
  
      tabelaBody.appendChild(novaLinha);
  
      itemInput.value = '';
      custoInput.value = '';
      categoriaInput.value = '';
      atualizarTotal();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }