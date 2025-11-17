const summary = {
    totalProducts: 120,
    totalSales: 85,
    totalRevenue: 12500000 
};

let products = [
    { id: 1, name: "Kopi Gayo", price: 25000, stock: 100 },
    { id: 2, name: "Teh Hitam", price: 20000, stock: 50 },
    { id: 3, name: "Coklat Aceh", price: 30000, stock: 30 },
    { id: 4, name: "Madu Sumbawa", price: 60000, stock: 25 },
    { id: 5, name: "Gula Aren", price: 25000, stock: 40 }
];

function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
}

document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.body.parentElement.querySelector('title');
    const page = titleElement ? titleElement.textContent.trim() : '';

    if (page === 'Login') {
        initLoginPage();
    } else if (page === 'Dashboard') {
        initDashboardPage();
    } else if (page === 'List Data Product') {
        initProductPage();
    }
});

function initLoginPage() {
    const loginForm = document.getElementById('loginForm');
    
    if (!loginForm) return;

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = document.getElementById('email').value;
        const nim = document.getElementById('nim').value;
        const targetNim = "24090043";

        if (!email || !nim) {
            alert('❌ Validasi Gagal! Email dan NIM tidak boleh kosong.');
            return;
        }
        if (nim !== targetNim) {
            alert('❌ Login Gagal! NIM tidak valid.');
            return;
        }

        alert('✅ Login berhasil! Redirect ke Dashboard.');
        window.location.href = 'dashboard.html';
    });
}

function initDashboardPage() {
    const summaryContainer = document.getElementById('summaryContainer');
    const viewProductsButton = document.getElementById('viewProductsButton');

    if (!summaryContainer) return;

    const summaryData = [
        { label: "Total Products", value: summary.totalProducts, icon: 'fas fa-shopping-bag' },
        { label: "Total Sales", value: summary.totalSales, icon: 'fas fa-shopping-bag' },
        { label: "Total Revenue", value: formatRupiah(summary.totalRevenue), icon: 'fas fa-dollar-sign' }
    ];

    summaryData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'summary-card';
        
        const valueDisplay = typeof item.value === 'number' ? item.value.toLocaleString('id-ID') : item.value;

        card.innerHTML = `
            <div class="card-icon"><i class="${item.icon}"></i></div>
            <div class="card-info">
                <span class="card-label">${item.label}</span>
                <span class="card-value">${valueDisplay}</span>
            </div>
        `;
        summaryContainer.appendChild(card);
    });

    if (viewProductsButton) {
        viewProductsButton.addEventListener('click', () => {
            window.location.href = 'products.html';
        });
    }
}

function initProductPage() {
    const productTableBody = document.getElementById('productTableBody');
    
    if (!productTableBody) return;

    function renderProductTable() {
        productTableBody.innerHTML = ''; 

        products.forEach((product, index) => {
            const row = productTableBody.insertRow();
            
            row.insertCell().textContent = index + 1; 
            row.insertCell().textContent = product.name; 
            row.insertCell().textContent = formatRupiah(product.price); 
            row.insertCell().textContent = product.stock.toLocaleString('id-ID'); 
            
            const actionCell = row.insertCell();
            
            const editButton = document.createElement('button');
            editButton.className = 'action-btn edit-btn';
            editButton.innerHTML = '<i class="fas fa-pen"></i>'; 
            editButton.addEventListener('click', () => handleEdit(product.name));

            const deleteButton = document.createElement('button');
            deleteButton.className = 'action-btn delete-btn';
            deleteButton.innerHTML = '<i class="fas fa-trash"></i>'; 
            deleteButton.addEventListener('click', () => handleDelete(product.id, row));

            actionCell.appendChild(editButton);
            actionCell.appendChild(deleteButton);
        });
    }

    function handleEdit(productName) {
        alert(`✏️ Edit produk: ${productName}`);
    }

    function handleDelete(productId, rowElement) {
        if (confirm(`⚠️ Yakin hapus produk ini?`)) {
            products = products.filter(product => product.id !== productId);
            rowElement.remove();
            alert(`🗑️ Produk telah dihapus.`);
        }
    }

    renderProductTable();
}