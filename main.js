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
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }