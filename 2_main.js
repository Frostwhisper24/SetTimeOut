setTimeout(() => {
    const h1 = document.createElement('h1');
    h1.innerText = 'Modificando el DOM';
  
    h1.style.color = 'green';
  
    const p = document.createElement('p');
    p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  
    p.classList.add('fuente-especial');
  
    let contenedor = document.getElementById('contenedor')
    contenedor.appendChild(h1);
    contenedor.appendChild(p);
  
  }, 3000);