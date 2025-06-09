const flowers = [
    { id: 1, name: "Rosas Vermelhas", price: 30,  image: "../img/1.png"   },
    { id: 2, name: "Girassol", price: 50,  image: "../img/2.png"},
    { id: 3, name: "Lírios", price: 70,  image: "../img/3.png"   }
];

document.addEventListener('DOMContentLoaded', function() {
            const flowerList = document.getElementById('flowerList');
            
            flowers.forEach(flower => {
                const card = document.createElement('div');
                card.className = 'flower-card';
                card.innerHTML = `
                    <img src="${flower.image}" alt="${flower.name}">
                    <h3>${flower.name}</h3>
                    <div class="price">R$ ${flower.price.toFixed(2)}</div>
                    <button class="details-btn" onclick="location.href='detalhes.html?id=${flower.id}'">Detalhes</button>
                `;
                flowerList.appendChild(card);
            });
        });

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const flowerId = parseInt(urlParams.get('id'));
    const flower = flowers.find(f => f.id === flowerId);

    if (flower) {
    const detailDiv = document.getElementById('flowerDetail');
    detailDiv.innerHTML = `
        <img src="${flower.image}" alt="${flower.name}" style="width: 100%; max-width: 400px; border-radius: 10px; margin-bottom: 15px;">
        <h2>${flower.name}</h2>
        <div class="price">R$ ${flower.price.toFixed(2)}</div>
        <button class="add-to-cart" onclick="addToCart(${flower.id})">Comprar</button>
        <button class="back-btn" onclick="location.href='index.html'">Voltar</button>
    `;
}
});

function addToCart(flowerId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const flower = flowers.find(f => f.id === flowerId);

    if (flower) {
        cart.push(flower);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Adicionado ao carrinho!');
    }
}

document.getElementById('cartao').addEventListener('change', function () {
    document.getElementById('cartaoInfo').style.display = this.checked ? 'block' : 'none';
});

document.getElementById('pix').addEventListener('change', function () {
    document.getElementById('cartaoInfo').style.display = 'none';
});

function calcularFrete() {
    document.getElementById('frete').value = 'R$ 15,00';
    document.getElementById('tempoCompra').value = '2-3 dias úteis';
    document.getElementById('tempoFinal').value = '5 dias úteis';
}

function finalizarCompra() {
    alert('Compra finalizada com sucesso!');
    localStorage.removeItem('cart');
    location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function () {
    calcularFrete();
});