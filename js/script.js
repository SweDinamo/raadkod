window.addEventListener('load', function() {
    const url = 'https://api.radkod.com/parolla/api/v1/questions';
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const dataList = data.data.questions;
        let dataListHTML = '';
  
        for (let i = 0; i < dataList.length; i++) {
          dataListHTML += `<li>${dataList[i].answer}</li>`;
        }
  
        document.querySelector('#data-container').innerHTML = `<ol>${dataListHTML}</ol>`;
      })
      .catch(error => console.error(error));
  });
  