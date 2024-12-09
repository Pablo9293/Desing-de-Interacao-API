/*import { fetchCountries } from './fetchCountries.js';
import { fetchBrasilAPI } from './fetchBrasilAPI.js';

document.addEventListener('DOMContentLoaded', () => {
  const countrySelect = document.getElementById('countrySelect');
  const countryDetails = document.getElementById('countryDetails');
  const resetCountryButton = document.getElementById('resetCountry');
  const apiForm = document.getElementById('apiForm');
  const apiResult = document.getElementById('apiResult');
  const queryInput = document.getElementById('queryInput');
  const endpointSelect = document.getElementById('endpoint');
  const resetApiButton = document.getElementById('resetApi');

  // Função para criar a opção padrão
  function criarOpcaoPadrao() {
    const defaultOption = document.createElement('option');
    defaultOption.textContent = 'Selecione um país';
    defaultOption.value = '';
    defaultOption.selected = true;
    defaultOption.disabled = true;
    countrySelect.appendChild(defaultOption);
  }

  // Carregar países e preencher o select
  fetchCountries()
    .then(countries => {
      //criarOpcaoPadrao(); // Adiciona a opção padrão
      const defaultOption = document.createElement('option');
      defaultOption.textContent = 'adicione um pais';
      defaultOption.value = '';

      // Preenche os países
      countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.nome_pais;
        option.textContent = country.nome_pais;
        countrySelect.appendChild(option);
      });

      // Evento de mudança no select
      countrySelect.addEventListener('change', () => {
        const selectedCountry = countries.find(c => c.nome_pais === countrySelect.value);
        if (selectedCountry) {
          const { nome_pais, gentilico, sigla, nome_internacional } = selectedCountry; // **Destructuring**
          countryDetails.innerHTML = `
            <p><strong>Nome:</strong> ${nome_pais}</p>
            <p><strong>Gentílico:</strong> ${gentilico}</p>
            <p><strong>Sigla:</strong> ${sigla}</p>
            <p><strong>Nome Internacional:</strong> ${nome_internacional}</p>
          `;
        }
      });
    })
    .catch(error => {
      console.error(error);
      countryDetails.innerHTML = `<p class="error-message">Erro ao carregar os países.</p>`;
    });

  // Evento do botão reset para o select de países
  resetCountryButton.addEventListener('click', () => {
    countrySelect.value = ''; // Volta para a opção padrão
    countryDetails.innerHTML = ''; // Limpa os detalhes do país
  });

  // Evento de mudança no select do tipo de consulta
  endpointSelect.addEventListener('change', () => {
    apiResult.innerHTML = ''; // Limpa o campo de resultado
  });

  // Consultar API BrasilAPI
  apiForm.addEventListener('submit', event => {
    event.preventDefault();

    const endpoint = endpointSelect.value;
    const query = queryInput.value;

    fetchBrasilAPI(endpoint, query)
      .then(result => {
        apiResult.innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
      })
      .catch(error => {
        console.error(error);
        apiResult.innerHTML = `<p class="error-message">Erro ao realizar a consulta.</p>`;
      })
      .finally(() => {
        queryInput.value = ''; // Limpa o campo de entrada após a consulta
       
      });
  });
});*/




import { fetchCountries } from './fetchCountries.js';
import { fetchBrasilAPI } from './fetchBrasilAPI.js';

document.addEventListener('DOMContentLoaded', () => {
  const countrySelect = document.getElementById('countrySelect');
  const countryDetails = document.getElementById('countryDetails');
  const resetCountryButton = document.getElementById('resetCountry');
  const apiForm = document.getElementById('apiForm');
  const apiResult = document.getElementById('apiResult');
  const queryInput = document.getElementById('queryInput');
  const endpointSelect = document.getElementById('endpoint');
  const resetApiButton = document.getElementById('resetApi');

  // Carregar países e preencher o select
  fetchCountries()
    .then(countries => {
      const defaultOption = document.createElement('option');
      defaultOption.textContent = 'Selecione um país';
      defaultOption.value = '';
      defaultOption.selected = true;
      defaultOption.disabled = true;
      countrySelect.appendChild(defaultOption);

      countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.nome_pais;
        option.textContent = country.nome_pais;
        countrySelect.appendChild(option);
      });

      countrySelect.addEventListener('change', () => {
        const selectedCountry = countries.find(c => c.nome_pais === countrySelect.value);
        if (selectedCountry) {
          const { nome_pais, gentilico, sigla, nome_internacional } = selectedCountry; // **Destructuring**
          countryDetails.innerHTML = `
            <p><strong>Nome:</strong> ${nome_pais}</p>
            <p><strong>Gentílico:</strong> ${gentilico}</p>
            <p><strong>Sigla:</strong> ${sigla}</p>
            <p><strong>Nome Internacional:</strong> ${nome_internacional}</p>
          `;
        }
      });
    })
    .catch(error => {
      console.error(error);
      countryDetails.innerHTML = `<p class="error-message">Erro ao carregar os países.</p>`;
    });

  resetCountryButton.addEventListener('click', () => {
    countrySelect.value = '';
    countryDetails.innerHTML = '';
  });

  // Consultar API BrasilAPI
  apiForm.addEventListener('submit', event => {
    event.preventDefault();

    const endpoint = endpointSelect.value;
    const query = queryInput.value;

    fetchBrasilAPI(endpoint, query)
      .then(result => {
        apiResult.innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
      })
      .catch(error => {
        console.error(error);
        apiResult.innerHTML = `<p class="error-message">Erro ao realizar a consulta.</p>`;
      });
  });

  // Botão de limpar consulta da API
  resetApiButton.addEventListener('click', () => {
    queryInput.value = '';       // Limpa o campo de entrada do formulário
    apiResult.innerHTML = '';    // Limpa o campo de exibição dos resultados
    apiResult.classList.remove('error-message'); // Remove mensagens de erro
  });
});
